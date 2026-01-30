// controllers/notification.controller.ts
import NotificationModel from '../models/notification.model';

class NotificationController {
    // GET /notifications
    // GET /notifications
    // controllers/notification.controller.ts
    async list(req: any, res: any) {
        const userId = req.user.userId;
        const limit = Number(req.query.limit) || 20;
        const search = typeof req.query.search === 'string' ? req.query.search.trim() : undefined;

        const notifications = await NotificationModel.findByUser({
            userId,
            limit,
            search: search || undefined
        });

        return res.success(notifications);
    }

    // PUT /notifications/:id/read
    async markRead(req: any, res: any) {
        const { id } = req.params;

        try {
            const notification = await NotificationModel.markAsRead(id);
            return res.success(notification);
        } catch (error) {
            return res.error('Notification not found', 404);
        }
    }

    // PUT /notifications/read-all
    async markReadAll(req: any, res: any) {
        const userId = req.user.userId;

        await NotificationModel.markAllAsRead(userId);

        return res.success({ message: 'All notifications marked as read' });
    }

    // POST /notifications
    async create(req: any, res: any) {
        const { userId, type, message, relatedId, avatar } = req.body;

        const notification = await NotificationModel.createNotification({
            userId,
            type,
            message,
            relatedId,
            avatar,
            read: false
        });

        return res.success(notification);
    }
}

export default new NotificationController();
