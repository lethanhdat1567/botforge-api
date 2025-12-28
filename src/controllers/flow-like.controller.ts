import { Request, Response } from 'express';
import FlowLikeModel from '~/models/flow-like.model';

class FlowLikeController {
    // POST /flows/like/:flowShareId/toggle
    async toggle(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;
            const { flowShareId } = req.params;

            const existing = await FlowLikeModel.findByUserAndShare(flowShareId, userId);

            let message: string;
            if (existing) {
                await FlowLikeModel.delete(flowShareId, userId);
                message = 'Flow unliked';
            } else {
                await FlowLikeModel.create(flowShareId, userId);
                message = 'Flow liked';
            }

            const likeCount = await FlowLikeModel.countByFlowShare(flowShareId);

            return (res as any).success({
                message,
                data: { likeCount, liked: !existing } // liked = trạng thái mới
            });
        } catch (error) {
            console.error('Error toggling like:', error);
            return (res as any).error({ message: 'Failed to toggle like' }, 500);
        }
    }

    // GET /flows/like/:flowShareId/count
    async count(req: Request, res: Response) {
        try {
            const { flowShareId } = req.params;
            const likeCount = await FlowLikeModel.countByFlowShare(flowShareId);
            return (res as any).success({
                message: 'Like count fetched',
                data: { likeCount }
            });
        } catch (error) {
            console.error('Error fetching like count:', error);
            return (res as any).error({ message: 'Failed to fetch like count' }, 500);
        }
    }

    // GET /flows/like/:flowShareId/users
    async listUsers(req: Request, res: Response) {
        try {
            const { flowShareId } = req.params;
            const likes = await FlowLikeModel.findUsersByFlowShare(flowShareId);

            // map để gộp user + createdAt
            const data = likes.map((like) => ({
                ...like.user,
                createdAt: like.createdAt
            }));

            return (res as any).success(data);
        } catch (error) {
            console.error('Error fetching users who liked:', error);
            return (res as any).error('Failed to fetch users who liked', 500);
        }
    }

    // GET /flows/like/:flowShareId/status
    async status(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;
            const { flowShareId } = req.params;

            const existing = await FlowLikeModel.findByUserAndShare(flowShareId, userId);
            const liked = !!existing;

            return (res as any).success({
                message: 'Like status fetched',
                data: { liked }
            });
        } catch (error) {
            console.error('Error fetching like status:', error);
            return (res as any).error({ message: 'Failed to fetch like status' }, 500);
        }
    }
}

export default new FlowLikeController();
