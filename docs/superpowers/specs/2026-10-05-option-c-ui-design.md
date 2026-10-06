# Option C UI Design — AI Tutor Diagnostic Refresher

## Goal

Turn the supplied Option C screen into a test-ready, login-free local prototype for **Inline Scaffolding Co-pilot**. A learner selects a technical term in the Day 10 Data Pipeline lesson, asks for an explanation at a chosen depth, then decides whether to continue, inspect another term, or close the helper.

This build is for Option C only. It does not implement Options A or B.

## User and learning context

- **User:** Product Management / Data Science learner studying AI/Data courses online.
- **Situation:** the learner is studying a new slide and pauses at unfamiliar or foundational terminology because of a knowledge gap.
- **Shared lesson fixture:** “Day 10 - Data Pipeline & Observability”; the terms `agent RAG`, `vector store`, `data cascades`, and `observability`.
- **Task:** quickly identify which foundational knowledge is missing and get unstuck to continue learning.
- **Desired outcome:** understand the missing knowledge link in under one minute without overload or breaking the learning flow.

## Core flow

The single Option C page presents three UI states:

1. **Common context:** slide content, learner task, Option C identity, and theme control.
2. **Inline scaffolding:** selecting `agent RAG`, `vector store`, `data cascades`, or `observability` in the slide opens an explanation panel on the right. The learner chooses analysis level 1, 2, or 3 on a slider. A contextual sample explanation updates immediately for the selected term and level.
3. **User decision:** continue the lesson, inspect another term, or close the helper after a one-question quick check. “Trở về mặc định” restores the original slide text and initial helper state.

The explanation panel stays to the right of the lesson and does not obscure the selected term. The learner remains in control; the prototype does not claim the learner has understood unless they answer the quick check and choose to continue.

## Visual design and themes

- Use a calm light theme by default, matching the supplied screen.
- Provide a visible Light/Dark control in the header. Persist the user's selection locally and apply the selected theme consistently to the page, cards, borders, text, selectable terms, buttons, focus states, and scrollbars.
- Centralize theme colors as design tokens; avoid scattered hard-coded theme colors.
- Keep the lesson as the visual anchor. Use a two-column desktop layout for lesson content and the inline helper, with a usable stacked layout at narrow widths.
- Use Inter for interface text and a readable styling for technical terms.
- Preserve the supplied color direction: slate/white surfaces and blue accent in light mode; deep slate surfaces, light text, and clear blue accent in dark mode.
- Mark new lesson knowledge in green. Distinguish prerequisite knowledge with orange and blue; include a visible legend.
- Provide “Trở về mặc định” to restore the original slide wording and the default interaction state.
- Offer a one-question multiple-choice quick check before the learner closes the helper.

## Component and styling system

- Scaffold a small React/Vite application so shadcn/ui components can be used as intended.
- Use Tailwind CSS for layout and design-token utilities.
- Use shadcn/ui components backed by Radix UI primitives for accessible controls, tabs, buttons, and switches where suitable.
- Keep app-specific theme tokens in a small CSS module or global token stylesheet; do not add a styling framework that duplicates Tailwind.

## Motion

- Use GSAP timelines for the inline helper's entry/exit and learner decision transitions.
- Use Lenis for smooth movement through the lesson only where scrolling is needed, with GSAP ScrollTrigger connected to the same scroll lifecycle for section cues.
- Use Framer Motion for small control feedback such as selected-term or toggle-state micro-interactions; avoid animating the same property with multiple libraries.
- Respect `prefers-reduced-motion`: disable or simplify transitions and smooth scrolling when requested.
- Keep page/state transitions short and functional; do not add decorative motion that delays reading or decision making.

## Accessibility and responsive behavior

- Use semantic headings, buttons, and labelled controls.
- Every clickable term token must be keyboard reachable and have an accessible name; show a visible focus indicator.
- Theme switch exposes its current state with an accessible name and `aria-pressed` or the equivalent Radix state.
- Keep text and interactive controls readable in both themes, with sufficient contrast.
- Announce meaningful helper-state changes to assistive technology where needed.
- Support desktop and narrow viewports; no multi-device polish beyond making the prototype usable and readable is required.

## Local access and QA

- Provide direct local access to Option C without a login screen or auth gate.
- No backend, real model, or external API is required; use canned outputs.
- Canned explanations simulate immediate AI generation and change with the selected term and slider level.
- Start the development server and open the local URL for manual visual QA.
- QA the default light theme, dark theme, theme persistence, term selection, explanation-depth controls, close/continue/reset paths, keyboard focus, and narrow viewport layout.
- The user requested the finished local page to be opened for manual QA.

## Requested skill setup

Attempt the user's requested skill installations before implementation:

- `pnpm dlx skills add shadcn/ui`
- `npx skills add https://github.com/greensock/gsap-skills`

Use those skills to guide the shadcn/Radix component approach and GSAP patterns. Report any network or installation blocker and continue with available local guidance where possible.

## Out of scope

- Building Options A and B.
- Adding login/authentication, dashboard, onboarding, or account features.
- Connecting an LLM/API or adding persistent learner history.
- A production-ready course platform or a full failure-state catalog.

## Acceptance criteria

- The single Option C prototype starts locally and is directly accessible without login.
- Its common lesson context, inline explanation, and learner-decision states are operable.
- The same Day 10 slide and task remain visible/available throughout the C flow.
- Selecting `agent RAG`, `vector store`, `data cascades`, or `observability` opens the helper to the selected term's right; slider levels 1–3 update a contextual explanation immediately.
- New slide concepts are green; prerequisite content is orange or blue, with a visible legend.
- The one-question quiz precedes helper closure, and “Trở về mặc định” restores the original slide text and the initial interaction state.
- Light mode is the default; the user can switch to dark and back, and the choice persists locally.
- The page uses the requested design system and motion tools without conflicting animations.
- Reduced-motion preference is respected, and keyboard users can operate the primary interactions.
- The local page is opened for manual visual QA before completion is reported.
