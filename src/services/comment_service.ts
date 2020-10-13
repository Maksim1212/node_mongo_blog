import CommentModel from '../models/comment';
import { AllComments, OneComment, CommentData } from '../interfaces/comment_service_interfaces';
import Likes from '../interfaces/likes_data_interface';

function findAll(): Promise<any> {
    return CommentModel.find({}).exec();
}

function create(data: CommentData): Promise<any> {
    return CommentModel.create(data);
}

function findByPostId(id: string): Promise<any> {
    return CommentModel.find({ post_id: id }).exec();
}

function updateComment(_id: string, likesData: Likes): Promise<any> {
    return CommentModel.updateOne({ _id }, likesData).exec();
}

function findOne(id: string): Promise<any> {
    return CommentModel.findById(id).exec();
}

function deleteById(_id: string): Promise<any> {
    return CommentModel.deleteOne({ _id }).exec();
}

export { findAll, create, findByPostId, updateComment, findOne, deleteById };
