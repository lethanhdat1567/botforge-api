import { prisma } from '~/config/prisma';

export interface IFlowFallback {
    id: string;
    userId: string;
    timeoutDuration: number;
    timeoutUnit: 'second' | 'minute' | 'hour' | 'day';
    fallbackMessage: string;
    createdAt: Date;
    updatedAt: Date;
}

class FlowFallbackModel {
    async findByUser(userId: string): Promise<IFlowFallback | null> {
        return prisma.flowFallback.findUnique({
            where: { userId }
        });
    }

    async upsert(
        userId: string,
        data: Pick<IFlowFallback, 'timeoutDuration' | 'timeoutUnit' | 'fallbackMessage'>
    ): Promise<IFlowFallback> {
        return prisma.flowFallback.upsert({
            where: { userId },
            update: data,
            create: {
                userId,
                ...data
            }
        });
    }

    async delete(userId: string): Promise<void> {
        await prisma.flowFallback.delete({
            where: { userId }
        });
    }
}

export default new FlowFallbackModel();
