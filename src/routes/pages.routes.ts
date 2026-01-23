import express from 'express';
import pageController from '~/controllers/page.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/', pageController.create);
router.get('/', pageController.list);
router.get('/:id', pageController.detail);
router.patch('/:id', pageController.update);
router.delete('/:id', pageController.remove);

export default router;
