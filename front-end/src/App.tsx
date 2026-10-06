import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { RotateCcw } from "lucide-react";
import { LessonContext, type TermKey } from "./components/LessonContext";
import { InlineScaffold } from "./components/InlineScaffold";
import { ThemeToggle } from "./components/ThemeToggle";
import { Button } from "./components/ui/button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function initialTheme(): "light" | "dark" {
  try {
    return localStorage.getItem("ai-tutor-theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);
  const [selected, setSelected] = useState<TermKey | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const [helperPhase, setHelperPhase] = useState<"empty" | "explaining" | "quiz" | "closed" | "continued">("empty");
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("ai-tutor-theme", theme); } catch { /* Keep theme interactive without storage. */ }
  }, [theme]);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const lenis = new Lenis({ duration: 0.75, smoothWheel: true, wheelMultiplier: 0.85 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    gsap.fromTo("#lesson-insight", { y: 8, autoAlpha: 0.55 }, {
      y: 0,
      autoAlpha: 1,
      duration: 0.4,
      overwrite: true,
      scrollTrigger: { trigger: "#lesson-insight", start: "top 88%", once: true },
    });
    ScrollTrigger.refresh();
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, { scope: pageRef });

  const toggleTheme = useCallback(() => setTheme((current) => current === "light" ? "dark" : "light"), []);
  const reset = useCallback(() => {
    setSelected(null);
    setResetKey((key) => key + 1);
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="AI Tutor — đầu trang">
          <img className="brand-logo" src="/ai-tutor-logo-mark.png" alt="" />
          <span><b>AI Tutor</b><small>DIAGNOSTIC REFRESHER</small></span>
        </a>
        <div className="topbar-center"><span className="lesson-dot" /> Day 10 · Data Pipeline &amp; Observability <span className="topbar-separator">/</span> <span className="option-label">Option C</span></div>
        <div className="topbar-actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Button variant="outline" size="sm" className="reset-top" onClick={reset}><RotateCcw size={14} /> <span>Trở về mặc định</span></Button>
        </div>
      </header>

      <main id="top" className="page-wrap" ref={pageRef}>
        <div className="page-intro">
          <div className="intro-copy"><h1>Giải đúng chỗ đang vướng.</h1><p>Chọn thuật ngữ và độ sâu phân tích mong muốn để hiểu rõ bài hơn trong 1 nốt nhạc.</p></div>
          <div className="flow-indicator" aria-label="Luồng tương tác"><span className="flow-step active"><i>01</i> Bài học</span><span className="flow-line" /><span className={`flow-step ${selected && helperPhase === "explaining" ? "active" : ""}`}><i>02</i> Soi thuật ngữ</span><span className="flow-line" /><span className={`flow-step ${["quiz", "closed", "continued"].includes(helperPhase) ? "active" : ""}`}><i>03</i> Quyết định</span></div>
        </div>

        <div className="workspace-grid">
          <LessonContext selected={selected} onSelect={setSelected} />
          <InlineScaffold selected={selected} onSelect={setSelected} resetKey={resetKey} onReset={reset} onPhaseChange={setHelperPhase} />
        </div>

        <footer className="page-footer"><span>Option C · Inline Scaffolding Co-pilot</span><span>Giải thích mẫu theo ngữ cảnh Data Pipeline · không lưu kết quả</span></footer>
      </main>
    </div>
    </MotionConfig>
  );
}
