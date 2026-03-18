import { prisma } from '~/config/prisma';

type CreateFlowRecord = {
    senderId: string;
    pageId: string;
    flowId: string;
    currentNodeId: string;
};

class FlowRecordService {
    async findByPageIdAndSenderId(pageId: string, senderId: string) {
        return await prisma.flowRecord.findFirst({
            where: {
                pageId,
                senderId,
                OR: [{ status: 'pending' }, { status: 'running' }]
            }
        });
    }

    async create(data: CreateFlowRecord) {
        return await prisma.flowRecord.create({ data });
    }
}

export default new FlowRecordService();
