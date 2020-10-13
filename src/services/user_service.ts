import AuthUserModel from '../models/user';
import { OneUserInterface, CreateUserDataInterface } from '../interfaces/user_service_interface';

function findByEmail(email: string): Promise<any> {
    return AuthUserModel.findOne({ email }).exec();
}

function createUser(data: CreateUserDataInterface): Promise<import('mongoose').Document> {
    return AuthUserModel.create(data);
}

function updateUser(_id: string, password: string): Promise<OneUserInterface> {
    return AuthUserModel.updateOne({ _id }, { password }).exec();
}

function updateRefreshToken(_id: string, refreshToken: string): Promise<string> {
    return AuthUserModel.updateOne({ _id }, { refreshToken }).exec();
}

function findByUserId(_id: string): Promise<any> {
    return AuthUserModel.findById({ _id }).exec();
}

function dropUserToken(_id: string): Promise<string> {
    const nullifiedToken = null;
    return AuthUserModel.updateOne({ _id }, { refreshToken: nullifiedToken }).exec();
}

export { findByEmail, createUser, updateUser, findByUserId, dropUserToken, updateRefreshToken };
