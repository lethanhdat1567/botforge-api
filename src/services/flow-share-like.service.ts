import { prisma } from '~/config/prisma';

class FlowShareLikeService {
    async listUsersByFlowShare(flowShareId: string) {
        const flowShareLikes = await prisma.flowShareLike.findMany({
            where: {
                flowShareId
            },
            select: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        displayName: true,
                        avatar: true
                    }
                }
            }
        });

        return flowShareLikes.map((flowShareLike) => flowShareLike.user);
    }

    async toggle(flowShareId: string, userId: string) {
        const flowShareLike = await prisma.flowShareLike.findUnique({
            where: { flowShareId_userId: { flowShareId, userId } }
        });

        if (flowShareLike) {
            await prisma.flowShareLike.delete({ where: { id: flowShareLike.id } });
            return false;
        } else {
            await prisma.flowShareLike.create({ data: { flowShareId, userId } });
            return true;
        }
    }

    async checkStatus(flowShareId: string, userId: string) {
        const flowShareLike = await prisma.flowShareLike.findUnique({
            where: { flowShareId_userId: { flowShareId, userId } }
        });

        return flowShareLike ? true : false;
    }
}

export default new FlowShareLikeService();
