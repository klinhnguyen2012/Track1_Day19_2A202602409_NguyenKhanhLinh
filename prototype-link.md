# Hướng dẫn mở prototype Option C

Prototype hiện chạy local trên máy, không cần tài khoản hoặc login.

## Link test nhóm A/B/C

| Option | Prototype |
| :--- | :--- |
| **A — Socratic Diagnostic Chat** | [Mở Option A](https://claude.ai/artifact/7H3kBwiWinyEqc4qwsrW9j) |
| **B — Prerequisite Concept Radar** | [Mở Option B](https://claude.ai/artifact/J7Wkb6t16k65KW6TKtfxi4) |
| **C — Inline Scaffolding Co-pilot** | [Mở Option C trên Vercel](https://track1-day19-2-a202602409-nguyenkh.vercel.app/) |

Ba prototype nằm ở các URL riêng. Trong test nhóm, mở cùng slide và giao cùng outcome task cho từng option; facilitator chỉ quan sát và không hướng dẫn thao tác.

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

## Option C trong repo Linh

- Đây là prototype cá nhân **Option C — Inline Scaffolding Co-pilot**; A/B nằm ở prototype riêng của thành viên phụ trách.
- Chọn `agent RAG`, `vector store`, `data cascades` hoặc `observability` ngay trong slide để mở giải thích bên phải.
- Thanh 1–2–3 thay đổi mức phân tích; giải thích và quiz về các thuật ngữ Data Pipeline là nội dung mẫu, chưa gọi AI/model thật.
- Có kiểm tra nhanh một câu trước khi đóng thanh hỗ trợ, nút **Trở về mặc định**, và đổi giao diện sáng/tối.

**Evidence test hiện có:** Note gốc của Nhung ghi tester đã tự thao tác A/B/C với cùng task; facilitator không cầm chuột hay giải thích giao diện. Ghi chú A/B/C đã được đưa vào `prototype-feedback-note.md`. Trước khi đánh dấu Gate 4 đạt cho các link đang chia sẻ, đối chiếu xem từng prototype có còn cùng phiên bản với buổi test không. Link C mới chưa xác minh truy cập được từ môi trường hiện tại; thử mở trên trình duyệt trước buổi test.
