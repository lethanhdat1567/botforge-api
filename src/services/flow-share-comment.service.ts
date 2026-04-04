import { prisma } from '~/config/prisma';
import notificationService from '~/services/notification.service';
import { getPaginationOptions } from '~/utils/pagination';

type CommentSortOrder = 'asc' | 'desc';

type CommentFilter = {
    sort?: CommentSortOrder;
    page?: number;
    limit?: number;
    parentId?: string | null;
};

type CreateComment = {
    userId: string;
    flowShareId: string;
    comment: string;
    parentId?: string;
};

class FlowShareCommentService {
    async listByFlowShare(flowShareId: string, filter: CommentFilter) {
        const [comments, meta] = await prisma.flowShareComment
            .paginate({
                where: {
                    flowShareId,
                    parentId: null
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            username: true,
                            displayName: true,
                            avatar: true
                        }
                    },
                    replies: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    username: true,
                                    displayName: true,
                                    avatar: true
                                }
                            }
                        },
                        orderBy: { createdAt: 'asc' }
                    }
                },
                orderBy: { createdAt: filter.sort || 'desc' }
            })
            .withPages(getPaginationOptions(filter));

        return {
            comments,
            meta
        };
    }

    async create(data: CreateComment) {
        const comment = await prisma.flowShareComment.create({ data });

        if (data.parentId) {
            await notificationService.notifyReplyComment(
                data.parentId,
                data.flowShareId,
                data.userId
            );
        } else {
            await notificationService.notifyNewComment(data.flowShareId, data.userId);
        }

        return comment;
    }

    async update(id: string, data: Partial<CreateComment>) {
        return await prisma.flowShareComment.update({ where: { id }, data });
    }

    async remove(id: string, userId: string) {
        return await prisma.flowShareComment.delete({ where: { id, userId } });
    }
}

export default new FlowShareCommentService();
