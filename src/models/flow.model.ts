import { prisma } from '~/config/prisma';
import { Platform } from '@prisma/client';
import { FlowStatus } from '~/generated/prisma';

export interface IFlow {
    id: string;
    userId: string;
    name: string;
    description?: string | null;
    status: FlowStatus;
    logicJson: any;
    layoutJson: any;
    platform: Platform;
    timeoutDuration?: string | null;
    timeoutText?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

class FlowModel {
    async create(data: {
        userId: string;
        name: string;
        description?: string;
        logicJson: any;
        layoutJson: any;
        platform: Platform;
        timeoutDuration?: string;
        timeoutText?: string;
    }): Promise<IFlow> {
        return prisma.flow.create({ data });
    }

    async findByUser(userId: string): Promise<IFlow[]> {
        return prisma.flow.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async findById(id: string): Promise<IFlow | null> {
        return prisma.flow.findUnique({
            where: { id }
        });
    }

    async update(id: string, data: Partial<IFlow>): Promise<IFlow> {
        return prisma.flow.update({
            where: { id },
            data
        });
    }

    async delete(id: string): Promise<IFlow> {
        return prisma.flow.delete({
            where: { id }
        });
    }
}

export default new FlowModel();
