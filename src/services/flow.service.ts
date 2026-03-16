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
    description?: string;
    status?: FlowStatus;

    logicJson?: Prisma.InputJsonValue;
    layoutJson?: Prisma.InputJsonValue;
    timeoutJson?: Prisma.InputJsonValue;

    timeoutDuration?: string;
    pageId?: string;
    startNodeId?: string;
};

class FlowService {
    async list(userId: string, query: ListQuery) {
        const [flows, meta] = await prisma.flow
            .paginate({
                select: {
                    id: true,
                    name: true,
                    description: true,
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
                    description: true,
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
            name: flow.name,
            description: flow.description
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
        const flow = await prisma.flow.findUnique({ where: { id: flowId, userId } });

        if (!flow) return ['Flow not found', null];

        const { id, createdAt, updatedAt, ...restFlow } = flow;

        const dupPayload = await prisma.flow.create({
            data: {
                ...restFlow,
                name: `${flow.name} (copy)`,
                logicJson: restFlow.logicJson as Prisma.InputJsonValue,
                layoutJson: restFlow.layoutJson as Prisma.InputJsonValue,
                timeoutJson: restFlow.timeoutJson as Prisma.InputJsonValue
            } as Prisma.FlowUncheckedCreateInput
        });

        return [null, dupPayload];
    }
}

export default new FlowService();
