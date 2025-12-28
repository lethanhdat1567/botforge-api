import FlowModel, { IFlow } from '~/models/flow.model';

class FlowController {
    // POST /flows
    async create(req: any, res: any) {
        const userId = req.user.userId;
        const {
            pageId,
            pageAccessToken,
            name,
            description,
            logicJson,
            layoutJson,
            platform,
            timeoutDuration,
            timeoutJson
        } = req.body;

        // Validate các trường bắt buộc
        if (!pageId || !pageAccessToken || !name || !logicJson || !layoutJson || !platform) {
            return res.error('Missing required fields', 400);
        }

        const flow = await FlowModel.create({
            userId,
            pageId,
            pageAccessToken,
            name,
            description,
            logicJson,
            layoutJson,
            platform,
            timeoutDuration,
            timeoutJson
        });

        return res.success(flow);
    }

    // GET /flows
    async list(req: any, res: any) {
        const userId = req.user.userId;
        const flows = await FlowModel.findByUser(userId);
        return res.success(flows);
    }

    // GET /flows/:id
    async detail(req: any, res: any) {
        const userId = req.user.userId;
        const { id } = req.params;

        const flow = await FlowModel.findById(id);
        if (!flow) return res.error('Flow not found', 404);
        if (flow.userId !== userId) return res.error('Forbidden', 403);

        return res.success(flow);
    }

    // PATCH /flows/:id
    async update(req: any, res: any) {
        const userId = req.user.userId;
        const { id } = req.params;

        const flow = await FlowModel.findById(id);
        if (!flow) return res.error('Flow not found', 404);
        if (flow.userId !== userId) return res.error('Forbidden', 403);

        const allowedFields = [
            'name',
            'description',
            'logicJson',
            'layoutJson',
            'status',
            'timeoutDuration',
            'timeoutJson',
            'pageId',
            'pageAccessToken'
        ];

        const data: Partial<typeof flow> = {};
        allowedFields.forEach((field) => {
            if (req.body[field] !== undefined) {
                data[field as keyof IFlow] = req.body[field];
            }
        });

        const updated = await FlowModel.update(id, data);
        return res.success(updated);
    }

    // DELETE /flows/:id
    async remove(req: any, res: any) {
        const userId = req.user.userId;
        const { id } = req.params;

        const flow = await FlowModel.findById(id);
        if (!flow) return res.error('Flow not found', 404);
        if (flow.userId !== userId) return res.error('Forbidden', 403);

        await FlowModel.delete(id);
        return res.success({ message: 'Flow deleted' });
    }
}

export default new FlowController();
