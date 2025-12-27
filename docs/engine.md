# 🤖 Chatbot Engine Specification (JSON Flow)

Hệ thống vận hành theo mô hình **State Machine (Máy trạng thái)**. Mỗi trạng thái là một `Node`.

---

### 1. Core Schema (Cấu trúc lõi)

Mọi Node phải tuân thủ giao diện:

- `id` (string): Định danh duy nhất.
- `category` (enum): `message` | `action` | `collection`.
- `payload` (object): Dữ liệu thực thi.
- `children` (Record<string, string>): Bản đồ điều hướng (Key: Event/Payload -> Value: NextID).

---

### 2. Category: Message (Output)

Dùng để hiển thị nội dung.

- **Types**: `text`, `button`, `attachment`, `generic_template`, `media_template`, `quick_replies`, `receipt_template`.
- **Navigation**: Điều hướng thông qua `buttons[].payload.next` hoặc `quickReplies[].payload.next`.

### 3. Category: Action (Logic)

Xử lý ngầm, tự động chuyển node sau khi hoàn thành.

- **Condition**: Rẽ nhánh bằng toán tử (`equals`, `contains`, `regex`). Logic: `if (match) -> next`.
- **Set Variable**: Gán giá trị vào Context. `Context[key] = value`.
- **Delay**: Tạm dừng luồng (`duration` ms).

### 4. Category: Collection (Input)

Thu thập dữ liệu người dùng và lưu vào Context.

- **Validation**: Kiểm tra định dạng `email`, `phone`, `number`, `regex`.
- **Flow**:
    1. Gửi `text`.
    2. Chờ phản hồi.
    3. Nếu sai định dạng -> gửi `fallback`.
    4. Nếu đúng -> gán `Context[variable.key] = input` -> chuyển sang `next`.

---

### 5. Navigation & Variable Mapping

- **Next Node Priority**:
    1. `payload.next` (Ưu tiên cao nhất).
    2. `payload.buttons[i].next` (Khi có tương tác).
    3. `children['default']` (Fallback điều hướng).
- **Variable Injection**: Sử dụng cú pháp `{{variable_key}}` trong các trường `text` để render dữ liệu từ Context.

---

### 6. Minimal Implementation Example (AI Prompting)

```json
[
    {
        "id": "START",
        "category": "message",
        "payload": {
            "type": "button",
            "fields": {
                "text": "Hello {{user_name}}, choose a path:",
                "buttons": [{ "type": "postback", "title": "Buy", "payload": { "next": "COLLECT_INFO" } }]
            }
        }
    },
    {
        "id": "COLLECT_INFO",
        "category": "collection",
        "payload": {
            "type": "collection",
            "fields": {
                "text": "Enter your email:",
                "variable": { "type": "email", "key": "email", "next": "END" }
            }
        }
    },
    {
        "id": "END",
        "category": "message",
        "payload": { "type": "text", "fields": { "text": "Success!" } }
    }
]
```
