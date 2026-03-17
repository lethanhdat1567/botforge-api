export type NodeCategory = 'message' | 'action' | 'collection';

export type MessagePayloadType = 'text' | 'video' | 'image' | 'audio' | 'media_template' | 'generic_template';

export type ActionPayloadType = 'delay' | 'set_variable' | 'condition';

export type AnyButton = UrlButton | PostbackButton;

export interface UrlButton {
    type: 'web_url';
    title: string;
    url: string;
    next?: string;
}

export interface PostbackButton {
    type: 'postback';
    title: string;
    payload: string;
    next?: string;
}
