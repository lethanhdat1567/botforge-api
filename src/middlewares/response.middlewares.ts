import { Response, RequestHandler } from 'express';
import { authCode } from '~/constants/auth';
import { httpCode } from '~/constants/httpsCode';

// Mở rộng Response
export interface CustomResponse extends Response {
    success(data: any, status?: number): void;
    error(data: any, status?: number): void;
    unauthorized(): void;
}

// Middleware
const responseMiddleware: RequestHandler = (req, res, next) => {
    const customRes = res as CustomResponse;

    customRes.success = (data: any, status = httpCode.success.ok) => {
        res.status(status).json({ status: 'success', data });
    };

    customRes.error = (data: any, status = httpCode.clientError.badRequest) => {
        res.status(status).json({ status: 'error', data });
    };

    customRes.unauthorized = () => {
        return res.status(httpCode.clientError.unauthorized).json({
            status: 'error',
            data: {
                message: 'Unauthorized',
                code: authCode.Unauthorized
            }
        });
    };

    next();
};

export default responseMiddleware;
