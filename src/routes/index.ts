import express from 'express';
import usersRouter from './users.routes';
import authRouter from './auth.routes';
import profileRouter from './profile.routes';
import flowRouter from './flow.routes';
import flowSharedRouter from './flow-shares.routes';
import flowShareLikeRouter from './flow-share-likes.route';
import flowShareCommentRouter from './flow-share-comments.routes';
import flowShareSaveRouter from './flow-share-saves.route';
import flowShareDowloadRouter from './flow-share-dowloads.routes';
import notificationRouter from './notification.routes';
import folderRouter from './folder.routes';
import uploadRouter from './upload.routes';
import fallbackRouter from './flow-fallback.route';
import userFlowStateRouter from './user-flow-state.route';
import pageRouter from './pages.routes';
import dashboardRouter from './dashboard.routes';
import adminDashboardRouter from './admin-dashboard.route';
import adminFlowRouter from './admin-flow.route';
import guideRouter from './guides.routes';
import chatRouter from './chat.routes';

const router = express.Router();

// Mount routers
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/profile', profileRouter);
router.use('/flow-shares', flowSharedRouter);
router.use('/flow-share-downloads', flowShareDowloadRouter);
router.use('/flow-share-likes', flowShareLikeRouter);
router.use('/flow-share-saves', flowShareSaveRouter);
router.use('/flow-share-comments', flowShareCommentRouter);
router.use('/flows', flowRouter);
router.use('/fallback', fallbackRouter);
router.use('/notifications', notificationRouter);
router.use('/folders', folderRouter);
router.use('/upload', uploadRouter);
router.use('/flow-states', userFlowStateRouter);
router.use('/pages', pageRouter);
router.use('/dashboard', dashboardRouter);
router.use('/admin-dashboard', adminDashboardRouter);
router.use('/admin-flows', adminFlowRouter);
router.use('/guides', guideRouter);
router.use('/chat', chatRouter);

// Health route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
});

export default router;
