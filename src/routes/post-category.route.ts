import express from 'express';
import postCategoryController from '~/controllers/post-category.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import requireRole from '~/middlewares/role.middleware';

const router = express.Router();

router.get('/', postCategoryController.list);
router.get('/:id', postCategoryController.detail);
router.use(authMiddleware, requireRole);

router.post('/', postCategoryController.create);
router.patch('/:id', postCategoryController.update);
router.delete('/:id', postCategoryController.delete);
router.post('/delete-many', postCategoryController.bulkDelete);

export default router;
