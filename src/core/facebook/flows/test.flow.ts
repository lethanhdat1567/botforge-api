import { ActionNode } from '~/core/facebook/engine/types/action';
import { MessageNode } from '~/core/facebook/engine/types/message';
import { CollectionNode } from '~/core/facebook/engine/types/collection';

export const mockFlow: Record<string, ActionNode | MessageNode | CollectionNode> = {
    '5a1acfcd-3558-447b-bd4f-9b0b0784a100': {
        id: '5a1acfcd-3558-447b-bd4f-9b0b0784a100',
        category: 'message',
        payload: [
            {
                type: 'button',
                fields: {
                    text: 'TEst',
                    buttons: [
                        {
                            id: '4de2eb64-85cf-4da9-8372-c8bcf187a7ba',
                            type: 'postback',
                            title: 'New Button',
                            payload: {}
                        },
                        {
                            id: 'bf044cf2-7e53-4e25-92cf-88662d872558',
                            type: 'postback',
                            title: 'New Button',
                            payload: {}
                        }
                    ]
                }
            }
        ]
    }
};
