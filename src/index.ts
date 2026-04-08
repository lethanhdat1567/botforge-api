import 'dotenv/config';

import '~/config/firebase';

import express from 'express';
import cors from 'cors';

import indexRouter from './routes';

import response from '~/middlewares/response.middlewares';
import notFound from '~/middlewares/notFound.middleware';
import errorHandler from '~/middlewares/errorHandler.middleware';
import { envConfig } from '~/config/envConfig';

import path from 'path';
import http from 'http';
import { initSocket } from '~/socket';

const app = express();
const PORT = process.env.PORT || 8000;
const normalizeOrigin = (value: string) => value.trim().replace(/\/+$/, '').toLowerCase();
const frontendOrigin = normalizeOrigin(envConfig.frontendUrl);
const isDevelopment = envConfig.nodeEnv === 'development';

const isLocalhostOrigin = (origin: string) => {
    try {
        const parsed = new URL(origin);
        return parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1';
    } catch {
        return false;
    }
};

// Middleware
app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests without origin (e.g. server-to-server, Postman, curl)
            if (!origin) {
                callback(null, true);
                return;
            }

            const normalizedOrigin = normalizeOrigin(origin);
            if (isDevelopment && isLocalhostOrigin(normalizedOrigin)) {
                callback(null, true);
                return;
            }

            if (normalizedOrigin === frontendOrigin) {
                callback(null, true);
                return;
            }

            callback(new Error(`Not allowed by CORS: ${origin}`));
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Anonymous-Id', 'X-Anonymous-Display-Name'],
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
