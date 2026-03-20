import { prisma } from '~/config/prisma';
import { QueueStatus } from '~/generated/prisma';

class QueueService {
    async findOnePending() {
        return prisma.queue.findFirst({
            where: {
                status: 'pending'
            }
        });
    }

    async push(type: string, payload: any) {
        return await prisma.queue.create({
            data: {
                type,
                payload,
                status: 'pending'
            }
        });
    }

    async updateStatus(id: string, status: QueueStatus) {
        return await prisma.queue.update({
            where: { id },
            data: { status }
        });
    }
}

export const queueService = new QueueService();
