import { Request, Response, NextFunction, RequestHandler } from 'express';

// Mở rộng Response
export interface CustomResponse extends Response {
    success(data: any, status?: number): void;
    error(data: any, status?: number): void;
}

// Middleware
const responseMiddleware: RequestHandler = (req, res, next) => {
    const customRes = res as CustomResponse;

    customRes.success = (data: any, status = 200) => {
        res.status(status).json({ status: 'success', data });
    };

    customRes.error = (data: any, status = 400) => {
        res.status(status).json({ status: 'error', data });
    };

    next();
};

export default responseMiddleware;
