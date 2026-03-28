import { NextFunction } from 'express';
import { validate as isUuid } from 'uuid';

import { prisma } from '~/config/prisma';
import { httpCode } from '~/constants/httpsCode';
import type { AuthRequest } from '~/middlewares/auth.middleware';
import type { LiveChatParticipant } from '~/types/live-chat-participant';

const ANON_HEADER = 'x-anonymous-id';
const ANON_DISPLAY_HEADER = 'x-anonymous-display-name';

/**
 * Sau `optionalAuthMiddleware`: gắn `req.liveChatParticipant` từ JWT hoặc `X-Anonymous-Id` (UUID).
 * Khách phải gửi header hợp lệ; có JWT thì ưu tiên user (bỏ qua anonymous).
 */
export async function resolveLiveChatParticipantMiddleware(req: AuthRequest, res: any, next: NextFunction) {
    if (req.user) {
        req.liveChatParticipant = {
            kind: 'user',
            userId: req.user.id,
            role: req.user.role
        } satisfies LiveChatParticipant;
        return next();
    }

    const rawAnon = req.headers[ANON_HEADER] as string | undefined;
    const displayName = req.headers[ANON_DISPLAY_HEADER] as string | undefined;

    if (!rawAnon?.trim()) {
        return res.error(
            { message: 'Thiếu định danh: đăng nhập hoặc gửi header X-Anonymous-Id (UUID).' },
            httpCode.clientError.badRequest
        );
    }

    const anonId = rawAnon.trim();
    if (!isUuid(anonId)) {
        return res.error({ message: 'X-Anonymous-Id phải là UUID hợp lệ.' }, httpCode.clientError.badRequest);
    }

    await prisma.anonymousParticipant.upsert({
        where: { id: anonId },
        create: {
            id: anonId,
            displayName: displayName?.trim() || null
        },
        update: {
            ...(displayName?.trim() ? { displayName: displayName.trim() } : {})
        }
    });

    req.liveChatParticipant = {
        kind: 'anonymous',
        anonymousParticipantId: anonId
    } satisfies LiveChatParticipant;

    return next();
}
