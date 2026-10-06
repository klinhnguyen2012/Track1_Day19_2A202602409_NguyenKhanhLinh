# Track1_Day19_2A202602409_NguyenKhanhLinh

> **Dự án**: AI Tutor — Diagnostic Refresher (Khám phá Solution Space & Thử nghiệm Micro-Prototypes Human–AI)  
> **Học viên**: Nguyễn Khánh Linh  
> **Mã học viên**: 2A202602409  
> **Case nghiên cứu**: Case A — AI Tutor: Diagnostic Refresher  
> **Phân công cá nhân**: Chịu trách nhiệm chính **Option C — Inline Scaffolding Co-pilot**; tham gia thiết kế chung và kiểm thử chéo A/B/C.

---

## 1. Cấu trúc thư mục bài nộp

```text
Track1_Day19_2A202602409_NguyenKhanhLinh/
├── README.md                         # Báo cáo tổng quan 6 chặng
├── three-options-design-sheet.md    # Evidence, Solution Options và Human–AI Design pass
├── prototype-link.md                # Hướng dẫn chạy và link micro-prototype
├── prototype-feedback-note.md       # Ghi chú phiên test Linh facilitate
├── group-feedback-synthesis.md      # Bản tổng hợp Feedback Notes và Group Next Change
├── ai-support-log.md                # Khai báo minh bạch việc dùng AI
├── .gitignore                       # Bỏ qua dependency, build output và skill local
├── front-end/                       # Toàn bộ source và cấu hình giao diện Option C
│   ├── index.html                   # Vite entry page
│   ├── style.css                    # Stylesheet giao diện cũ, hiện không được import
│   ├── public/                      # Asset tĩnh dùng trong giao diện
│   │   └── ai-tutor-logo-mark.png   # Logo robot đọc sách
│   ├── components.json              # Cấu hình shadcn/ui và alias
│   ├── package.json                 # Scripts và dependency của prototype
│   ├── package-lock.json            # Khóa phiên bản dependency
│   ├── vite.config.ts               # Cấu hình Vite và alias @
│   ├── tailwind.config.ts            # Cấu hình Tailwind và design tokens
│   ├── postcss.config.js             # PostCSS/Tailwind
│   ├── tsconfig.json                 # Cấu hình TypeScript
│   ├── tsconfig.app.json             # TypeScript cho ứng dụng
│   └── src/
│       ├── main.tsx                  # React entry point
│       ├── App.tsx                   # Theme, bố cục và luồng Option C
│       ├── index.css                 # Design tokens, responsive, motion
│       ├── lib/utils.ts              # Tiện ích className
│       └── components/
│           ├── LessonContext.tsx     # Slide Day 10 và các thuật ngữ tương tác
│           ├── InlineScaffold.tsx    # Giải thích, slider, quiz và quyết định
│           ├── ThemeToggle.tsx       # Công tắc sáng/tối
│           └── ui/                   # Button, Slider, Switch theo shadcn/Radix
└── docs/superpowers/
    ├── specs/                        # Spec thiết kế Option C
    └── plans/                        # Kế hoạch triển khai Option C
```

Prototype Option C chạy bằng React/Vite, Tailwind CSS và Radix UI. Giao diện mở trực tiếp không cần login; hướng dẫn chạy local nằm trong `prototype-link.md` (chạy lệnh từ `front-end/`). Nội dung giải thích/quiz theo agent RAG, vector store, data cascades và observability là dữ liệu mẫu theo mức phân tích, chưa kết nối model/API. A/B do thành viên khác duy trì ở prototype riêng; nhóm cần gom ba URL để chạy cùng task và ghi đủ feedback.

---

## 2. Tóm tắt 6 chặng triển khai

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

### Chặng 4 — Build ba micro-prototype (80 phút)

#### 1. Scope chuẩn

Mỗi option chỉ cần 2–3 màn hình hoặc trạng thái, theo flow:

```text
COMMON CONTEXT
      ↓
CRITICAL INTERACTION
      ↓
RESULT / USER DECISION
```

Cả A/B/C dùng chung khoảng 70% context screen, content/data fixture, component/visual style, task và desired outcome. Chỉ critical interaction thay đổi rõ giữa các option.

- **Common context:** bài “Day 10 - Data Pipeline & Observability”, các thuật ngữ trên slide và cùng task tìm mắt xích kiến thức nền để tiếp tục học.
- **Option A — Socratic Diagnostic Chat:** bắt đầu cùng bài → AI hỏi tối đa hai câu → hiển thị gợi ý và lựa chọn của user.
- **Option B — Prerequisite Concept Radar:** bắt đầu cùng bài → user mở bản đồ/chọn node → xem liên kết và quyết định tiếp theo.
- **Option C — Inline Scaffolding Co-pilot (Linh):** bắt đầu cùng bài → user chọn thuật ngữ và mức phân tích 1–2–3 → xem giải thích ở panel bên phải (xếp dưới bài ở màn hình hẹp) → làm quiz một câu rồi quyết định tiếp tục hoặc đóng hỗ trợ.

Canned AI output hoặc Wizard of Oz được dùng nếu cần; người mô phỏng AI không giải thích giao diện hộ tester. Không cần model/API thật, onboarding/dashboard đầy đủ, responsive cho nhiều thiết bị, visual polish hoàn chỉnh hoặc failure catalog đầy đủ.

#### 2. Definition of testable

Prototype chỉ được xem là test-ready khi:

- Tester có thể tự mở và thao tác cả A/B/C.
- Cả ba bắt đầu từ cùng một context và task.
- Option không cần facilitator giải thích để tester hiểu cách thao tác.
- Nội dung đủ thật để tester đưa ra quyết định.
- Mỗi option thể hiện được cách user lấy lại control.
- Có đường reset về common context.

**Trạng thái cá nhân của Linh:** prototype Option C có trong workspace và local preview. Option A/B nằm trong prototype riêng của các thành viên phụ trách; cần gom link và kiểm tra cả ba với cùng task.

**GATE 4 — Chưa xác nhận đạt trên các link hiện hành:** Note gốc của Nhung ghi tester tự thao tác đầy đủ A/B/C theo cùng task; facilitator không cầm chuột hay hướng dẫn. Note cũng có bằng chứng control/recovery ở cả ba: A có lựa chọn chẩn đoán lại/tự chọn bài ôn, B có reset bản đồ, C đóng panel để về slide. Cần đối chiếu phiên bản trong buổi test với ba link hiện tại ở `prototype-link.md`; link C mới chưa xác minh truy cập được từ môi trường này. Nếu link nào trỏ tới prototype đã đổi kể từ buổi test, chạy lại cùng task trên phiên bản đó.

#### 3. Build order

| Thời gian | Việc cần làm |
| :---: | :--- |
| **0–10 phút** | Vẽ common context, task và content fixture dùng cho cả ba. |
| **10–55 phút** | Mỗi thành viên build option được giao bằng shared components. |
| **55–65 phút** | Thêm control/recovery và evidence/uncertainty cần thiết. |
| **65–75 phút** | Mỗi thành viên tự test option do thành viên khác build. |
| **75–80 phút** | Chuẩn hóa A/B/C, kiểm link và reset path. |

#### 4. Prototype annotation

Đặt annotation ngoài frame, không hiện cho tester:

```text
OPTION C
We expect the tester to: chọn thuật ngữ đang gây khó, điều chỉnh mức phân tích 1–2–3, rồi quyết định tiếp tục hay đóng hỗ trợ sau câu quiz.
Watch for: panel bên phải có giữ được mạch đọc không; user có hiểu màu kiến thức mới/nền tảng; slider, reset và quiz có rõ ràng không.
Do not explain: thuật ngữ nào nên chọn, nên đặt mức nào, hoặc đáp án quiz.
```

**Gate 4 — trạng thái:** xem phần trạng thái hiện tại ở trên; chưa đánh dấu đạt cho đến khi đối chiếu đủ A/B/C và xác nhận test-ready trên các bản đang chia sẻ.

### Chặng 5 — Chuẩn bị Test Prompt & tiêu chí quan sát (15 phút)

#### 1. Chốt context và task

**Relevant context — một câu hỏi, tối đa 2 phút trong lúc test:**

> “Gần đây bạn có từng tự học qua slide trong khóa AI/Data và bị khựng lại vì gặp thuật ngữ chuyên ngành lạ hoặc chưa rõ kiến thức nền cần có không?”

Nếu tester chưa từng gặp tình huống này, vẫn có thể quan sát interaction breakdown, nhưng không đưa ra value claim mạnh từ phiên test đó.

**Outcome task** — dùng cùng một task cho A/B/C, không nêu control cần bấm:

> “Trong tình huống này, hãy dùng từng phương án để xác định kiến thức nền cần có để hiểu một thuật ngữ trong slide _Day 10 - Data Pipeline & Observability_ và quyết định bạn sẽ học tiếp thế nào.”

**Observation focus — chọn tối đa năm thứ:**

1. First action.
2. Hesitation.
3. Bằng chứng/giải thích tester đọc hoặc bỏ qua; điểm hiểu nhầm.
4. Khi nào tester cần trợ giúp, tự sửa hoặc phục hồi sau khi đi sai hướng.
5. Option được chọn và trade-off tester nêu ra.

#### 2. Luật facilitation

1. Tester tự điều khiển prototype.
2. Dùng cùng một task cho A/B/C.
3. Không narrate hoặc giải thích icon.
4. Không lấp im lặng.
5. Không hỏi “Bạn có thích không?”.
6. Khi tester hỏi cách hoạt động, hỏi lại: *“Theo bạn, nó nên hoạt động như thế nào?”*

**Ba câu cứu hộ:**

- “Bạn cứ nói to suy nghĩ của mình nhé.”
- “Bạn sẽ làm gì tiếp theo?”
- “Theo bạn, nó nên hoạt động như thế nào?”

### Chặng 6 — Kiểm thử chéo & tổng hợp Next Change (20 phút)

Kiểm thử A/B/C với ba người ngoài nhóm theo task chung. Ghi hành vi và quote riêng cho từng option; không gợi ý đáp án hoặc pitch giải pháp. Kết quả của ba tester là tín hiệu ban đầu, không chứng minh solution đã validated.

| Tester / facilitator | Option A — Socratic Chat | Option B — Concept Radar | Option C — Inline Co-pilot | Đánh đổi / lựa chọn |
| :--- | :--- | :--- | :--- | :--- |
| Tester ngoài nhóm 1 | Chưa có ghi chú trong repo | Chưa có ghi chú trong repo | Đã thử riêng C; xem `prototype-feedback-note.md` | Chưa so sánh A/B/C |
| Nhung | Đọc slide, dùng chẩn đoán; do dự và chọn sai câu 2; không cần recovery | Bối rối với node, chọn nhiều node rồi reset; xem liên hệ với bài | Chọn C cho việc học thường ngày; bỏ lỡ quiz lúc đầu, sau đó làm đúng và quay lại slide | C là cách chính, A là phương án khi bế tắc |
| Tester 3 | Có ghi chú hành vi và ma sát | Có ghi chú hành vi và ma sát | Bấm thuật ngữ, hiểu giải thích và tiếp tục gần như không do dự | Chọn C vì hỗ trợ tại chỗ, ít chuyển ngữ cảnh |

**Feedback Notes:** đã ghi ba phiên tester trong `prototype-feedback-note.md`. Phiên đầu chỉ thử C; Nhung và Tester 3 thử A/B/C. `group-feedback-synthesis.md` tổng hợp pattern, khác biệt, một Group Next Change và Still Unproven. Các kết quả là tín hiệu định tính sơ bộ, không chứng minh solution đã validated.

**Group Next Change:**

> Với Hypothesis Problem này, chúng tôi đã quan sát thấy: _[evidence cụ thể từ test]_.  
> Ở iteration tiếp theo, chúng tôi sẽ: _[một thay đổi cụ thể]_.  
> Điều vẫn chưa biết: _[câu hỏi cần test tiếp]_.

## 3. Đóng góp cá nhân của Nguyễn Khánh Linh

1. Chịu trách nhiệm chính **Option C — Inline Scaffolding Co-pilot**.
2. Thiết kế cơ chế chọn trực tiếp thuật ngữ trong slide, chọn mức phân tích 1–2–3, xem giải thích ở panel bên phải, phân biệt kiến thức bằng màu, khôi phục nội dung gốc và tự kiểm tra bằng quiz một câu.
3. Xác định cách người học trở về nội dung gốc, đổi mức giải thích hoặc bỏ qua hỗ trợ.
4. Facilitate một phiên test ngoài nhóm; ghi nhận trung thực hành vi, phản ứng và trade-off vào `prototype-feedback-note.md`.
5. Cùng nhóm tổng hợp ba Feedback Notes và chọn một Group Next Change dựa trên evidence.
