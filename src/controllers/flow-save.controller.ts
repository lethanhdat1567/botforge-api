import { Request, Response } from 'express';
import FlowSaveModel from '~/models/flow-save.model';

class FlowSaveController {
    async getSavedTemplates(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;
            const savedTemplates = await FlowSaveModel.findByUser(userId);
            return (res as any).success({
                message: 'Saved templates fetched',
                data: savedTemplates
            });
        } catch (error) {
            console.error('Error fetching saved templates:', error);
            return (res as any).error({ message: 'Failed to fetch saved templates' }, 500);
        }
    }

    // POST /flows/save/:flowShareId/toggle
    async toggle(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;
            const { flowShareId } = req.params;

            const existing = await FlowSaveModel.findByUserAndShare(flowShareId, userId);

            let message: string;
            if (existing) {
                await FlowSaveModel.delete(flowShareId, userId);
                message = 'Flow unsaved';
            } else {
                await FlowSaveModel.create(flowShareId, userId);
                message = 'Flow saved';
            }

            const saveCount = await FlowSaveModel.countByFlowShare(flowShareId);

            return (res as any).success({
                message,
                data: { saveCount, saved: !existing }
            });
        } catch (error) {
            console.error('Error toggling save:', error);
            return (res as any).error({ message: 'Failed to toggle save' }, 500);
        }
    }

    // GET /flows/save/:flowShareId/users
    async listUsers(req: Request, res: Response) {
        try {
            const { flowShareId } = req.params;
            const users = await FlowSaveModel.findUsersByFlowShare(flowShareId);
            return (res as any).success({
                message: 'Users who saved fetched',
                data: users
            });
        } catch (error) {
            console.error('Error fetching users who saved:', error);
            return (res as any).error({ message: 'Failed to fetch users who saved' }, 500);
        }
    }

    // GET /flows/save/:flowShareId/status
    async status(req: Request, res: Response) {
        try {
            const userId = (req as any).user.userId;
            const { flowShareId } = req.params;

            const existing = await FlowSaveModel.findByUserAndShare(flowShareId, userId);
            const saved = !!existing;

            return (res as any).success({
                message: 'Save status fetched',
                data: { saved }
            });
        } catch (error) {
            console.error('Error fetching save status:', error);
            return (res as any).error({ message: 'Failed to fetch save status' }, 500);
        }
    }
}

export default new FlowSaveController();
