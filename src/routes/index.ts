import express from 'express';
import usersRouter from './users.routes';
import authRouter from './auth.routes';

const router = express.Router();

// Mount routers
router.use('/auth', authRouter);
router.use('/users', usersRouter);

// Health route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
});

export default router;
