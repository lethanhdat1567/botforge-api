import { getIO } from './index';
import { SocketEvent } from './socket.types';

export function emitNewNotification(userId: string) {
    const io = getIO();

    io.to(`user:${userId}`).emit(SocketEvent.NEW_NOTIFICATION, {
        event: 'new_notification'
    });
}
