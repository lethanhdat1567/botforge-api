import { prisma } from '~/config/prisma';
import { ListQuery } from '~/types/query.type';

class FlowShareSaveService {
    // Helper để đồng bộ cấu trúc select (Giống bên FlowShareService)
    private getFlowShareSelect(userId: string) {
        return {
            id: true,
            flowId: true,
            name: true,
            description: true,
            thumbnail: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            // Thông tin tác giả
            user: {
                select: {
                    id: true,
                    username: true,
                    displayName: true,
                    avatar: true
                }
            },
            // Danh mục
            flowShareCategory: {
                select: {
                    id: true,
                    name: true
                }
            },
            // Check LIKE của user hiện tại để hiện nút Tim đỏ/trắng
            flowShareLikes: {
                where: { userId: userId },
                select: { userId: true }
            },
            // Các chỉ số tương tác
            _count: {
                select: {
                    flowShareLikes: true,
                    flowShareDowloads: true,
                    flowShareComments: true
                }
            }
        };
    }

    async toggle(flowShareId: string, userId: string) {
        const flowShareSave = await prisma.flowShareSave.findUnique({
            where: { flowShareId_userId: { flowShareId, userId } }
        });

        if (flowShareSave) {
            await prisma.flowShareSave.delete({ where: { id: flowShareSave.id } });
            return false;
        } else {
            await prisma.flowShareSave.create({ data: { flowShareId, userId } });
            return true;
        }
    }

    async checkStatus(flowShareId: string, userId: string) {
        const flowShareSave = await prisma.flowShareSave.findUnique({
            where: { flowShareId_userId: { flowShareId, userId } }
        });

        return !!flowShareSave;
    }

    async listMySaved(userId: string, filter: ListQuery) {
        const flowShareSaves = await prisma.flowShareSave.findMany({
            where: {
                userId,
                flowShare: {
                    name: {
                        contains: filter.q || ''
                    },
                    status: 'active'
                }
            },
            select: {
                id: true,
                createdAt: true,
                flowShare: {
                    select: this.getFlowShareSelect(userId)
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Map lại dữ liệu để dẹt (flatten) cấu trúc và gán isLiked, isSaved
        return flowShareSaves.map((item) => {
            const flow = item.flowShare;
            return {
                ...flow,
                isSaved: true, // Vì nằm trong list saved nên mặc định là true
                isLiked: !!flow?.flowShareLikes?.length,
                saveId: item.id,
                savedAt: item.createdAt,
                // Dọn dẹp mảng trung gian
                flowShareLikes: undefined
            };
        });
    }
}

export default new FlowShareSaveService();
