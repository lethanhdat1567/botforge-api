import { prisma } from '~/config/prisma';

export interface IFlowComment {
    id: string;
    flowShareId: string;
    userId: string;
    comment: string;
    parentId?: string | null;
    createdAt: Date;
    updatedAt: Date;
    user?: {
        id: string;
        username: string;
        displayName?: string;
        avatar?: string;
        email?: string;
    };
    replies?: IFlowComment[];
}

// map dữ liệu từ Prisma → IFlowComment
function mapComment(comment: any): IFlowComment {
    return {
        id: comment.id,
        flowShareId: comment.flowShareId,
        userId: comment.userId,
        comment: comment.comment,
        parentId: comment.parentId,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
        user: comment.user
            ? {
                  id: comment.user.id,
                  username: comment.user.username,
                  displayName: comment.user.displayName ?? undefined,
                  avatar: comment.user.avatar ?? undefined,
                  email: comment.user.email
              }
            : undefined,
        replies: comment.replies?.map(mapComment)
    };
}

class FlowCommentModel {
    async create(data: {
        flowShareId: string;
        userId: string;
        comment: string;
        parentId?: string;
    }): Promise<IFlowComment> {
        const comment = await prisma.flowComment.create({
            data,
            include: { user: true, replies: { include: { user: true } } }
        });
        return mapComment(comment);
    }

    async findByFlowShare(flowShareId: string): Promise<IFlowComment[]> {
        const comments = await prisma.flowComment.findMany({
            where: { flowShareId, parentId: null },
            include: { user: true, replies: { include: { user: true } } },
            orderBy: { createdAt: 'asc' }
        });
        return comments.map(mapComment);
    }

    async findById(id: string): Promise<IFlowComment | null> {
        const comment = await prisma.flowComment.findUnique({
            where: { id },
            include: { user: true, replies: { include: { user: true } } }
        });
        return comment ? mapComment(comment) : null;
    }

    async update(
        id: string,
        data: { comment?: string; parentId?: string | null } // chỉ cho phép update các field DB
    ): Promise<IFlowComment> {
        const comment = await prisma.flowComment.update({
            where: { id },
            data,
            include: { user: true, replies: { include: { user: true } } }
        });
        return mapComment(comment);
    }

    async delete(id: string): Promise<void> {
        await prisma.flowComment.delete({ where: { id } });
    }
}

export default new FlowCommentModel();
