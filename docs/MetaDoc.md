## Meta Doc

### 1. Tổng quan về nền tảng

# Messenger Platform

App = bot logic
Page = kênh chat
User = người dùng (PSID theo Page)

Flow:
User action
→ Webhook Event
→ Bot xử lý
→ Send API trả lời

Rule:

- Bot chỉ nhắn khi user tương tác
- Bị ràng buộc 24h / messaging_type / message_tag
- Vi phạm → block Page/App

### 2. Thiết lập & xác thực

- Meta App: chứa bot logic, webhook, permissions
- Page Access Token: bắt buộc khi gửi tin
- Webhook Verification: xác minh server → mới nhận event
- Permissions & App Mode: quyết định bot làm được gì, dev vs live

Flow:
App → Page → Webhook → Send API

### 3. Webhooks & Events

- Webhook subscription: đăng ký Page + các event cần nhận
- Meta gửi HTTP POST về webhook khi có user action
- Không subscribe → không có event

Events chính:

- messages: user gửi tin
- messaging_postbacks: user bấm button
- messaging_referrals: vào bot qua link/ads
- message_reads / message_deliveries: trạng thái tin nhắn

Event payload:

- object = page
- entry[] → messaging[]
- sender.id = PSID
- Một request có thể chứa nhiều event

Retry:

- Webhook không trả 200 → Meta retry
- Event có thể bị gửi trùng
- Server phải xử lý idempotent

Engine mapping:

- Webhook = Event Gateway
- Event = Trigger Node
- Payload = Input Context

### 4. Người dùng & định danh

- PSID: định danh user theo Page, dùng cho mọi event & message
- Cùng user, khác Page → PSID khác
- PSID = user_id trong chatbot

- User Profile API: lấy thông tin cơ bản (name, avatar, locale, timezone)
- Nên cache, chỉ dùng để cá nhân hoá

- Locale & Timezone: xác định ngôn ngữ và múi giờ user

Engine:

- PSID = primary key
- Profile = metadata
- Locale/Timezone = context

### 5. Send API (Gửi tin nhắn)

- Send API = cách duy nhất để bot gửi tin
- Gửi từ Page → User (qua PSID)
- Bắt buộc có Page Access Token

- messaging_type:
    - RESPONSE: trả lời user (phổ biến)
    - UPDATE: gửi cập nhật
    - MESSAGE_TAG: gửi ngoài 24h (cần tag)

- Message payload:
    - recipient.id (PSID)
    - messaging_type
    - message (text / attachment / template)

Engine:

- Send API = output layer
- messaging_type = policy guard
- payload = message node

### 6. Message Components

- Text Message  
  → Tin nhắn văn bản đơn giản

- Attachments & Assets  
  → Gửi ảnh, video, audio, file  
  → Có thể dùng URL hoặc asset đã upload

- Buttons  
  → Nút tương tác trong tin nhắn  
  → Có thể mở link hoặc gửi postback payload

- Quick Replies  
  → Nút trả lời nhanh, gắn với message  
  → Dùng để dẫn flow, biến mất sau khi chọn

- Sender Actions  
  → Hành động UX (typing_on, mark_seen)  
  → Không phải tin nhắn nội dung

### 7. Message Templates

- Button Template
- Generic Template
- Media Template
- Product Template
- Receipt Template
- Coupon Template
- Customer Feedback Template
- Utility Message

### 8. Entry Points & Navigation

- Welcome Screen
- Get Started Button
- Persistent Menu

### 9. Logic & Interaction

- Postback Payload
- Quick Reply Payload
- Referral (Bot vào bằng cách nào)
- Context handling (Bot đang ở đâu)

### 10. Messaging Rules & Policies

- 24-hour Messaging Rule
- Message Tags
- Messaging Types
- Rate Limiting

### 11. Handover Protocol

- Thread Control
- Pass Thread Control
- Take Thread Control

### 12. Persona & Advanced Features

- Persona API
- Multiple bot identities

### 13. Testing & Debugging

- Webhook testing
- Graph API Explorer
- Error handling & logs

### 14. App Review & Production

- App Review for Messenger
- Permissions approval
- Go-live checklist
