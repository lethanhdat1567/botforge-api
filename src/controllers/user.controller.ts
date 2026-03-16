import { httpCode } from '~/constants/httpsCode';
import userService from '~/services/user.service';

class UserController {
    async list(req: any, res: any) {
        const result = await userService.list(req.query);

        return res.success(result);
    }
    async detail(req: any, res: any) {
        const result = await userService.detail(req.params.id);

        return res.success(result);
    }
    async create(req: any, res: any) {
        const [error, result] = await userService.create(req.body);

        if (error) {
            return res.error(error, httpCode.clientError.badRequest);
        }

        return res.success(result, httpCode.success.created);
    }
    async update(req: any, res: any) {
        const [error, result] = await userService.update(req.params.id, req.body);

        if (error) {
            return res.error(error, httpCode.clientError.conflict);
        }

        return res.success(result);
    }
    async updatePassword(req: any, res: any) {
        const [error, result] = await userService.updatePassword(req.params.id, req.body);

        if (error) {
            return res.error(error, httpCode.clientError.conflict);
        }

        return res.success(result);
    }
    async delete(req: any, res: any) {
        await userService.delete(req.params.id);

        return res.success({ message: 'User deleted' });
    }
    async deleteBulk(req: any, res: any) {
        await userService.deleteBulk(req.body.ids);

        return res.success({ message: 'Users deleted' });
    }
}

export default new UserController();
