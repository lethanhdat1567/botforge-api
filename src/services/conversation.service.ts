import { prisma } from '~/config/prisma';
import { ConversationStatus } from '~/generated/prisma';
import type { LiveChatParticipant } from '~/types/live-chat-participant';

class ConversationService {
    async list(status?: ConversationStatus) {
        const where = status ? { status } : {};

        const conversations = await prisma.conversation.findMany({
            where,
            orderBy: { updatedAt: 'desc' },
            select: {
                id: true,
                userId: true,
                guestName: true,
                anonymousParticipantId: true,
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
                },
                anonymousParticipant: {
                    select: {
                        id: true,
                        displayName: true
                    }
                },
                messages: {
                    where: { revokedAt: null },
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                    select: {
                        id: true,
                        role: true,
                        content: true,
                        fileUrl: true,
                        createdAt: true,
                        readByAdmin: true
                    }
                }
            }
        });

        const unreadAgg = await prisma.message.groupBy({
            by: ['conversationId'],
            where: {
                role: 'user',
                readByAdmin: false,
                revokedAt: null,
                ...(Object.keys(where).length > 0 ? { conversation: where } : {})
            },
            _count: { _all: true }
        });
        const unreadMap = new Map(unreadAgg.map((r) => [r.conversationId, r._count._all]));

        return conversations.map((c) => {
            const last = c.messages[0] ?? null;
            const { messages: _msgs, ...rest } = c;
            return {
                ...rest,
                lastMessage: last,
                adminUnreadCount: unreadMap.get(c.id) ?? 0
            };
        });
    }
    async detail(id: string) {
        const conversation = await prisma.conversation.findUnique({
            where: { id },
            select: {
                id: true,
                userId: true,
                guestName: true,
                anonymousParticipantId: true,
                createdAt: true,
                updatedAt: true,
                status: true,
                user: {
                    select: {
                        id: true,
                        displayName: true,
                        avatar: true
                    }
                },
                anonymousParticipant: {
                    select: {
                        id: true,
                        displayName: true
                    }
                }
            }
        });

        return conversation;
    }

    async getCurrent(participant: LiveChatParticipant, legacyGuestName?: string) {
        if (participant.kind === 'user') {
            const conversation = await prisma.conversation.findFirst({
                where: {
                    status: 'open',
                    userId: participant.userId
                },
                orderBy: { createdAt: 'desc' }
            });

            if (conversation) {
                return [null, conversation] as const;
            }
            return ['Conversation not found', null] as const;
        }

        const byAnon = await prisma.conversation.findFirst({
            where: {
                status: 'open',
                anonymousParticipantId: participant.anonymousParticipantId
            },
            orderBy: { createdAt: 'desc' }
        });

        if (byAnon) {
            return [null, byAnon] as const;
        }

        if (legacyGuestName?.trim()) {
            const byLegacy = await prisma.conversation.findFirst({
                where: {
                    status: 'open',
                    guestName: legacyGuestName.trim()
                },
                orderBy: { createdAt: 'desc' }
            });
            if (byLegacy) {
                return [null, byLegacy] as const;
            }
        }

        return ['Conversation not found', null] as const;
    }

    async create(participant: LiveChatParticipant) {
        if (participant.kind === 'user') {
            const existingConversation = await prisma.conversation.findFirst({
                where: {
                    status: 'open',
                    userId: participant.userId
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
                    userId: participant.userId,
                    guestName: null,
                    anonymousParticipantId: null,
                    status: 'open'
                }
            });

            return {
                message: 'Conversation created',
                data: newConversation
            };
        }

        const existingConversation = await prisma.conversation.findFirst({
            where: {
                status: 'open',
                anonymousParticipantId: participant.anonymousParticipantId
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
                userId: null,
                guestName: null,
                anonymousParticipantId: participant.anonymousParticipantId,
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
