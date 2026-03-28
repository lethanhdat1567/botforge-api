import express from 'express';
import messageController from '~/controllers/message.controller';
import { resolveLiveChatParticipantMiddleware } from '~/middlewares/live-chat-participant.middleware';
import { optionalAuthMiddleware } from '~/middlewares/optionalAuth.middleware';

const router = express.Router();

router.get(
    '/',
    optionalAuthMiddleware,
    resolveLiveChatParticipantMiddleware,
    messageController.getMessagesByConversation
);

router.post(
    '/',
    optionalAuthMiddleware,
    resolveLiveChatParticipantMiddleware,
    messageController.createMessage
);

router.patch('/:id/revoke', messageController.revokeMessage);

router.patch(
    '/read-all/:conversationId',
    optionalAuthMiddleware,
    resolveLiveChatParticipantMiddleware,
    messageController.markAsRead
);

router.delete('/:id', messageController.deleteMessage);

export default router;
