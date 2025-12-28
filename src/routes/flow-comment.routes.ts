import express from 'express';
import { authMiddleware } from '~/middlewares/auth.middleware';
import FlowCommentController from '~/controllers/flow-comment.controller';

const router = express.Router();
router.use(authMiddleware);

router.post('/', FlowCommentController.create);
router.get('/flow-share/:flowShareId', FlowCommentController.listByFlowShare);
router.get('/:id', FlowCommentController.detail);
router.patch('/:id', FlowCommentController.update);
router.delete('/:id', FlowCommentController.remove);

export default router;
