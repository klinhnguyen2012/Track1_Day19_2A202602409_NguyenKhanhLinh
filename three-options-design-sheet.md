# Three Options Design Sheet — Day 19

> Bản chuẩn cho Evidence Snapshot, Hypothesis Problem, Solution Options và Human–AI Design pass. README.md dùng cùng nội dung cho Chặng 1–3.

### Chặng 1 — Tổng hợp Evidence & chốt Hypothesis Problem

#### 1. Evidence Huddle

Đặt ba Practice Notes cạnh nhau và tách lời nói/hành vi thực tế khỏi phần nhóm diễn giải. Đây là ba trường hợp riêng, không phải findings đại diện cho mọi người học.

| Practice Note | User đã thực sự làm/nói gì? (Raw Quote / Hành vi) | Điều nhóm đang diễn giải (Interpretation) |
| :---: | :--- | :--- |
| **Note 1 — Tiên** | • “Không có đủ thời gian để mình ôn tập lại phải học thêm kiến thức mới nữa, cái kiến thức trước đấy mình không ôn tập thì cũng sẽ quên” (00:33).<br><br>• Khi bị kẹt: “gác lại cái việc đấy... học tiếp kiến thức mới” (01:01), “bỏ qua cái vấn đề đấy luôn” dù “ảnh hưởng rất lớn đến cảm xúc” (02:26).<br><br>• Workaround: ngoài ghi chép, dùng công cụ để tổng hợp kiến thức thành “một đoạn... ngắn hơn” để đọc lại (01:37). | Nguyên nhân chính có thể là áp lực tiến độ, không phải không nhận ra chỗ hổng. Tiên biết còn phần cần ôn nhưng chọn bỏ qua để theo kịp lớp; điều đó gây khó chịu nhưng ít động lực để tự quay lại sửa. Công cụ tóm tắt là workaround tiết kiệm thời gian; có thể cho thấy user chấp nhận công cụ hỗ trợ nếu nhanh và gọn. Đây là diễn giải của nhóm. |
| **Note 2 — Chi** | • “Chia bài thành từng bước nhỏ... do quên kiến thức cũ hay chưa hiểu cách áp dụng kiến thức mới” (00:08).<br><br>• Khi bí: mở video, tìm tài liệu trên mạng, hỏi bạn bè/giảng viên, tạm nghỉ vì “càng cố khi đang quá căng thẳng thì mình càng khó tập trung” (00:42).<br><br>• Hậu quả: “áp lực và dễ nản”, “chậm so với kế hoạch” (01:22). | Chi có ý thức tự phân tích nguyên nhân, nhưng khi bế tắc thì hành vi tra cứu phân tán (tự mò video, hỏi nhiều nguồn). Việc không rõ mình kẹt ở đâu có thể gây căng thẳng tâm lý và làm đứt gãy mạch học. Đây là diễn giải của nhóm. |
| **Note 3 — Linh** | • “Ôn nhiều thì dễ bị quá tải, khiến mình không nhớ được hết kiến thức.”<br><br>• Khi đọc slide gặp từ khóa khó, Linh tìm chatbot như ChatGPT; Linh nói mình “chỉ không hiểu một vài phần thôi, chứ không thể nào là không hiểu cả bài được.”<br><br>• “Con AI không hiểu được bối cảnh mình đang học hay tình huống của mình nên trả lời khá chung chung. Mình phải mất công lọc thông tin và đặt câu lệnh (prompt) khá kỹ để nó hiểu, việc này rất tốn thời gian.”<br><br>• Linh nói chatbot giúp tránh phải tìm thông tin từ quá nhiều nguồn Google. | Chỗ vướng có thể chỉ nằm ở một vài phần, nhưng tự chuyển ngữ cảnh, viết prompt và lọc câu trả lời chung chung làm phát sinh công sức. Ôn nhiều nội dung chi tiết cũng có thể gây quá tải. Transcript do interviewer cung cấp, chưa đối chiếu với bản ghi âm. |

#### 2. Tổng hợp pain từ ba tester (theo nhóm)

1. **Thiếu thời gian — Tiên:** cảm thấy không đủ thời gian để ôn kiến thức cũ trong khi vẫn phải học kiến thức mới.
2. **Đứt mạch học — Chi:** bài học dài dòng khiến việc theo dõi khó khăn; cần chia nội dung thành các bước nhỏ để dễ tiếp tục.
3. **Tốn sức — Linh:** lượng kiến thức gây quá tải; khi dùng chatbot, thiếu ngữ cảnh khiến Linh phải viết prompt và lọc câu trả lời, tốn thêm công sức.

Đây là ba pain từ ba tester khác nhau. Evidence hiện có chưa cho biết pain nào phổ biến hơn hoặc liệu chúng có cùng một nguyên nhân.

#### 3. Hypothesis Problem

> **Khi** người học tự học một bài kỹ thuật mới và gặp một điểm khó cục bộ, **họ cần nhanh chóng tìm cách gỡ điểm nghẽn để tiếp tục bài**, nhưng có thể bị cản trở bởi áp lực thời gian, mạch bài dài/khó theo dõi, hoặc công sức tìm trợ giúp có ngữ cảnh. **Điều này có thể khiến họ quá tải, chậm tiến độ hoặc mất mạch học.** Đây là hypothesis tổng hợp từ ba trường hợp và cần được kiểm tra thêm.

#### GATE 1 — Evidence Continuity

- [x] Hypothesis Problem nối với ba observation riêng từ Practice Notes của Day 17.
- [x] Ghi rõ điều chưa biết: chưa biết pain nào phổ biến hơn hoặc ba trường hợp có chung nguyên nhân hay không; Practice Notes chưa phải validation.

### Chặng 2 — Chọn ba Solution Options (20 phút)

#### 1. Mở lại Solution Parking Lot

Nhóm xem lại các hướng đã park từ Day 17, không tạo quota ý tưởng mới:

1. Chatbot chẩn đoán điểm hổng và giải thích tại chỗ (AI) → phát triển thành **Option A — Socratic Diagnostic Chat**.
2. Mini-test đầu chương để kiểm tra kiến thức cũ (không AI).
3. Knowledge graph/bản đồ khái niệm nền đính kèm bài (không AI) → phát triển thành **Option B — Prerequisite Concept Radar**.
4. Highlight thuật ngữ chuyên ngành khó và hiện giải thích tại chỗ (không AI) → phát triển thành **Option C — Inline Scaffolding Co-pilot**; người học chọn độ sâu phân tích, phần giải thích mô phỏng AI theo ngữ cảnh slide.
5. Nút trợ giúp để hỏi bạn học/mentor (human support).

Các hướng mini-test và human escalation vẫn nằm trong parking lot, chưa được chọn trong bộ A/B/C này. Day 16 chỉ là prompt gợi ý nguyên lý, không phải deliverable riêng.

**Những thứ phải giữ nguyên (Quyết định chung cho A/B/C):**

- **Target user:** Học viên Product Management / Data Science tự học trực tuyến các khóa về AI/Data.
- **Situation:** Đang tự học bài mới qua slide, gặp các thuật ngữ chuyên ngành lạ/nền tảng và bị khựng lại vì hổng kiến thức nền.
- **Task:** Nhanh chóng xác định phần kiến thức nền tảng đang thiếu hụt và gỡ kẹt để tiếp tục học.
- **Desired outcome:** Hiểu được mắt xích kiến thức bị thiếu trong dưới 1 phút mà không bị quá tải hay đứt mạch học.
- **Content/data fixture:** Bài giảng _“Day 10 - Data Pipeline & Observability”_. Điểm kẹt: các thuật ngữ chuyên môn như “agent RAG”, “vector store”, “data cascades”, “observability” trên slide.

**Những thứ được phép khác:**

| Thành phần | Option A<br>**Socratic Diagnostic Chat** | Option B<br>**Prerequisite Concept Radar** | Option C<br>**Inline Scaffolding Co-pilot** |
| :--- | :--- | :--- | :--- |
| **Solution mechanism** | **Turn-based Socratic Interview:** AI chủ động hỏi 2 câu ngắn để chẩn đoán và tóm tắt cấp tốc. | **Visual Map Exploration:** hệ thống trực quan hóa cây phả hệ kiến thức; user tự nhìn bản đồ để định vị chỗ kẹt. | **Inline Deconstruction:** bóc tách tức thì tại chỗ thuật ngữ/câu phức tạp thành các tầng kiến thức ngầm định qua thanh trượt. |
| **User làm gì?** | Bấm _“Tôi chưa hiểu”_ → chọn đáp án cho 2 câu hỏi → đọc kết luận. | Duyệt cây kiến thức → bấm vào node nghi ngờ → đọc đối chiếu lý thuyết cũ/mới. | Bấm vào thuật ngữ/câu gây bế tắc → kéo thanh trượt độ sâu (1, 2, 3) → làm thử câu test mini. |
| **AI làm gì?** | Phân tích câu trả lời, suy luận xác suất lỗ hổng (đề xuất hiển thị 88%) và sinh thẻ ôn tập cấp tốc. | Phân loại độ rủi ro của các node (_Nền tảng_ vs _Vùng dễ nhầm lẫn ⚠️_) và hiển thị giải thích liên hệ. | Phân giải cấu trúc thuật ngữ theo thời gian thực tương ứng với mức độ sâu người dùng chọn. |
| **Trigger** | Nút _“Tôi chưa hiểu đoạn này”_ bên cạnh slide. | Tab/Menu _“Bản đồ kiến thức tiên quyết”_ ở cạnh bài. | Thao tác bấm/chọn trực tiếp vào các thuật ngữ lạ (RAG, vector store). |
| **Trade-off chính** | Được dẫn dắt chính xác, nhưng phải nhường quyền điều khiển cho AI và tạm tách khỏi bài đọc. | Có bức tranh tổng quan, nhưng đòi hỏi nỗ lực nhận thức cao (dễ ngợp nếu không biết bấm node nào). | Giữ mạch đọc, nhưng giả định user đã khoanh vùng được thuật ngữ nào gây bối rối. |

Con số 88% ở Option A là giả định của phương án, chưa phải độ tin cậy đã hiệu chỉnh hoặc được kiểm chứng.

#### 3. Distance check

- **A khác B vì:** Option A đặt quyền dẫn dắt vào tay **AI** (AI chủ động đặt câu hỏi chẩn đoán để tìm lỗ hổng cho user), trong khi Option B đặt quyền chủ động hoàn toàn vào tay **User** (User tự nhìn bản đồ phả hệ kiến thức và tự quyết định xem nhánh nào).
- **B khác C vì:** Option B tách kiến thức ra thành một **sơ đồ phả hệ vĩ mô độc lập** (Macro Graph), trong khi Option C **can thiệp vi mô ngay tại dòng chữ/thuật ngữ** (Micro Inline) với thanh trượt độ sâu tùy biến.
- **A khác C vì:** Option A là quá trình **hội thoại tương tác hai chiều từng bước** (Turn-based Socratic) tập trung vào việc “bắt bệnh”, trong khi Option C là công cụ **co-pilot đồng sáng tạo tại chỗ** (On-demand Deconstruction) tập trung vào việc “mổ xẻ cấu trúc” mà không làm gián đoạn dòng đọc.

#### 4. GATE 2 — Meaningful options

- [x] Cả 3 options cùng chung target user, situation, task, desired outcome và content fixture.
- [x] Khác nhau rõ rệt ở cơ chế tương tác và mức độ phân chia quyền tự quyết giữa User và AI.

Test-ready được đánh giá riêng ở Gate 4.

### Chặng 3 — Human–AI Design pass (30 phút)

| Trụ cột Human–AI | Option A — Socratic Diagnostic Chat | Option B — Prerequisite Concept Radar | Option C — Inline Scaffolding Co-pilot |
| :--- | :--- | :--- | :--- |
| **1. Expectation** | Nói rõ AI sẽ hỏi tối đa hai câu ngắn rồi đề xuất một phần ôn; không hứa chắc chắn tìm đúng nguyên nhân. | Bản đồ là công cụ tham khảo để tự duyệt, không phải bài kiểm tra hay chẩn đoán cá nhân. | Bóc tách thuật ngữ theo độ sâu người học chọn, ngay trong ngữ cảnh slide; không tự ý viết lại nội dung gốc. |
| **2. Role & Agency** | AI khởi tạo câu hỏi; người học trả lời, quyết định nhận/sửa/bỏ gợi ý. | Người học chủ động chọn node; hệ thống hiển thị quan hệ và nội dung đã chuẩn bị. | User chọn thuật ngữ/câu khó và biên độ phân tích 1–2–3; AI cập nhật nội dung bóc tách tương ứng để user tự quyết định có tiếp tục đọc hay ôn thêm. |
| **3. Evidence & Uncertainty** | Cho biết gợi ý dựa trên câu trả lời nào; không dùng phần trăm tin cậy nếu chưa được hiệu chỉnh. | Hiển thị vì sao hai khái niệm được nối với nhau; phân biệt quan hệ do nội dung môn học xác định với vùng cần ôn. | Gắn giải thích với thuật ngữ và đoạn slide cụ thể; báo khi AI không đủ ngữ cảnh để giải thích chính xác. |
| **4. Control & Recovery** | “Chẩn đoán lại”, “Tôi tự chọn phần ôn”, hoặc đóng trợ giúp để quay lại bài. | Đặt lại lựa chọn, xem danh sách node dạng phẳng, hoặc quay lại bài. | “Trở về mặc định” khôi phục nguyên văn slide; user có thể đổi thuật ngữ/mức phân tích, làm một câu trắc nghiệm rồi chọn tiếp tục hoặc đóng thanh hỗ trợ. |

#### GATE 3 — Human Control

- [x] Mỗi option nêu expectation, role/agency, evidence/uncertainty và control/recovery.

**Evidence từ test prototype:** Nhung tự thao tác A/B/C với cùng task; facilitator chỉ quan sát, không giải thích giao diện. Ở **A**, Nhung thấy các lựa chọn “Chẩn đoán lại” và “Tôi tự chọn bài ôn” nhưng không bấm vì cho rằng chẩn đoán đúng. Ở **B**, Nhung dùng “Đặt lại bản đồ” sau khi chọn nhiều node và quay lại trạng thái ban đầu. Ở **C**, Nhung đóng panel để tiếp tục slide sau khi làm quiz. Tester 3 cũng tự dùng cả ba; với C, họ chọn tiếp tục ngay sau phần giải thích.

**Điều chưa xác minh:** Chưa quan sát A recovery hoạt động trong thao tác thật vì Nhung không cần dùng; cũng chưa có bằng chứng đầy đủ rằng mọi tester hiểu các lựa chọn sửa/dừng ở cả ba option. Gate 3 design criteria có trong bảng; kiểm tra usability chi tiết tiếp tục thuộc Gate 4.
