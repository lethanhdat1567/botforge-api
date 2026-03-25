import express from 'express';
import flowShareCategoryController from '~/controllers/flow-share-category.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import requireRole from '~/middlewares/role.middleware';

const router = express.Router();

router.get('/', flowShareCategoryController.list);

router.get('/:slug', flowShareCategoryController.detail);

router.use(authMiddleware);
router.use(requireRole);

router.post('/', flowShareCategoryController.create);

router.patch('/:id', flowShareCategoryController.update);

router.delete('/:id', flowShareCategoryController.remove);

router.post('/bulk-delete', flowShareCategoryController.bulkDelete);

router.get('/utils/generate', flowShareCategoryController.generate);

export default router;
