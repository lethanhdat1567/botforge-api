import { prisma } from '~/config/prisma';

class ChatModel {
    async getConversation(userId: string) {
        return prisma.chatConversation.findFirst({
            where: { userId }
        });
    }

    async createConversation(userId: string) {
        return prisma.chatConversation.create({
            data: { userId }
        });
    }

    async listMessages(conversationId: string) {
        return prisma.chatLiveMessage.findMany({
            where: { conversationId },
            orderBy: { createdAt: 'asc' }
        });
    }

    async listConversationsForAdmin(q?: string) {
        const conversations = await prisma.chatConversation.findMany({
            where: q
                ? {
                      user: {
                          displayName: {
                              contains: q
                          }
                      }
                  }
                : undefined,
            orderBy: {
                lastMessageAt: 'desc'
            },
            select: {
                id: true,
                userId: true,
                lastMessage: true,
                lastMessageAt: true,
                user: {
                    select: {
                        displayName: true,
                        avatar: true
                    }
                },
                messages: {
                    where: {
                        sender: 'user',
                        readAt: null,
                        revokedAt: null
                    },
                    select: { id: true }
                }
            }
        });

        return conversations.map((c) => ({
            id: c.id,
            conversationId: c.id,
            userId: c.userId,
            displayName: c.user.displayName,
            avatar: c.user.avatar,
            lastMessage: c.lastMessage,
            lastMessageAt: c.lastMessageAt,
            unreadCount: c.messages.length
        }));
    }

    async sendMessage(data: {
        userId: string;
        sender: 'user' | 'admin';
        type: 'text' | 'image' | 'video';
        content: string;
    }) {
        let conversation = await this.getConversation(data.userId);

        if (!conversation) {
            conversation = await this.createConversation(data.userId);
        }

        const message = await prisma.chatLiveMessage.create({
            data: {
                conversationId: conversation.id,
                sender: data.sender,
                type: data.type,
                content: data.content
            }
        });

        await prisma.chatConversation.update({
            where: { id: conversation.id },
            data: {
                lastMessage: data.type === 'text' ? data.content : data.type === 'image' ? '[Image]' : '[Video]',
                lastMessageAt: new Date()
            }
        });

        return message;
    }

    async markRead(userId: string, role: 'user' | 'admin') {
        const conversation = await this.getConversation(userId);
        if (!conversation) return;

        await prisma.chatLiveMessage.updateMany({
            where: {
                conversationId: conversation.id,
                sender: role === 'user' ? 'admin' : 'user',
                readAt: null
            },
            data: { readAt: new Date() }
        });
    }

    async revokeMessage(messageId: string, role: 'user' | 'admin') {
        const message = await prisma.chatLiveMessage.findUnique({
            where: { id: messageId }
        });

        if (!message) return null;

        // user chỉ được revoke tin của mình
        if (role === 'user' && message.sender !== 'user') {
            throw new Error('Forbidden');
        }

        const revokedMessage = await prisma.chatLiveMessage.update({
            where: { id: messageId },
            data: {
                revokedAt: new Date(),
                content: ''
            },
            include: {
                conversation: {
                    select: {
                        userId: true
                    }
                }
            }
        });

        return {
            id: revokedMessage.id,
            revokedAt: revokedMessage.revokedAt,
            userId: revokedMessage.conversation.userId
        };
    }

    async unreadCount(userId: string, role: 'user' | 'admin') {
        const conversation = await this.getConversation(userId);
        if (!conversation) return 0;

        return prisma.chatLiveMessage.count({
            where: {
                conversationId: conversation.id,
                sender: role === 'user' ? 'admin' : 'user',
                readAt: null,
                revokedAt: null
            }
        });
    }
}

export default new ChatModel();
