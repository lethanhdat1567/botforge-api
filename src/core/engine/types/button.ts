type ButtonPayload = {
    key?: string;
    value?: string;
    next?: string;
};

// Kiểu cho button riêng lẻ
export type ButtonNode =
    | {
          type: 'postback';
          title: string;
          payload: ButtonPayload; // gửi về server
      }
    | {
          type: 'url';
          title: string;
          url: string; // link mở ra
      };

export type QuickReply = {
    title: string;
    payload: ButtonPayload;
};
