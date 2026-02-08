import { getIO } from './index';
import { SocketEvent } from './socket.types';

export function emitNewNotification(userId: string) {
    const io = getIO();

    io.to(`user:${userId}`).emit(SocketEvent.NEW_NOTIFICATION, {
        event: 'new_notification'
    });
}

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
