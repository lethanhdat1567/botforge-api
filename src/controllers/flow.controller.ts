import { flowCode } from '~/constants/flow';
import FlowModel from '~/models/flow.model';

class FlowController {
    async create(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { pageId, folderId, name, description, logicJson, layoutJson, timeoutDuration, timeoutJson } =
                req.body;

            if (!name || !folderId) {
                return res.error({ message: 'Missing required fields', code: flowCode.MISSING_FIELDS }, 400);
            }

            const flow = await FlowModel.create({
                userId,
                pageId,
                folderId,
                name,
                description,
                logicJson,
                layoutJson,
                timeoutDuration,
                timeoutJson
            });

            return res.success(flow, 201);
        } catch (error: any) {
            if (error.message?.includes('already exists')) {
                return res.error({ message: error.message, code: flowCode.NAME_ALREADY_EXISTS }, 400);
            }

            return res.error({ message: error.message || 'Server error', code: flowCode.SERVER_ERROR }, 500);
        }
    }

    async list(req: any, res: any) {
        const flows = await FlowModel.findByUser(req.user.userId);
        return res.success(flows, 200);
    }

    async detail(req: any, res: any) {
        const flow = await FlowModel.findById(req.params.id);
        if (!flow) {
            return res.error({ message: 'Flow not found', code: flowCode.FLOW_NOT_FOUND }, 404);
        }

        if (flow.userId !== req.user.userId) {
            return res.error({ message: 'Forbidden', code: flowCode.FORBIDDEN }, 403);
        }

        return res.success(flow, 200);
    }

    async update(req: any, res: any) {
        const flow = await FlowModel.findById(req.params.id);
        if (!flow) {
            return res.error({ message: 'Flow not found', code: flowCode.FLOW_NOT_FOUND }, 404);
        }

        if (flow.userId !== req.user.userId) {
            return res.error({ message: 'Forbidden', code: flowCode.FORBIDDEN }, 403);
        }

        const updated = await FlowModel.update(req.params.id, req.body);
        return res.success(updated, 200);
    }

    async remove(req: any, res: any) {
        await FlowModel.delete(req.params.id);
        return res.success({ message: 'Flow deleted' }, 200);
    }

    async duplicate(req: any, res: any) {
        const newFlow = await FlowModel.duplicate(req.params.id);
        return res.success(newFlow, 201);
    }
}

export default new FlowController();
