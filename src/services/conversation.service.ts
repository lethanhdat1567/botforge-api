import { prisma } from '~/config/prisma';
import { ConversationStatus } from '~/generated/prisma';

class ConversationService {
    async list(status?: ConversationStatus) {
        const conversations = await prisma.conversation.findMany({
            where: {
                status
            },
            select: {
                id: true,
                userId: true,
                guestName: true,
                createdAt: true,
                updatedAt: true,
                status: true,
                _count: {
                    select: {
                        messages: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        displayName: true,
                        avatar: true
                    }
                }
            }
        });

        return conversations;
    }
    async detail(id: string) {
        const conversation = await prisma.conversation.findUnique({
            where: { id },
            select: {
                id: true,
                userId: true,
                guestName: true,
                createdAt: true,
                updatedAt: true,
                status: true,
                user: {
                    select: {
                        id: true,
                        displayName: true,
                        avatar: true
                    }
                }
            }
        });

        return conversation;
    }

    async getCurrent(guestName?: string, userId?: string) {
        if (!userId && !guestName) {
            return ['Missing identification (userId or guestName)', null];
        }

        const conversation = await prisma.conversation.findFirst({
            where: {
                status: 'open',
                ...(userId ? { userId } : { guestName: guestName })
            },
            orderBy: { createdAt: 'desc' }
        });

        if (conversation) {
            return [null, conversation];
        }

        return ['Conversation not found', null];
    }
    async create(userId?: string, guestName?: string) {
        const existingConversation = await prisma.conversation.findFirst({
            where: {
                status: 'open',
                ...(userId ? { userId } : { guestName })
            },
            orderBy: { createdAt: 'desc' }
        });

        if (existingConversation) {
            return {
                message: 'Continuing existing conversation',
                data: existingConversation
            };
        }

        const newConversation = await prisma.conversation.create({
            data: {
                userId: userId || null,
                guestName: userId ? null : guestName || `Guest-${Date.now()}`,
                status: 'open'
            }
        });

        return {
            message: 'Conversation created',
            data: newConversation
        };
    }
    async update(id: string, status: ConversationStatus) {
        await prisma.conversation.update({
            where: { id },
            data: { status }
        });

        return { message: 'Conversation updated' };
    }
    async delete(id: string) {
        await prisma.conversation.delete({
            where: { id }
        });

        return true;
    }
}

export default new ConversationService();
