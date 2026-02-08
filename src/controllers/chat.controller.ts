import { Request, Response } from 'express';
import ChatModel from '~/models/chat.model';
import { emitAdminSidebarRefresh, emitNewChatMessage, emitRevokeChatMessage } from '~/socket/socket.service';

class ChatController {
    async list(req: Request, res: Response) {
        try {
            const user = (req as any).user;
            const targetUserId = user.role === 'admin' ? req.query.userId : user.userId;

            if (!targetUserId) {
                return (res as any).error({ message: 'userId is required' }, 400);
            }

            const conversation = await ChatModel.getConversation(targetUserId);

            if (!conversation) {
                return (res as any).success({ items: [] });
            }

            const messages = await ChatModel.listMessages(conversation.id);

            return (res as any).success({ items: messages });
        } catch (err) {
            console.error(err);
            return (res as any).error({ message: 'Failed to fetch messages' }, 500);
        }
    }

    async listConversations(req: Request, res: Response) {
        try {
            const user = (req as any).user;

            if (user.role !== 'admin') {
                return (res as any).error({ message: 'Forbidden' }, 403);
            }

            const { q } = req.query;

            const conversations = await ChatModel.listConversationsForAdmin(q ? String(q) : undefined);

            return (res as any).success({
                items: conversations
            });
        } catch (err) {
            console.error(err);
            return (res as any).error({ message: 'Failed to load conversations' }, 500);
        }
    }

    async send(req: Request, res: Response) {
        try {
            const user = (req as any).user;
            const { content, type = 'text', userId } = req.body;

            if (!content) {
                return (res as any).error({ message: 'Content is required' }, 400);
            }

            const targetUserId = user.role === 'admin' ? userId : user.userId;

            if (!targetUserId) {
                return (res as any).error({ message: 'userId is required' }, 400);
            }

            const message = await ChatModel.sendMessage({
                userId: targetUserId,
                sender: user.role,
                type,
                content
            });

            emitNewChatMessage(targetUserId, {
                id: message.id,
                sender: message.sender,
                type: message.type,
                content: message.content,
                createdAt: message.createdAt
            });

            emitAdminSidebarRefresh();

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

            const targetUserId = user.role === 'admin' ? userId : user.userId;

            if (!targetUserId) {
                return (res as any).error({ message: 'userId is required' }, 400);
            }

            await ChatModel.markRead(targetUserId, user.role);

            return (res as any).success({ message: 'Marked as read' });
        } catch (err) {
            console.error(err);
            return (res as any).error({ message: 'Failed to mark read' }, 500);
        }
    }

    async revoke(req: Request, res: Response) {
        try {
            const user = (req as any).user;
            const { messageId } = req.body;

            if (!messageId) {
                return (res as any).error({ message: 'messageId is required' }, 400);
            }

            const message = await ChatModel.revokeMessage(messageId, user.role);

            if (!message) {
                return (res as any).error({ message: 'Message not found' }, 404);
            }

            // 2️⃣ Emit socket
            emitRevokeChatMessage(message.userId, {
                id: message.id,
                revokedAt: message.revokedAt
            });

            return (res as any).success({ message: 'Message revoked' });
        } catch (err) {
            console.error(err);
            return (res as any).error({ message: 'Failed to revoke message' }, 500);
        }
    }
}

export default new ChatController();
