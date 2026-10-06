# Group Feedback Synthesis — Option C

> **Case:** Case A — AI Tutor: Diagnostic Refresher  
> **Phạm vi:** Tổng hợp tín hiệu về Option C từ ba phiên; bao gồm so sánh A/B có trong ghi chú đầy đủ của Nhung và Tester 3. Phiên tester đầu chỉ thử C. Đây là tín hiệu định tính ban đầu, không phải validation.

## 1. Evidence từ ba phiên

| Phiên | Hành vi với C | Ma sát / điều trái kỳ vọng | So sánh A/B nếu có |
| :--- | :--- | :--- | :--- |
| **Tester ngoài nhóm — chỉ thử C** | Bấm thuật ngữ highlight, đọc giải thích, xem thêm thuật ngữ, làm đúng quiz và chọn “Tiếp tục”; hoàn tất trong dưới một phút. | Không để ý chú giải màu. Không ghi nhận do dự hoặc cần trợ giúp. | Không thử A/B; không có so sánh. |
| **Nhung — đã thử đầy đủ A/B/C** | C: bấm “agent RAG”, đọc phần so sánh ở Mức 2, thử các mức 1–3, làm đúng quiz và đóng panel để quay lại slide. Chọn C cho việc đọc hằng ngày, giữ A làm phương án khi bế tắc. | A: do dự ở câu chẩn đoán 2 và chọn sai; B: bối rối với nhiều node, chọn thêm node rồi reset; C: ban đầu không thấy quiz dưới phần giải thích. | C tiện khi đọc slide; A hữu ích khi cần AI chẩn đoán nhưng làm ngắt mạch; B giúp xem quan hệ nhưng gây ngợp khi đang cần gỡ kẹt nhanh. |
| **Tester 3 — đã thử A/B/C** | Bấm trực tiếp vào ký hiệu/thuật ngữ khó, hiểu giải thích ngắn, giữ được context và tiếp tục bài gần như không do dự. Chọn C. | Không ghi nhận ma sát với C trong phản hồi cung cấp; không có thông tin tester có tìm hoặc hoàn thành quiz hay để ý chú giải màu không. | A: chuỗi câu hỏi làm tester do dự và thấy mất nhịp. B: hiểu radar nhưng phân vân chọn node khi có nhiều lựa chọn. Tester chọn C vì ít chuyển ngữ cảnh và không phải viết prompt dài. |

## 2. Pattern và khác biệt

### Tín hiệu lặp lại về C

- Cả ba phiên đều bắt đầu bằng việc bấm trực tiếp vào thuật ngữ đang hiện trên slide.
- Cả ba ghi nhận tester đọc giải thích rồi quay lại hoặc tiếp tục bài; hai phiên ghi cụ thể việc tiếp tục bài sau khi dùng hỗ trợ.
- Hai tester đã so sánh A/B/C đều ưu tiên C. Nhung vẫn muốn giữ A làm phương án dự phòng khi không tự khoanh vùng được điểm kẹt. Lý do chọn C: hỗ trợ tại chỗ và ít chuyển ngữ cảnh.

Đây là tín hiệu từ ba phiên với prototype, không chứng minh C hiệu quả hơn với mọi người học.

### Khác biệt và bằng chứng trái kỳ vọng

- Quiz được tìm thấy và hoàn thành ở phiên tester chỉ thử C; Nhung ban đầu bỏ qua quiz vì vị trí bên dưới phần giải thích. Tester 3 không nêu việc dùng quiz, nên không xem đó là đã hoàn thành hay đã bỏ qua.
- Tester 3 gần như không do dự khi dùng C; Nhung cần thử slider và cuộn mới thấy quiz. Trải nghiệm trơn tru không lặp đều ở mọi phiên.
- Chú giải màu không được để ý ở phiên tester chỉ thử C. Hai phiên còn lại không cung cấp bằng chứng về việc tester nhận ra hay hiểu chú giải này.
- Cả Nhung và Tester 3 ghi nhận ma sát với A do lượt chẩn đoán làm chậm hoặc ngắt nhịp; Nhung chọn sai câu 2 nhưng vẫn thấy kết luận hữu ích.
- Cả Nhung và Tester 3 gặp tải lựa chọn ở B: nhiều node/quan hệ khiến họ bối rối hoặc phân vân điểm bắt đầu. Nhung đã dùng reset để lấy lại control.

## 3. Group Next Change

> **Giữ C làm hỗ trợ inline mặc định và thêm lối “Chẩn đoán nhanh” tùy chọn cho lúc người học chưa tự khoanh vùng được điểm kẹt**, để tận dụng chẩn đoán của A mà không buộc mọi người đi qua chuỗi hỏi.

**Cơ sở:** Nhung chọn C cho việc đọc thường ngày và A làm dự phòng; cả Nhung lẫn Tester 3 thấy chuỗi hỏi A làm chậm hoặc ngắt mạch. C vẫn cần người học biết thuật ngữ nào cần chọn, nên một chẩn đoán ngắn tùy chọn có thể hỗ trợ trường hợp đó. Giữ quiz dễ thấy cũng cần kiểm tra lại vì Nhung ban đầu bỏ lỡ nó.

**Cách kiểm tra ở iteration kế tiếp:** Giao cùng task mà không chỉ quiz hay chẩn đoán. Quan sát liệu tester tự dùng C trước, có tìm thấy lối chẩn đoán khi không biết chọn thuật ngữ nào, và có thể bỏ qua nó để tiếp tục bài nhanh không.

## 4. Điều còn chưa rõ — Still Unproven

- Chưa biết việc trả lời đúng quiz phản ánh hiểu sâu hay chỉ hiểu ngay sau khi đọc giải thích.
- Chưa biết người học có nhận ra chú giải màu và chọn độ sâu phù hợp hay không.
- Chưa biết tín hiệu ưu tiên C có lặp lại với người học ngoài background tech hay với dạng bài khác không.
- Chưa đủ dữ liệu so sánh A/B: Nhung và Tester 3 đều thử A/B/C, nhưng mới có hai phiên so sánh; tester đầu tiên chỉ thử C.
- Ba phiên này không chứng minh learning gain, duy trì ghi nhớ hoặc hiệu quả dài hạn.

## 5. Trạng thái Gate 5 — Learning

- [x] Có ba Feedback Notes/phiên tester được ghi trong `prototype-feedback-note.md`; phạm vi từng phiên được nêu rõ.
- [x] Tổng hợp pattern lặp lại và khác biệt, không gộp các quan sát thiếu thành kết luận.
- [x] Có một Group Next Change cụ thể và có cách kiểm tra ở phiên tiếp theo.
- [x] Ghi rõ điều chưa được chứng minh.

**Kết luận:** Gate 5 đạt ở mức đầu ra tổng hợp theo ba phiên đã ghi nhận. Kết quả vẫn là tín hiệu định tính sơ bộ, không phải xác nhận solution đã validated.
