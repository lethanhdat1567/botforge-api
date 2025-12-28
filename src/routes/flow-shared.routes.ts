import express from 'express';
import FlowSharedController from '~/controllers/flow-shared.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import { upload } from '~/middlewares/upload.middleware';

const router = express.Router();
router.use(authMiddleware);

router.get('/', FlowSharedController.getAllShared);
router.get('/me', FlowSharedController.list);
router.get('/:id', FlowSharedController.detail);
router.post('/', upload.single('thumbnail'), FlowSharedController.create);
router.patch('/:id/dowload', FlowSharedController.download);
router.patch('/:id', upload.single('thumbnail'), FlowSharedController.update);
router.delete('/:id', FlowSharedController.remove);

export default router;
