// src/controllers/adminFlow.controller.ts
import { adminFlowModel } from '~/models/adminFlow.model';

class AdminFlowController {
    async list(req: any, res: any) {
        const data = await adminFlowModel.list({
            page: req.query.page,
            limit: req.query.limit,
            q: req.query.q,
            status: req.query.status
        });

        return res.success(data);
    }

    detail = async (req: any, res: any) => {
        const { id } = req.params;

        const flow = await adminFlowModel.findById(id);

        if (!flow) {
            return res.error('Flow not found', 404);
        }

        return res.success(flow);
    };

    disable = async (req: any, res: any) => {
        const { id } = req.params;

        const flow = await adminFlowModel.findById(id);
        if (!flow) {
            return res.error('Flow not found', 404);
        }

        await adminFlowModel.disable(id);

        return res.success({ message: 'Flow has been disabled' });
    };
}

export const adminFlowController = new AdminFlowController();
