// models/notification.model.ts
import { prisma } from '~/config/prisma';

export type NotificationType =
    | 'comment'
    | 'reply'
    | 'download'
    | 'flow_done'
    | 'flow_cancelled'
    | 'new_user'
    | 'chat_message';

export interface INotification {
    id: string;
    userId: string;
    type: NotificationType;
    message: string;
    avatar?: string | null;
    relatedId: string;
    read: boolean;
    createdAt: Date;
    updatedAt: Date;
}

class NotificationModel {
    // 🔍 list + search optional
    async findByUser({
        userId,
        limit = 20,
        search
    }: {
        userId: string;
        limit?: number;
        search?: string;
    }): Promise<INotification[]> {
        return prisma.notification.findMany({
            where: {
                userId,
                ...(search
                    ? {
                          OR: [
                              {
                                  message: {
                                      contains: search
                                  }
                              }
                          ]
                      }
                    : {})
            },
            orderBy: { createdAt: 'desc' },
            take: limit
        });
    }

    async markAsRead(id: string) {
        return prisma.notification.update({
            where: { id },
            data: {
                read: true,
                updatedAt: new Date()
            }
        });
    }

    // ✅ mark read all (Prisma)
    async markAllAsRead(userId: string) {
        return prisma.notification.updateMany({
            where: {
                userId,
                read: false
            },
            data: {
                read: true,
                updatedAt: new Date()
            }
        });
    }

    async createNotification(data: Omit<INotification, 'id' | 'createdAt' | 'updatedAt'>) {
        return prisma.notification.create({ data });
    }
}

export default new NotificationModel();
