# Botforge API

Botforge API is the backend for teams and builders who run **visual Facebook Messenger automation**: it executes JSON-defined conversation flows, talks to the Graph API, and keeps dashboards in sync over WebSockets.

[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.x-010101?logo=socket.io&logoColor=white)](https://socket.io/)
[![Prisma](https://img.shields.io/badge/Prisma-7.x-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

**Frontend dashboard:** [https://github.com/lethanhdat-swe/botforge](https://github.com/lethanhdat-swe/botforge)

## Table of contents

- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Environment variables](#environment-variables)
- [API reference](#api-reference)
- [Architecture](#architecture)
- [Project structure](#project-structure)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Prerequisites

| Requirement        | Notes                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| Node.js            | **20+** recommended (ESM-friendly toolchain; local `tsx` / `prisma` via `npm install`).                       |
| MySQL              | **8.x** (or compatible); Prisma `schema.prisma` uses the `mysql` provider.                                    |
| Meta developer app | A Facebook app with **Messenger** configured; webhook callback and verify token must match this service.      |
| `mysqldump`        | On the host that runs **`npm run schedule`**, the `mysqldump` binary must be on `PATH` for scheduled backups. |
| Global tools       | None required; use **`npm run`** / **`npx`** for Prisma, `tsx`, and the dev server.                           |

## Quick start

Run the steps in order from a fresh clone.

```bash
git clone <your-fork-or-remote-url>
cd Botforge-BE
npm install
```

```bash
cp .env.example .env
```

Edit **`.env`**: set **`DATABASE_URL`** for Prisma CLI, **`DATABASE_HOST`**, **`DATABASE_USER`**, **`DATABASE_PASSWORD`**, and **`DATABASE_NAME`** for the runtime MariaDB adapter (keep them consistent with the same logical database). Set **`JWT_ACCESS_SECRET`** and **`JWT_REFRESH_SECRET`** (the app throws on startup if either is missing). Set **`FIREBASE_PROJECT_ID`**, **`FIREBASE_CLIENT_EMAIL`**, and **`FIREBASE_PRIVATE_KEY`** (Firebase Admin initializes at startup and throws if any are missing). Set **`FACEBOOK_APP_ID`**, **`FACEBOOK_APP_SECRET`**, and **`VERIFY_TOKEN`** before you point Meta’s webhook at this API. Set **`FRONTEND_URL`** to your dashboard origin (no trailing slash) so production CORS matches the browser. Fill **email**, **Google Drive**, and other blocks in [Environment variables](#environment-variables) if you use those features.

```bash
npm run prisma:generate
npm run prisma:migrate
```

**`npm run prisma:migrate`** applies migrations to the database in **`DATABASE_URL`**; use a dedicated schema for local development.

```bash
npm run dev
```

When the server starts successfully, the process prints:

```text
Server running on port 8000
```

(The default port is **8000** unless you override **`PORT`**.)

## Environment variables

### Database

| Variable            | Required | Description                                                                                                                                                            | Example                                         |
| ------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `DATABASE_URL`      | Yes      | MySQL URL for Prisma CLI (`prisma.config.ts`) and migrations. ⚠️ Wrong host, port, database name, or credentials cause migrate failures or an empty schema.            | `mysql://user:password@127.0.0.1:3306/botforge` |
| `DATABASE_HOST`     | Yes      | Host for `@prisma/adapter-mariadb` at runtime (`src/config/prisma.ts`). ⚠️ Must point at the same server as in `DATABASE_URL` or the API reads/writes the wrong place. | `127.0.0.1`                                     |
| `DATABASE_USER`     | Yes      | MySQL user for the adapter and for `mysqldump` in the schedule worker.                                                                                                 | `botforge`                                      |
| `DATABASE_PASSWORD` | Yes      | Password for `DATABASE_USER`.                                                                                                                                          | `secret`                                        |
| `DATABASE_NAME`     | Yes      | Database name for the adapter and `mysqldump`. ⚠️ Must match the database you intend to back up.                                                                       | `botforge`                                      |

### Facebook and Meta

| Variable              | Required | Description                                                                                                                                                                         | Example                |
| --------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `FACEBOOK_APP_ID`     | Yes\*    | Meta app ID (OAuth and app-level integration).                                                                                                                                      | `1234567890`           |
| `FACEBOOK_APP_SECRET` | Yes\*    | Meta app secret. ⚠️ Wrong value breaks OAuth and token exchange.                                                                                                                    | `your-app-secret`      |
| `VERIFY_TOKEN`        | Yes\*    | Must match the verify token in the Meta app’s webhook settings. ⚠️ Any mismatch yields **403** on the GET verification handshake; Meta may show no detailed error in the dashboard. | `a-long-random-string` |

\*Required for Messenger webhook verification and Facebook login flows used by the app; other local work may still boot if you only skip Meta-facing features, but production Messenger requires them.

### Auth

| Variable             | Required | Description                                                                                                                                               | Example                 |
| -------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `JWT_ACCESS_SECRET`  | Yes      | Secret for access tokens. ⚠️ Missing value crashes the process when the JWT module loads.                                                                 | `change-me-access`      |
| `JWT_REFRESH_SECRET` | Yes      | Secret for refresh tokens. ⚠️ Missing value crashes the process when the JWT module loads.                                                                | `change-me-refresh`     |
| `ACCESS_EXPIRES`     | No       | Access token lifetime (`jsonwebtoken` `expiresIn`).                                                                                                       | `1h`                    |
| `REFRESH_EXPIRES`    | No       | Refresh token lifetime.                                                                                                                                   | `7d`                    |
| `NODE_ENV`           | No       | `development` or `production`; in development, localhost origins are allowed for CORS in addition to `FRONTEND_URL`.                                      | `development`           |
| `PORT`               | No       | HTTP port for Express and Socket.io (default **8000**). ⚠️ Mismatch with how the dashboard or Meta calls the API breaks connectivity.                     | `8000`                  |
| `BASE_URL`           | No       | Public base URL of this API (documentation and webhook callback examples). ⚠️ Should match the URL Meta and clients use (including HTTPS in production).  | `http://localhost:8000` |
| `FRONTEND_URL`       | No       | Dashboard origin for the CORS allowlist (normalized, no trailing slash). ⚠️ Must match the browser origin in production or the UI fails with CORS errors. | `http://localhost:3000` |

### Socket.io

| Variable | Required | Description                                                                                                                                                                                                                                     | Example |
| -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| —        | —        | The codebase does not read `SOCKET_*` variables. Socket.io shares the HTTP server; clients connect to the same host and port as the API. REST CORS is controlled with `FRONTEND_URL`; the engine’s CORS is set in code (`src/socket/index.ts`). | —       |

### Email

| Variable        | Required              | Description                                         | Example                          |
| --------------- | --------------------- | --------------------------------------------------- | -------------------------------- |
| `MAIL_HOST`     | If sending mail       | SMTP host for the queue worker (`npm run queue`).   | `smtp.example.com`               |
| `MAIL_PORT`     | If sending mail       | SMTP port (defaults to **587** in config if unset). | `587`                            |
| `MAIL_USER`     | If SMTP requires auth | SMTP username.                                      | `user@example.com`               |
| `MAIL_PASSWORD` | If SMTP requires auth | SMTP password.                                      | `secret`                         |
| `MAIL_FROM`     | If sending mail       | From header for outgoing mail.                      | `Botforge <noreply@example.com>` |

### Storage and backup

| Variable                      | Required         | Description                                                                                                                 | Example                                                           |
| ----------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `FIREBASE_PROJECT_ID`         | Yes              | Firebase Admin project ID; loaded at application startup. ⚠️ Missing value prevents the server from starting.               | `your-project-id`                                                 |
| `FIREBASE_CLIENT_EMAIL`       | Yes              | Firebase service account email. ⚠️ Missing value prevents the server from starting.                                         | `firebase-adminsdk@...iam.gserviceaccount.com`                    |
| `FIREBASE_PRIVATE_KEY`        | Yes              | Service account private key; use `\n` escapes in `.env`. ⚠️ Malformed keys fail initialization at startup.                  | `"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"` |
| `GOOGLE_CLIENT_ID`            | For Drive backup | OAuth client ID for uploading scheduled SQL dumps.                                                                          | —                                                                 |
| `GOOGLE_CLIENT_SECRET`        | For Drive backup | OAuth client secret.                                                                                                        | —                                                                 |
| `GOOGLE_CLIENT_REFRESH_TOKEN` | For Drive backup | Refresh token for Drive API access.                                                                                         | —                                                                 |
| `GOOGLE_DRIVE_FOLDER_ID`      | For Drive backup | Target Drive folder for backups. ⚠️ Wrong ID uploads backups to the wrong folder or fails silently from an ops perspective. | —                                                                 |

## API reference

Base path: **`/api`**. Most authenticated routes expect **`Authorization: Bearer <access_token>`**. The JWT payload includes `id` and `role` (`admin` | `user`). Admin-only routes additionally require **`role: admin`**. JSON responses use the app’s `success` / `error` helpers from the response middleware unless noted.

### Webhook

| Method | Path           | Auth                                         | Request (key fields)                                   | Response (key fields)                  |
| ------ | -------------- | -------------------------------------------- | ------------------------------------------------------ | -------------------------------------- |
| GET    | `/api/webhook` | No (verify token in query)                   | Query: `hub.mode`, `hub.verify_token`, `hub.challenge` | Raw challenge string on success        |
| POST   | `/api/webhook` | No (Meta-signed delivery; configure in Meta) | Body: Meta `object`, `entry[]` with `messaging`        | `200` with plain text `EVENT_RECEIVED` |

```bash
curl -s "http://localhost:8000/api/webhook?hub.mode=subscribe&hub.verify_token=YOUR_VERIFY_TOKEN&hub.challenge=hello"
```

### Flows

| Method | Path                           | Auth | Request (key fields)                                     | Response (key fields)        |
| ------ | ------------------------------ | ---- | -------------------------------------------------------- | ---------------------------- |
| POST   | `/api/flows`                   | Yes  | Flow fields from body (merged with `userId` server-side) | Created flow                 |
| GET    | `/api/flows`                   | Yes  | Query pagination / filters                               | Flow list                    |
| GET    | `/api/flows/:id`               | Yes  | —                                                        | Flow detail                  |
| PATCH  | `/api/flows/:id`               | Yes  | Updatable flow fields                                    | Updated flow                 |
| PATCH  | `/api/flows/toggle-active/:id` | Yes  | —                                                        | Updated flow                 |
| DELETE | `/api/flows/:id`               | Yes  | —                                                        | Deleted flow                 |
| POST   | `/api/flows/delete-many`       | Yes  | `ids`                                                    | Bulk delete result           |
| POST   | `/api/flows/:id/duplicate`     | Yes  | —                                                        | Duplicated flow              |
| GET    | `/api/flow-records`            | Yes  | Query filters                                            | Flow run records             |
| GET    | `/api/pages/:flowId`           | Yes  | —                                                        | Page / token detail for flow |
| POST   | `/api/pages/connect/:flowId`   | Yes  | Connection payload per controller                        | Connected page               |
| DELETE | `/api/pages/:flowId`           | Yes  | —                                                        | Disconnect result            |

```bash
curl -s -H "Authorization: Bearer <access_token>" "http://localhost:8000/api/flows"
```

### Conversations

| Method | Path                                     | Auth                                | Request (key fields)                                                                                     | Response (key fields) |
| ------ | ---------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------- |
| POST   | `/api/conversations`                     | Optional Bearer + live-chat headers | Body per controller; anonymous clients use `X-Anonymous-Id` / `X-Anonymous-Display-Name` when applicable | Conversation          |
| GET    | `/api/conversations/current`             | Optional Bearer + live-chat headers | —                                                                                                        | Current conversation  |
| GET    | `/api/conversations/:id`                 | Yes                                 | —                                                                                                        | Conversation detail   |
| PATCH  | `/api/conversations/:id`                 | Yes                                 | Updatable fields                                                                                         | Updated conversation  |
| DELETE | `/api/conversations/:id`                 | Yes                                 | —                                                                                                        | Deletion result       |
| GET    | `/api/messages`                          | Optional Bearer + live-chat headers | Query: conversation scope                                                                                | Message list          |
| POST   | `/api/messages`                          | Optional Bearer + live-chat headers | Message body                                                                                             | Created message       |
| PATCH  | `/api/messages/read-all/:conversationId` | Optional Bearer + live-chat headers | —                                                                                                        | Read receipts         |
| PATCH  | `/api/messages/:id/revoke`               | Per route                           | —                                                                                                        | Revoked message       |
| DELETE | `/api/messages/:id`                      | Per route                           | —                                                                                                        | Deletion result       |

```bash
curl -s -H "Authorization: Bearer <access_token>" "http://localhost:8000/api/conversations/<conversation_id>"
```

### Auth

| Method | Path                               | Auth | Request (key fields)                     | Response (key fields)                            |
| ------ | ---------------------------------- | ---- | ---------------------------------------- | ------------------------------------------------ |
| GET    | `/api/auth/me`                     | Yes  | —                                        | Current user                                     |
| POST   | `/api/auth/register`               | No   | `email`, `password`, `displayName`       | Registration message (verification email queued) |
| POST   | `/api/auth/verify-email`           | No   | `token`                                  | Verification result                              |
| POST   | `/api/auth/login`                  | No   | `email`, `password`                      | Tokens + user                                    |
| POST   | `/api/auth/google`                 | No   | Google credential payload per controller | Tokens + user                                    |
| POST   | `/api/auth/forgot-password`        | No   | `email`                                  | Status message                                   |
| POST   | `/api/auth/verify-reset-password`  | No   | Token fields per controller              | Reset step result                                |
| POST   | `/api/auth/reset-password`         | No   | New password + token fields              | Status message                                   |
| POST   | `/api/auth/refresh-token`          | No   | Refresh token body                       | New tokens                                       |
| POST   | `/api/auth/logout`                 | No   | Per controller                           | Logout result                                    |
| GET    | `/api/facebook-auth/check-connect` | Yes  | —                                        | Facebook connection state                        |
| GET    | `/api/facebook-auth/list-pages`    | Yes  | —                                        | Page list for linking                            |
| POST   | `/api/facebook-auth/login`         | Yes  | OAuth payload per controller             | Facebook account linked                          |
| DELETE | `/api/facebook-auth/logout`        | Yes  | —                                        | Disconnect result                                |

```bash
curl -s -X POST "http://localhost:8000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"you@example.com\",\"password\":\"your-password\"}"
```

### Admin

| Method | Path                                        | Auth       | Request (key fields) | Response (key fields)   |
| ------ | ------------------------------------------- | ---------- | -------------------- | ----------------------- |
| GET    | `/api/dashboard/admin`                      | Yes, admin | —                    | Admin dashboard stats   |
| GET    | `/api/flows/admin`                          | Yes, admin | Query filters        | All flows               |
| GET    | `/api/conversations/list`                   | Yes, admin | Query filters        | Conversation list       |
| GET    | `/api/users/admin/list`                     | Yes, admin | Query filters        | User list               |
| GET    | `/api/posts/admin`                          | Yes, admin | Query filters        | Post list (admin)       |
| POST   | `/api/posts`                                | Yes, admin | Post body            | Created post            |
| PATCH  | `/api/posts/:id`                            | Yes, admin | Fields               | Updated post            |
| DELETE | `/api/posts/:id`                            | Yes, admin | —                    | Deleted post            |
| POST   | `/api/posts/delete-many`                    | Yes, admin | `ids`                | Bulk delete             |
| POST   | `/api/post-categories`                      | Yes, admin | Category body        | Created category        |
| PATCH  | `/api/post-categories/:id`                  | Yes, admin | Fields               | Updated category        |
| DELETE | `/api/post-categories/:id`                  | Yes, admin | —                    | Deleted category        |
| POST   | `/api/post-categories/delete-many`          | Yes, admin | Bulk payload         | Bulk delete             |
| GET    | `/api/flow-shares/admin`                    | Yes, admin | Query filters        | Flow share list (admin) |
| GET    | `/api/flow-share-downloads/admin`           | Yes, admin | Query filters        | Download records        |
| DELETE | `/api/flow-share-downloads/:id`             | Yes, admin | —                    | Deleted record          |
| POST   | `/api/flow-share-downloads/delete-many`     | Yes, admin | Bulk payload         | Bulk delete             |
| POST   | `/api/flow-share-categories`                | Yes, admin | Body                 | Created category        |
| PATCH  | `/api/flow-share-categories/:id`            | Yes, admin | Fields               | Updated category        |
| DELETE | `/api/flow-share-categories/:id`            | Yes, admin | —                    | Deleted category        |
| POST   | `/api/flow-share-categories/bulk-delete`    | Yes, admin | Bulk payload         | Bulk delete             |
| GET    | `/api/flow-share-categories/utils/generate` | Yes, admin | —                    | Generator utility       |

```bash
curl -s -H "Authorization: Bearer <admin_access_token>" "http://localhost:8000/api/dashboard/admin"
```

**Also available (authenticated unless noted):** `GET /api/` welcome JSON; public **`GET /api/posts/public`**, **`GET /api/posts/category/:categorySlug`**, **`GET /api/posts/slug/:slug`**; public **`GET /api/flow-shares/public`**, **`GET /api/flow-shares/related/:id`**; public **`GET /api/post-categories`**, **`GET /api/post-categories/:id`**; **`GET /api/flow-share-categories`**, **`GET /api/flow-share-categories/:slug`**; **`/api/notifications/*`**, **`/api/upload/*`**, **`/api/users/*`** (non-admin user management), **`/api/flow-shares/*`**, **`/api/flow-share-comments/*`**, **`/api/flow-share-likes/*`**, **`/api/flow-share-saves/*`**, **`/api/flow-share-downloads/*`** (user-scoped routes), and **`GET /api/dashboard/user`**.

## Architecture

Botforge API is **event-driven**: Meta delivers Messenger activity to your webhook, the service decides which **flow record** (a single run of a flow for one sender) should advance, and the **flow executor** walks the stored graph until it must wait for input, finish, or error. Outbound messages go out through the **Facebook Graph API** using each page’s stored access token.

Flows are stored as JSON that maps cleanly to TypeScript types under **`src/types/flows/`**. At runtime the executor treats that JSON as a **directed graph**: each **node** has an **`id`**, an ordered **`payload`** array whose items are **`message`**, **`action`**, or **`collection`**, and an optional linear **`next`** pointer to the following node. **Payload handlers** return a small discriminated result: **`CONTINUE`** may carry an explicit **`nextNodeId`** for branching, **`WAITING`** stops the loop until the user sends input that passes validation, and **`NONE`** lets execution fall through to the next payload or the node’s **`next`**. **`FlowExecutorService`** loops: it persists the current node on the flow record, runs each payload (which may call **`facebook-sender.service`** to send Messenger content), and marks the record complete or failed when the graph ends or an error surfaces.

**Inbound** traffic is handled by **`facebook-webhook.service`**, which classifies **messages** (including quick replies whose payload may be JSON carrying **`flowRecordId`**) and **postbacks**, resumes **pending** records with regex checks and timeouts, or starts new runs when no active record applies.

**Socket.io** shares the same Node **HTTP server** as Express. When a client connects, it joins rooms based on handshake query parameters: **`user:{userId}`**, **`conversation:{conversationId}`**, **`anon:{anonymousId}`**, and role buckets such as **`admin:sidebar`** and **`support:online`**. Server code emits **notifications**, **live chat messages**, and lightweight **admin sidebar refresh** signals so dashboards update without polling.

The **webhook middleware** enforces **`object === 'page'`**, flattens **`messaging`** events, drops **echoes** and **duplicate `mid` values** using an in-memory set cleared on a timer, and passes a normalized event list to the controller. The **GET** handler completes Meta’s subscription handshake only when **`hub.verify_token`** equals your configured verify token. **Concurrency** on a single sender is guarded with flow-record status transitions such as **`trySetProcessing`** so duplicate deliveries from Meta do not run the same step twice.

```text
Facebook  -->  Webhook (Express)  -->  Flow executor  -->  Graph API  -->  Facebook
                      |
                      v
                 Socket.io  -->  Dashboard
```

## Project structure

```text
Botforge-BE/
├── prisma/
│   ├── schema.prisma          Defines MySQL models and enums consumed by Prisma Client.
│   └── migrations/            Versioned SQL migrations applied by Prisma migrate.
├── src/
│   ├── config/                Loads environment, Prisma adapter client, Firebase Admin, and mailer settings.
│   ├── constants/             Shared magic strings for HTTP, queues, flows, and folders.
│   ├── controllers/         Thin HTTP adapters that call services and shape responses.
│   ├── helpers/             Pure flow-graph helpers such as resolving the current node from stored JSON.
│   ├── middlewares/         Cross-cutting concerns: JWT auth, roles, CORS-related behavior, webhook parsing, uploads, errors.
│   ├── routes/              Express routers mounted under `/api` by `index.ts`.
│   ├── schedules/           Jobs invoked by the cron worker (database dump, filesystem cleanup).
│   ├── services/            Business logic, Meta integration, flow execution, email, and persistence orchestration.
│   ├── socket/              Socket.io server setup and typed emit helpers for rooms and events.
│   ├── types/flows/         Strict TypeScript contracts for flow JSON (nodes, messages, actions, collections).
│   ├── utils/               Small shared helpers (JWT wrappers, pagination, URLs, time, files).
│   ├── index.ts             Creates the HTTP server, applies middleware, mounts `/api`, and attaches Socket.io.
│   ├── queue.ts             Long-running loop that claims email jobs from the database queue and sends mail.
│   └── schedule.ts          Registers cron jobs that trigger backup and maintenance schedules.
├── uploads/                 User-uploaded files served statically at `/uploads`.
├── package.json
├── prisma.config.ts         Prisma CLI configuration; reads `DATABASE_URL` for migrations.
└── tsconfig.json
```

## Scripts

| Script                  | Command                                              | When to use                                                                            |
| ----------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `dev`                   | `npx nodemon`                                        | Local API development with reload (`tsx ./src/index.ts`).                              |
| `build`                 | `rimraf ./dist && tsc && tsc-alias -p tsconfig.json` | Produce `dist/` for production.                                                        |
| `start`                 | `node dist/index.js`                                 | Run the compiled API after `build`.                                                    |
| `queue`                 | `tsx ./src/queue.ts`                                 | Run as a separate process so verification and password emails leave the `queue` table. |
| `schedule`              | `tsx ./src/schedule.ts`                              | Run as a separate process for nightly backup and trash cleanup crons.                  |
| `lint`                  | `eslint .`                                           | Static analysis in CI or before commits.                                               |
| `lint:fix`              | `eslint . --fix`                                     | Apply automatic ESLint fixes.                                                          |
| `prettier`              | `prettier --check .`                                 | Check formatting without writing files.                                                |
| `prettier:fix`          | `prettier --write .`                                 | Reformat the codebase with Prettier.                                                   |
| `prisma:generate`       | `prisma generate`                                    | Regenerate the Prisma Client after pulling or editing `schema.prisma`.                 |
| `prisma:migrate`        | `prisma migrate dev`                                 | Create and apply a new migration during development.                                   |
| `prisma:migrate:deploy` | `prisma migrate deploy`                              | Apply pending migrations in staging or production.                                     |
| `prisma:studio`         | `prisma studio`                                      | Browse and edit data with Prisma’s GUI.                                                |
| `prisma:format`         | `prisma format`                                      | Normalize `schema.prisma` formatting.                                                  |

## Troubleshooting

| Symptom                                                       | What to check                                                                                                                                                                                                                                  |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Meta webhook shows failure or never verifies                  | **`VERIFY_TOKEN`** in `.env` must equal the verify token in the Meta app. On mismatch the API returns **403** and may log little beyond the failed check—fix the token and retry the callback verification.                                    |
| Crash on import mentioning Prisma Client or `@prisma/client`  | Run **`npm run prisma:generate`** after install or schema changes; without it imports of the generated client fail immediately.                                                                                                                |
| `ECONNREFUSED` or Prisma errors mentioning MySQL on boot      | Confirm MySQL is running, **`DATABASE_URL`** is correct for migrate, and **`DATABASE_HOST` / `DATABASE_USER` / `DATABASE_PASSWORD` / `DATABASE_NAME`** match the same database the API should use at runtime.                                  |
| Socket.io clients never see events                            | Clients must connect with query params that match server room rules (`userId`, `conversationId`, `anonymousId`, `role`) so the socket joins `user:…`, `conversation:…`, or `anon:…`; emitting to a room no client joined produces no delivery. |
| Email jobs stay `pending` forever                             | The **`npm run queue`** worker must be running against the same database; if it is stopped, jobs are never claimed.                                                                                                                            |
| Schedule worker logs `mysqldump` errors or exit code non-zero | Install the MySQL client tools so **`mysqldump`** is on **`PATH`**, and ensure **`DATABASE_USER`**, **`DATABASE_PASSWORD`**, and **`DATABASE_NAME`** match a user that can dump the schema.                                                    |

## License

ISC — see `package.json`.
