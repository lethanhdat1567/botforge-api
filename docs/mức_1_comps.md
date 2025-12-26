# Facebook Messenger Components – Mức 1 (Cơ bản)

Các component cơ bản này dùng cho các thao tác message cơ bản, dễ triển khai.

```ts
const facebookComponentsLevel1 = {
    textMessage: {
        fields: ['text']
    },
    button: {
        fields: ['postback', 'url'] // postback là option, url là event
    },
    assetsAttachment: {
        fields: ['image', 'video', 'audio', 'file', 'location', 'sticker']
    },
    quickReplies: {
        fields: ['text', 'payload'] // payload là option
    },
    senderActions: {
        fields: ['typing_on', 'typing_off', 'mark_seen'] // status, không phải input
    },
    welcomeScreen: {
        fields: ['postback', 'referral'] // postback là option, referral là event
    },
    persistentMenu: {
        fields: ['postback', 'url'] // postback là option, url là event
    }
};
```
