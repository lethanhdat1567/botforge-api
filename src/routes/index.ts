import express from 'express';
import usersRouter from './users.routes';
import authRouter from './auth.routes';
import flowRouter from './flow.routes';
import flowSharedRouter from './flow-shares.routes';
import flowShareLikeRouter from './flow-share-likes.route';
import flowShareCommentRouter from './flow-share-comments.routes';
import flowShareSaveRouter from './flow-share-saves.route';
import flowShareDowloadRouter from './flow-share-dowloads.routes';
import notificationRouter from './notification.routes';
import uploadRouter from './upload.routes';
import pageRouter from './pages.routes';
import postRouter from './post.routes';
import postCategoyRouter from './post-category.route';
import conversationRouter from './conversation.route';
import messageRouter from './message.route';

const router = express.Router();

// Mount routers
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/flow-shares', flowSharedRouter);
router.use('/flow-share-downloads', flowShareDowloadRouter);
router.use('/flow-share-likes', flowShareLikeRouter);
router.use('/flow-share-saves', flowShareSaveRouter);
router.use('/flow-share-comments', flowShareCommentRouter);
router.use('/flows', flowRouter);
router.use('/notifications', notificationRouter);
router.use('/upload', uploadRouter);
router.use('/pages', pageRouter);
router.use('/posts', postRouter);
router.use('/post-categories', postCategoyRouter);
router.use('/conversations', conversationRouter);
router.use('/messages', messageRouter);

// Health route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
});

export default router;
