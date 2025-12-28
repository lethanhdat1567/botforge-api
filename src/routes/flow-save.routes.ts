import express from 'express';
import { authMiddleware } from '~/middlewares/auth.middleware';
import FlowSaveController from '~/controllers/flow-save.controller';

const router = express.Router();
router.use(authMiddleware);

router.get('/me', FlowSaveController.getSavedTemplates);
router.post('/:flowShareId/toggle', FlowSaveController.toggle);
router.get('/:flowShareId/users', FlowSaveController.listUsers);
router.get('/:flowShareId/status', FlowSaveController.status);

export default router;
