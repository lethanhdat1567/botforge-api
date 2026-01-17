// core/facebook/helpers/mapButtonsToFacebook.ts
import { ButtonNode } from '~/core/facebook/engine/types/button';
import { renderContent } from '~/core/facebook/helpers';

export function mapButtonsToFacebook(buttons: ButtonNode[] | undefined, pageId: string, psid: string) {
    if (!buttons?.length) return undefined;

    return buttons
        .map((btn) => {
            switch (btn.type) {
                case 'continue':
                    return {
                        type: 'postback',
                        title: renderContent(btn.title, pageId, psid),
                        payload: btn.payload?.next
                            ? JSON.stringify({ next: btn.payload.next })
                            : JSON.stringify({ next: '' })
                    };

                case 'postback':
                    return {
                        type: 'postback',
                        title: renderContent(btn.title, pageId, psid),
                        payload: JSON.stringify(btn.payload)
                    };

                case 'url':
                    return {
                        type: 'web_url',
                        title: renderContent(btn.title, pageId, psid),
                        url: btn.payload.url
                    };

                default:
                    return null;
            }
        })
        .filter((b): b is Exclude<typeof b, null> => Boolean(b));
}
