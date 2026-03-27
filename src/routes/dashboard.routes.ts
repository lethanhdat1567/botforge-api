import express from 'express';
import dashboardController from '~/controllers/dashboard.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import requireRole from '~/middlewares/role.middleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/user', dashboardController.getUserStats);
router.get('/admin', requireRole, dashboardController.getAdminStats);

export default router;
