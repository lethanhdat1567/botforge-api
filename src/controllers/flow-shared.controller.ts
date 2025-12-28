import { Request, Response } from 'express';
import { createDowloadNotification } from '~/helpers/notification-helper';
import FlowSharedModel from '~/models/flow-shared.model';
import { deleteFile } from '~/utils/file';
import { buildUploadPath } from '~/utils/url';

class FlowSharedController {
    async getAllShared(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;

            // Lấy tất cả flow shared, nhưng loại trừ template của chính user
            const shares = await FlowSharedModel.findAllSharedExceptUser(userId);

            return (res as any).success({
                message: 'All shared flows fetched',
                data: shares
            });
        } catch (error) {
            console.error('Error fetching all shared flows:', error);
            return (res as any).error({ message: 'Failed to fetch shared flows' }, 500);
        }
    }
    // POST /flows/shared
    async create(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;
            const { flowId, name, description } = req.body;

            if (!flowId || !name) {
                return (res as any).error({ message: 'Missing required fields' }, 400);
            }

            let thumbnail: string | undefined = undefined;
            if (req.file) {
                thumbnail = buildUploadPath(req.file.filename);
            }

            const flowShare = await FlowSharedModel.create({
                flowId,
                userId,
                name,
                description,
                thumbnail
            });

            return (res as any).success({ message: 'FlowShare created', data: flowShare }, 201);
        } catch (error) {
            console.error('Error creating FlowShare:', error);
            return (res as any).error({ message: 'Failed to create FlowShare' }, 500);
        }
    }

    // GET /flows/shared
    async list(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;
            const shares = await FlowSharedModel.findByUser(userId);
            return (res as any).success({ message: 'FlowShares fetched', data: shares });
        } catch (error) {
            console.error('Error listing FlowShares:', error);
            return (res as any).error({ message: 'Failed to fetch FlowShares' }, 500);
        }
    }

    // GET /flows/shared/:id
    async detail(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const flowShare = await FlowSharedModel.findById(id);
            if (!flowShare) return (res as any).error({ message: 'FlowShare not found' }, 404);
            return (res as any).success({ message: 'FlowShare detail fetched', data: flowShare });
        } catch (error) {
            console.error('Error fetching FlowShare detail:', error);
            return (res as any).error({ message: 'Failed to fetch FlowShare detail' }, 500);
        }
    }

    // PATCH /flows/shared/:id
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: any = { ...req.body };

            const oldRecord = await FlowSharedModel.findById(id);
            if (!oldRecord) return (res as any).error({ message: 'FlowShare not found' }, 404);

            if (req.file) {
                // Xóa file cũ nếu có
                if (oldRecord.thumbnail) deleteFile(oldRecord.thumbnail);

                data.thumbnail = buildUploadPath(req.file.filename);
            }

            const updated = await FlowSharedModel.update(id, data);
            return (res as any).success({ message: 'FlowShare updated', data: updated });
        } catch (error) {
            console.error('Error updating FlowShare:', error);
            return (res as any).error({ message: 'Failed to update FlowShare' }, 500);
        }
    }

    // DELETE /flows/shared/:id
    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await FlowSharedModel.findById(id);
            if (!record) return (res as any).error({ message: 'FlowShare not found' }, 404);

            // Xóa file thumbnail nếu có
            if (record.thumbnail) deleteFile(record.thumbnail);

            await FlowSharedModel.delete(id);
            return (res as any).success({ message: 'FlowShare deleted' });
        } catch (error) {
            console.error('Error deleting FlowShare:', error);
            return (res as any).error({ message: 'Failed to delete FlowShare' }, 500);
        }
    }

    // POST /flows/shared/:id/download
    async download(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const flowShare = await FlowSharedModel.findById(id);
            if (!flowShare) return (res as any).error({ message: 'FlowShare not found' }, 404);

            const newCount = await FlowSharedModel.incrementDownloadCount(id);

            // Save Notification
            await createDowloadNotification(id, (req as any).user.userId);

            return (res as any).success({
                message: 'Download count updated',
                data: { downloadCount: newCount }
            });
        } catch (error) {
            console.error('Error incrementing download count:', error);
            return (res as any).error({ message: 'Failed to update download count' }, 500);
        }
    }
}

export default new FlowSharedController();
