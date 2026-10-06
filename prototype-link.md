# Hướng dẫn chạy prototype Option C

Prototype hiện chạy local trên máy, không cần tài khoản hoặc login.

## Yêu cầu

- Node.js 20.19 trở lên.
- npm đi kèm Node.js.

## Chạy

Từ thư mục gốc dự án, chuyển vào `front-end/` trước:

```bash
cd front-end
npm install
npm run dev
```

Mở URL Vite in ra trong terminal. Bản QA hiện tại đang chạy tại [`http://127.0.0.1:5174/`](http://127.0.0.1:5174/) vì cổng mặc định `5173` đang được sử dụng.

## Phạm vi hiện tại

- Chỉ có **Option C — Inline Scaffolding Co-pilot**.
- Chọn `agent RAG`, `vector store`, `data cascades` hoặc `observability` ngay trong slide để mở giải thích bên phải.
- Thanh 1–2–3 thay đổi mức phân tích; giải thích và quiz về các thuật ngữ Data Pipeline là nội dung mẫu, chưa gọi AI/model thật.
- Có kiểm tra nhanh một câu trước khi đóng thanh hỗ trợ, nút **Trở về mặc định**, và đổi giao diện sáng/tối.
- Chưa có prototype A/B hoặc URL hosting công khai.
