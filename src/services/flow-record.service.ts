import { prisma } from '~/config/prisma';
import { WaitingVariable } from '~/types/flows/collection.type';
import { convertToMs } from '~/utils/time';

type CreateFlowRecord = {
    senderId: string;
    pageId: string;
    flowId: string;
    currentNodeId: string;
};

class FlowRecordService {
    async findByPageUidAndSenderId(pageUid: string, senderId: string) {
        return await prisma.flowRecord.findFirst({
            where: {
                page: {
                    pageUid
                },
                senderId,
                OR: [{ status: 'pending' }, { status: 'running' }, { status: 'processing' }]
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

    async updateCurrentNode(flowRecordId: string, currentNodeId: string) {
        await prisma.flowRecord.update({ where: { id: flowRecordId }, data: { currentNodeId } });
    }
}

export default new FlowRecordService();
