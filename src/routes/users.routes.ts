import express from 'express';
import userController from '~/controllers/user.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/', userController.list);
router.get('/:id', userController.detail);
router.patch('/:id', userController.update);
router.delete('/:id', userController.remove);

export default router;
