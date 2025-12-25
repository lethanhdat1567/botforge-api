import bcrypt from 'bcrypt';
import userModel from '~/models/user.model';
import { buildUploadPath } from '~/utils/url';

class ProfileController {
    async getProfile(req: any, res: any) {
        const userId = req.user.userId;
        const user = await userModel.findById(userId);
        const { password, ...rest } = user ?? {};
        return res.success(rest);
    }

    async updateProfile(req: any, res: any) {
        const userId = req.user.userId;

        const data: any = {};

        if (req.body.displayName) {
            data.displayName = req.body.displayName;
        }

        if (req.file) {
            data.avatar = buildUploadPath(req.file.filename);
        }

        // nếu không có gì để update
        if (Object.keys(data).length === 0) {
            return res.success({ message: 'Nothing to update' });
        }

        const updatedUser = await userModel.update(userId, data);

        return res.success(updatedUser);
    }

    async changePassword(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { oldPassword, newPassword } = req.body;

            if (!oldPassword || !newPassword) {
                return res.status(400).json({ message: 'Old password and new password are required' });
            }

            // 1. Lấy user hiện tại
            const user = await userModel.findById(userId);
            if (!user) return res.error('User not found', 404);

            // 2. Kiểm tra oldPassword
            const isMatch = await bcrypt.compare(oldPassword, user.password);
            if (!isMatch) return res.error('Old password is incorrect', 401);

            // 3. Hash newPassword
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // 4. Update database
            await userModel.update(userId, { password: hashedPassword });

            // 5. Return success
            return res.success('Password changed successfully');
        } catch (error) {
            console.error(error);
            return res.error(error);
        }
    }
}

export default new ProfileController();
