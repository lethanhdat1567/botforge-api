import { AnyButton } from '~/types/flows/base.type';

export interface MessageTextField {
    text: string;
    buttons?: AnyButton[];
}

export interface MediaField {
    url: string;
}

export interface MediaTemplateField {
    attachment_type: 'image' | 'video';
    url: string;
    buttons: AnyButton[];
}

export interface GenericElement {
    title: string;
    subtitle?: string;
    image_url?: string;
    default_action?: {
        type: 'web_url';
        url: string;
    };
    buttons?: AnyButton[];
}

export interface GenericTemplateField {
    template_type: 'generic';
    image_aspect_ratio?: 'square' | 'horizontal';
    elements: GenericElement[];
}

export type MessagePayloadItem =
    | { category: 'message'; type: 'text'; field: MessageTextField }
    | { category: 'message'; type: 'image' | 'video' | 'audio'; field: MediaField }
    | { category: 'message'; type: 'media_template'; field: MediaTemplateField }
    | { category: 'message'; type: 'generic_template'; field: GenericTemplateField };

export type MessageField = MessageTextField | MediaField | MediaTemplateField | GenericTemplateField;
