import { motion } from "framer-motion";
import { BookOpen, ChevronRight, GraduationCap, Sparkles } from "lucide-react";

export type TermKey = "rag" | "vectorStore" | "dataCascades" | "observability";

type LessonContextProps = {
  selected: TermKey | null;
  onSelect: (term: TermKey) => void;
};

const terms: Record<TermKey, { label: string; accessibleName: string; color: "green" | "orange" | "blue" }> = {
  rag: { label: "agent RAG", accessibleName: "agent RAG — Retrieval-Augmented Generation", color: "green" },
  vectorStore: { label: "vector store", accessibleName: "vector store — kho lưu trữ vector", color: "orange" },
  dataCascades: { label: "data cascades", accessibleName: "data cascades — hiện tượng lỗi dữ liệu lan truyền", color: "green" },
  observability: { label: "observability", accessibleName: "observability — khả năng quan sát hệ thống", color: "blue" },
};

function TermToken({
  term,
  selected,
  onSelect,
}: {
  term: TermKey;
  selected: boolean;
  onSelect: (term: TermKey) => void;
}) {
  const item = terms[term];
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.97 }}
      aria-label={`Giải thích ${item.accessibleName}`}
      aria-pressed={selected}
      onClick={() => onSelect(term)}
      className={`lesson-term token-${item.color} ${selected ? "is-selected" : ""}`}
    >
      {item.label}
    </motion.button>
  );
}

export function LessonContext({ selected, onSelect }: LessonContextProps) {
  return (
    <section className="lesson-column" aria-labelledby="lesson-title">
      <article className="lesson-card surface-card">
        <div className="lesson-eyebrow"><BookOpen size={15} /> BÀI GIẢNG · DAY 10</div>
        <div className="breadcrumb">AI &amp; Data Systems <ChevronRight size={13} /> Data Pipeline &amp; Observability</div>
        <h1 id="lesson-title">Data Pipeline &amp; Observability</h1>
        <p className="lesson-lead">
          Hãy chọn thuật ngữ khiến bạn khựng lại, tìm mắt xích kiến thức nền cần thiết và quay lại học trong dưới 1 phút.
        </p>

        <div className="terms-card terms-block">
          <div className="terms-heading">
            <span>ĐIỂM KẸT TRONG SLIDE</span>
            <span className="context-pill"><span /> Chọn trực tiếp thuật ngữ
            </span>
          </div>
          <div className="slide-excerpt">
            <p>
              Một <TermToken term="rag" selected={selected === "rag"} onSelect={onSelect} /> có thể truy xuất thông tin liên quan từ <TermToken term="vectorStore" selected={selected === "vectorStore"} onSelect={onSelect} /> trước khi tạo câu trả lời.
            </p>
            <p>
              Trong pipeline, một lỗi ở dữ liệu đầu vào có thể tạo ra <TermToken term="dataCascades" selected={selected === "dataCascades"} onSelect={onSelect} /> ở các bước tiếp theo. <TermToken term="observability" selected={selected === "observability"} onSelect={onSelect} /> giúp nhóm theo dõi luồng dữ liệu và tìm nguyên nhân sự cố.
            </p>
          </div>
          <p className="terms-caption">Bấm vào một thuật ngữ để bóc tách các lớp kiến thức cần có.</p>
        </div>

        <div className="lesson-copy">
          <div className="copy-label"><span className="knowledge-dot green" /> TỪ SLIDE DAY 10</div>
          <p>
            Hệ thống <span className="knowledge-highlight green-highlight">RAG</span> kết hợp truy xuất dữ liệu với khả năng tạo nội dung của mô hình. Một <span className="knowledge-highlight orange-highlight">vector store</span> lưu các biểu diễn số của dữ liệu để tìm những mục có nội dung gần với câu hỏi.
          </p>
          <p>
            Khi dữ liệu lỗi được dùng xuyên suốt pipeline, tác động có thể lan tới nhiều bước và đầu ra phía sau. <span className="knowledge-highlight green-highlight">Data cascades</span> mô tả kiểu lan truyền đó; <span className="knowledge-highlight blue-highlight">observability</span> dựa trên logs, metrics và traces để giúp hiểu trạng thái hệ thống.
          </p>
          <div className="lesson-insight" id="lesson-insight">
            <div className="chain-icon"><Sparkles size={16} /></div>
            <div><b>Mục tiêu của slide</b><p>Nhận ra mối liên hệ giữa dữ liệu, các bước xử lý và chất lượng đầu ra của ứng dụng AI.</p></div>
          </div>
        </div>
      </article>

      <section className="knowledge-legend surface-card" aria-label="Chú giải màu kiến thức">
        <div className="legend-heading"><GraduationCap size={17} /> Chú giải kiến thức</div>
        <div className="legend-items">
          <span><i className="knowledge-dot green" /> Khái niệm mới trong slide</span>
          <span><i className="knowledge-dot orange" /> Nền tảng dữ liệu / embedding</span>
          <span><i className="knowledge-dot blue" /> Nền tảng logs, metrics, traces</span>
        </div>
        <div className="course-meta"><span>Bài giảng <b>Day 10 — Data Pipeline &amp; Observability</b></span><span>AI / Data · Tự học trực tuyến</span></div>
      </section>
    </section>
  );
}
