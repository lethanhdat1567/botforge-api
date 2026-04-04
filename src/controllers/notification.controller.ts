import notificationService from '~/services/notification.service';

class NotificationController {
    async list(req: any, res: any) {
        const userId = req.user.id;

        const notifications = await notificationService.getNotificationsForUser(userId);

        res.success(notifications);
    }

    async unreadCount(req: any, res: any) {
        const userId = req.user.id;

        const count = await notificationService.countUnreadForUser(userId);

        res.success({ count });
    }

    async markRead(req: any, res: any) {
        const userId = req.user.id;
        const notificationId = req.params.id;

        await notificationService.markRead(userId, notificationId);

        res.success('Marked as read');
    }

    async markReadAll(req: any, res: any) {
        const userId = req.user.id;

        await notificationService.markReadAll(userId);

        res.success('Marked all as read');
    }
}

export default new NotificationController();
