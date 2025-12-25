import express from 'express';
import usersRouter from './users.routes';

const router = express.Router();

// Mount routers
router.use('/users', usersRouter);

// Health route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
});

export default router;
