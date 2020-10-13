import * as jwt from 'jsonwebtoken';

import * as UserService from '../services/user_service';
import { serviceConfig } from '../config/config';
import { Tokens } from '../interfaces/user_model_interface';

export default async function getJWTTokens(user: string): Promise<Tokens> {
    const accessToken = jwt.sign({ user }, serviceConfig.jwt.accessSecret, { expiresIn: 86400 });
    const refreshToken = jwt.sign({ user }, serviceConfig.jwt.refreshSecret, { expiresIn: '15d' });
    await UserService.updateRefreshToken(user, refreshToken);
    return {
        accessToken,
        refreshToken,
    };
}
