import express from 'express';
import { authMiddleware } from '~/middlewares/auth.middleware';
import FlowFallbackController from '~/controllers/flow-fallback.controller';

const router = express.Router();
router.use(authMiddleware);

// mỗi user chỉ có 1 fallback
router.get('/', FlowFallbackController.get);
router.post('/', FlowFallbackController.upsert);
router.delete('/', FlowFallbackController.delete);

export default router;
