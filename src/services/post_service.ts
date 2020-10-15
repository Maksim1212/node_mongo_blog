import { Aggregate } from 'mongoose';

import PostModel from '../models/post';
import Likes from '../interfaces/likes_data_interface';
import PostDataInterface from '../interfaces/post_service_interface';

function findAll(): Promise<import('mongoose').Document[]> {
    return PostModel.find({}).exec();
}

function cretePost(postData: PostDataInterface): Promise<import('mongoose').Document> {
    return PostModel.create(postData);
}

function findByPostId(_id: string): Promise<any> {
    return PostModel.findById(_id).exec();
}

function findByUserId(_id: string): Promise<import('mongoose').Document[]> {
    return PostModel.find({ author_id: _id }).exec();
}

function updatePostById(_id: string, body: Likes): Promise<string> {
    return PostModel.updateOne({ _id }, body).exec();
}

function deletePost(_id: string): Promise<{ ok?: number; n?: number } & { deletedCount?: number }> {
    return PostModel.deleteOne({ _id }).exec();
}

function sortByDate(sortingParametr: number): Aggregate<string[]> {
    return PostModel.aggregate([
        {
            $sort: {
                creation_time: sortingParametr,
            },
        },
    ]);
}

function sortByLikes(sortingParametr: number): Aggregate<string[]> {
    return PostModel.aggregate([
        {
            $sort: {
                likes: sortingParametr,
            },
        },
    ]);
}

export { findAll, cretePost, findByPostId, findByUserId, updatePostById, deletePost, sortByDate, sortByLikes };
