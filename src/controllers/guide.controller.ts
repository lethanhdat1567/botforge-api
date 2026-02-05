// controllers/guide.controller.ts
import { Request, Response } from 'express';
import GuideModel from '~/models/guide.model';
import { deleteFile } from '~/utils/file';
import { buildUploadPath } from '~/utils/url';

class GuideController {
    async list(req: Request, res: Response) {
        try {
            const data = await GuideModel.list(req.query);
            return (res as any).success(data);
        } catch (error) {
            console.error('List guides error:', error);
            return (res as any).error({ message: 'Failed to fetch guides' }, 500);
        }
    }

    async detail(req: Request, res: Response) {
        const guide = await GuideModel.findById(req.params.id);
        console.log(guide);

        if (!guide) {
            return (res as any).error({ message: 'Guide not found' }, 404);
        }
        return (res as any).success(guide);
    }

    async create(req: Request, res: Response) {
        try {
            const { slug, title, summary, content, status } = req.body;

            if (!slug || !title || !content) {
                return (res as any).error({ message: 'Missing required fields' }, 400);
            }

            let thumbnail: string | undefined;
            if (req.file) {
                thumbnail = buildUploadPath(req.file);
            }

            const guide = await GuideModel.create({
                slug,
                title,
                summary,
                content,
                status,
                thumbnail
            });

            return (res as any).success({ message: 'Guide created', data: guide }, 201);
        } catch (error) {
            console.error('Create guide error:', error);
            return (res as any).error({ message: 'Failed to create guide' }, 500);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: any = { ...req.body };

            const oldGuide = await GuideModel.findById(id);
            if (!oldGuide) {
                return (res as any).error({ message: 'Guide not found' }, 404);
            }

            if (req.file) {
                // xóa thumbnail cũ
                if (oldGuide.thumbnail) {
                    deleteFile(oldGuide.thumbnail);
                }
                data.thumbnail = buildUploadPath(req.file);
            }

            const updated = await GuideModel.update(id, data);
            return (res as any).success({
                message: 'Guide updated',
                data: updated
            });
        } catch (error) {
            console.error('Update guide error:', error);
            return (res as any).error({ message: 'Failed to update guide' }, 500);
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const guide = await GuideModel.findById(id);
            if (!guide) {
                return (res as any).error({ message: 'Guide not found' }, 404);
            }

            if (guide.thumbnail) {
                deleteFile(guide.thumbnail);
            }

            await GuideModel.delete(id);
            return (res as any).success({ message: 'Guide deleted' });
        } catch (error) {
            console.error('Delete guide error:', error);
            return (res as any).error({ message: 'Failed to delete guide' }, 500);
        }
    }

    // PUBLIC
    async publicDetail(req: Request, res: Response) {
        const guide = await GuideModel.findBySlug(req.params.slug);

        if (!guide) {
            return (res as any).error({ message: 'Guide not found' }, 404);
        }
        return (res as any).success(guide);
    }
}

export default new GuideController();
