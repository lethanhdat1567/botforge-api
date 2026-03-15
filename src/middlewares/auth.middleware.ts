import { Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { envConfig } from '~/config/envConfig';
import { TokenPayload } from '~/utils/jwt';

// Mở rộng Request để có user
export interface AuthRequest extends Request {
    user?: TokenPayload;
}

export const authMiddleware = (req: AuthRequest, res: any, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.unauthorized();
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, envConfig.jwt.accessSecret!) as TokenPayload;
    req.user = decoded;

    next();
};
