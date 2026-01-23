import { prisma } from '~/config/prisma';
import { FlowStatus, Platform, Prisma } from '~/generated/prisma';
import { JsonValue } from '~/generated/prisma/runtime/client';

/**
 * =====================
 * Interface trả về cho FE
 * =====================
 */
export interface IFlow {
    id: string;
    userId: string;
    pageId?: string | null;
    folderId: string;

    name: string;
    description?: string | null;
    status: FlowStatus;

    logicJson?: any;
    layoutJson?: any;

    timeoutDuration?: string | null;
    timeoutJson?: JsonValue | null;
    startNodeId?: string | null;

    createdAt: Date;
    updatedAt: Date;

    // 🔥 backward-compatible (KHÔNG lưu DB)
    platform?: Platform;
    pageAccessToken?: string | null;
}

class FlowModel {
    /**
     * =====================
     * CREATE
     * =====================
     */
    async create(data: {
        userId: string;
        pageId?: string | null;
        folderId: string;
        name: string;
        description?: string;
        logicJson?: unknown;
        layoutJson?: unknown;
        timeoutDuration?: string;
        timeoutJson?: unknown;
    }): Promise<IFlow> {
        const existing = await prisma.flow.findFirst({
            where: {
                folderId: data.folderId,
                pageId: data.pageId ?? null,
                name: data.name
            }
        });

        if (existing) {
            throw new Error(`Flow name "${data.name}" already exists in this folder`);
        }

        const flow = await prisma.flow.create({
            data: {
                ...data,
                logicJson: this.toPrismaJson(data.logicJson),
                layoutJson: this.toPrismaJson(data.layoutJson),
                timeoutJson: this.toPrismaJson(data.timeoutJson)
            },
            include: { page: true }
        });

        return this.mapFlow(flow);
    }

    /**
     * =====================
     * LIST BY USER
     * =====================
     */
    async findByUser(userId: string, platform?: Platform | 'unconnected'): Promise<IFlow[]> {
        const where: any = { userId };

        // 🔹 chỉ lấy flow chưa kết nối
        if (platform === 'unconnected') {
            where.pageId = null;
        }

        // 🔹 lọc theo platform nhưng vẫn lấy flow chưa kết nối
        else if (platform) {
            where.OR = [
                { pageId: null },
                {
                    page: {
                        platform
                    }
                }
            ];
        }

        const flows = await prisma.flow.findMany({
            where,
            include: {
                page: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return flows.map(this.mapFlow);
    }

    /**
     * =====================
     * FIND BY ID
     * =====================
     */
    async findById(id: string): Promise<IFlow | null> {
        const flow = await prisma.flow.findUnique({
            where: { id },
            include: { page: true }
        });

        if (!flow) return null;
        return this.mapFlow(flow);
    }

    /**
     * =====================
     * FIND BY PAGE
     * =====================
     */
    async findByPageId(pageId: string): Promise<IFlow | null> {
        const flow = await prisma.flow.findFirst({
            where: { pageId },
            include: { page: true },
            orderBy: { createdAt: 'desc' }
        });

        if (!flow) return null;
        return this.mapFlow(flow);
    }

    /**
     * =====================
     * FIND BY FOLDER (LIST GỌN)
     * =====================
     */
    async findByFolder(folderId: string): Promise<Pick<IFlow, 'id' | 'name' | 'status'>[]> {
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

    async findFlowByPageUid(pageUid: string, platform: Platform): Promise<IFlow | null> {
        const flow = await prisma.flow.findFirst({
            where: {
                page: {
                    pageUid: pageUid,
                    platform
                }
            },
            include: {
                page: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        if (!flow) return null;
        return this.mapFlow(flow);
    }

    /**
     * =====================
     * UPDATE
     * =====================
     */
    async update(id: string, data: any): Promise<IFlow> {
        if (data.name) {
            const flow = await prisma.flow.findUnique({ where: { id } });
            if (!flow) throw new Error('Flow not found');

            const existing = await prisma.flow.findFirst({
                where: {
                    folderId: flow.folderId,
                    pageId: flow.pageId,
                    name: data.name,
                    NOT: { id }
                }
            });

            if (existing) {
                throw new Error(`Flow name "${data.name}" already exists in this folder`);
            }
        }

        const updated = await prisma.flow.update({
            where: { id },
            data: {
                ...data,
                logicJson: this.toPrismaJson(data.logicJson),
                layoutJson: this.toPrismaJson(data.layoutJson),
                timeoutJson: this.toPrismaJson(data.timeoutJson)
            },
            include: { page: true }
        });

        return this.mapFlow(updated);
    }

    /**
     * =====================
     * DELETE
     * =====================
     */
    async delete(id: string): Promise<IFlow> {
        const deleted = await prisma.flow.delete({
            where: { id },
            include: { page: true }
        });

        return this.mapFlow(deleted);
    }

    /**
     * =====================
     * DUPLICATE
     * =====================
     */
    async duplicate(flowId: string): Promise<IFlow> {
        const flow = await prisma.flow.findUnique({
            where: { id: flowId },
            include: { page: true }
        });

        if (!flow) throw new Error('Flow not found');

        let newName = flow.name;
        let counter = 1;

        while (
            await prisma.flow.findFirst({
                where: {
                    folderId: flow.folderId,
                    pageId: flow.pageId,
                    name: newName
                }
            })
        ) {
            newName = `${flow.name} (${counter})`;
            counter++;
        }

        const created = await prisma.flow.create({
            data: {
                userId: flow.userId,
                pageId: flow.pageId,
                folderId: flow.folderId,
                name: newName,
                description: flow.description,
                status: flow.status,
                logicJson: flow.logicJson as any,
                layoutJson: flow.layoutJson as any,
                timeoutDuration: flow.timeoutDuration,
                timeoutJson: flow.timeoutJson ?? Prisma.JsonNull
            },
            include: { page: true }
        });

        return this.mapFlow(created);
    }

    /**
     * =====================
     * PRIVATE MAPPER
     * =====================
     */
    private mapFlow(flow: any): IFlow {
        return {
            id: flow.id,
            userId: flow.userId,
            pageId: flow.pageId,
            folderId: flow.folderId,

            name: flow.name,
            description: flow.description,
            status: flow.status,

            logicJson: flow.logicJson,
            layoutJson: flow.layoutJson,

            timeoutDuration: flow.timeoutDuration,
            timeoutJson: flow.timeoutJson,
            startNodeId: flow.startNodeId,

            createdAt: flow.createdAt,
            updatedAt: flow.updatedAt,

            // backward-compatible cho FE
            platform: flow.page?.platform,
            pageAccessToken: flow.page?.accessToken ?? null
        };
    }

    toPrismaJson(value: unknown) {
        if (value === undefined) return undefined;
        if (value === null) return Prisma.JsonNull;
        return value;
    }
}

export default new FlowModel();
