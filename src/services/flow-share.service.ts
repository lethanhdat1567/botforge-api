import { prisma } from '~/config/prisma';
import { FlowShareStatus } from '~/generated/prisma';
import { ListQuery } from '~/types/query.type';
import { getPaginationOptions } from '~/utils/pagination';

type CreateShareFlow = {
    flowId: string;
    userId: string;
    name: string;
    description?: string;
    thumbnail?: string;
    content?: string;
    status?: FlowShareStatus;
};

class FlowShareService {
    async list(userId: string, query: ListQuery<FlowShareStatus>) {
        const [flows, meta] = await prisma.flowShare
            .paginate({
                select: {
                    id: true,
                    flowId: true,
                    name: true,
                    description: true,
                    thumbnail: true,
                    status: true,
                    createdAt: true,
                    updatedAt: true,
                    flow: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    _count: {
                        select: {
                            flowShareLikes: true,
                            flowShareComments: true,
                            flowShareDowloads: true
                        }
                    }
                },
                where: {
                    userId: userId,
                    status: query?.status || undefined,
                    name: {
                        contains: query?.q
                    }
                }
            })
            .withPages(getPaginationOptions(query));

        return {
            flowShares: flows,
            meta
        };
    }

    async listForAdmin(query: ListQuery<FlowShareStatus>) {
        const [flows, meta] = await prisma.flowShare
            .paginate({
                select: {
                    id: true,
                    flowId: true,
                    name: true,
                    description: true,
                    thumbnail: true,
                    status: true,
                    createdAt: true,
                    updatedAt: true,
                    flow: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    _count: {
                        select: {
                            flowShareLikes: true,
                            flowShareComments: true,
                            flowShareDowloads: true
                        }
                    }
                },
                where: {
                    status: query?.status || undefined,
                    name: {
                        contains: query?.q
                    }
                }
            })
            .withPages(getPaginationOptions(query));

        return {
            flowShares: flows,
            meta
        };
    }

    async detail(flowShareId: string) {
        const flowShares = await prisma.flowShare.findFirst({
            where: {
                id: flowShareId
            }
        });

        return flowShares;
    }

    async create(date: CreateShareFlow, userId: string) {
        const newFlowShare = await prisma.flowShare.create({ data: { ...date, userId } });

        return newFlowShare;
    }

    async update(flowShareId: string, userId: string, data: Partial<CreateShareFlow>) {
        const flowShare = await prisma.flowShare.update({ where: { id: flowShareId, userId }, data });

        return flowShare;
    }

    async remove(flowShareId: string, userId: string) {
        const flowShare = await prisma.flowShare.delete({ where: { id: flowShareId, userId } });

        return flowShare;
    }

    async removeMany(flowShareIds: string[], userId: string) {
        const flowShares = await prisma.flowShare.deleteMany({ where: { id: { in: flowShareIds }, userId } });

        return flowShares;
    }

    async public(filter: ListQuery<FlowShareStatus>) {
        const [flowShares, meta] = await prisma.flowShare
            .paginate({
                where: {
                    status: filter.status || undefined,
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
                },
                select: {
                    id: true,
                    flowId: true,
                    name: true,
                    description: true,
                    thumbnail: true,
                    status: true,
                    createdAt: true,
                    updatedAt: true,
                    user: {
                        select: {
                            id: true,
                            username: true,
                            displayName: true,
                            avatar: true
                        }
                    }
                }
            })
            .withPages(getPaginationOptions(filter));

        return {
            flowShares,
            meta
        };
    }

    async related(id: string, limit: number) {
        const currentFlow = await prisma.flowShare.findUnique({
            where: { id },
            select: { userId: true, name: true }
        });

        const relatedFlows = await prisma.flowShare.findMany({
            where: {
                id: { not: id },
                status: 'active',
                OR: [{ userId: currentFlow?.userId }]
            },
            take: limit,
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                flowId: true,
                name: true,
                description: true,
                thumbnail: true,
                status: true,
                createdAt: true,
                updatedAt: true,
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

        return relatedFlows;
    }
}

export const flowShareService = new FlowShareService();
