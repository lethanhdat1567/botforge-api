import express from 'express';
import flowShareLikeController from '~/controllers/flow-share-like.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.get('/:flowShareId', flowShareLikeController.listUsersByFlowShare);

router.use(authMiddleware);

router.post('/:flowShareId', flowShareLikeController.toggle);

router.get('/:flowShareId/status', flowShareLikeController.checkStatus);

export default router;
