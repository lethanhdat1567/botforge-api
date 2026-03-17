import { NextFunction } from 'express';
import { AuthRequest } from '~/middlewares/auth.middleware';
import jwt from 'jsonwebtoken';
import { envConfig } from '~/config/envConfig';
import { TokenPayload } from '~/utils/jwt';

export const optionalAuthMiddleware = (req: AuthRequest, res: any, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next();
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, envConfig.jwt.accessSecret!) as TokenPayload;
        req.user = decoded;
    } catch (error) {
        console.log('Optional Auth: Token invalid or expired');
    }

    next();
};
