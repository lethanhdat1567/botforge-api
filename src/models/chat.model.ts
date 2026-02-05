import { prisma } from '~/config/prisma';

class ChatModel {
    list(userId: string) {
        return prisma.chatMessage.findMany({
            where: { userId },
            orderBy: { createdAt: 'asc' }
        });
    }

    create(data: { userId: string; sender: 'user' | 'admin'; content: string }) {
        return prisma.chatMessage.create({ data });
    }

    markRead(userId: string, role: 'user' | 'admin') {
        const field = role === 'user' ? { readByUserAt: new Date() } : { readByAdminAt: new Date() };

        return prisma.chatMessage.updateMany({
            where: {
                userId,
                ...(role === 'user' ? { sender: 'admin', readByUserAt: null } : { sender: 'user', readByAdminAt: null })
            },
            data: field
        });
    }

    unreadCount(userId: string, role: 'user' | 'admin') {
        return prisma.chatMessage.count({
            where: {
                userId,
                ...(role === 'user' ? { sender: 'admin', readByUserAt: null } : { sender: 'user', readByAdminAt: null })
            }
        });
    }
}

export default new ChatModel();
