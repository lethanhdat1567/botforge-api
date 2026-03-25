import { prisma } from '~/config/prisma';
import { FlowShareStatus } from '~/generated/prisma';
import { ListQuery } from '~/types/query.type';
import { getPaginationOptions } from '~/utils/pagination';
import { getOrderBy } from '~/utils/prisma';

type CreateShareFlow = {
    flowId: string;
    userId: string;
    name: string;
    description?: string;
    thumbnail?: string;
    content?: string;
    status?: FlowShareStatus;
    categories?: string[];
};

class FlowShareService {
    private selectFlowShare = {
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
        flowShareCategory: {
            select: {
                id: true,
                name: true,
                slug: true
            }
        },
        _count: {
            select: {
                flowShareLikes: true,
                flowShareComments: true,
                flowShareDowloads: true
            }
        }
    };

    async list(userId: string, query: ListQuery<FlowShareStatus>) {
        const customMapping = {
            likes: { flowShareLikes: { _count: query.sortOrder || 'desc' } },
            downloads: { flowShareDowloads: { _count: query.sortOrder || 'desc' } }
        };

        const orderBy = getOrderBy(query.sortBy, query.sortOrder, customMapping);

        const [flows, meta] = await prisma.flowShare
            .paginate({
                select: this.selectFlowShare,
                where: {
                    userId: userId,
                    status: query?.status || undefined,
                    name: {
                        contains: query?.q
                    }
                },
                orderBy: orderBy
            })
            .withPages(getPaginationOptions(query));

        return {
            flowShares: flows,
            meta
        };
    }
    async public(filter: ListQuery<FlowShareStatus> & { category?: string }) {
        const customMapping = {
            likes: { flowShareLikes: { _count: filter.sortOrder || 'desc' } },
            downloads: { flowShareDowloads: { _count: filter.sortOrder || 'desc' } }
        };

        const orderBy = getOrderBy(filter.sortBy, filter.sortOrder, customMapping);

        const [flowShares, meta] = await prisma.flowShare
            .paginate({
                where: {
                    status: filter.status || undefined,
                    flowShareCategory: filter.category
                        ? {
                              some: {
                                  id: filter.category
                              }
                          }
                        : undefined,
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
                select: this.selectFlowShare,
                orderBy: orderBy
            })
            .withPages(getPaginationOptions(filter));

        return {
            flowShares,
            meta
        };
    }

    async listForAdmin(query: ListQuery<FlowShareStatus>) {
        const [flows, meta] = await prisma.flowShare
            .paginate({
                select: this.selectFlowShare,
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
            },
            include: {
                flowShareCategory: true
            }
        });

        return flowShares;
    }

    async create(data: CreateShareFlow, userId: string) {
        const { categories, ...rest } = data;

        const newFlowShare = await prisma.flowShare.create({
            data: {
                ...rest,
                userId,

                flowShareCategory: {
                    connect: categories?.map((id) => ({ id })) || []
                }
            },
            include: {
                flowShareCategory: true
            }
        });

        return newFlowShare;
    }

    async update(flowShareId: string, userId: string, data: Partial<CreateShareFlow>) {
        const { categories, ...updateData } = data;

        const flowShare = await prisma.flowShare.update({
            where: {
                id: flowShareId,
                userId
            },
            data: {
                ...updateData,
                flowShareCategory: categories
                    ? {
                          set: categories.map((id) => ({ id }))
                      }
                    : undefined
            },
            include: {
                flowShareCategory: true
            }
        });

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
