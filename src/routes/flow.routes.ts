import express from 'express';
import flowController from '~/controllers/flow.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/', flowController.create);
router.get('/', flowController.list);
router.get('/:id', flowController.detail);
router.patch('/:id', flowController.update);
router.delete('/:id', flowController.remove);

export default router;
