import { ButtonNode, QuickReply } from '~/core/engine/types/button';

// Overall message type
export type MessageType =
    | 'text'
    | 'button'
    | 'attachment'
    | 'quick_replies'
    | 'sender_actions'
    | 'welcome_screen'
    | 'persistent_menu';

export interface MessageNode {
    id: string;
    category: 'message';
    payload: MessageData;
    children?: Record<string, string>;
}

export type MessageData =
    | TextMessageData
    | ButtonMessageData
    | AttachmentMessageData
    | QuickRepliesData
    | SenderActionsData
    | WelcomeScreenData
    | PersistentMenuData;

// Message types
export interface TextMessageData {
    type: 'text';
    fields: {
        text: string;
    };
}

export interface ButtonMessageData {
    type: 'button';
    fields: {
        text: string;
        buttons: ButtonNode[];
    };
}

export interface AttachmentMessageData {
    type: 'attachment';
    fields: {
        attachmentType: 'image' | 'video' | 'audio' | 'file';
        url: string;
    };
}

export interface QuickRepliesData {
    type: 'quick_replies';
    fields: {
        text: string;
        quickReplies: QuickReply[];
    };
}

export interface SenderActionsData {
    type: 'sender_actions';
    fields: {
        action: 'typing_on' | 'typing_off' | 'mark_seen';
    };
}

export interface WelcomeScreenData {
    type: 'welcome_screen';
    fields: {
        text: string;
        postback: string;
        referral?: string | null;
    };
}

export interface PersistentMenuData {
    type: 'persistent_menu';
    fields: {
        text: string;
        menuItems: ButtonNode[];
    };
}
