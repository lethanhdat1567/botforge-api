import { prisma } from '~/config/prisma';
import { Prisma } from '~/generated/prisma';
import flowService from '~/services/flow.service';
import notificationService from '~/services/notification.service';
import { ListQuery } from '~/types/query.type';
import { getPaginationOptions } from '~/utils/pagination';

export class FlowShareDownloadHttpError extends Error {
    constructor(
        message: string,
        public readonly statusCode: number
    ) {
        super(message);
        this.name = 'FlowShareDownloadHttpError';
    }
}

function resolveCloneStartNodeId(layoutJson: unknown, columnStart: string | null): string | null {
    if (!layoutJson || typeof layoutJson !== 'object' || Array.isArray(layoutJson)) {
        return columnStart;
    }
    const rawNodes = (layoutJson as { nodes?: unknown }).nodes;
    if (!Array.isArray(rawNodes)) {
        return columnStart;
    }
    const nodes = rawNodes as Array<{ id?: string; data?: { markStart?: boolean } }>;
    const ids = new Set(
        nodes.map((n) => n.id).filter((id): id is string => typeof id === 'string')
    );
    if (columnStart && ids.has(columnStart)) {
        return columnStart;
    }
    const marked = nodes.find(
        (n) => n.data?.markStart === true && typeof n.id === 'string'
    );
    return marked?.id ?? null;
}

class FlowShareDowloadService {
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
        if (!flowShareId) {
            throw new FlowShareDownloadHttpError('flowShareId is required', 400);
        }

        const exitDowload = await prisma.flowShareDowload.findFirst({
            where: {
                flowShareId,
                userId
            }
        });

        const flowShare = await prisma.flowShare.findUnique({
            where: { id: flowShareId },
            select: {
                id: true,
                name: true,
                flowId: true,
                status: true
            }
        });

        if (!flowShare) {
            throw new FlowShareDownloadHttpError('Flow share not found', 404);
        }

        if (flowShare.status !== 'active') {
            throw new FlowShareDownloadHttpError('Flow share is not active', 400);
        }

        const sourceFlow = await prisma.flow.findUnique({
            where: { id: flowShare.flowId }
        });

        if (!sourceFlow) {
            throw new FlowShareDownloadHttpError('Source flow not found', 404);
        }

        const name = await flowService.resolveUniqueFlowName(userId, flowShare.name);

        const clonePayload = {
            userId,
            name,
            status: 'inactive' as const,
            logicJson: sourceFlow.logicJson as Prisma.InputJsonValue,
            layoutJson: sourceFlow.layoutJson as Prisma.InputJsonValue,
            timeoutJson: sourceFlow.timeoutJson as Prisma.InputJsonValue,
            timeoutDuration: sourceFlow.timeoutDuration,
            startNodeId: resolveCloneStartNodeId(sourceFlow.layoutJson, sourceFlow.startNodeId)
        };

        if (exitDowload) {
            const shouldReuseClone = await this.shouldReuseExistingClone(exitDowload, userId);
            if (shouldReuseClone) {
                return shouldReuseClone;
            }

            const { newFlow, flowShareDowload } = await prisma.$transaction(async (tx) => {
                const flow = await tx.flow.create({ data: clonePayload });

                const d = await tx.flowShareDowload.update({
                    where: { id: exitDowload.id },
                    data: {
                        clonedFlowId: flow.id,
                        lastKnownCloneUpdatedAt: flow.updatedAt
                    }
                });

                return { newFlow: flow, flowShareDowload: d };
            });

            return {
                flowShareDowload,
                flow: { id: newFlow.id, name: newFlow.name }
            };
        }

        const { newFlow, flowShareDowload } = await prisma.$transaction(async (tx) => {
            const flow = await tx.flow.create({ data: clonePayload });

            const d = await tx.flowShareDowload.create({
                data: {
                    flowShareId,
                    userId,
                    clonedFlowId: flow.id,
                    lastKnownCloneUpdatedAt: flow.updatedAt
                }
            });

            return { newFlow: flow, flowShareDowload: d };
        });

        await notificationService.notifyDowloadFlow(flowShareId, userId);

        return {
            flowShareDowload,
            flow: { id: newFlow.id, name: newFlow.name }
        };
    }

    /** Giữ bản clone hiện tại nếu còn tồn tại và user chưa chỉnh sửa (so với lần đồng bộ cuối). */
    private async shouldReuseExistingClone(
        exitDowload: { id: string; clonedFlowId: string | null; lastKnownCloneUpdatedAt: Date | null },
        userId: string
    ) {
        if (!exitDowload.clonedFlowId) {
            return null;
        }

        const cloned = await prisma.flow.findFirst({
            where: { id: exitDowload.clonedFlowId, userId }
        });

        if (!cloned) {
            return null;
        }

        const lastKnown = exitDowload.lastKnownCloneUpdatedAt;
        if (lastKnown === null) {
            await prisma.flowShareDowload.update({
                where: { id: exitDowload.id },
                data: { lastKnownCloneUpdatedAt: cloned.updatedAt }
            });
            return {
                message: 'Download already recorded',
                flow: { id: cloned.id, name: cloned.name }
            };
        }

        if (cloned.updatedAt > lastKnown) {
            return null;
        }

        await prisma.flowShareDowload.update({
            where: { id: exitDowload.id },
            data: { lastKnownCloneUpdatedAt: cloned.updatedAt }
        });

        return {
            message: 'Download already recorded',
            flow: { id: cloned.id, name: cloned.name }
        };
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

export default new FlowShareDowloadService();
