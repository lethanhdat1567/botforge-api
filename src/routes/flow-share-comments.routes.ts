import express from 'express';
import flowShareCommentController from '~/controllers/flow-share-comment.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.get('/flow-share/:flowShareId', flowShareCommentController.listByFlowShare);

router.use(authMiddleware);

router.post('/', flowShareCommentController.create);

router.patch('/:id', flowShareCommentController.update);

router.delete('/:id', flowShareCommentController.remove);

export default router;
