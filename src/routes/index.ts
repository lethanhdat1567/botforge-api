import express from 'express';
import usersRouter from './users.routes';
import authRouter from './auth.routes';
import profileRouter from './profile.routes';
import flowRouter from './flow.routes';

const router = express.Router();

// Mount routers
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/profile', profileRouter);
router.use('/flows', flowRouter);

// Health route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
});

export default router;
