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
    // Chuyển thành function để có thể truyền userId vào check isLiked/isSaved
    private getSelect(currentUserId?: string) {
        return {
            id: true,
            flowId: true,
            name: true,
            description: true,
            content: true,
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
            user: {
                select: {
                    id: true,
                    avatar: true,
                    displayName: true,
                    username: true,
                    email: true
                }
            },
            flowShareCategory: {
                select: {
                    id: true,
                    name: true,
                    slug: true
                }
            },
            // Check trạng thái Like
            flowShareLikes: currentUserId
                ? {
                      where: { userId: currentUserId },
                      select: { userId: true }
                  }
                : false,
            // Check trạng thái Save
            flowShareSaves: currentUserId
                ? {
                      where: { userId: currentUserId },
                      select: { userId: true }
                  }
                : false,
            _count: {
                select: {
                    flowShareLikes: true,
                    flowShareComments: true,
                    flowShareDowloads: true
                }
            }
        };
    }

    // Hàm helper để format data trả về boolean isLiked/isSaved gọn gàng
    private formatResult(data: any) {
        if (Array.isArray(data)) {
            return data.map((item) => this.formatItem(item));
        }
        return this.formatItem(data);
    }

    private formatItem(item: any) {
        if (!item) return null;
        const isLiked = !!item.flowShareLikes?.length;
        const isSaved = !!item.flowShareSaves?.length;

        // Loại bỏ các mảng quan hệ thừa sau khi đã chuyển thành boolean
        const { flowShareLikes, flowShareSaves, ...rest } = item;
        return { ...rest, isLiked, isSaved };
    }

    async list(userId: string, query: ListQuery<FlowShareStatus>) {
        const customMapping = {
            likes: { flowShareLikes: { _count: query.sortOrder || 'desc' } },
            downloads: { flowShareDowloads: { _count: query.sortOrder || 'desc' } }
        };

        const orderBy = getOrderBy(query.sortBy, query.sortOrder, customMapping);

        const [flows, meta] = await prisma.flowShare
            .paginate({
                select: this.getSelect(userId),
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
            flowShares: this.formatResult(flows),
            meta
        };
    }

    async public(filter: ListQuery<FlowShareStatus> & { category?: string }, currentUserId?: string) {
        const customMapping = {
            likes: { flowShareLikes: { _count: filter.sortOrder || 'desc' } },
            downloads: { flowShareDowloads: { _count: filter.sortOrder || 'desc' } }
        };

        const orderBy = getOrderBy(filter.sortBy, filter.sortOrder, customMapping);

        const [flowShares, meta] = await prisma.flowShare
            .paginate({
                where: {
                    status: filter.status || 'active',
                    flowShareCategory: filter.category
                        ? {
                              some: {
                                  id: filter.category
                              }
                          }
                        : undefined,
                    OR: [{ name: { contains: filter.q || '' } }, { description: { contains: filter.q || '' } }]
                },
                select: this.getSelect(currentUserId),
                orderBy: orderBy
            })
            .withPages(getPaginationOptions(filter));

        return {
            flowShares: this.formatResult(flowShares),
            meta
        };
    }

    async listForAdmin(query: ListQuery<FlowShareStatus>) {
        const [flows, meta] = await prisma.flowShare
            .paginate({
                select: this.getSelect(),
                where: {
                    status: query?.status || undefined,
                    name: {
                        contains: query?.q
                    }
                }
            })
            .withPages(getPaginationOptions(query));

        return {
            flowShares: this.formatResult(flows),
            meta
        };
    }

    async detail(flowShareId: string, currentUserId?: string) {
        const flowShare = await prisma.flowShare.findFirst({
            where: {
                id: flowShareId
            },
            select: this.getSelect(currentUserId)
        });

        return this.formatResult(flowShare);
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
        return await prisma.flowShare.delete({ where: { id: flowShareId, userId } });
    }

    async removeMany(flowShareIds: string[], userId: string) {
        return await prisma.flowShare.deleteMany({ where: { id: { in: flowShareIds }, userId } });
    }

    async related(id: string, limit: number, currentUserId?: string) {
        const currentFlow = await prisma.flowShare.findUnique({
            where: { id },
            select: {
                userId: true,
                flowShareCategory: { select: { id: true } }
            }
        });

        if (!currentFlow) return [];

        const categoryIds = currentFlow.flowShareCategory.map((c) => c.id);

        const relatedFlows = await prisma.flowShare.findMany({
            where: {
                id: { not: id },
                status: 'active',
                OR: [
                    { userId: currentFlow.userId },
                    {
                        flowShareCategory: {
                            some: {
                                id: { in: categoryIds }
                            }
                        }
                    }
                ]
            },
            take: limit,
            orderBy: {
                createdAt: 'desc'
            },
            select: this.getSelect(currentUserId)
        });

        return this.formatResult(relatedFlows);
    }
}

export const flowShareService = new FlowShareService();
