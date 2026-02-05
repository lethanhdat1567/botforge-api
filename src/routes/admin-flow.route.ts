// src/routes/admin/flow.route.ts
import { Router } from 'express';
import { adminFlowController } from '~/controllers/adminFlow.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = Router();

router.get('/', authMiddleware, adminFlowController.list);
router.get('/:id', authMiddleware, adminFlowController.detail);
router.patch('/:id/disable', authMiddleware, adminFlowController.disable);

export default router;
