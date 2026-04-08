import { prisma } from '~/config/prisma';
import { FlowRecordStatus } from '@prisma/client';
import { WaitingVariable } from '~/types/flows/collection.type';
import { ListQuery } from '~/types/query.type';
import { getPaginationOptions } from '~/utils/pagination';
import { convertToMs } from '~/utils/time';

type CreateFlowRecord = {
    senderId: string;
    flowId: string;
    currentNodeId: string;
};

class FlowRecordService {
    async listByUser(userId: string, filter: ListQuery<FlowRecordStatus>) {
        const ownFlow = await prisma.flow.findFirst({
            where: {
                userId,
                status: 'active'
            },
            select: {
                id: true,
                userId: true
            }
        });

        const [flowRecords, meta] = await prisma.flowRecord
            .paginate({
                where: {
                    flowId: ownFlow?.id,
                    status: filter?.status || undefined,
                    OR: [
                        {
                            flowId: {
                                contains: filter.q || ''
                            }
                        },
                        {
                            senderId: {
                                contains: filter.q || ''
                            }
                        }
                    ]
                }
            })
            .withPages(getPaginationOptions(filter));

        return {
            flowRecords,
            meta
        };
    }

    async findByPageUidAndSenderId(pageUid: string, senderId: string) {
        return await prisma.flowRecord.findFirst({
            where: {
                flow: {
                    page: {
                        pageUid
                    }
                },
                senderId,
                OR: [{ status: 'pending' }, { status: 'running' }, { status: 'processing' }]
            },
            orderBy: { lastInteraction: 'desc' },
            include: {
                flow: {
                    include: {
                        page: true
                    }
                }
            }
        });
    }

    async findById(id: string) {
        return await prisma.flowRecord.findUnique({ where: { id } });
    }

    async getVariables(flowRecordId: string) {
        const flowRecord = await prisma.flowRecord.findFirst({
            where: { id: flowRecordId },
            select: { variables: true }
        });

        return flowRecord?.variables;
    }

    async getWaitingVariable(flowRecordId: string): Promise<WaitingVariable> {
        const flowRecord = await prisma.flowRecord.findFirst({
            where: { id: flowRecordId, status: 'processing' },
            select: { waitingForVariable: true }
        });

        console.log(flowRecord);

        return flowRecord?.waitingForVariable as any;
    }

    async create(data: CreateFlowRecord) {
        return await prisma.flowRecord.create({ data });
    }

    async setPendingVariable(flowRecordId: string, waitingPayload: WaitingVariable) {
        const expiresIn = convertToMs(waitingPayload.fallback.timeout.duration, waitingPayload.fallback.timeout.unit);

        const expiresAt = new Date(Date.now() + expiresIn);

        await prisma.flowRecord.update({
            where: { id: flowRecordId },
            data: { waitingForVariable: waitingPayload, status: 'pending', expiresAt }
        });
    }

    async setVariable(flowRecordId: string, key: string, value: string) {
        const flowRecord = await prisma.flowRecord.findFirst({
            where: { id: flowRecordId },
            select: { variables: true }
        });

        const currentVars = (flowRecord?.variables as Record<string, string>) || {};

        const newVariables = {
            ...currentVars,
            [key]: value
        };

        await prisma.flowRecord.update({
            where: { id: flowRecordId },
            data: { variables: newVariables }
        });
    }

    async setComplete(flowRecordId: string) {
        await prisma.flowRecord.update({
            where: { id: flowRecordId },
            data: { status: 'completed' }
        });
    }

    async setError(flowRecordId: string, message: string) {
        await prisma.flowRecord.update({
            where: { id: flowRecordId },
            data: { status: 'error', errorLog: message }
        });
    }

    async setCancel(flowRecordId: string) {
        await prisma.flowRecord.update({
            where: { id: flowRecordId },
            data: { status: 'cancelled' }
        });
    }

    async setRunning(flowRecordId: string) {
        await prisma.flowRecord.update({ where: { id: flowRecordId }, data: { status: 'running' } });
    }

    async setProcessing(flowRecordId: string) {
        await prisma.flowRecord.update({ where: { id: flowRecordId }, data: { status: 'processing' } });
    }

    /** Only succeeds if record is still `pending` — avoids double-handling concurrent webhooks. */
    async trySetProcessing(id: string): Promise<boolean> {
        const result = await prisma.flowRecord.updateMany({
            where: { id, status: 'pending' },
            data: { status: 'processing' }
        });
        return result.count === 1;
    }

    async revertToPending(flowRecordId: string) {
        await prisma.flowRecord.update({
            where: { id: flowRecordId },
            data: { status: 'pending' }
        });
    }

    async updateCurrentNode(flowRecordId: string, currentNodeId: string) {
        await prisma.flowRecord.update({ where: { id: flowRecordId }, data: { currentNodeId } });
    }

    async delete(id: string) {
        const res = await prisma.flowRecord.delete({
            where: {
                id: id
            }
        });

        return res;
    }

    async bulkDelete(ids: string[]) {
        const res = await prisma.flowRecord.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
    }
}

export default new FlowRecordService();
