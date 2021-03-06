import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import getJWTTokens from '../helpers/get_jwt_tokens';
import { TokensInterface } from '../interfaces/user_model_interface';
import { serviceConfig } from '../config/config';
import * as UserService from '../services/user_service';

export default async function isAuthJWT(req: Request, res: Response, next: NextFunction): Promise<unknown> {
    const requsetUser = req.body.user_id;
    let tokens: TokensInterface;
    let verify;

    try {
        const token = req.body.accessToken;
        verify = jwt.verify(token, serviceConfig.jwt.accessSecret);
        const userId = verify.user;

        if (requsetUser !== userId) {
            return res.status(403).json({ message: 'wrong token' });
        }
    } catch (error) {
        if (error.message === 'jwt expired') {
            const userId = verify.user;

            if (requsetUser !== userId) {
                return res.status(403).json({ message: 'wrong token' });
            }

            tokens = await getJWTTokens(userId);
            const user = await UserService.findByUserId(userId);
            const { accessToken } = tokens;
            req.body.accessToken = accessToken;
            const token = req.body.accessToken;
            verify = jwt.verify(token, serviceConfig.jwt.accessSecret);

            if (!user) {
                return res.status(401).json({ message: 'user not found' });
            }
        } else {
            return res.status(403).json({ message: 'wrong token' });
        }
    }

    const currentTime = Math.floor(Date.now() / 1000);

    if (verify.exp > currentTime) {
        return next();
    }

    return res.status(200);
}
