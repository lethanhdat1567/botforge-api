import express from 'express';
import usersRouter from './users.routes';
import authRouter from './auth.routes';
import profileRouter from './profile.routes';
import flowRouter from './flow.routes';
import flowSharedRouter from './flow-shared.routes';
import flowLikeRouter from './flow-like.routes';
import flowCommentRouter from './flow-comment.routes';
import flowSaveRouter from './flow-save.routes';
import notificationRouter from './notification.routes';
import folderRouter from './folder.routes';
import uploadRouter from './upload.routes';
import fallbackRouter from './flow-fallback.route';
import userFlowStateRouter from './user-flow-state.route';

const router = express.Router();

// Mount routers
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/profile', profileRouter);
router.use('/flows/shared', flowSharedRouter);
router.use('/flows/like', flowLikeRouter);
router.use('/flows/comment', flowCommentRouter);
router.use('/flows/save', flowSaveRouter);
router.use('/flows', flowRouter);
router.use('/fallback', fallbackRouter);
router.use('/notifications', notificationRouter);
router.use('/folders', folderRouter);
router.use('/upload', uploadRouter);
router.use('/flow-states', userFlowStateRouter);

// Health route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
});

export default router;
