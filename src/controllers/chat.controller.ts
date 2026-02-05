import { Request, Response } from 'express';
import ChatModel from '~/models/chat.model';

class ChatController {
    async list(req: Request, res: Response) {
        try {
            const user = (req as any).user;
            const userId = user.role === 'admin' ? req.query.userId : user.userId;

            if (!userId) {
                return (res as any).error({ message: 'userId is required' }, 400);
            }

            const messages = await ChatModel.list(userId as string);

            return (res as any).success({
                items: messages
            });
        } catch (err) {
            console.error(err);
            return (res as any).error({ message: 'Failed to fetch messages' }, 500);
        }
    }

    async send(req: Request, res: Response) {
        try {
            const user = (req as any).user;
            const { content, userId } = req.body;

            if (!content) {
                return (res as any).error({ message: 'Content is required' }, 400);
            }

            const targetUserId = user.role === 'admin' ? userId : user.userId;

            if (!targetUserId) {
                return (res as any).error({ message: 'userId is required' }, 400);
            }

            const message = await ChatModel.create({
                userId: targetUserId,
                sender: user.role === 'admin' ? 'admin' : 'user',
                content
            });

            return (res as any).success({
                message: 'Message sent',
                data: message
            });
        } catch (err) {
            console.error(err);
            return (res as any).error({ message: 'Failed to send message' }, 500);
        }
    }

    async markRead(req: Request, res: Response) {
        try {
            const user = (req as any).user;
            const { userId } = req.body;

            // admin bắt buộc phải truyền userId
            if (user.role === 'admin' && !userId) {
                return (res as any).error({ message: 'userId is required' }, 400);
            }

            const targetUserId = user.role === 'admin' ? userId : user.userId;

            await ChatModel.markRead(targetUserId, user.role);

            return (res as any).success({
                message: 'Messages marked as read'
            });
        } catch (err) {
            console.error(err);
            return (res as any).error({ message: 'Failed to mark read' }, 500);
        }
    }
}

export default new ChatController();
