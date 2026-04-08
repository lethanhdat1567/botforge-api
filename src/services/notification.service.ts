import { sendEmail } from '~/config/mailer';
import { prisma } from '~/config/prisma';
import { NotificationType } from '@prisma/client';
import { emitNewNotification } from '~/socket/socket.service';

type CreateNotification = {
    userId: string;
    type: NotificationType;
    message: string;
    thumbnail?: string;
    relatedId: string;
};

class NotificationService {
    async create(data: CreateNotification): Promise<boolean> {
        if (!data.userId?.trim()) {
            return false;
        }

        const user = await prisma.user.findUnique({
            where: { id: data.userId },
            select: { email: true }
        });

        if (!user) return false;

        const notification = await prisma.notification.create({ data });

        emitNewNotification(data.userId, {
            notification: {
                id: notification.id,
                type: notification.type,
                message: notification.message,
                thumbnail: notification.thumbnail ?? null,
                relatedId: notification.relatedId,
                read: notification.read,
                createdAt: notification.createdAt,
                updatedAt: notification.updatedAt
            }
        });

        const mailAllowedTypes: NotificationType[] = ['new_user'];

        if (mailAllowedTypes.includes(data.type)) {
            sendEmail(user.email, `[Thông báo] ${data.type}`, data.message).catch(console.error);
        }

        return true;
    }

    async getNotificationsForUser(userId: string) {
        return await prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async countUnreadForUser(userId: string) {
        return await prisma.notification.count({
            where: { userId, read: false }
        });
    }

    async markRead(userId: string, notificationId: string) {
        return await prisma.notification.updateMany({
            where: { id: notificationId, userId },
            data: { read: true }
        });
    }

    async markReadAll(userId: string) {
        return await prisma.notification.updateMany({
            where: { userId },
            data: { read: true }
        });
    }

    async notifyNewComment(flowShareId: string, commenterId: string) {
        const commenter = await prisma.user.findUnique({
            where: { id: commenterId },
            select: { displayName: true, avatar: true }
        });

        const flowShare = await prisma.flowShare.findUnique({
            where: { id: flowShareId },
            select: { userId: true }
        });

        if (!commenter || !flowShare?.userId) return;

        if (flowShare.userId === commenterId) return;

        const message = `${commenter.displayName} đã bình luận về một flow mà bạn đang theo dõi.`;

        return await this.create({
            userId: flowShare.userId,
            type: 'comment',
            message,
            relatedId: flowShareId,
            thumbnail: commenter.avatar || undefined
        });
    }

    async notifyReplyComment(parentCommentId: string, flowShareId: string, replierId: string) {
        const parentComment = await prisma.flowShareComment.findUnique({
            where: { id: parentCommentId },
            select: { userId: true }
        });

        const replier = await prisma.user.findUnique({
            where: { id: replierId },
            select: { displayName: true, avatar: true }
        });

        if (!replier || !parentComment?.userId) return;

        if (parentComment.userId === replierId) return;

        const message = `${replier.displayName} đã trả lời bình luận của bạn.`;

        return await this.create({
            userId: parentComment.userId,
            type: 'reply',
            message,
            relatedId: flowShareId,
            thumbnail: replier.avatar || undefined
        });
    }

    async notifyDowloadFlow(flowShareId: string, downloaderId: string) {
        const downloader = await prisma.user.findUnique({
            where: { id: downloaderId },
            select: { displayName: true, avatar: true }
        });

        const flowShare = await prisma.flowShare.findUnique({
            where: { id: flowShareId },
            select: { userId: true }
        });

        if (!downloader || !flowShare?.userId) return;

        if (flowShare.userId === downloaderId) return;

        const message = `${downloader.displayName} đã tải xuống flow của bạn.`;

        return await this.create({
            userId: flowShare.userId,
            type: 'download',
            message,
            relatedId: flowShareId,
            thumbnail: downloader.avatar || undefined
        });
    }

    async notifyNewUser(newUserEmail: string, newUserId: string) {
        const message = `Một người dùng mới đã đăng ký với email ${newUserEmail}.`;

        const admins = await prisma.user.findMany({
            where: { role: 'admin' },
            select: { id: true }
        });

        for (const admin of admins) {
            await this.create({ userId: admin.id, type: 'new_user', message, relatedId: newUserId });
        }

        return;
    }

    async notifyAdminsChatMessage(conversationId: string, previewText: string, senderLabel: string) {
        const admins = await prisma.user.findMany({
            where: { role: 'admin' },
            select: { id: true }
        });

        const trimmed = previewText.trim();
        const message = trimmed
            ? `${senderLabel}: ${trimmed.slice(0, 200)}`
            : `${senderLabel} gửi tin nhắn mới.`;

        for (const admin of admins) {
            await this.create({
                userId: admin.id,
                type: 'chat_message',
                message,
                relatedId: conversationId
            });
        }
    }
}

export default new NotificationService();
