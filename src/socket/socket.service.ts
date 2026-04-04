import { getIO } from './index';
import { SocketEvent, type NotificationPublicDTO } from './socket.types';

export function emitNewNotification(
    userId: string,
    payload: { notification: NotificationPublicDTO }
) {
    const io = getIO();

    io.to(`user:${userId}`).emit(SocketEvent.NEW_NOTIFICATION, payload);
}

/** @deprecated Dùng `emitNewChatMessageForConversation` để hỗ trợ cả khách ẩn danh. */
export function emitNewChatMessage(
    userId: string,
    payload: {
        id: string;
        sender: 'admin' | 'user';
        type: 'text' | 'image' | 'video';
        content: string;
        createdAt: Date;
    }
) {
    const io = getIO();

    io.to(`user:${userId}`).emit(SocketEvent.CHAT_NEW_MESSAGE, payload);
}

export type LiveChatNewMessagePayload = {
    conversationId: string;
    id: string;
    sender: 'admin' | 'user';
    type: 'text' | 'image' | 'video';
    content: string;
    createdAt: Date;
};

export function emitNewChatMessageForConversation(
    conversation: {
        id: string;
        userId: string | null;
        anonymousParticipantId: string | null;
    },
    payload: LiveChatNewMessagePayload
) {
    const io = getIO();

    io.to(`conversation:${conversation.id}`).emit(SocketEvent.CHAT_NEW_MESSAGE, payload);

    if (conversation.userId) {
        io.to(`user:${conversation.userId}`).emit(SocketEvent.CHAT_NEW_MESSAGE, payload);
    }

    if (conversation.anonymousParticipantId) {
        io.to(`anon:${conversation.anonymousParticipantId}`).emit(
            SocketEvent.CHAT_NEW_MESSAGE,
            payload
        );
    }
}

export function emitRevokeChatMessage(
    userId: string,
    payload: {
        id: string;
        revokedAt: Date | null;
    }
) {
    const io = getIO();

    io.to(`user:${userId}`).emit(SocketEvent.CHAT_MESSAGE_REVOKED, payload);
}

export function emitAdminSidebarRefresh() {
    const io = getIO();

    // chỉ là tín hiệu, không payload
    io.to('admin:sidebar').emit(SocketEvent.ADMIN_SIDEBAR_NEW_CHAT);
}
