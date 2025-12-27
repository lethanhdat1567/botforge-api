import { Request, Response, NextFunction } from 'express';

export interface FbEvent {
    type: 'message' | 'postback';
    senderId: string;
    message?: any;
    postback?: any;
    pageId: string;
}

export interface FbRequest extends Request {
    fbEvents?: FbEvent[];
}

// Lưu message đã xử lý (tránh duplicate resend)
const handledMessageIds = new Set<string>();
setInterval(() => handledMessageIds.clear(), 5 * 60 * 1000); // 5 phút

export function facebookWebhookMiddleware(req: FbRequest, res: Response, next: NextFunction) {
    if (req.body.object !== 'page') return res.sendStatus(404);

    const events: FbEvent[] = [];

    for (const entry of req.body.entry || []) {
        (entry.messaging || []).forEach((event: any) => {
            const pageId = event.recipient.id;
            const senderId = event.sender?.id;
            if (!senderId || !pageId) return;

            // Lọc loop / message echo`
            if (event.message?.is_echo) return;

            // Lọc duplicate message
            const mid = event.message?.mid;

            if (mid && handledMessageIds.has(mid)) return;
            if (mid) handledMessageIds.add(mid);

            // Push event
            if (event.message) events.push({ type: 'message', senderId, message: event.message, pageId });
            else if (event.postback) events.push({ type: 'postback', senderId, postback: event.postback, pageId });
        });
    }

    req.fbEvents = events;
    next();
}
