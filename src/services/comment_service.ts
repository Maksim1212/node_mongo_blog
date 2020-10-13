import CommentModel from '../models/comment';
import CommentDataInterface from '../interfaces/comment_service_interfaces';
import Likes from '../interfaces/likes_data_interface';

function findAll(): Promise<import('mongoose').Document[]> {
    return CommentModel.find({}).exec();
}

function create(data: CommentDataInterface): Promise<import('mongoose').Document> {
    return CommentModel.create(data);
}

function findByPostId(id: string): Promise<import('mongoose').Document[]> {
    return CommentModel.find({ post_id: id }).exec();
}

function updateComment(_id: string, likesData: Likes): Promise<string> {
    return CommentModel.updateOne({ _id }, likesData).exec();
}

function findOne(id: string): Promise<any> {
    return CommentModel.findById(id).exec();
}

function deleteById(_id: string): Promise<{ ok?: number; n?: number } & { deletedCount?: number }> {
    return CommentModel.deleteOne({ _id }).exec();
}

export { findAll, create, findByPostId, updateComment, findOne, deleteById };
