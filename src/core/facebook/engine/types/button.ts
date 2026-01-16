type ButtonPayload = {
    key?: string;
    value?: string;
    url?: string;
    next?: string;
};

type PostbackPayload = {
    key?: string;
    value?: string;
    next?: string;
};

type UrlPayload = {
    url: string;
    next?: string;
};

// Kiểu cho button riêng lẻ
export type ButtonNode =
    | {
          id?: string;
          type: 'postback';
          title: string;
          payload: PostbackPayload;
      }
    | {
          id?: string;
          type: 'url';
          title: string;
          payload: UrlPayload;
      }
    | {
          id?: string;
          type: 'continue';
          title: string;
          payload: { next: string };
      };

export type QuickReply = {
    title: string;
    payload: ButtonPayload;
};
