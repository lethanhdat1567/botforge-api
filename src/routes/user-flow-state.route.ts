import express from 'express';
import UserFlowStateController from '~/controllers/user-flow-state.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();
router.use(authMiddleware);

router.get('/owner', UserFlowStateController.listByOwner);
router.get('/', UserFlowStateController.list);
router.get('/:id', UserFlowStateController.detail);

router.post('/', UserFlowStateController.create);

router.patch('/:id', UserFlowStateController.update);
router.patch('/platform/step', UserFlowStateController.appendStep);
router.patch('/platform/status', UserFlowStateController.updateByPlatformAndPage);

router.delete('/:id', UserFlowStateController.remove);

export default router;
