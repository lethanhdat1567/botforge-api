import { Request, Response } from 'express';
import FlowCommentModel from '~/models/flow-comment.model';

class FlowCommentController {
    async create(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;
            const { flowShareId, comment, parentId } = req.body;

            if (!flowShareId || !comment) return (res as any).error('Missing required fields', 400);

            const newComment = await FlowCommentModel.create({ flowShareId, userId, comment, parentId });
            return (res as any).success(newComment, 201);
        } catch (error) {
            console.error(error);
            return (res as any).error('Failed to create comment', 500);
        }
    }

    async listByFlowShare(req: Request, res: Response) {
        try {
            const { flowShareId } = req.params;
            const comments = await FlowCommentModel.findByFlowShare(flowShareId);
            return (res as any).success(comments);
        } catch (error) {
            console.error(error);
            return (res as any).error('Failed to fetch comments', 500);
        }
    }

    async detail(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const comment = await FlowCommentModel.findById(id);
            if (!comment) return (res as any).error('Comment not found', 404);
            return (res as any).success(comment);
        } catch (error) {
            console.error(error);
            return (res as any).error('Failed to fetch comment', 500);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updated = await FlowCommentModel.update(id, data);
            return (res as any).success(updated);
        } catch (error) {
            console.error(error);
            return (res as any).error('Failed to update comment', 500);
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await FlowCommentModel.delete(id);
            return (res as any).success({ message: 'Comment deleted' });
        } catch (error) {
            console.error(error);
            return (res as any).error('Failed to delete comment', 500);
        }
    }
}

export default new FlowCommentController();
