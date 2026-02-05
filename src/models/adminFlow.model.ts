// src/models/adminFlow.model.ts
import { FlowStatus } from '@prisma/client';
import { prisma } from '~/config/prisma';

export class AdminFlowModel {
    async list(params: { page?: number; limit?: number; q?: string; status?: FlowStatus }) {
        const page = Math.max(Number(params.page) || 1, 1);
        const limit = Math.min(Number(params.limit) || 20, 100);
        const skip = (page - 1) * limit;

        const where: any = {};

        if (params.q?.trim()) {
            where.name = {
                contains: params.q.trim()
            };
        }

        if (params.status) {
            where.status = params.status;
        }

        const [items, total] = await Promise.all([
            prisma.flow.findMany({
                where,
                orderBy: {
                    createdAt: 'desc'
                },
                skip,
                take: limit,
                include: {
                    user: {
                        select: {
                            id: true,
                            username: true,
                            email: true,
                            displayName: true,
                            avatar: true,
                            role: true
                        }
                    },
                    folder: {
                        select: {
                            id: true,
                            name: true,
                            platform: true
                        }
                    }
                }
            }),
            prisma.flow.count({ where })
        ]);

        return {
            items,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        };
    }

    async findById(id: string) {
        return prisma.flow.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        displayName: true,
                        avatar: true
                    }
                },
                folder: true,
                page: true
            }
        });
    }

    async disable(id: string) {
        return prisma.flow.update({
            where: { id },
            data: {
                status: 'draft'
            }
        });
    }
}

export const adminFlowModel = new AdminFlowModel();
