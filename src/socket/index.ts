import { Server } from 'socket.io';

let io: Server;

export function initSocket(httpServer: any) {
    io = new Server(httpServer, {
        cors: {
            origin: '*'
        }
    });

    io.on('connection', (socket) => {
        const userId = socket.handshake.query.userId as string | undefined;
        const role = socket.handshake.query.role as string | undefined;

        // 1️⃣ Phòng riêng (ai cũng có)
        if (userId) {
            socket.join(`user:${userId}`);
        }

        // 2️⃣ Phòng chung theo role
        if (role === 'admin') {
            socket.join('admin:sidebar');
            socket.join('admin:all');
        }

        if (role === 'support') {
            socket.join('support:online');
        }

        // 3️⃣ Debug (nên giữ khi dev)
        console.log('socket connected', {
            socketId: socket.id,
            userId,
            role,
            rooms: [...socket.rooms]
        });

        socket.on('disconnect', () => {
            console.log('socket disconnected', socket.id);
        });
    });
}

export function getIO() {
    if (!io) throw new Error('Socket.io not initialized');
    return io;
}
