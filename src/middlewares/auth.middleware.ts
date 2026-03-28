import { Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { envConfig } from '~/config/envConfig';
import type { LiveChatParticipant } from '~/types/live-chat-participant';
import { TokenPayload } from '~/utils/jwt';

// Mở rộng Request để có user
export interface AuthRequest extends Request {
    user?: TokenPayload;
    liveChatParticipant?: LiveChatParticipant;
}

export const authMiddleware = (req: AuthRequest, res: any, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.unauthorized();
    }

    const token = authHeader.split(' ')[1];

    try {
        // THÊM OPTION clockTolerance: 0 VÀO ĐÂY
        const decoded = jwt.verify(token, envConfig.jwt.accessSecret!, {
            clockTolerance: 0
        }) as TokenPayload;

        req.user = decoded;
        next();
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            return res.unauthorized('Token đã hết hạn!');
        }
        return res.unauthorized('Token không hợp lệ!');
    }
};
