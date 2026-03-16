import { prisma } from '~/config/prisma';
import { ListQuery } from '~/types/query.type';

class FlowShareSaveService {
    async toggle(flowShareId: string, userId: string) {
        const flowShareSave = await prisma.flowShareSave.findUnique({
            where: { flowShareId_userId: { flowShareId, userId } }
        });

        if (flowShareSave) {
            await prisma.flowShareSave.delete({ where: { id: flowShareSave.id } });
            return false;
        } else {
            await prisma.flowShareSave.create({ data: { flowShareId, userId } });
            return true;
        }
    }

    async checkStatus(flowShareId: string, userId: string) {
        const flowShareSave = await prisma.flowShareSave.findUnique({
            where: { flowShareId_userId: { flowShareId, userId } }
        });

        return flowShareSave ? true : false;
    }

    async listMySaved(userId: string, filter: ListQuery) {
        const flowShareSaves = await prisma.flowShareSave.findMany({
            where: {
                userId,
                flowShare: {
                    name: {
                        contains: filter.q
                    }
                }
            },
            select: {
                id: true,
                flowShare: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        thumbnail: true,
                        createdAt: true,
                        user: {
                            select: {
                                id: true,
                                username: true,
                                displayName: true,
                                avatar: true
                            }
                        }
                    }
                }
            }
        });

        return flowShareSaves;
    }
}

export default new FlowShareSaveService();
