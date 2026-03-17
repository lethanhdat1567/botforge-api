import { prisma } from '~/config/prisma';
import { TokenPayload } from '~/utils/jwt';

type CreateMessage = {
    conversationId: string;
    content?: string;
    fileUrl?: string;
};

class MessageService {
    async getMessagesByConversation(conversationId: string, { page = 1, limit = 10 }) {
        const result = await prisma.message
            .paginate({
                where: { conversationId },
                orderBy: { createdAt: 'asc' }
            })
            .withPages({ page, limit });

        return result;
    }
    async createMessage(data: CreateMessage, user?: TokenPayload) {
        const senderRole = user?.role || 'user';

        const result = await prisma.message.create({
            data: {
                conversationId: data.conversationId,
                content: data.content,
                fileUrl: data.fileUrl,
                role: senderRole as any,

                readByAdmin: senderRole === 'admin',
                readByUser: senderRole === 'user' || !user
            }
        });

        return result;
    }
    async revokeMessage(messageId: string) {
        const message = await prisma.message.findUnique({
            where: { id: messageId }
        });

        if (!message) return ['Message not found', null];

        const result = await prisma.message.update({
            where: { id: messageId },
            data: { revokedAt: new Date() }
        });

        return [null, result];
    }
    async markAsRead(conversationId: string, role: string) {
        const result = await prisma.message.updateMany({
            where: {
                conversationId,
                role: role as any
            },
            data: {
                readByUser: role === 'user',
                readByAdmin: role === 'admin'
            }
        });

        return result;
    }
    async deleteMessage(messageId: string) {
        const message = await prisma.message.findUnique({
            where: { id: messageId }
        });

        if (!message) return ['Message not found', null];

        const result = await prisma.message.delete({
            where: { id: messageId }
        });

        return [null, result];
    }
}

export default new MessageService();
