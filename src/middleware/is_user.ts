// import { NextFunction } from 'express';
// import EntityNotFoundError from '../error/bad_request_error';
// import * as UserService from '../services/user_service';

// export default async function isUserExists(requestData: any, next: NextFunction): Promise<any> {
//     const user = await UserService.findByUserId(String(requestData.author_id));
//     if (!user) {
//         const message = 'User not found';
//         const status = 400;
//         return next(new EntityNotFoundError(message, status));
//     }
//     return next();
// }
