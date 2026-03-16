import { Router } from 'express';
import postController from '~/controllers/post.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import requireRole from '~/middlewares/role.middleware';

const router = Router();

router.get('/public', postController.listPublic);
router.get('/category/:categorySlug', postController.listByCategory);
router.use(authMiddleware);

router.get('/admin', requireRole, postController.listAdmin);
router.get('/slug/:slug', postController.detailBySlug);

router.get('/:id', postController.detail);

router.post('/', requireRole, postController.create);

router.patch('/:id', requireRole, postController.update);

router.delete('/:id', requireRole, postController.delete);
router.post('/delete-many', requireRole, postController.bulkDelete);

export default router;
