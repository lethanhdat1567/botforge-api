import express from 'express';
import pageController from '~/controllers/page.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/:flowId', pageController.detail);
router.post('/connect/:flowId', pageController.connect);
router.delete('/:flowId', pageController.remove);

export default router;
