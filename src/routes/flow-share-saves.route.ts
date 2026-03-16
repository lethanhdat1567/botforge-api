import express from 'express';
import flowShareSaveController from '~/controllers/flow-share-save.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/:flowShareId', flowShareSaveController.toggle);

router.get('/:flowShareId/status', flowShareSaveController.checkStatus);

router.get('/me', flowShareSaveController.listMySaved);

export default router;
