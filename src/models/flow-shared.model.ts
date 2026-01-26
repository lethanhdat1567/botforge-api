import { prisma } from '~/config/prisma';

export interface IFlowShare {
    id: string;
    flowId: string;
    userId: string;
    name: string;
    status?: 'active' | 'inactive';
    description?: string | null;
    thumbnail?: string | null;
    downloadCount: number;
    createdAt: Date;
    updatedAt: Date;
}

const userResponse = {
    id: true,
    username: true,
    displayName: true,
    avatar: true,
    email: true
};

class FlowSharedModel {
    async findAllSharedExceptUser(userId: string) {
        return prisma.flowShare.findMany({
            where: {
                userId: { not: userId }
            },
            orderBy: { createdAt: 'desc' },
            include: {
                user: {
                    select: userResponse
                }
            }
        });
    }

    async create(data: {
        flowId: string;
        userId: string;
        name: string;
        description?: string;
        thumbnail?: string;
    }): Promise<IFlowShare> {
        return prisma.flowShare.create({ data });
    }

    async findById(id: string): Promise<IFlowShare | null> {
        return prisma.flowShare.findUnique({
            where: { id },
            include: {
                user: {
                    select: userResponse
                }
            }
        });
    }

    async findByUser(userId: string): Promise<IFlowShare[]> {
        return prisma.flowShare.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async update(id: string, data: Partial<Omit<IFlowShare, 'id' | 'userId' | 'createdAt'>>): Promise<IFlowShare> {
        return prisma.flowShare.update({
            where: { id },
            data
        });
    }

    async findByIds(ids: string[]): Promise<IFlowShare[]> {
        return prisma.flowShare.findMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
    }

    async deleteMany(ids: string[]): Promise<{ count: number }> {
        return prisma.flowShare.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
    }

    async delete(id: string): Promise<IFlowShare> {
        return prisma.flowShare.delete({
            where: { id }
        });
    }

    async incrementDownloadCount(id: string, increment = 1): Promise<number> {
        const updated = await prisma.flowShare.update({
            where: { id },
            data: {
                downloadCount: {
                    increment
                }
            }
        });
        return updated.downloadCount;
    }
}

export default new FlowSharedModel();
