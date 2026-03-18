import { prisma } from '~/config/prisma';

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
                OR: [{ status: 'pending' }, { status: 'running' }]
            }
        });
    }

    async getVariables(flowRecordId: string) {
        const flowRecord = await prisma.flowRecord.findFirst({
            where: { id: flowRecordId },
            select: { variables: true }
        });

        return flowRecord?.variables;
    }

    async create(data: CreateFlowRecord) {
        return await prisma.flowRecord.create({ data });
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
}

export default new FlowRecordService();
