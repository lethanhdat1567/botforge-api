// routes/dashboard.route.ts
import express from 'express';
import dashboardController from '~/controllers/dashboard.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();
router.use(authMiddleware);

router.get('/conversations/chart', dashboardController.conversationChart);
router.get('/overview', dashboardController.overview);

export default router;
