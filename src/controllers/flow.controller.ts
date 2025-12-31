import { flowCode } from '~/constants/flow';
import FlowModel, { IFlow } from '~/models/flow.model';

class FlowController {
    // POST /flows
    async create(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const {
                pageId,
                folderId,
                pageAccessToken,
                name,
                description,
                logicJson,
                layoutJson,
                platform,
                timeoutDuration,
                timeoutJson
            } = req.body;

            if (!name || !platform || !folderId) {
                return res.error(
                    {
                        message: 'Missing required fields',
                        code: flowCode.MISSING_FIELDS
                    },
                    400
                );
            }

            const flow = await FlowModel.create({
                userId,
                pageId,
                folderId,
                pageAccessToken,
                name,
                description,
                logicJson,
                layoutJson,
                platform,
                timeoutDuration,
                timeoutJson
            });
            return res.success(flow, 201);
        } catch (error: any) {
            if (error.message.includes('already exists')) {
                return res.error(
                    {
                        message: error.message,
                        code: flowCode.NAME_ALREADY_EXISTS
                    },
                    400
                );
            }
            return res.error(
                {
                    message: error.message || 'Server error',
                    code: flowCode.SERVER_ERROR
                },
                500
            );
        }
    }

    // GET /flows
    async list(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const flows = await FlowModel.findByUser(userId);
            return res.success(flows, 200);
        } catch (error: any) {
            return res.error(
                {
                    message: error.message || 'Failed to fetch flows',
                    code: flowCode.SERVER_ERROR
                },
                500
            );
        }
    }

    // GET /flows/:id
    async detail(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { id } = req.params;
            const flow = await FlowModel.findById(id);

            if (!flow) {
                return res.error({ message: 'Flow not found', code: flowCode.FLOW_NOT_FOUND }, 404);
            }
            if (flow.userId !== userId) {
                return res.error({ message: 'Forbidden', code: flowCode.FORBIDDEN }, 403);
            }

            return res.success(flow, 200);
        } catch (error: any) {
            return res.error({ message: error.message || 'Server error', code: flowCode.SERVER_ERROR }, 500);
        }
    }

    // PATCH /flows/:id
    async update(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { id } = req.params;
            const flow = await FlowModel.findById(id);

            if (!flow) {
                return res.error({ message: 'Flow not found', code: flowCode.FLOW_NOT_FOUND }, 404);
            }
            if (flow.userId !== userId) {
                return res.error({ message: 'Forbidden', code: flowCode.FORBIDDEN }, 403);
            }

            const allowedFields: (keyof IFlow)[] = [
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

            const data: Partial<IFlow> = {};
            allowedFields.forEach((field) => {
                if (req.body[field] !== undefined) data[field] = req.body[field];
            });

            const updated = await FlowModel.update(id, data);
            return res.success(updated, 200);
        } catch (error: any) {
            if (error.message.includes('already exists')) {
                return res.error({ message: error.message, code: flowCode.NAME_ALREADY_EXISTS }, 400);
            }
            return res.error({ message: error.message || 'Server error', code: flowCode.SERVER_ERROR }, 500);
        }
    }

    // DELETE /flows/:id
    async remove(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { id } = req.params;
            const flow = await FlowModel.findById(id);

            if (!flow) {
                return res.error({ message: 'Flow not found', code: flowCode.FLOW_NOT_FOUND }, 404);
            }
            if (flow.userId !== userId) {
                return res.error({ message: 'Forbidden', code: flowCode.FORBIDDEN }, 403);
            }

            await FlowModel.delete(id);
            return res.success({ message: 'Flow deleted' }, 200);
        } catch (error: any) {
            return res.error({ message: error.message || 'Server error', code: flowCode.SERVER_ERROR }, 500);
        }
    }

    // POST /flows/:id/duplicate
    async duplicate(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { id } = req.params;

            const flow = await FlowModel.findById(id);
            if (!flow) {
                return res.error({ message: 'Flow not found', code: flowCode.FLOW_NOT_FOUND }, 404);
            }
            if (flow.userId !== userId) {
                return res.error({ message: 'Forbidden', code: flowCode.FORBIDDEN }, 403);
            }

            const newFlow = await FlowModel.duplicate(id);
            return res.success(newFlow, 201);
        } catch (error: any) {
            return res.error(
                { message: error.message || 'Failed to duplicate flow', code: flowCode.DUPLICATE_FAILED },
                500
            );
        }
    }
}

export default new FlowController();
