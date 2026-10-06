# Option C Prototype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and open a login-free local Option C prototype for the AI Tutor Diagnostic Refresher.

**Architecture:** Replace the standalone HTML prototype with a small React/Vite app. Keep the common lesson fixture and Option C flow in focused React components, use Tailwind and shadcn/Radix primitives for the UI, and keep theme tokens plus any compatibility styling in a small global stylesheet. Use canned explanations so the prototype is deterministic and works offline after dependencies are installed.

**Tech Stack:** React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, GSAP, Lenis, GSAP ScrollTrigger, Framer Motion.

## Global Constraints

- Build **Option C only**; do not implement Options A or B.
- Use the common fixture from “Day 10 - Data Pipeline & Observability” with `agent RAG`, `vector store`, `data cascades`, and `observability`.
- Selecting `agent RAG`, `vector store`, `data cascades`, or `observability` opens the explanation panel to the right of the slide.
- A three-level slider changes a term-specific, lesson-contextual sample explanation immediately.
- New slide concepts are green; foundational data concepts use orange and logs/metrics/traces use blue, with a visible legend.
- The user can restore the original slide wording and default helper state.
- Closing the helper requires a one-question multiple-choice quick check first.
- Default to light theme and persist the explicit light/dark choice locally.
- Use canned, contextual explanation content; do not add an LLM, backend, auth, dashboard, or account flow.
- Keep the helper beside the selected term on desktop and stack it at narrow widths.
- Keep all term actions keyboard accessible with visible focus and accessible names.
- Respect `prefers-reduced-motion`; do not animate the same property with multiple libraries.
- Open the local page for manual visual QA; do not add or run automated tests unless requested.
- Preserve the learner's name and existing project materials unless a change is required to deliver Option C.

---

## File map

- `front-end/package.json`, `front-end/package-lock.json`, `front-end/vite.config.ts`, `front-end/tsconfig*.json`: Vite app scripts, dependencies, and TypeScript configuration.
- `front-end/index.html`: Vite document shell and Vietnamese document language metadata.
- `front-end/src/main.tsx`: React entry point.
- `front-end/src/App.tsx`: shared lesson context, Option C state, theme state, and reset path.
- `front-end/src/components/LessonContext.tsx`: Day 10 slide content, selectable term buttons, and common task.
- `front-end/src/components/InlineScaffold.tsx`: inline helper, depth choices, canned explanation, close/continue/inspect-another actions.
- `front-end/src/components/ThemeToggle.tsx`: accessible light/dark control.
- `front-end/src/components/ui/*`: only shadcn/Radix primitives actually used by the prototype.
- `front-end/src/index.css`: Tailwind directives and centralized light/dark design tokens, focus styles, responsive layout support, and reduced-motion fallback.
- `README.md`: run instructions and Option C local URL/QA note, retaining the existing project identity and submission structure.
- `docs/superpowers/specs/2026-10-05-option-c-ui-design.md`: approved design reference; do not rewrite during implementation.

## Tasks

### Task 1: Set up the prototype toolchain

**Files:**
- Create: `front-end/package.json`, `front-end/package-lock.json`, `front-end/vite.config.ts`, `front-end/tsconfig.json`, `front-end/tsconfig.app.json`, `front-end/postcss.config.js`, `front-end/tailwind.config.ts`
- Modify: `front-end/index.html`

- [x] Attempt the requested shadcn skill setup command: `pnpm dlx skills add shadcn/ui`; pnpm was unavailable, so install through `npx --yes skills add shadcn/ui`.
- [x] Install GSAP skills through `npx --yes skills add https://github.com/greensock/gsap-skills`.
- [x] pnpm was unavailable (`command not found`); the requested shadcn and GSAP skills were installed using the npx fallback.
- [x] Create the Vite React TypeScript app configuration using npm; `dev` serves at `127.0.0.1:5173`.
- [x] Add Tailwind CSS and configure the app source scan paths.
- [x] Configure shadcn/ui aliases and the neutral base theme; use CSS variables for semantic colors.
- [x] Set the document language to Vietnamese and title it `Option C — Inline Scaffolding Co-pilot`.
- [x] Install the runtime packages used by the prototype: Radix/shadcn dependencies, `gsap`, `lenis`, and `framer-motion`.

**Manual verification:** `npm run dev` serves the Vite shell without a login screen.

### Task 2: Build the common lesson context and Option C interactions

**Files:**
- Create: `front-end/src/main.tsx`, `front-end/src/App.tsx`, `front-end/src/components/LessonContext.tsx`, `front-end/src/components/InlineScaffold.tsx`, `front-end/src/components/ThemeToggle.tsx`

- [x] Create the React root and render one Option C page directly, with no router or authentication check.
- [x] Add the slide title `Day 10 — Data Pipeline & Observability`, excerpt with four selectable terms, and task to identify the missing prerequisite knowledge.
- [x] Render the four technical terms as labelled inline buttons; selecting one opens the right-side helper on desktop and keeps the slide visible.
- [x] Add an accessible 1–2–3 slider with term-specific contextual sample explanations that update immediately.
- [x] Mark new slide concepts green, data/embedding foundations orange, and observability foundations blue; add a visible legend.
- [x] Keep the current explanation visible until the learner changes depth, selects another term, closes the helper, or chooses to continue.
- [x] Add the one-question multiple-choice quick check before the learner can close the helper; offer continue, close, or inspect another term after an answer.
- [x] Add `Trở về mặc định` to restore the original slide wording, clear helper/quiz state, and return to the initial context.
- [x] Keep understanding unconfirmed until the learner explicitly chooses to continue.
- [x] Implement light/dark mode, light default, accessible toggle, and local storage persistence.

**Manual verification:** select each term, move the slider through levels 1–3, answer the quick check, exercise each decision, restore defaults, and reload after switching themes.

### Task 3: Apply visual system, motion, responsive behavior, and accessibility

**Files:**
- Create: `front-end/src/index.css`
- Modify: `front-end/src/App.tsx`, `front-end/src/components/LessonContext.tsx`, `front-end/src/components/InlineScaffold.tsx`, `front-end/src/components/ThemeToggle.tsx`

- [x] Define centralized light and dark semantic tokens for canvas, surfaces, text, borders, accent, focus ring, and inline term controls.
- [x] Style the lesson as the visual anchor, with a two-column desktop composition and stacked narrow-screen composition.
- [x] Use shadcn/Radix button, slider, and switch primitives where they fit.
- [x] Use GSAP timelines for helper transitions and clean up timelines when components unmount.
- [x] Use Framer Motion for small selected-token and theme-control feedback, without animating the GSAP-owned panel transforms.
- [x] Connect Lenis and GSAP ScrollTrigger to lesson scrolling; clean up both on unmount and disable smooth scrolling for reduced motion.
- [x] Add semantic headings, keyboard-operable controls, visible focus, and a polite live region for helper-state changes.
- [x] Add responsive breakpoints and `prefers-reduced-motion` behavior.

**Manual verification:** inspect light and dark themes, keyboard-only operation, reduced-motion preference, desktop width, and a narrow viewport.

### Task 4: Document local use and open the prototype for QA

**Files:**
- Modify: `README.md`

- [x] Add exact local setup commands `cd front-end`, `npm install`, and `npm run dev` while preserving the existing README structure, learner identity, and submission folder guidance.
- [x] State clearly that the prototype is Option C only and uses canned output with no login requirement.
- [x] Start the Vite server and identify its local URL (`http://127.0.0.1:5174/`; port 5173 was occupied).
- [ ] Manual visual QA is partial: initial view and term helper/slider were inspected; complete the remaining theme, quiz, reset, and wide-screen checks.
- [x] Keep the dev server available for the user's QA session and report the URL. Skill installation succeeded through npx after pnpm was found unavailable.

**Manual verification:** confirm the page opens directly without login, all C interactions work, theme choice persists after refresh, and the reset returns to the initial common context.

---

## Plan self-review

- Spec coverage: the shared fixture, term selection, 1–2–3 slider, immediate response, legend, quiz, restore-defaults, and learner choices are in Task 2; visual system, animation, accessibility, and responsive rules are in Task 3; direct unauthenticated access and manual QA are in Tasks 1 and 4; requested skill setup is in Task 1; out-of-scope A/B and backend work is excluded throughout.
- Placeholder scan: no `TODO`, `TBD`, or unspecified implementation steps remain.
- Interface consistency: `App.tsx` owns flow/theme state; `LessonContext.tsx` selects the term; `InlineScaffold.tsx` receives the selected term and exposes the learner decisions; `ThemeToggle.tsx` receives and updates theme state.
- Verification respects the instruction not to add or run automated tests; this plan uses manual QA only.
