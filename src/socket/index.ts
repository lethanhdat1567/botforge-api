import { Server } from 'socket.io';

let io: Server;

export function initSocket(httpServer: any) {
    io = new Server(httpServer, {
        cors: {
            origin: '*'
        }
    });

    io.on('connection', (socket) => {
        const userId = socket.handshake.query.userId as string;

        if (userId) {
            console.log('Join: ', userId);

            socket.join(`user:${userId}`);
        }

        socket.on('disconnect', () => {
            // cleanup nếu cần
        });
    });
}

export function getIO() {
    if (!io) throw new Error('Socket.io not initialized');
    return io;
}
