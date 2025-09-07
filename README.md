# Slack Clone

Dự án Slack Clone là ứng dụng chat nhóm thời gian thực, xây dựng với **React TypeScript** cho frontend và **NodeJS ExpressJS** cho backend. Dự án sử dụng các dịch vụ hiện đại như **MongoDB**, **Stream**, **Clerk**, **Inngest**, **Sentry**, **TailwindCSS** và deploy trên **Vercel**.

## Demo

- **Frontend:** [https://slack-clone-frontend-woad.vercel.app](https://slack-clone-frontend-woad.vercel.app)
- **Backend:** [https://slack-clone-backend-eta.vercel.app](https://slack-clone-backend-eta.vercel.app)

## Công nghệ sử dụng

- **Frontend:** React, TypeScript, TailwindCSS, Clerk (xác thực), Sentry (giám sát lỗi)
- **Backend:** NodeJS, ExpressJS, MongoDB, Stream (chat realtime), Inngest (event workflow), Sentry
- **Triển khai:** Vercel

## Tính năng chính

- Đăng ký, đăng nhập, xác thực người dùng với Clerk
- Chat nhóm realtime với Stream
- Quản lý kênh chat, thành viên
- Lưu trữ dữ liệu với MongoDB
- Giám sát lỗi với Sentry
- Xử lý event workflow với Inngest
- Giao diện đẹp với TailwindCSS

## Cài đặt & chạy local

### Backend

```bash
git clone https://github.com/TanMinhNgo/slack-clone.git
cd slack-clone
npm install
# Thêm file .env với các biến môi trường cần thiết (MongoDB, Clerk, Stream, ...)

npm run dev

```

## Cấu hình môi trường

Thêm các biến môi trường vào file `.env` ở cả frontend và backend:

- **Clerk:** CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY
- **Stream:** STREAM_API_KEY, STREAM_API_SECRET
- **MongoDB:** MONGODB_URI
- **Sentry:** SENTRY_DSN

## Liên hệ

Nếu có thắc mắc hoặc lỗi, vui lòng liên hệ qua email hoặc tạo issue trên GitHub.

---

**Made with ❤️ by [TanMinhNgo]**