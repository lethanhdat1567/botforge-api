import { prisma } from '~/config/prisma';

export interface IFlowSave {
    id: string;
    flowShareId: string;
    userId: string;
    createdAt: Date;
    user?: {
        id: string;
        username: string;
        displayName?: string | null;
        avatar?: string | null;
        email?: string;
    };
}

class FlowSaveModel {
    async create(flowShareId: string, userId: string): Promise<IFlowSave> {
        return prisma.flowSave.create({
            data: { flowShareId, userId },
            include: { user: true }
        });
    }

    async delete(flowShareId: string, userId: string): Promise<void> {
        await prisma.flowSave.delete({
            where: { flowShareId_userId: { flowShareId, userId } }
        });
    }

    async findByUserAndShare(flowShareId: string, userId: string): Promise<IFlowSave | null> {
        return prisma.flowSave.findUnique({
            where: { flowShareId_userId: { flowShareId, userId } }
        });
    }

    async findByUser(userId: string): Promise<IFlowSave[]> {
        return prisma.flowSave.findMany({
            where: { userId },
            include: {
                flowShare: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        thumbnail: true,
                        downloadCount: true,
                        user: {
                            select: {
                                id: true,
                                username: true,
                                displayName: true,
                                avatar: true,
                                email: true
                            }
                        }
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }

    async countByFlowShare(flowShareId: string): Promise<number> {
        return prisma.flowSave.count({ where: { flowShareId } });
    }

    async findUsersByFlowShare(flowShareId: string) {
        return prisma.flowSave.findMany({
            where: { flowShareId },
            include: { user: true },
            orderBy: { createdAt: 'asc' }
        });
    }
}

export default new FlowSaveModel();
