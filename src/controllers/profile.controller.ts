import bcrypt from 'bcrypt';
import userModel from '~/models/user.model';
import { deleteFile } from '~/utils/file';
import { buildUploadPath } from '~/utils/url';

class ProfileController {
    async getProfile(req: any, res: any) {
        const userId = req.user.userId;
        const user = await userModel.findById(userId);
        const { password, ...rest } = user ?? {};
        return res.success(rest);
    }

    async updateProfile(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const data: any = {};

            if (req.body.displayName) {
                data.displayName = req.body.displayName.trim();
            }

            if (req.file) {
                const oldUser = await userModel.findById(userId);
                if (oldUser?.avatar) {
                    deleteFile(oldUser.avatar);
                }
                data.avatar = buildUploadPath(req.file);
            }

            if (Object.keys(data).length === 0) {
                return res.success({ message: 'Nothing to update' });
            }

            const updatedUser = await userModel.update(userId, data);
            return res.success(updatedUser);
        } catch (error: any) {
            if (error.code === 'P2002') {
                return res.conflict('Thông tin đã tồn tại');
            }
            throw error;
        }
    }

    async changePassword(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { oldPassword, newPassword } = req.body;

            if (!oldPassword || !newPassword) {
                return res.status(400).json({
                    message: 'Old password and new password are required',
                    code: 'VALIDATION_ERROR'
                });
            }

            const user = await userModel.findById(userId);
            if (!user) {
                return res.status(404).json({
                    message: 'User not found',
                    code: 'USER_NOT_FOUND'
                });
            }

            const isMatch = await bcrypt.compare(oldPassword, user.password);
            if (!isMatch) {
                return res.status(401).json({
                    message: 'Old password is incorrect',
                    code: 'INVALID_OLD_PASSWORD'
                });
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);

            await userModel.update(userId, {
                password: hashedPassword
            });

            return res.success({
                message: 'Password changed successfully'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: 'Internal server error',
                code: 'INTERNAL_SERVER_ERROR'
            });
        }
    }
}

export default new ProfileController();
