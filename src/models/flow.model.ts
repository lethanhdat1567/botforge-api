import { prisma } from '~/config/prisma';
import { Platform } from '@prisma/client';
import { FlowStatus, Prisma } from '~/generated/prisma';
import { JsonValue } from '~/generated/prisma/runtime/client';

export interface IFlow {
    id: string;
    userId: string;
    pageId: string;
    pageAccessToken: string;
    name: string;
    description?: string | null;
    status: FlowStatus;
    logicJson: any;
    layoutJson: any;
    platform: Platform;
    timeoutDuration?: string | null;
    timeoutJson?: JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
}

class FlowModel {
    // Tạo flow
    async create(data: {
        userId: string;
        pageId: string;
        pageAccessToken: string;
        name: string;
        description?: string;
        logicJson: any;
        layoutJson: any;
        platform: Platform;
        timeoutDuration?: string;
        timeoutJson?: JsonValue | null;
    }): Promise<IFlow> {
        return prisma.flow.create({
            data: {
                ...data,
                timeoutJson: data.timeoutJson ?? Prisma.JsonNull
            }
        });
    }

    // Lấy danh sách flow theo user
    async findByUser(userId: string): Promise<IFlow[]> {
        return prisma.flow.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }

    // Lấy chi tiết flow theo id
    async findById(id: string): Promise<IFlow | null> {
        return prisma.flow.findUnique({
            where: { id }
        });
    }

    // Cập nhật flow
    async update(id: string, data: Partial<IFlow>): Promise<IFlow> {
        return prisma.flow.update({
            where: { id },
            data: {
                ...data,
                timeoutJson: data.timeoutJson ?? Prisma.JsonNull
            }
        });
    }

    // Xóa flow
    async delete(id: string): Promise<IFlow> {
        return prisma.flow.delete({
            where: { id }
        });
    }
}

export default new FlowModel();
