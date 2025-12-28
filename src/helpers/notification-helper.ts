import flowCommentModel from '~/models/flow-comment.model';
import flowSharedModel from '~/models/flow-shared.model';
import flowModel from '~/models/flow.model';
import notificationModel from '~/models/notification.model';
import userModel from '~/models/user.model';

export const createCommentNotification = async (flowId: string, userCommentId: string) => {
    const userComment = await userModel.findById(userCommentId);
    const sharedTemplate = await flowSharedModel.findById(flowId);

    if (!userComment || !sharedTemplate) return;

    const { displayName, avatar } = userComment;
    const onwerUser = sharedTemplate.userId;

    await notificationModel.createNotification({
        userId: onwerUser,
        type: 'comment',
        message: `${displayName} đã bình luận trong flow ${sharedTemplate.name} của bạn`,
        relatedId: flowId,
        avatar: avatar,
        read: false
    });
};

export const createReplyNotification = async (parentCommentId: string, userReplyId: string, flowId: string) => {
    const parentComment = await flowCommentModel.findById(parentCommentId);
    const userReply = await userModel.findById(userReplyId);

    if (!parentComment || !userReply) return;

    const { displayName, avatar } = userReply;
    const onwerUser = parentComment.userId;

    await notificationModel.createNotification({
        userId: onwerUser,
        type: 'reply',
        message: `${displayName} đã phản hồi bình luận của bạn`,
        relatedId: flowId,
        avatar: avatar,
        read: false
    });
};

export const createDowloadNotification = async (flowId: string, userId: string) => {
    const dowloadUser = await userModel.findById(userId);
    const sharedFlow = await flowSharedModel.findById(flowId);

    if (!dowloadUser || !sharedFlow) return;

    const { displayName, avatar } = dowloadUser;
    const onwerUser = sharedFlow.userId;

    await notificationModel.createNotification({
        userId: onwerUser,
        type: 'download',
        message: `${displayName} đã tải flow ${sharedFlow.name} của bạn`,
        relatedId: flowId,
        avatar: avatar,
        read: false
    });
};

export const createFlowNotification = async (flowId: string, senderId: string, status: 'completed' | 'cancelled') => {
    const flow = await flowModel.findById(flowId);

    if (!flow) return;

    if (status === 'completed') {
        await notificationModel.createNotification({
            userId: flow.userId,
            type: 'flow_done',
            message: `${senderId} đã hoàn thành flow ${flow.name}`,
            relatedId: flowId,
            read: false
        });
    } else if (status === 'cancelled') {
        await notificationModel.createNotification({
            userId: flow.userId,
            type: 'flow_cancelled',
            message: `${senderId} đã không thể hoàn thành flow ${flow.name}`,
            relatedId: flowId,
            read: false
        });
    }
};

export const createNewUserNotification = async (userId: string, displayName: string, avatar?: string | null) => {
    const admins = await userModel.findAdmins();

    await Promise.all(
        admins.map((admin) =>
            notificationModel.createNotification({
                userId: admin.id,
                type: 'new_user',
                message: `${displayName} vừa tạo tài khoản`,
                relatedId: userId,
                avatar,
                read: false
            })
        )
    );
};
