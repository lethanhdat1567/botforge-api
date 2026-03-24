export type NodeCategory = 'message' | 'action' | 'collection';

export type MessagePayloadType = 'text' | 'video' | 'image' | 'audio' | 'media_template' | 'generic_template';

export type ActionPayloadType = 'delay' | 'set_variable' | 'condition';

export type AnyButton = UrlButton | PostbackButton | ContinueButton;

export interface ContinueButton {
    type: 'continue';
    title: 'Tiếp tục';
    payload: {
        flowRecordId: string;
        next?: string;
    };
}

export interface UrlButton {
    type: 'web_url';
    title: string;
    payload: {
        url: string;
    };
}

export interface PostbackButton {
    type: 'postback';
    title: string;
    payload: {
        next?: string;
        flowRecordId: string;
        key: string;
        value: string;
    };
}
