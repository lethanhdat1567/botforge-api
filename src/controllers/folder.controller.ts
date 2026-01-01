import { Request } from 'express';
import { folderCode } from '~/constants/folder';
import flowModel from '~/models/flow.model';
import FolderModel from '~/models/folder.model';

class FolderController {
    // GET /folders/me
    async getFolders(req: Request, res: any) {
        try {
            const userId = (req as any).user.userId;
            const q = (req.query.q as string) || ''; // Lấy query search, mặc định là rỗng
            const folders = await FolderModel.findByUser(userId, q);

            // Nhóm theo platform
            const grouped: Record<string, typeof folders> = {};
            folders.forEach((folder) => {
                const platform = folder.platform || 'unknown';
                if (!grouped[platform]) grouped[platform] = [];
                grouped[platform].push(folder);
            });

            return res.success(grouped, 200);
        } catch (error: any) {
            return res.error({
                message: error.message || 'Failed to fetch folders',
                code: folderCode.FETCH_FAILED
            });
        }
    }

    // GET /folders/:folderId/flows
    async getFolderFlows(req: Request, res: any) {
        try {
            const { folderId } = req.params;

            if (!folderId) {
                return res.error({ message: 'Folder ID is required' });
            }

            const flows = await flowModel.findByFolder(folderId);

            return res.success(flows, 200);
        } catch (error: any) {
            return res.error({
                message: error.message || 'Failed to fetch flows'
            });
        }
    }

    // POST /folders
    async createFolder(req: Request, res: any) {
        try {
            const userId = (req as any).user.userId;
            const { name, platform } = req.body;

            if (!name) {
                return res.error({ message: 'Folder name is required', code: folderCode.NAME_REQUIRED });
            }
            if (!platform) {
                return res.error({ message: 'Platform is required', code: folderCode.PLATFORM_REQUIRED });
            }

            const folder = await FolderModel.create(userId, name, platform);
            return res.success(folder, 201);
        } catch (error: any) {
            if (error.message.includes('already exists')) {
                return res.error({ message: error.message, code: folderCode.NAME_ALREADY_EXISTS });
            }
            return res.error({ message: error.message || 'Server error', code: folderCode.SERVER_ERROR });
        }
    }

    // PATCH /folders/:folderId
    async updateFolder(req: Request, res: any) {
        try {
            const { folderId } = req.params;
            const { name } = req.body;

            if (!name) {
                return res.error({ message: 'Folder name is required', code: folderCode.NAME_REQUIRED });
            }

            const folder = await FolderModel.update(folderId, name);
            return res.success(folder, 200);
        } catch (error: any) {
            if (error.message.includes('not found')) {
                return res.error({ message: error.message, code: folderCode.FOLDER_NOT_FOUND });
            }
            if (error.message.includes('already exists')) {
                return res.error({ message: error.message, code: folderCode.NAME_ALREADY_EXISTS });
            }
            return res.error({ message: error.message || 'Server error', code: folderCode.SERVER_ERROR });
        }
    }

    // DELETE /folders/:folderId
    async deleteFolder(req: Request, res: any) {
        try {
            const { folderId } = req.params;
            await FolderModel.delete(folderId);
            return res.success({ message: 'Folder deleted' }, 200);
        } catch (error: any) {
            return res.error({ message: error.message || 'Failed to delete folder', code: folderCode.DELETE_FAILED });
        }
    }

    // POST /folders/:folderId/duplicate
    async duplicateFolder(req: Request, res: any) {
        try {
            const { folderId } = req.params;
            const userId = (req as any).user.userId;
            const result = await FolderModel.duplicate(folderId, userId);
            return res.success(result, 201);
        } catch (error: any) {
            return res.error({
                message: error.message || 'Failed to duplicate folder',
                code: folderCode.DUPLICATE_FAILED
            });
        }
    }
}

export default new FolderController();
