export enum SocketEvent {
    // Notification
    NEW_NOTIFICATION = 'notification:new',

    // Live Chat
    CHAT_NEW_MESSAGE = 'chat:new',
    CHAT_MESSAGE_REVOKED = 'chat:revoked',

    ADMIN_SIDEBAR_NEW_CHAT = 'admin:new-chat'
}
