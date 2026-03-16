import express from 'express';
import userController from '~/controllers/user.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import requireRole from '~/middlewares/role.middleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/admin/list', requireRole, userController.list);
router.get('/detail/:id', userController.detail);

router.post('/create', userController.create);

router.patch('/update/:id', userController.update);
router.patch('/update-password/:id', userController.updatePassword);

router.delete('/delete/:id', userController.delete);
router.post('/delete-bulk', userController.deleteBulk);

export default router;
