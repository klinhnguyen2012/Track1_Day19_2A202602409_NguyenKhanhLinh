# Prototype Feedback Note — Option C

**Tester/context:** Một tester ngoài nhóm, có background học về tech. Tester cho biết đôi khi gặp chỗ mắc khi học nhưng thường hỏi chatbot nên không bị kẹt quá lâu. Phiên này chỉ test Option C.

| Observation | Note |
| :--- | :--- |
| **First action** | Tester bấm vào thuật ngữ được highlight đầu tiên. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Không ghi nhận tester dừng, do dự, hiểu sai hoặc cần trợ giúp trong flow. |
| **Evidence được đọc hay bỏ qua** | Tester đọc phần giải thích; hoàn thành câu hỏi trắc nghiệm và trả lời đúng. Không để ý chú giải màu phân biệt kiến thức mới với kiến thức nền. |
| **Cách tester sửa hoặc lấy lại control** | Tester mở xem một thuật ngữ khác, sau đó chọn **“Tiếp tục”**. Tester hoàn tất flow trong dưới một phút. |
| **Option được chọn** | **C — đã test riêng.** Tester không được thử A/B nên đây không phải lựa chọn sau khi so sánh ba option. |
| **Lý do và trade-off** | Ghi nhận trong phiên: chữ highlight rất rõ; flow dễ theo và tester tiếp tục thuận lợi. Chưa có bằng chứng về lựa chọn hay trade-off giữa A/B/C. |
| **Evidence chống lại kỳ vọng của nhóm** | Tester không nhận ra chú giải màu. Vì vậy, chưa thể giả định rằng màu sắc tự giải thích được phần kiến thức mới và kiến thức nền. |

## Tách bốn lớp

- **OBSERVED:** Tester ngoài nhóm, có background tech, bấm thuật ngữ highlight đầu tiên, đọc giải thích, làm đúng quiz trong dưới một phút, mở thuật ngữ khác, rồi chọn “Tiếp tục”. Không ghi nhận do dự hoặc cần trợ giúp. Tester không để ý chú giải màu.
- **INTERPRETED:** Trong phiên này, cách highlight và flow có vẻ đủ rõ để tester khám phá phần giải thích và quay lại học tiếp. Chú giải màu hiện chưa thu hút sự chú ý. Đây là diễn giải từ một phiên test, chưa đủ để kết luận về người học nói chung.
- **DECIDED — NEXT CHANGE:** Làm chú giải màu dễ nhận thấy hơn mà không làm rối nội dung bài; ở phiên kế tiếp quan sát xem tester có nhận ra và giải thích đúng ý nghĩa màu hay không.
- **STILL UNPROVEN:** Chưa biết người học có hiểu sâu hơn nhờ giải thích hay chỉ hoàn thành đúng câu quiz; chưa kiểm tra mức độ phân tích 1–2–3 với tester này; chưa so sánh C với A/B; chưa biết kết quả có lặp lại ở người học ngoài nhóm tech hoặc với nhiều tester hơn.

**Next Change:** Tăng khả năng nhìn thấy chú giải màu, rồi kiểm tra lại với tester kế tiếp xem họ có để ý và hiểu cách phân biệt kiến thức mới với kiến thức nền không.

---

## Feedback bổ sung — Nhung (đã thử đầy đủ A/B/C)

**Tester/context:** Nhung từng tự học bài về Data Pipeline & Observability và khựng khi gặp “agent RAG”, “vector store” cùng “data cascades”. Nhung từng học SQL/database cơ bản, đã tìm Google/YouTube nhưng thấy tài liệu dài và mất hứng. Buổi test kéo dài khoảng 20 phút; Nhung tự cầm chuột từ đầu đến cuối, facilitator chỉ quan sát, bấm giờ và ghi chép.

| Observation | Option A — Socratic Diagnostic Chat | Option B — Prerequisite Concept Radar | Option C — Inline Scaffolding Co-pilot |
| :--- | :--- | :--- | :--- |
| **First action** | Đọc slide khoảng 12 giây, dừng ở “agent RAG” và “vector store”, rồi bấm “Tôi chưa hiểu đoạn này”. | Mở tab B, quan sát khoảng 10 giây rồi chọn node viền cam “Vector Store & Embeddings”. | Bấm “agent RAG” ngay trong slide rồi kéo slider độ sâu. |
| **Chỗ dừng / do dự / hiểu sai** | Đọc lựa chọn câu hỏi 1 trong 14 giây; ở câu 2 do dự 9 giây giữa A/B và chọn B, được ghi là sai. | Bối rối vì nhiều mũi tên/node, không rõ đọc từ đâu; sau khi chọn node đầu, bấm thêm hai node và thấy rối mắt. | Ban đầu mải thử slider, không thấy quiz bên dưới; chỉ phát hiện sau khi kéo đến Mức 3 và cuộn xuống. |
| **Evidence được đọc / bỏ qua** | Đọc kỹ thẻ kết luận, chú ý dòng “Độ tin cậy: 88%” và đọc phần tóm tắt. | Đọc lướt phần Database cũ; dừng lâu ở “Mối liên hệ với bài học hiện tại”. | Dừng lâu ở Mức 2, đọc so sánh Database truyền thống với Vector Store trong RAG; ban đầu bỏ qua quiz. |
| **Sửa / lấy lại control** | Rê chuột qua “Chẩn đoán lại” và “Tôi tự chọn bài ôn” nhưng không bấm; nói phần chẩn đoán đã đúng chỗ vướng nên không cần sửa. | Bấm “Đặt lại bản đồ” sau khi chọn nhiều node; thử “Đối chiếu thuật ngữ trên slide” và thấy slide được viền xanh. | Kéo slider Mức 2 → 1 → 3; làm đúng quiz rồi đóng panel để quay lại slide. |
| **Kết quả** | Nhận ra cần hiểu quan hệ giữa Database/index ngữ nghĩa và LLM/router; đánh giá phần tóm tắt đủ rõ. | Tìm thấy liên hệ với bài, nhưng nhiều node làm thao tác lúc đang kẹt trở nên quá tải. | Hiểu hơn qua so sánh cũ/mới, làm đúng quiz và quay lại bài. |

**Lựa chọn:** Nhung chọn kết hợp — ưu tiên **C** khi đọc slide hằng ngày, giữ **A** làm phương án hỗ trợ khi hoàn toàn bế tắc. Không chọn **B** cho lúc đang kẹt bài; Nhung nói bản đồ có thể phù hợp hơn khi ôn tổng kết.

**Lý do và trade-off:** C tiện vì giải thích ngay tại chỗ mà không che slide; đổi lại, người học phải tự nhận ra thuật ngữ đang gây khó. A chủ động chẩn đoán nhưng cần trả lời câu hỏi và tạm ngắt dòng đọc. B cho cái nhìn tổng quan nhưng nhiều node/mũi tên gây quá tải trong tình huống cần gỡ kẹt nhanh.

**Evidence chống lại kỳ vọng:** Nhóm dự đoán B có thể hấp dẫn nhờ tính trực quan; Nhung lại thấy bản đồ gây ngợp khi đang cần tiếp tục học. Quiz ở C cũng bị bỏ qua lúc đầu.

### Tách bốn lớp — Nhung

- **OBSERVED:** Nhung thử cả ba option, có lúc trả lời sai câu chẩn đoán A, chọn nhiều node rồi reset ở B, và ban đầu không thấy quiz ở C. Cuối cùng chọn C cho đọc thường ngày và A làm hỗ trợ khi bế tắc.
- **INTERPRETED:** Với Nhung, nối thuật ngữ mới với database/index đã biết giúp gỡ kẹt. Chẩn đoán A có ích khi cần AI dẫn dắt; B tăng tải lựa chọn khi người học đang vội.
- **DECIDED — NEXT CHANGE (ghi trong note gốc):** Cân nhắc đưa một lối chẩn đoán ngắn từ A vào panel inline của C; chuyển B thành công cụ ôn tập cuối bài/chương; giữ micro-check sau phần giải thích. Đây là đề xuất từ một phiên test, chưa phải quyết định đã kiểm chứng.
- **STILL UNPROVEN:** Chưa biết tester còn nhớ khái niệm sau vài ngày hay không; chưa thử C trên mã nguồn/cấu hình phức tạp hoặc dạng bài khác. Một phiên chưa đủ để kết luận user nào cũng cần cùng flow.

---

## Feedback bổ sung — Tester 3 (đã thử A/B/C)

**Tester/context:** Người học từng tự học AI/Data qua slide và gặp thuật ngữ khó. Ghi chú dưới đây được tổng hợp từ phản hồi người dùng cung cấp; transcript/ghi âm chưa được cung cấp.

| Observation | Note |
| :--- | :--- |
| **A — First action** | Mở chat và nhập ngay thuật ngữ hoặc phần chưa hiểu. |
| **A — Chỗ dừng / ma sát** | Hơi do dự khi phải trả lời liên tiếp vài câu chẩn đoán; tester cảm thấy mất nhịp học. |
| **A — Kết quả / quyết định** | Xác định được một khái niệm nền còn thiếu, nhưng muốn quay lại bài nhanh hơn thay vì chat lâu. |
| **B — First action** | Mở radar và xem các khái niệm liên quan. |
| **B — Chỗ dừng / ma sát** | Dừng để hiểu các mức/quan hệ giữa khái niệm; không cần facilitator hỗ trợ. Phân vân nên bắt đầu từ node nào khi có nhiều lựa chọn. |
| **B — Kết quả / quyết định** | Tìm được kiến thức nền cần xem lại. |
| **C — First action** | Bấm trực tiếp vào ký hiệu/thuật ngữ khó trong bài. |
| **C — Chỗ dừng / ma sát** | Gần như không do dự; hiểu phần giải thích ngắn và giữ được ngữ cảnh bài học. |
| **C — Kết quả / quyết định** | Tìm được phần cần biết và chọn tiếp tục bài ngay sau đó. |
| **Option được chọn** | **C — Inline Scaffolding Co-pilot.** Tester chọn C vì hỗ trợ xuất hiện tại chỗ đang vướng, ít chuyển ngữ cảnh và không cần viết prompt dài. |
| **So sánh / evidence trái kỳ vọng** | Tester nhận xét A nghe có vẻ thông minh nhưng gây nhiều ma sát hơn; B giúp nhìn kiến thức nền nhưng nhiều lựa chọn có thể gây quá tải. C đơn giản hơn nhưng phù hợp hơn với cách học của tester này. |

### Tách bốn lớp — Tester 3

- **OBSERVED:** Tester nhập thuật ngữ vào A và do dự trước chuỗi câu hỏi; mở B và phân vân giữa các node; ở C bấm thuật ngữ ngay trong bài, hiểu giải thích ngắn và tiếp tục học.
- **INTERPRETED:** Trong phiên này, việc đặt hỗ trợ ngay cạnh điểm kẹt có thể giảm chuyển ngữ cảnh; chuỗi hỏi của A và nhiều lựa chọn của B tạo thêm quyết định cho tester.
- **DECIDED — NEXT CHANGE:** Giữ C là option ưu tiên cho iteration tiếp theo; làm quiz dễ nhận ra hơn dựa trên phiên Nhung và kiểm tra lại với tester kế tiếp.
- **STILL UNPROVEN:** Đây là một tester; chưa biết pattern có lặp lại với người học khác, các dạng bài khác hoặc người không có background tech hay không. Chưa có kiểm tra hiểu/nhớ sau một khoảng thời gian.
