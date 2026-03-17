import { Router } from 'express';
import conversationController from '~/controllers/conversation.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import { optionalAuthMiddleware } from '~/middlewares/optionalAuth.middleware';
import requireRole from '~/middlewares/role.middleware';

const router = Router();

router.post('/', optionalAuthMiddleware, conversationController.create);
router.get('/current', optionalAuthMiddleware, conversationController.getCurrent);

router.use(authMiddleware);

router.get('/list', requireRole, conversationController.list);
router.get('/:id', conversationController.detail);

router.patch('/:id', conversationController.update);

router.delete('/:id', conversationController.delete);

export default router;
