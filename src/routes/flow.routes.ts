import express from 'express';
import flowController from '~/controllers/flow.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/', flowController.create);

router.post('/:id/duplicate', flowController.duplicate);

router.get('/', flowController.list);

router.get('/:id', flowController.detail);

router.patch('/:id', flowController.update);

router.delete('/:id', flowController.remove);

router.post('/delete-many', flowController.removeMany);

export default router;
