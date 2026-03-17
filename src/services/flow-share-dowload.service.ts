import { prisma } from '~/config/prisma';
import notificationService from '~/services/notification.service';
import { ListQuery } from '~/types/query.type';
import { getPaginationOptions } from '~/utils/pagination';

class FlowShareDowloadController {
    async listMyDowload(userId: string, filter: ListQuery) {
        const [flowShareDowloads, meta] = await prisma.flowShareDowload
            .paginate({
                where: {
                    userId,
                    flowShare: {
                        OR: [
                            {
                                name: {
                                    contains: filter.q || ''
                                }
                            },
                            {
                                description: {
                                    contains: filter.q || ''
                                }
                            }
                        ]
                    }
                },
                select: {
                    id: true,
                    createdAt: true,
                    flowShare: {
                        select: {
                            id: true,
                            name: true,
                            description: true,
                            thumbnail: true
                        }
                    }
                }
            })
            .withPages(getPaginationOptions(filter));

        return {
            flowShareDowloads,
            meta
        };
    }

    async checkStatus(flowShareId: string, userId: string) {
        const flowShareDowload = await prisma.flowShareDowload.findFirst({
            where: {
                flowShareId,
                userId
            }
        });

        return flowShareDowload ? true : false;
    }

    async create({ flowShareId }: { flowShareId: string }, userId: string) {
        const exitDowload = await prisma.flowShareDowload.findFirst({
            where: {
                flowShareId,
                userId
            }
        });

        if (exitDowload) return { message: 'Download already recorded' };

        notificationService.notifyDowloadFlow(flowShareId, userId);
        const flowShareDowload = await prisma.flowShareDowload.create({
            data: {
                flowShareId: flowShareId,
                userId: userId
            }
        });

        return flowShareDowload;
    }

    async listForAdmin(query: ListQuery) {
        const [flowShareDowloads, meta] = await prisma.flowShareDowload
            .paginate({
                select: {
                    id: true,
                    createdAt: true,
                    flowShare: {
                        select: {
                            id: true,
                            name: true,
                            thumbnail: true
                        }
                    },
                    user: {
                        select: {
                            id: true,
                            displayName: true,
                            avatar: true,
                            username: true
                        }
                    }
                },
                where: {
                    flowShare: {
                        OR: [
                            {
                                name: {
                                    contains: query?.q || ''
                                }
                            },
                            {
                                description: {
                                    contains: query?.q || ''
                                }
                            }
                        ]
                    }
                }
            })
            .withPages(getPaginationOptions(query));

        return {
            flowShareDowloads,
            meta
        };
    }

    async remove(id: string, userId: string) {
        const flowShareDowload = await prisma.flowShareDowload.deleteMany({
            where: {
                id: id,
                userId
            }
        });
        return flowShareDowload;
    }

    async removeMany(ids: string[], userId: string) {
        const flowShareDowload = await prisma.flowShareDowload.deleteMany({
            where: {
                id: { in: ids },
                userId: userId
            }
        });
        return flowShareDowload;
    }
}

export default new FlowShareDowloadController();
