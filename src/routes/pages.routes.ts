import express from 'express';
import pageController from '~/controllers/page.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import requireRole from '~/middlewares/role.middleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/', pageController.list);

router.get('/admin', requireRole, pageController.listForAdmin);

router.get('/:id', pageController.detail);

router.post('/', pageController.create);

router.put('/:id', pageController.update);

router.delete('/:id', pageController.remove);

router.post('/delete-many', pageController.removeMany);

export default router;
