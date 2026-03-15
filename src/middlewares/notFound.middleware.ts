import { httpCode } from '~/constants/httpsCode';

function notFound(req: any, res: any, next: any) {
    res.error({ message: `Router ${req.originalUrl} not found` }, httpCode.clientError.notFound);
    next();
}

export default notFound;
