import { prisma } from '~/config/prisma';
import { UserFlowStatus } from '~/generated/prisma';

export interface IUserFlowState {
    id: string;
    platformUserId: string;
    ownerUserId: string;
    flowId: string;
    pageId: string;
    currentStep: string;
    stepHistory?: any; // JSON array
    variables?: any; // JSON object
    status: UserFlowStatus;
    createdAt: Date;
    updatedAt: Date;
}

class UserFlowStateModel {
    async create(data: {
        platformUserId: string;
        ownerUserId: string;
        flowId: string;
        currentStep: string;
        pageId: string;
        variables?: any;
        status?: UserFlowStatus;
    }): Promise<IUserFlowState> {
        return prisma.userFlowState.create({ data });
    }

    async findByUser(platformUserId: string): Promise<IUserFlowState[]> {
        return prisma.userFlowState.findMany({
            where: { platformUserId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async findById(id: string): Promise<IUserFlowState | null> {
        return prisma.userFlowState.findUnique({
            where: { id }
        });
    }
    async findByOwnerUser(ownerUserId: string): Promise<IUserFlowState[]> {
        return prisma.userFlowState.findMany({
            where: { ownerUserId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async update(id: string, data: Partial<IUserFlowState>): Promise<IUserFlowState> {
        return prisma.userFlowState.update({ where: { id }, data });
    }
    async updateByPlatformUserAndPage(
        platformUserId: string,
        pageId: string,
        data: Partial<IUserFlowState>
    ): Promise<number> {
        const result = await prisma.userFlowState.updateMany({
            where: {
                platformUserId,
                pageId,
                status: { in: ['pending', 'running'] }
            },
            data
        });

        // updateMany trả về { count: number }
        return result.count;
    }

    async findManyByIds(ids: string[]) {
        return prisma.userFlowState.findMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
    }
    async deleteMany(ids: string[]) {
        return prisma.userFlowState.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
    }

    async delete(id: string): Promise<IUserFlowState> {
        return prisma.userFlowState.delete({
            where: { id }
        });
    }

    /**
     * Append a new step to stepHistory and update currentStep
     */
    async appendStepByPlatformAndPage(
        platformUserId: string,
        pageId: string,
        stepId: string
    ): Promise<IUserFlowState | null> {
        // Lấy record hiện tại
        const flow = await prisma.userFlowState.findFirst({
            where: { platformUserId, pageId }
        });
        if (!flow) return null;

        const history: any[] = (flow.stepHistory as any[]) ?? [];
        history.push({ stepId, enteredAt: new Date().toISOString() });

        // Cập nhật currentStep và stepHistory
        await prisma.userFlowState.updateMany({
            where: { platformUserId, pageId, status: { in: ['pending', 'running'] } },
            data: {
                currentStep: stepId,
                stepHistory: history
            }
        });

        // updateMany chỉ trả về count, nên query lại record để trả về
        const result = await prisma.userFlowState.findFirst({
            where: { platformUserId, pageId }
        });

        return result;
    }
}

export default new UserFlowStateModel();
