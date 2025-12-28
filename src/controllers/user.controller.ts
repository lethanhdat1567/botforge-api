import { deleteFile } from '~/utils/file';
import UserModel from '../models/user.model';
import { Role } from '@prisma/client';

class UserController {
    // GET /users
    async list(req: any, res: any) {
        const { page = 1, limit = 20, q } = req.query;

        const skip = (Number(page) - 1) * Number(limit);

        const users = await UserModel.findMany({
            skip,
            take: Number(limit),
            q: q as string | undefined
        });

        return res.success(users);
    }

    // GET /users/:id
    async detail(req: any, res: any) {
        const { id } = req.params;

        const user = await UserModel.findById(id);
        if (!user) {
            return res.error('User not found', 404);
        }

        return res.success(user);
    }

    // PATCH /users/:id
    async update(req: any, res: any) {
        const { id } = req.params;
        const { role, displayName } = req.body;

        const data: any = {};

        if (displayName) data.displayName = displayName;
        if (role && Object.values(Role).includes(role)) {
            data.role = role;
        }

        if (Object.keys(data).length === 0) {
            return res.error('Nothing to update', 400);
        }

        const user = await UserModel.update(id, data);
        return res.success(user);
    }

    // DELETE /users/:id
    async remove(req: any, res: any) {
        const { id } = req.params;

        // Lấy user cũ để kiểm tra avatar
        const oldUser = await UserModel.findById(id);
        if (!oldUser) return res.error({ message: 'User not found' }, 404);

        // Xóa avatar nếu tồn tại
        if (oldUser.avatar) {
            deleteFile(oldUser.avatar);
        }

        // Xóa record user
        await UserModel.delete(id);

        return res.success({ message: 'User deleted' });
    }
}

export default new UserController();
