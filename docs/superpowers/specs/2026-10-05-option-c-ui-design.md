# Option C UI Design — AI Tutor Diagnostic Refresher

## Goal

Turn the supplied Option C screen into a test-ready, login-free local prototype for **Inline Scaffolding Co-pilot**. A learner selects a symbol in the Gradient Descent lesson, asks for an explanation at a chosen depth, then decides whether to continue, inspect another symbol, or close the helper.

This build is for Option C only. It does not implement Options A or B.

## User and learning context

- **User:** learner studying technical, AI, or applied mathematics content online.
- **Situation:** the learner is reviewing Gradient Descent & Chain Rule and gets stuck on a symbol in the weight update formula.
- **Shared lesson fixture:** `w_new = w_old − η · ∂L/∂w`.
- **Task:** learn what background knowledge helps explain `∂L/∂w`, then choose what to do next.
- **Desired outcome:** resolve a local point of confusion and continue the lesson without leaving its context or writing a prompt to an external chatbot.

## Core flow

The single Option C page presents three UI states:

1. **Common context:** lesson content, formula, learner task, Option C identity, and theme control.
2. **Inline scaffolding:** selecting a formula symbol opens a nearby explanation panel. The learner chooses a depth such as quick reminder, comparison, or example. Responses are canned and tied to the selected symbol and lesson context.
3. **User decision:** continue the lesson, choose another symbol, or close the helper. Reset returns the prototype to its initial common context.

The explanation panel stays near the formula and does not obscure it. The learner remains in control; the prototype does not claim the learner has understood unless they choose that action.

## Visual design and themes

- Use a calm light theme by default, matching the supplied screen.
- Provide a visible Light/Dark control in the header. Persist the user's selection locally and apply the selected theme consistently to the page, cards, borders, text, formula tokens, buttons, focus states, and scrollbars.
- Centralize theme colors as design tokens; avoid scattered hard-coded theme colors.
- Keep the lesson as the visual anchor. Use a two-column desktop layout for lesson content and the inline helper, with a usable stacked layout at narrow widths.
- Use Inter for interface text and a math-capable font for formulas.
- Preserve the supplied color direction: slate/white surfaces and blue accent in light mode; deep slate surfaces, light text, and clear blue accent in dark mode.

## Component and styling system

- Scaffold a small React/Vite application so shadcn/ui components can be used as intended.
- Use Tailwind CSS for layout and design-token utilities.
- Use shadcn/ui components backed by Radix UI primitives for accessible controls, tabs, buttons, and switches where suitable.
- Keep app-specific theme tokens in a small CSS module or global token stylesheet; do not add a styling framework that duplicates Tailwind.

## Motion

- Use GSAP timelines for the inline helper's entry/exit and learner decision transitions.
- Use Lenis for smooth movement through the lesson only where scrolling is needed, with GSAP ScrollTrigger connected to the same scroll lifecycle for section cues.
- Use Framer Motion for small control feedback such as selected-symbol or toggle-state micro-interactions; avoid animating the same property with multiple libraries.
- Respect `prefers-reduced-motion`: disable or simplify transitions and smooth scrolling when requested.
- Keep page/state transitions short and functional; do not add decorative motion that delays reading or decision making.

## Accessibility and responsive behavior

- Use semantic headings, buttons, and labelled controls.
- Every clickable math token must be keyboard reachable and have an accessible name; show a visible focus indicator.
- Theme switch exposes its current state with an accessible name and `aria-pressed` or the equivalent Radix state.
- Keep text and interactive controls readable in both themes, with sufficient contrast.
- Announce meaningful helper-state changes to assistive technology where needed.
- Support desktop and narrow viewports; no multi-device polish beyond making the prototype usable and readable is required.

## Local access and QA

- Provide direct local access to Option C without a login screen or auth gate.
- No backend, real model, or external API is required; use canned outputs.
- Start the development server and open the local URL for manual visual QA.
- QA the default light theme, dark theme, theme persistence, symbol selection, explanation-depth controls, close/continue/reset paths, keyboard focus, and narrow viewport layout.
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
- The same formula and task remain visible/available throughout the C flow.
- Light mode is the default; the user can switch to dark and back, and the choice persists locally.
- The page uses the requested design system and motion tools without conflicting animations.
- Reduced-motion preference is respected, and keyboard users can operate the primary interactions.
- The local page is opened for manual visual QA before completion is reported.
