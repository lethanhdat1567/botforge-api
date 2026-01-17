import { Request, Response } from 'express';
import FlowFallbackModel from '~/models/flow-fallback.model';

class FlowFallbackController {
    // GET /fallback
    async get(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;

            const fallback = await FlowFallbackModel.findByUser(userId);

            return (res as any).success({
                message: 'Fallback config fetched',
                data: fallback
            });
        } catch (error) {
            console.error('Error fetching fallback:', error);
            return (res as any).error({ message: 'Failed to fetch fallback config' }, 500);
        }
    }

    // POST /fallback
    async upsert(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;
            const { timeoutDuration, timeoutUnit, fallbackMessage } = req.body;

            const fallback = await FlowFallbackModel.upsert(userId, {
                timeoutDuration,
                timeoutUnit,
                fallbackMessage
            });

            return (res as any).success({
                message: 'Fallback config saved',
                data: fallback
            });
        } catch (error) {
            console.error('Error saving fallback:', error);
            return (res as any).error({ message: 'Failed to save fallback config' }, 500);
        }
    }

    // DELETE /fallback
    async delete(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;

            await FlowFallbackModel.delete(userId);

            return (res as any).success({
                message: 'Fallback config deleted'
            });
        } catch (error) {
            console.error('Error deleting fallback:', error);
            return (res as any).error({ message: 'Failed to delete fallback config' }, 500);
        }
    }
}

export default new FlowFallbackController();
