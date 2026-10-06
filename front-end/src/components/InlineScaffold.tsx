import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowDownRight, ArrowRight, Check, ChevronLeft, CircleHelp, RotateCcw, Sparkles, X } from "lucide-react";
import type { TermKey } from "./LessonContext";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

type Phase = "empty" | "explaining" | "quiz" | "closed" | "continued";
type InlineScaffoldProps = {
  selected: TermKey | null;
  onSelect: (term: TermKey) => void;
  resetKey: number;
  onReset: () => void;
  onPhaseChange: (phase: Phase) => void;
};

const details: Record<TermKey, { token: string; name: string; origin: string; color: string; level: [string, string, string]; quiz: string; answers: string[]; correct: number; explanation: [string, string, string] }> = {
  rag: {
    token: "agent RAG", name: "Retrieval-Augmented Generation", origin: "Khái niệm mới trong slide", color: "green",
    level: ["Hình dung", "Nối với pipeline", "Bóc tách kỹ thuật"],
    quiz: "RAG bổ sung bước nào trước khi mô hình tạo câu trả lời?", answers: ["Truy xuất thông tin liên quan từ nguồn dữ liệu", "Tăng kích thước vector store tự động", "Xóa các bước kiểm tra đầu ra"], correct: 0,
    explanation: [
      "Hãy hình dung agent RAG như một người được phép tra tài liệu liên quan trước khi trả lời, thay vì chỉ dựa vào những gì đã nhớ sẵn.",
      "RAG (Retrieval-Augmented Generation) truy xuất các đoạn dữ liệu phù hợp rồi đưa chúng vào ngữ cảnh để mô hình tạo câu trả lời.",
      "Luồng cơ bản gồm nhận truy vấn → truy xuất và xếp hạng đoạn liên quan → ghép ngữ cảnh → gọi mô hình sinh câu trả lời. Chất lượng phụ thuộc cả dữ liệu và bước retrieval.",
    ],
  },
  vectorStore: {
    token: "vector store", name: "Kho lưu trữ vector", origin: "Nền tảng: vector và embedding", color: "orange",
    level: ["Hình dung", "Nối với RAG", "Bóc tách kỹ thuật"],
    quiz: "Vector store thường hỗ trợ việc gì?", answers: ["Tìm các embedding gần với truy vấn", "Tạo câu trả lời cuối cùng thay cho mô hình", "Theo dõi giao diện người học"], correct: 0,
    explanation: [
      "Hãy hình dung vector store như một thư viện có thể tìm những mục giống ý nghĩa câu hỏi, dù cách viết không y hệt.",
      "Văn bản được chuyển thành embedding dạng vector. Vector store lưu các embedding đó để RAG tìm nội dung gần với truy vấn.",
      "Vector store lập chỉ mục embedding và truy xuất các vector gần nhất theo metric tương đồng. Nó trả về dữ liệu liên quan; mô hình ngôn ngữ mới dùng dữ liệu ấy để sinh câu trả lời.",
    ],
  },
  dataCascades: {
    token: "data cascades", name: "Chuỗi lỗi lan truyền", origin: "Khái niệm mới trong slide", color: "green",
    level: ["Hình dung", "Nối với pipeline", "Bóc tách hệ thống"],
    quiz: "Data cascade mô tả điều gì?", answers: ["Lỗi dữ liệu ở một bước ảnh hưởng các bước và đầu ra phía sau", "Dữ liệu được sao lưu theo lịch", "Một cách lưu embedding vào vector store"], correct: 0,
    explanation: [
      "Giống như một quân domino: một viên dữ liệu sai ở đầu pipeline có thể làm nhiều kết quả phía sau cũng sai theo.",
      "Data cascade xảy ra khi vấn đề ở dữ liệu đầu vào lan qua các bước xử lý, rồi ảnh hưởng nhiều mô hình hoặc quyết định downstream.",
      "Một lỗi nguồn dữ liệu có thể lan qua ingestion, transformation, training và deployment. Cần lần theo phụ thuộc giữa các bước để tìm nguồn gốc và phạm vi ảnh hưởng.",
    ],
  },
  observability: {
    token: "observability", name: "Khả năng quan sát hệ thống", origin: "Nền tảng: logs, metrics, traces", color: "blue",
    level: ["Hình dung", "Nối với pipeline", "Bóc tách hệ thống"],
    quiz: "Observability giúp nhóm hiểu điều gì?", answers: ["Trạng thái bên trong hệ thống qua dữ liệu vận hành", "Nội dung nào người học thích nhất", "Cách tăng số lượng embedding"], correct: 0,
    explanation: [
      "Hãy hình dung dashboard xe: đồng hồ và đèn báo giúp biết hệ thống đang chạy khỏe hay có sự cố.",
      "Observability dùng logs, metrics và traces để theo dõi điều gì đang xảy ra trong các bước của pipeline và ứng dụng.",
      "Logs ghi sự kiện, metrics đo xu hướng bằng số, traces nối các bước của một request. Kết hợp chúng giúp suy ra trạng thái và khoanh vùng nguyên nhân lỗi.",
    ],
  },
};

const termKeys = Object.keys(details) as TermKey[];

export function InlineScaffold({ selected, onSelect, resetKey, onReset, onPhaseChange }: InlineScaffoldProps) {
  const panelRef = useRef<HTMLElement>(null);
  const [level, setLevel] = useState(1);
  const [phase, setPhase] = useState<Phase>("empty");
  const [answer, setAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const item = selected ? details[selected] : null;
  const explanation = useMemo(() => item?.explanation[level - 1] ?? "", [item, level]);
  const selectedIndex = selected ? termKeys.indexOf(selected) : -1;
  const nextTerm = termKeys[(selectedIndex + 1) % termKeys.length];

  useEffect(() => {
    setLevel(1);
    setAnswer(null);
    setSubmitted(false);
    setPhase(selected ? "explaining" : "empty");
  }, [selected, resetKey]);

  useEffect(() => onPhaseChange(phase), [phase, onPhaseChange]);

  useGSAP(() => {
    if (phase === "empty" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const transition = gsap.timeline({ defaults: { ease: "power2.out" } });
    transition.fromTo("[data-helper-content]", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.28, stagger: 0.035 });
  }, { scope: panelRef, dependencies: [selected, level, phase, resetKey], revertOnUpdate: true });

  function openQuiz() {
    if (!selected) return;
    setAnswer(null);
    setSubmitted(false);
    setPhase("quiz");
  }

  function returnToDefault() {
    onReset();
    setPhase("empty");
    setLevel(1);
    setAnswer(null);
    setSubmitted(false);
  }

  function submitAnswer() {
    if (answer === null) return;
    setSubmitted(true);
  }

  return (
    <aside className="helper-column" aria-label="AI Tutor giải thích tại chỗ">
      <section className="helper-card surface-card" data-helper-panel ref={panelRef} aria-labelledby="helper-title">
        <header className="helper-header">
          <div className="helper-mark"><Sparkles size={16} /></div>
          <div className="helper-header-copy">
            <div className="helper-kicker">OPTION C · CO-PILOT</div>
            <h2 id="helper-title">Kính lúp khái niệm</h2>
          </div>
          <Button variant="ghost" size="icon" aria-label="Trở về mặc định" title="Trở về mặc định" onClick={returnToDefault}><RotateCcw size={17} /></Button>
        </header>

        <div className="helper-body" aria-live="polite" aria-atomic="false">
          {phase === "empty" && (
            <div className="helper-empty" data-helper-content>
              <div className="empty-orbit"><CircleHelp size={27} /></div>
              <h3>Chọn thuật ngữ cần bóc tách</h3>
              <p>Bấm trực tiếp <b>agent RAG</b>, <b>vector store</b>, <b>data cascades</b> hoặc <b>observability</b> trong slide. Mình sẽ giải thích ngay cạnh bài để bạn giữ mạch đọc.</p>
              <div className="empty-hint"><ArrowDownRight size={16} /> Các thuật ngữ được tô màu trong slide bên trái</div>
            </div>
          )}

          {phase === "explaining" && item && (
            <div className="helper-active" data-helper-content>
              <div className="selected-concept">
                <span className={`concept-term ${item.color}`}>{item.token}</span>
                <div><span className="concept-origin">{item.origin}</span><h3>{item.name}</h3></div>
                <span className="live-badge"><i /> Trực tiếp</span>
              </div>

              <div className="depth-control">
                <div className="depth-heading"><span>Độ sâu phân tích</span><b>MỨC {level}</b></div>
                <Slider aria-label="Độ sâu phân tích 1 đến 3" min={1} max={3} step={1} value={[level]} onValueChange={(value) => setLevel(value[0] ?? 1)} />
                <div className="depth-labels"><span>Gần gũi</span><span>Kết nối</span><span>Chi tiết</span></div>
                <p className="depth-caption">{item.level[level - 1]}</p>
              </div>

              <motion.div key={`${selected}-${level}`} initial={{ opacity: 0.35, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="explanation-card">
                <div className="explanation-heading"><span><Sparkles size={14} /> BÓC TÁCH THEO NGỮ CẢNH</span><span className={`knowledge-chip ${item.color}`}>{item.origin}</span></div>
                <p>{explanation}</p>
                <div className="context-source"><Check size={14} /> Gắn với nội dung Data Pipeline &amp; Observability</div>
              </motion.div>

              <div className="helper-actions">
                <Button className="w-full justify-between" onClick={openQuiz}>Kiểm tra nhanh 1 câu trắc nghiệm <ArrowRight size={16} /></Button>
                <Button variant="outline" className="w-full" onClick={() => onSelect(nextTerm)}>Xem thuật ngữ khác</Button>
                <button className="restore-link" onClick={returnToDefault} type="button">Trở về mặc định</button>
              </div>
            </div>
          )}

          {phase === "quiz" && item && (
            <div className="quiz-view" data-helper-content>
              <button className="back-link" type="button" onClick={() => setPhase("explaining")}><ChevronLeft size={16} /> Quay lại phần giải thích</button>
              <div className="quiz-step">KIỂM TRA NHANH · 1 CÂU</div>
              <h3 id="quick-check-question">{item.quiz}</h3>
              <div className="quiz-answers" role="group" aria-labelledby="quick-check-question">
                {item.answers.map((option, index) => {
                  const isSelected = answer === index;
                  const isCorrect = submitted && index === item.correct;
                  const isWrong = submitted && isSelected && index !== item.correct;
                  return <button key={option} type="button" aria-pressed={isSelected} disabled={submitted} onClick={() => setAnswer(index)} className={`quiz-answer ${isSelected ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}><span className="answer-indicator">{isCorrect ? <Check size={14} /> : String.fromCharCode(65 + index)}</span>{option}</button>;
                })}
              </div>
              {submitted && <div className={`quiz-feedback ${answer === item.correct ? "is-correct" : "is-review"}`} role="status">{answer === item.correct ? "Đúng rồi — bạn đã nắm được ý chính." : "Chưa chính xác. Hãy xem lại giải thích phía trên trước khi chọn bước tiếp theo."}</div>}
              {!submitted ? <Button className="w-full" disabled={answer === null} onClick={submitAnswer}>Kiểm tra đáp án <ArrowRight size={16} /></Button> : <div className="quiz-finish"><Button className="w-full" onClick={() => { setPhase("continued"); }}>Tiếp tục bài học <ArrowRight size={16} /></Button><Button variant="outline" className="w-full" onClick={() => setPhase("closed")}>Đóng thanh công cụ <X size={15} /></Button></div>}
              <p className="quiz-note">Câu hỏi giúp bạn tự kiểm tra; kết quả không được lưu và không đánh dấu tiến độ khóa học.</p>
            </div>
          )}

          {(phase === "closed" || phase === "continued") && (
            <div className="closed-view" data-helper-content>
              <div className="closed-icon"><Check size={23} /></div>
              <h3>{phase === "continued" ? "Quay lại bài học" : "Đã đóng hỗ trợ"}</h3>
              <p>{phase === "continued" ? "Bạn có thể tiếp tục đọc slide Data Pipeline & Observability. Nội dung vẫn ở nguyên vị trí." : "Slide vẫn giữ nguyên nội dung ban đầu."}</p>
              <Button variant="outline" className="w-full" onClick={() => setPhase("explaining")}>Mở lại phần giải thích</Button>
              <button className="restore-link" onClick={returnToDefault} type="button">Trở về mặc định</button>
            </div>
          )}
        </div>

        <footer className="helper-footer"><Sparkles size={13} /> Giải thích mẫu theo thuật ngữ và mức bạn chọn</footer>
      </section>
    </aside>
  );
}
