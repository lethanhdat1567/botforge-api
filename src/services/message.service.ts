import { prisma } from '~/config/prisma';
import notificationService from '~/services/notification.service';
import { emitNewChatMessageForConversation } from '~/socket/socket.service';
import type { LiveChatParticipant } from '~/types/live-chat-participant';

type CreateMessage = {
    conversationId: string;
    content?: string;
    fileUrl?: string;
};

class MessageService {
    async canAccessConversation(conversationId: string, participant: LiveChatParticipant) {
        const conv = await prisma.conversation.findUnique({
            where: { id: conversationId },
            select: { userId: true, anonymousParticipantId: true }
        });

        if (!conv) {
            return false;
        }

        if (participant.kind === 'user' && participant.role === 'admin') {
            return true;
        }

        if (participant.kind === 'user' && conv.userId === participant.userId) {
            return true;
        }

        if (participant.kind === 'anonymous' && conv.anonymousParticipantId === participant.anonymousParticipantId) {
            return true;
        }

        return false;
    }

    async getMessagesByConversation(
        conversationId: string,
        query: { page?: number | string; limit?: number | string },
        participant: LiveChatParticipant
    ) {
        if (!conversationId) {
            return ['conversationId is required', null] as const;
        }

        const ok = await this.canAccessConversation(conversationId, participant);
        if (!ok) {
            return ['Không có quyền truy cập hội thoại này', null] as const;
        }

        const page = Math.max(1, Number(query.page) || 1);
        const limit = Math.min(100, Math.max(1, Number(query.limit) || 50));

        const result = await prisma.message
            .paginate({
                where: { conversationId },
                orderBy: { createdAt: 'asc' }
            })
            .withPages({ page, limit });

        return [null, result] as const;
    }

    async createMessage(data: CreateMessage, participant: LiveChatParticipant) {
        const ok = await this.canAccessConversation(data.conversationId, participant);
        if (!ok) {
            return ['Không có quyền gửi tin vào hội thoại này', null] as const;
        }

        const isAdmin = participant.kind === 'user' && participant.role === 'admin';

        const role = isAdmin ? 'admin' : 'user';
        const senderUserId = !isAdmin && participant.kind === 'user' ? participant.userId : null;
        const senderAnonymousId =
            !isAdmin && participant.kind === 'anonymous' ? participant.anonymousParticipantId : null;

        const result = await prisma.message.create({
            data: {
                conversationId: data.conversationId,
                content: data.content,
                fileUrl: data.fileUrl,
                role: role as 'admin' | 'user',
                senderUserId,
                senderAnonymousId,
                readByAdmin: isAdmin,
                readByUser: !isAdmin
            }
        });

        await prisma.conversation.update({
            where: { id: data.conversationId },
            data: { updatedAt: new Date() }
        });

        const conversation = await prisma.conversation.findUnique({
            where: { id: data.conversationId },
            select: {
                id: true,
                userId: true,
                anonymousParticipantId: true,
                guestName: true,
                user: { select: { displayName: true } },
                anonymousParticipant: { select: { displayName: true } }
            }
        });

        if (conversation) {
            const content = data.content ?? data.fileUrl ?? '';
            emitNewChatMessageForConversation(
                {
                    id: conversation.id,
                    userId: conversation.userId,
                    anonymousParticipantId: conversation.anonymousParticipantId
                },
                {
                    conversationId: conversation.id,
                    id: result.id,
                    sender: role === 'admin' ? 'admin' : 'user',
                    type: data.fileUrl ? 'image' : 'text',
                    content,
                    createdAt: result.createdAt
                }
            );

            if (!isAdmin) {
                const senderLabel =
                    participant.kind === 'user'
                        ? conversation.user?.displayName?.trim() || 'Người dùng'
                        : conversation.anonymousParticipant?.displayName?.trim() ||
                          conversation.guestName?.trim() ||
                          'Khách';

                const previewText =
                    data.fileUrl && !data.content?.trim()
                        ? '[File đính kèm]'
                        : content;

                await notificationService.notifyAdminsChatMessage(
                    conversation.id,
                    previewText,
                    senderLabel
                );
            }
        }

        return [null, result] as const;
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
    async markAsRead(conversationId: string, _role: string, participant: LiveChatParticipant) {
        const ok = await this.canAccessConversation(conversationId, participant);
        if (!ok) {
            return ['Không có quyền', null] as const;
        }

        const isAdminReader = participant.kind === 'user' && participant.role === 'admin';

        const result = isAdminReader
            ? await prisma.message.updateMany({
                  where: {
                      conversationId,
                      role: 'user',
                      revokedAt: null
                  },
                  data: { readByAdmin: true }
              })
            : await prisma.message.updateMany({
                  where: {
                      conversationId,
                      role: 'admin',
                      revokedAt: null
                  },
                  data: { readByUser: true }
              });

        return [null, result] as const;
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
