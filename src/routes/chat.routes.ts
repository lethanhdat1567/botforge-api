import { Router } from 'express';
import chatController from '~/controllers/chat.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = Router();

// user & admin dùng chung
router.get('/', authMiddleware, chatController.list);
router.post('/', authMiddleware, chatController.send);

// mark read
router.post('/read', authMiddleware, chatController.markRead);

export default router;
