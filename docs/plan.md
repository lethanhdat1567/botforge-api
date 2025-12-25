## Xây dựng hệ thống Backend basic

# Công nghệ sử dụng:

- NodeJs
- ExpressJS
- Prisma
- Database MySQL

# Quy trình hoàn thành BE

1. Setup Project

Tạo folder backend, init package.json

Cài đặt Node.js, Express, Prisma, MySQL driver, dotenv, cors

Cấu hình TypeScript (tsconfig.json)

Tạo file entry point (src/server.ts)

Cấu hình .env (DB connection, JWT secret, port)

Cấu hình ESLint + Prettier để code sạch

2. Khởi tạo Database

Khởi tạo Prisma (npx prisma init)

Viết schema cơ bản:

User (id, email, password)

Flow (id, name, userId, status)

Node (id, type, data, flowId)

Action (id, type, nodeId)

Trigger (id, type, flowId)

Message (id, content, userId, flowId, nodeId)

Tạo migration & migrate DB

Seed data test (user, flow, node)

Tạo các relation chuẩn giữa User → Flow → Node → Action

3. Auth

API register (/auth/register) + hash password

API login (/auth/login) → trả JWT token

Middleware bảo vệ route bằng JWT

Middleware decode token để lấy userId cho các API

4. CRUD User Flow

API tạo, update, delete flow (/flows)

API list flow theo user

API thêm, sửa, xóa node trong flow

Validate flow trước khi lưu

Tách logic flow vào service riêng để backend dễ maintain

5. Execute Engine

Hàm executeFlow(flowId, input):

Lấy flow + nodes từ DB

Duyệt node theo thứ tự

Thực thi action (dummy action trước)

Lưu log execution step

Trả output

Test API simulate flow execution

Đảm bảo deterministic + có thể debug

6. Save Message, Step, Status Flow

Lưu tin nhắn gửi/nhận vào bảng Message

Lưu trạng thái từng step của flow

API fetch history messages & steps

Lưu flow completion status (done / in-progress)

Nếu muốn realtime: tích hợp socket.io sau

7. Middleware & Error Handling

Middleware validate input (zod / custom)

Middleware xử lý lỗi + log

CORS config cho frontend

8. Testing

Unit test backend logic

Integration test API

Manual test flow execution

Seed data test để frontend fetch

9. Dev Flow gợi ý

Setup project + DB

User/Auth module

CRUD flow & node

Execute engine

Save messages & status

Middleware & error handling

Testing & seed data
