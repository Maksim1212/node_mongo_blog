import { Aggregate } from 'mongoose';

import PostModel from '../models/post';
import Likes from '../interfaces/likes_data_interface';
import { GetAllPosts, OnePost, PostData } from '../interfaces/post_service_interface';

function findAll(): Promise<any> {
    return PostModel.find({}).exec();
}

function cretePost(postData: any): Promise<import('mongoose').Document> {
    return PostModel.create(postData);
}

function findByPostId(_id: string): Promise<any> {
    return PostModel.findById(_id).exec();
}

function findByUserId(_id: string): Promise<any> {
    return PostModel.find({ author_id: _id }).exec();
}

function updatePostById(_id: string, body: Likes): Promise<any> {
    return PostModel.updateOne({ _id }, body).exec();
}

function deletePost(_id: string): Promise<any> {
    return PostModel.deleteOne({ _id }).exec();
}

function sortByDate(sortingParametr: string): Aggregate<any[]> {
    return PostModel.aggregate([
        {
            $sort: {
                creation_time: sortingParametr,
            },
        },
    ]);
}

function sortByLikes() {
    return PostModel.aggregate([{ $unwind: '$likes' }, { $sortByCount: '$likes' }]);
}

export { findAll, cretePost, findByPostId, findByUserId, updatePostById, deletePost, sortByDate, sortByLikes };
