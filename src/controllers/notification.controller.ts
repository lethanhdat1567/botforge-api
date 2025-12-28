// controllers/notification.controller.ts
import NotificationModel from '../models/notification.model';

class NotificationController {
    // GET /notifications
    async list(req: any, res: any) {
        const userId = req.user.userId;
        const { limit = 20 } = req.query;

        const notifications = await NotificationModel.findByUser(userId, Number(limit));

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
