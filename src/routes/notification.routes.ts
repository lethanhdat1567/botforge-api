// routes/notification.route.ts
import { Router } from 'express';
import NotificationController from '../controllers/notification.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = Router();

router.use(authMiddleware);

router.get('/unread-count', NotificationController.unreadCount);

router.get('/', NotificationController.list);

router.put('/:id/read', NotificationController.markRead);

router.put('/read-all', NotificationController.markReadAll);

export default router;
