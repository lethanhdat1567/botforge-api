import express from 'express';
import messageController from '~/controllers/message.controller';
import { optionalAuthMiddleware } from '~/middlewares/optionalAuth.middleware';

const router = express.Router();

router.get('/', messageController.getMessagesByConversation);

router.post('/', optionalAuthMiddleware, messageController.createMessage);

router.patch('/:id/revoke', messageController.revokeMessage);

router.patch('/read-all/:conversationId', optionalAuthMiddleware, messageController.markAsRead);

router.delete('/:id', messageController.deleteMessage);

export default router;
