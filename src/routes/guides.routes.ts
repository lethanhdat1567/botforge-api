import { Router } from 'express';
import guideController from '~/controllers/guide.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import { upload } from '~/middlewares/upload.middleware';

const router = Router();

router.get('/', authMiddleware, guideController.list);
router.get('/:slug', guideController.publicDetail);
router.get('/detail/:id', authMiddleware, guideController.detail);
router.post('/', authMiddleware, upload.single('thumbnail'), guideController.create);
router.put('/:id', authMiddleware, upload.single('thumbnail'), guideController.update);
router.delete('/:id', authMiddleware, guideController.remove);

export default router;
