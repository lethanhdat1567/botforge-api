import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { JsonWebTokenError } from 'jsonwebtoken';
import { httpCode } from '~/constants/httpsCode';

const errorHandler = (error: any, req: any, res: any, next: any) => {
    console.log(error);

    // JWT authentication error
    if (error instanceof JsonWebTokenError) {
        return res.error(
            {
                message: 'Unauthorized',
                error: error
            },
            httpCode.clientError.unauthorized
        );
    }

    // Duplicate error
    if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
            return res.error(
                {
                    message: 'Duplicate data',
                    error: error.message
                },
                httpCode.clientError.conflict
            );
        }

        if (error.code === 'P2003') {
            return res.error(
                {
                    message: 'Related record not found',
                    error: error.message
                },
                httpCode.clientError.badRequest
            );
        }

        if (error.code === 'P2025') {
            return res.error(
                {
                    message: 'Resource not found',
                    error: error.message
                },
                httpCode.clientError.notFound
            );
        }
    }

    return res.error(
        {
            message: String(error),
            error
        },
        error.status
    );
};

export default errorHandler;
