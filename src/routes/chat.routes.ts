import { Router } from 'express';
import chatController from '~/controllers/chat.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = Router();

// list message
router.get('/conversations', authMiddleware, chatController.listConversations);
router.get('/', authMiddleware, chatController.list);

// send message
router.post('/', authMiddleware, chatController.send);

// mark read
router.post('/read', authMiddleware, chatController.markRead);

// revoke
router.post('/revoke', authMiddleware, chatController.revoke);

export default router;
