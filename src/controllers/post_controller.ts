import { Request, Response } from 'express';

import LikesData from '../interfaces/likes_data_interface';
import * as PostService from '../services/post_service';
import * as UserService from '../services/user_service';
import isAdmin from '../middleware/is_admin';
import getUserMainFields from '../helpers/get_user_main_fields';

export async function findAll(req: Request, res: Response): Promise<Response> {
    const posts = await PostService.findAll();
    return res.status(200).json(posts);
}

export async function create(req: Request, res: Response): Promise<Response> {
    const user = await UserService.findByUserId(String(req.body.author_id));
    if (!user) {
        return res.json({
            message: 'this user not found',
        });
    }

    const userMain = {
        ...getUserMainFields(user),
    };

    const postData = {
        title: req.body.title,
        body: req.body.body,
        author_id: req.body.author_id,
        author_name: userMain.name,
        accessToken: req.body.accessToken,
    };

    const response = await PostService.cretePost(postData);

    return res.json(response);
}

export async function findById(req: Request, res: Response): Promise<Response> {
    const post = await PostService.findByPostId(String(req.query.id));
    return res.status(200).json({ post });
}

export async function findByUserId(req: Request, res: Response): Promise<Response> {
    const posts = await PostService.findByUserId(String(req.query.id));
    return res.status(200).json({ posts });
}

export async function updateById(req: Request, res: Response): Promise<Response> {
    const id = req.body.author_id;
    const post = await PostService.findByPostId(req.body.id);

    if (!post) {
        return res.status(400).json({
            message: 'Post not found',
        });
    }

    if ((await isAdmin(id)) || post.author_id === req.body.author_id) {
        // eslint-disable-next-line no-underscore-dangle
        await PostService.updatePostById(req.body._id, req.body);
        return res.status(200).json({
            message: 'post updated successfully',
        });
    }
    return res.status(403).json({
        message: 'you are do not have permissions to perform this operation',
    });
}

export async function deleteById(req: Request, res: Response): Promise<Response> {
    const id = req.body.user_id;
    const post = await PostService.findByPostId(req.body.id);

    if (!post) {
        return res.status(400).json({
            message: 'Post not found',
        });
    }

    if ((await isAdmin(id)) || post.author_id === req.body.user_id) {
        await PostService.deletePost(req.body.id);
        return res.status(200).json({
            message: 'post deleted successfully',
        });
    }

    return res.status(403).json({
        message: 'you are do not have permissions to perform this operation',
    });
}

export async function addLike(req: Request, res: Response): Promise<Response> {
    const postData = await PostService.findByPostId(req.body.post_id);
    let like: string;
    const likes = [];
    if (postData.likes) {
        like = postData.likes.find((id) => id === `${req.body.user_id}`);
        likes.push(...postData.likes);
    }
    if (!like) {
        likes.push(req.body.user_id);
        const likesData: LikesData = { likes };
        await PostService.updatePostById(req.body.post_id, likesData);
        const data = await PostService.findByPostId(req.body.post_id);
        return res.status(200).json({ data });
    }

    return res.status(422).json({
        message: 'you have already liked this post',
    });
}

export async function sort(req: Request, res: Response): Promise<Response> {
    const sortingParametr = +req.body.parametr;
    const posts = await PostService.sortByDate(sortingParametr);
    return res.status(200).json(posts);
}

export async function sortByLikes(req: Request, res: Response): Promise<Response> {
    const sortingParametr = +req.body.parametr;
    const posts = await PostService.sortByLikes(sortingParametr);
    return res.status(200).json(posts);
}
