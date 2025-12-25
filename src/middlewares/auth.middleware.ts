import { Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { authCode } from '~/constants/auth';
import { TokenPayload } from '~/utils/jwt';

// Mở rộng Request để có user
export interface AuthRequest extends Request {
    user?: TokenPayload;
}

export const authMiddleware = (req: AuthRequest, res: any, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.error({ message: 'No token provided', code: authCode.UNAUTHORIZED }, 401);

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as TokenPayload;
        req.user = decoded;
        next();
    } catch (err) {
        return res.error({ message: 'Invalid or expired token' }, 401);
    }
};
