export type LiveChatParticipant =
    | { kind: 'user'; userId: string; role: 'admin' | 'user' }
    | { kind: 'anonymous'; anonymousParticipantId: string };
