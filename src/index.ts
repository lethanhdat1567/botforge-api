import express from 'express';
import cors from 'cors';

import indexRouter from './routes';
import webhookRouter from './routes/webhook.routes';

import response from '~/middlewares/response.middlewares';
import notFound from '~/middlewares/notFound.middleware';
import errorHandler from '~/middlewares/errorHandler.middleware';

import dotven from 'dotenv';
dotven.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
);
app.use(express.json());
app.use(response);

// Routes
app.use('/api', indexRouter);
// Facebook Webhook
app.use('/webhook', webhookRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
