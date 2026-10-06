# AI Support Log

> **Bản nháp để Linh rà soát:** nội dung dưới đây ghi lại các việc AI đã hỗ trợ trong repo và những lần Linh điều chỉnh kết quả. Trước khi nộp, Linh cần sửa bất kỳ chi tiết nào không đúng với trải nghiệm thực tế của mình.

## AI đã giúp gì?

- Hỗ trợ sắp xếp tài liệu Day 19: Evidence Snapshot, Hypothesis Problem, ba Solution Options, Human–AI Design pass và các gate đánh giá.
- Hỗ trợ triển khai prototype Option C trong `front-end/`, gồm tương tác chọn thuật ngữ, điều chỉnh độ sâu giải thích, quiz và lựa chọn quay lại bài.
- Soạn và cập nhật README, Prototype Feedback Note và Group Feedback Synthesis từ nội dung, transcript, ảnh chụp và phản hồi Linh cung cấp.
- Giúp phân biệt quan sát trực tiếp, diễn giải của nhóm và điều vẫn chưa được chứng minh; rà lại các kết luận so với rubric trước khi nộp.

## AI sai hoặc hời hợt ở đâu?

- Có lúc bản nháp dùng quá nhiều raw quote, làm feedback note dài và khó quét nhanh.
- Khi chỉ có một phần feedback, AI có thể đi quá nhanh từ vài phiên test sang đề xuất cho cả nhóm hoặc chưa làm rõ phiên đó test riêng C hay đã so sánh A/B/C.
- Một số cách gọi tester và phạm vi tổng hợp chưa rõ ràng khi nguồn có nhãn riêng. Nếu không đối chiếu từng nguồn, có thể vô tình gộp nhầm người hoặc biến diễn giải thành quan sát.
- Nội dung ban đầu đôi lúc cần được chỉnh để giữ đúng vai trò của Linh là người phụ trách Option C và chỉ tổng hợp kết quả C khi Linh yêu cầu.

## Linh tự kiểm tra và sửa gì?

- Cung cấp transcript và ghi chú thực tế, rồi sửa cách mô tả pain của Tiên, Chi và Linh để không gộp ba trường hợp thành một kết luận chung quá mức.
- Yêu cầu rút gọn raw quote và làm rõ Linh phụ trách Option C.
- Ban đầu yêu cầu chỉ giữ kết quả C của Nhung; sau đó yêu cầu khôi phục đầy đủ A/B/C từ feedback note gốc. Đã đối chiếu attachment nguồn và cập nhật hành vi, lựa chọn cùng trade-off của Nhung.
- Đối chiếu hành vi cụ thể trong từng phiên—thuật ngữ được bấm, slider, quiz, việc quay lại bài—và yêu cầu ghi rõ phần còn thiếu thay vì suy diễn.
- Cung cấp năm gate đánh giá; từ đó tách tiêu chí Meaningful Options khỏi Test-ready và giữ Gate 4/5 ở trạng thái chưa đạt khi chưa có đủ prototype và feedback.

## Giới hạn và trách nhiệm

- Prototype dùng nội dung mẫu/canned output; chưa kết nối model hoặc API AI thật. Các giải thích và quiz không phải kết quả sinh trực tiếp bởi mô hình trong lúc test.
- AI hỗ trợ viết, cấu trúc và triển khai; Linh chịu trách nhiệm kiểm tra nội dung, nguồn evidence, hành vi prototype và các quyết định thiết kế trước khi nộp.
- Ba phiên test được ghi lại; trong đó tester đầu chỉ thử C, còn Nhung và Tester 3 đã thử A/B/C. Đây vẫn là tín hiệu ban đầu, không chứng minh solution đã validated hoặc C tốt hơn cho mọi người học.
