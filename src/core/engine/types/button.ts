// Kiểu cho button riêng lẻ
export type ButtonNode =
    | {
          type: 'postback';
          title: string;
          payload: string; // gửi về server
          next?: string; // optional nodeId tiếp theo
      }
    | {
          type: 'url';
          title: string;
          url: string; // link mở ra
      };
