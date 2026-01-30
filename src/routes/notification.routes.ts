// routes/notification.route.ts
import { Router } from 'express';
import NotificationController from '../controllers/notification.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = Router();

// Tất cả route đều cần auth
router.use(authMiddleware);

// Lấy notifications của user hiện tại
router.get('/', NotificationController.list);

// Đánh dấu đã đọc
router.put('/:id/read', NotificationController.markRead);

router.put('/read-all', NotificationController.markReadAll);

// Tạo notification mới (thường admin dùng)
router.post('/', NotificationController.create);

export default router;
