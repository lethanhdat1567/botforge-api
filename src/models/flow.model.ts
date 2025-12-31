import { v4 as uuidv4 } from 'uuid';
import { prisma } from '~/config/prisma';
import { FlowStatus, Platform, Prisma } from '~/generated/prisma';
import { JsonValue } from '~/generated/prisma/runtime/client';

export interface IFlow {
    id: string;
    userId: string;
    pageId?: string | null;
    folderId: string;
    pageAccessToken?: string | null;
    name: string;
    description?: string | null;
    status: FlowStatus;
    logicJson?: any;
    layoutJson?: any;
    platform: Platform;
    timeoutDuration?: string | null;
    timeoutJson?: JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
}

class FlowModel {
    // Tạo flow, kiểm tra trùng name trong folder + platform
    async create(data: {
        userId: string;
        pageId?: string | null;
        folderId: string;
        pageAccessToken?: string | null;
        name: string;
        description?: string;
        logicJson?: any;
        layoutJson?: any;
        platform: Platform;
        timeoutDuration?: string;
        timeoutJson?: JsonValue | null;
    }): Promise<IFlow> {
        // Kiểm tra flow trùng name trong folder + platform
        const existing = await prisma.flow.findFirst({
            where: {
                folderId: data.folderId,
                platform: data.platform,
                name: data.name
            }
        });

        if (existing) {
            throw new Error(`Flow name "${data.name}" already exists in this folder`);
        }

        return prisma.flow.create({
            data: {
                ...data,
                timeoutJson: data.timeoutJson ?? Prisma.JsonNull
            }
        });
    }

    async findByUser(userId: string): Promise<IFlow[]> {
        return prisma.flow.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async findById(id: string): Promise<IFlow | null> {
        return prisma.flow.findUnique({ where: { id } });
    }

    async findByFolder(folderId: string): Promise<{ id: string; name: string }[]> {
        return prisma.flow.findMany({
            where: { folderId },
            orderBy: { createdAt: 'asc' },
            select: {
                id: true,
                name: true,
                status: true
            }
        });
    }

    async update(id: string, data: Partial<IFlow>): Promise<IFlow> {
        // Nếu đổi name, cần check trùng trong folder + platform
        if (data.name) {
            const flow = await this.findById(id);
            if (!flow) throw new Error('Flow not found');

            const existing = await prisma.flow.findFirst({
                where: {
                    folderId: flow.folderId,
                    platform: flow.platform,
                    name: data.name,
                    NOT: { id }
                }
            });
            if (existing) throw new Error(`Flow name "${data.name}" already exists in this folder`);
        }

        return prisma.flow.update({
            where: { id },
            data: {
                ...data,
                timeoutJson: data.timeoutJson ?? Prisma.JsonNull
            }
        });
    }

    async delete(id: string): Promise<IFlow> {
        return prisma.flow.delete({ where: { id } });
    }

    // Duplicate flow sang folder mới
    async duplicate(flowId: string): Promise<IFlow> {
        const flow = await this.findById(flowId);
        if (!flow) throw new Error('Flow not found');

        let newName = flow.name;
        let counter = 1;

        // Kiểm tra trùng tên trong cùng folder + platform
        while (
            await prisma.flow.findFirst({
                where: { folderId: flow.folderId, platform: flow.platform, name: newName }
            })
        ) {
            newName = `${flow.name} (${counter})`;
            counter++;
        }

        const newFlow = {
            ...flow,
            id: uuidv4(),
            name: newName,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        return prisma.flow.create({
            data: {
                id: newFlow.id,
                userId: newFlow.userId,
                pageId: newFlow.pageId,
                folderId: newFlow.folderId,
                pageAccessToken: newFlow.pageAccessToken,
                name: newFlow.name,
                description: newFlow.description,
                status: newFlow.status,
                logicJson: newFlow.logicJson,
                layoutJson: newFlow.layoutJson,
                platform: newFlow.platform,
                timeoutDuration: newFlow.timeoutDuration,
                timeoutJson: newFlow.timeoutJson ?? Prisma.JsonNull,
                createdAt: newFlow.createdAt,
                updatedAt: newFlow.updatedAt
            }
        });
    }
}

export default new FlowModel();
