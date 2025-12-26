import { MessageNode } from '../types/message';
import { runFlow } from '../engine'; // import engine để follow next node
import { ButtonNode } from '../types/button';

export function handleMessageNode(node: MessageNode) {
    const payload = node.payload;

    switch (payload.type) {
        case 'text':
            console.log('[Text]', payload.fields.text);
            break;

        case 'button': {
            console.log('[Button]', payload.fields.text);
            payload.fields.buttons.forEach((btn: ButtonNode, i) => {
                if (btn.type === 'postback') console.log(`  ${i + 1}. ${btn.title} (payload: ${btn.payload})`);
                else if (btn.type === 'url') console.log(`  ${i + 1}. ${btn.title} (url: ${btn.url})`);
            });

            const chosenButton = payload.fields.buttons[0];
            if (chosenButton.type === 'postback' && chosenButton.next) {
                runFlow(chosenButton.next);
            }
            return;
        }

        case 'quick_replies': {
            console.log('[QuickReplies]', payload.fields.text);
            payload.fields.quickReplies.forEach((btn: ButtonNode, i) => {
                if (btn.type === 'postback') console.log(`  ${i + 1}. ${btn.title} (payload: ${btn.payload})`);
                else if (btn.type === 'url') console.log(`  ${i + 1}. ${btn.title} (url: ${btn.url})`);
            });

            const chosenQR = payload.fields.quickReplies[0];
            if (chosenQR.type === 'postback' && chosenQR.next) {
                runFlow(chosenQR.next);
            }
            return;
        }

        case 'attachment':
            console.log('[Attachment]', payload.fields.attachmentType, payload.fields.url);
            break;

        case 'sender_actions':
            console.log('[Sender Action]', payload.fields.action);
            break;

        case 'welcome_screen':
            console.log('[Welcome Screen]', payload.fields.text, payload.fields.postback);
            break;

        case 'persistent_menu':
            console.log('[Persistent Menu]');
            payload.fields.menuItems.forEach((btn: ButtonNode, i) => {
                if (btn.type === 'postback') console.log(`  ${i + 1}. ${btn.title} (payload: ${btn.payload})`);
                else if (btn.type === 'url') console.log(`  ${i + 1}. ${btn.title} (url: ${btn.url})`);
            });
            break;
    }

    const nextNodeId = node.children?.next;
    if (nextNodeId) runFlow(nextNodeId);
}
