import express from 'express';
import adminDashboardController from '~/controllers/admin-dashboard.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

// Check role
router.use((req, res, next) => {
    if ((req as any).user.role !== 'admin') {
        return (res as any).error({ message: 'Permission denied' }, 403);
    }
    next();
});

router.get('/overview', adminDashboardController.overview);
router.get('/chart', adminDashboardController.chart);

export default router;
