import { prisma } from '~/config/prisma';

export interface IFlowLike {
    id: string;
    flowShareId: string;
    userId: string;
    createdAt: Date;
}

class FlowLikeModel {
    // tạo like
    async create(flowShareId: string, userId: string): Promise<IFlowLike> {
        return prisma.flowLike.create({
            data: { flowShareId, userId }
        });
    }

    // tìm like theo user & flowShare
    async findByUserAndShare(flowShareId: string, userId: string): Promise<IFlowLike | null> {
        return prisma.flowLike.findUnique({
            where: {
                flowShareId_userId: { flowShareId, userId }
            }
        });
    }

    // xóa like
    async delete(flowShareId: string, userId: string): Promise<IFlowLike> {
        return prisma.flowLike.delete({
            where: {
                flowShareId_userId: { flowShareId, userId }
            }
        });
    }

    // đếm like theo flowShare
    async countByFlowShare(flowShareId: string): Promise<number> {
        return prisma.flowLike.count({
            where: { flowShareId }
        });
    }

    async findUsersByFlowShare(flowShareId: string) {
        return prisma.flowLike.findMany({
            where: { flowShareId },
            select: {
                user: {
                    select: { id: true, username: true, email: true, displayName: true, avatar: true }
                },
                createdAt: true
            }
        });
    }
}

export default new FlowLikeModel();
