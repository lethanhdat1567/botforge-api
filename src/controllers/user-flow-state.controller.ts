import { Request, Response } from 'express';
import { UserFlowStatus } from '~/generated/prisma';
import userFlowStateModel from '~/models/userFlowState.model';

class UserFlowStateController {
    // GET /user-flow-states?platformUserId=xxx
    async list(req: Request, res: Response) {
        try {
            const { platformUserId } = req.query;

            if (!platformUserId) {
                return (res as any).error({ message: 'platformUserId is required' }, 400);
            }

            const states = await userFlowStateModel.findByUser(platformUserId as string);

            return (res as any).success({
                message: 'UserFlowStates fetched',
                data: states
            });
        } catch (error) {
            console.error('Error fetching UserFlowStates:', error);
            return (res as any).error({ message: 'Failed to fetch UserFlowStates' }, 500);
        }
    }

    // GET /user-flow-states/:id
    async detail(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const state = await userFlowStateModel.findById(id);
            if (!state) {
                return (res as any).error({ message: 'UserFlowState not found' }, 404);
            }

            return (res as any).success({
                message: 'UserFlowState fetched',
                data: state
            });
        } catch (error) {
            console.error('Error fetching UserFlowState:', error);
            return (res as any).error({ message: 'Failed to fetch UserFlowState' }, 500);
        }
    }

    // GET /user-flow-states/owner
    async listByOwner(req: Request, res: Response) {
        try {
            const ownerUserId = (req as any).user.userId;

            const states = await userFlowStateModel.findByOwnerUser(ownerUserId);

            return (res as any).success({
                message: 'UserFlowStates fetched',
                data: states
            });
        } catch (error) {
            console.error(error);
            return (res as any).error({ message: 'Failed to fetch UserFlowStates' }, 500);
        }
    }

    // POST /user-flow-states
    async create(req: Request, res: Response) {
        try {
            const ownerUserId = (req as any).user.userId;
            const { platformUserId, flowId, pageId, currentStep, variables, status } = req.body;

            if (!platformUserId || !flowId || !pageId || !currentStep) {
                return (res as any).error({ message: 'Missing required fields' }, 400);
            }

            const state = await userFlowStateModel.create({
                platformUserId,
                ownerUserId,
                flowId,
                pageId,
                currentStep,
                variables,
                status: status as UserFlowStatus
            });

            return (res as any).success(
                {
                    message: 'UserFlowState created',
                    data: state
                },
                201
            );
        } catch (error) {
            console.error('Error creating UserFlowState:', error);
            return (res as any).error({ message: 'Failed to create UserFlowState' }, 500);
        }
    }

    // PATCH /user-flow-states/:id
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = req.body;

            const oldRecord = await userFlowStateModel.findById(id);
            if (!oldRecord) {
                return (res as any).error({ message: 'UserFlowState not found' }, 404);
            }

            const updated = await userFlowStateModel.update(id, data);

            return (res as any).success({
                message: 'UserFlowState updated',
                data: updated
            });
        } catch (error) {
            console.error('Error updating UserFlowState:', error);
            return (res as any).error({ message: 'Failed to update UserFlowState' }, 500);
        }
    }

    // PATCH /user-flow-states/platform/step
    async appendStep(req: Request, res: Response) {
        try {
            const { platformUserId, pageId, stepId } = req.body;

            if (!platformUserId || !pageId || !stepId) {
                return (res as any).error({ message: 'Missing required fields' }, 400);
            }

            const result = await userFlowStateModel.appendStepByPlatformAndPage(platformUserId, pageId, stepId);

            if (!result) {
                return (res as any).error({ message: 'UserFlowState not found' }, 404);
            }

            return (res as any).success({
                message: 'Step appended',
                data: result
            });
        } catch (error) {
            console.error('Error appending step:', error);
            return (res as any).error({ message: 'Failed to append step' }, 500);
        }
    }

    // PATCH /user-flow-states/platform/status
    async updateByPlatformAndPage(req: Request, res: Response) {
        try {
            const { platformUserId, pageId, data } = req.body;

            if (!platformUserId || !pageId || !data) {
                return (res as any).error({ message: 'Missing required fields' }, 400);
            }

            const count = await userFlowStateModel.updateByPlatformUserAndPage(platformUserId, pageId, data);

            return (res as any).success({
                message: 'UserFlowStates updated',
                data: { updatedCount: count }
            });
        } catch (error) {
            console.error('Error updating UserFlowState:', error);
            return (res as any).error({ message: 'Failed to update UserFlowState' }, 500);
        }
    }

    // DELETE /user-flow-states/:id
    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const record = await userFlowStateModel.findById(id);
            if (!record) {
                return (res as any).error({ message: 'UserFlowState not found' }, 404);
            }

            await userFlowStateModel.delete(id);

            return (res as any).success({
                message: 'UserFlowState deleted'
            });
        } catch (error) {
            console.error('Error deleting UserFlowState:', error);
            return (res as any).error({ message: 'Failed to delete UserFlowState' }, 500);
        }
    }
}

export default new UserFlowStateController();
