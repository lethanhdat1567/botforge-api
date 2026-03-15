import { httpCode } from '~/constants/httpsCode';

function requireRole(req: any, res: any, next: any) {
    const userRole = req.user?.role;

    if (!userRole || userRole !== 'admin') {
        return res.error(
            { message: 'Access denied. You do not have permission to perform this action.' },
            httpCode.clientError.forbidden
        );
    }

    next();
}

export default requireRole;
