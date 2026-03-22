import { prisma } from '~/config/prisma';
import { FlowStatus, Prisma } from '~/generated/prisma';
import { getPaginationOptions } from '~/utils/pagination';

type ListQuery = {
    status?: FlowStatus;
    q?: string;
    limit?: string;
    page?: string;
};

type CreateFlow = {
    userId: string;
    name: string;
    status?: FlowStatus;

    logicJson?: Prisma.InputJsonValue;
    layoutJson?: Prisma.InputJsonValue;
    timeoutJson?: Prisma.InputJsonValue;

    timeoutDuration?: string;
    pageId?: string;
    pageAccessToken?: string;
    startNodeId?: string;
};

class FlowService {
    async list(userId: string, query: ListQuery) {
        const [flows, meta] = await prisma.flow
            .paginate({
                select: {
                    id: true,
                    name: true,
                    pageId: true,
                    status: true,
                    createdAt: true,
                    updatedAt: true
                },
                where: {
                    userId: userId,
                    status: query?.status || undefined,
                    name: {
                        contains: query?.q
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                }
            })
            .withPages(getPaginationOptions(query));

        return {
            flows,
            meta
        };
    }

    async listForAdmin(query: ListQuery) {
        const [flows, meta] = await prisma.flow
            .paginate({
                select: {
                    id: true,
                    name: true,
                    pageId: true,
                    status: true,
                    createdAt: true,
                    updatedAt: true
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
            flows,
            meta
        };
    }

    async create(data: CreateFlow) {
        const flow = await prisma.flow.create({ data });

        return {
            id: flow.id,
            name: flow.name
        };
    }

    async update(id: string, userId: string, data: Partial<CreateFlow>) {
        const flow = await prisma.flow.update({ where: { id, userId }, data });

        return flow;
    }

    async detail(id: string) {
        const flow = await prisma.flow.findUnique({ where: { id } });

        return flow;
    }

    async remove(id: string, userId: string) {
        return await prisma.flow.delete({ where: { id, userId } });
    }

    async removeMany(ids: string[], userId: string) {
        return await prisma.flow.deleteMany({ where: { id: { in: ids }, userId } });
    }

    async duplicate(flowId: string, userId: string) {
        const flow = await prisma.flow.findUnique({
            where: { id: flowId, userId }
        });

        if (!flow) return ['Flow not found', null];

        const existingCopies = await prisma.flow.findMany({
            where: {
                userId,
                name: {
                    startsWith: `${flow.name} (copy`
                }
            },
            select: { name: true }
        });

        let newName = `${flow.name} (copy)`;

        if (existingCopies.length > 0) {
            // Trích xuất các số thứ tự hiện có: "Flow (copy) 1" -> 1
            const numbers = existingCopies
                .map((f) => {
                    if (f.name === `${flow.name} (copy)`) return 0;
                    const match = f.name.match(/\(copy\)\s(\d+)$/);
                    return match ? parseInt(match[1], 10) : 0;
                })
                .filter((n) => !isNaN(n));

            if (numbers.length > 0) {
                const maxNumber = Math.max(...numbers);
                newName = `${flow.name} (copy) ${maxNumber + 1}`;
            } else {
                // Nếu chỉ mới có bản "(copy)" đầu tiên
                newName = `${flow.name} (copy) 1`;
            }
        }

        // 4. Tạo bản sao mới
        const { id, createdAt, updatedAt, ...restFlow } = flow;

        const dupPayload = await prisma.flow.create({
            data: {
                ...restFlow,
                name: newName,
                logicJson: restFlow.logicJson as Prisma.InputJsonValue,
                layoutJson: restFlow.layoutJson as Prisma.InputJsonValue,
                timeoutJson: restFlow.timeoutJson as Prisma.InputJsonValue
            } as Prisma.FlowUncheckedCreateInput
        });

        return [null, dupPayload];
    }

    async findActiveByPageUid(pageUid: string) {
        return await prisma.flow.findFirst({
            where: {
                pageId: pageUid,
                status: 'active'
            }
        });
    }

    async findById(id: string) {
        return await prisma.flow.findUnique({ where: { id } });
    }

    async toggleActive(id: string, userId: string) {
        const flow = await prisma.flow.findUnique({
            where: { id, userId }
        });

        if (!flow) return ['Flow không tồn tại', null];

        // Nếu flow hiện tại đang inactive và muốn bật lên active
        if (flow.status === 'inactive') {
            if (!flow.pageId) return ['Flow chưa được gán vào Page nào', null];

            const result = await prisma.$transaction(async (tx) => {
                // 1. Tắt tất cả các flow khác của cùng Page này
                await tx.flow.updateMany({
                    where: {
                        pageId: flow.pageId,
                        userId,
                        id: { not: id }
                    },
                    data: { status: 'inactive' }
                });

                // 2. Bật flow hiện tại lên active
                return await tx.flow.update({
                    where: { id },
                    data: { status: 'active' }
                });
            });

            return [null, result];
        }

        // Nếu đang active mà muốn tắt đi (đơn giản là chuyển về inactive)
        const deactivatedFlow = await prisma.flow.update({
            where: { id },
            data: { status: 'inactive' }
        });

        return [null, deactivatedFlow];
    }
}

export default new FlowService();
