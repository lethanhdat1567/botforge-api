import dotven from 'dotenv';
dotven.config();

import express from 'express';
import cors from 'cors';

import indexRouter from './routes';

import response from '~/middlewares/response.middlewares';
import notFound from '~/middlewares/notFound.middleware';
import errorHandler from '~/middlewares/errorHandler.middleware';

import path from 'path';
import http from 'http';
import { initSocket } from '~/socket';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
// 1. Cấu hình CORS chi tiết
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || origin.includes('ngrok-free.app') || origin.includes('localhost')) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'ngrok-skip-browser-warning', 'Accept'],
        credentials: true
    })
);

app.use(express.json());
app.use(response);

// Routes
app.use('/api', indexRouter);
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use(notFound);
app.use(errorHandler);

const server = http.createServer(app);
initSocket(server);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
