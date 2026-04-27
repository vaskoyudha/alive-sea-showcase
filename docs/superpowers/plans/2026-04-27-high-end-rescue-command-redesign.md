# High-End Rescue Command Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the ALIVE showcase into a premium Rescue Command Center interface while preserving current functionality and content.

**Architecture:** Keep the existing Vite React single-page structure. Apply the redesign through focused changes to page metadata, global theme tokens, CSS layout/motion, and small React copy/attribute improvements without introducing new runtime dependencies.

**Tech Stack:** React 19, TypeScript, Vite, CSS modules-by-convention through `src/App.css` and `src/index.css`, Vitest, Photo Sphere Viewer.

---

## File Structure

- Modify: `index.html` for title, theme color, and preconnect metadata.
- Modify: `src/index.css` for premium font imports, global tokens, body background, focus states, reduced motion, and base typography.
- Modify: `src/App.css` for the full Rescue Command Center visual system, responsive layout, cards, buttons, command nav, 360 module, and motion.
- Modify: `src/App.tsx` for small class hooks, stronger labels, image loading/dimension attributes, and copy refinements while preserving component behavior.
- Test: `src/App.test.tsx` should continue to pass without broad test rewrites.

### Task 1: Metadata And Global Design Tokens

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`

- [ ] **Step 1: Update HTML metadata**

Set the page title to `ALIVE - Rescue Command Showcase`, add a matching `theme-color`, and add Google Fonts preconnect links before the app script.

- [ ] **Step 2: Replace global font import and theme tokens**

Use `Manrope` for body UI and `Instrument Serif` for selective display accents. Define rescue-command tokens such as `--ink`, `--command`, `--rescue`, `--sensor`, `--sand`, `--panel`, and `--motion` in `:root`.

- [ ] **Step 3: Add base accessibility polish**

Add visible `:focus-visible` styles for `a` and `button`, `color-scheme: dark`, `touch-action: manipulation`, `text-wrap: balance` for headings, and `prefers-reduced-motion` overrides.

- [ ] **Step 4: Verify global CSS compiles**

Run: `npm test`

Expected: existing tests pass or fail only because later visual hooks have not been implemented yet.

### Task 2: React Markup Refinements

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Improve scene labels**

Rename scene labels from `Scene 01` style to clearer inspection labels such as `Dock Front`, `Starboard`, `Scale View`, `Deck Line`, `Field View`, and `Final Sweep`. Keep unique labels so tests can still query buttons by accessible name if updated later.

- [ ] **Step 2: Add high-end layout hooks**

Add class hooks where useful, such as `mission-grid`, `metric-shell`, `command-card`, `inspection-frame`, and `evidence-card`, without splitting the file unless necessary.

- [ ] **Step 3: Add image performance attributes**

For non-critical below-fold images, add `loading="lazy"`. For the hero render and logo, keep eager behavior and add explicit `width` and `height` attributes where asset proportions are known enough for layout stability.

- [ ] **Step 4: Preserve 360 behavior**

Do not change `Viewer` initialization, `setPanorama`, fullscreen fallback, keyboard Escape handling, or rotate button handlers except for labels/copy.

### Task 3: Rescue Command CSS Redesign

**Files:**
- Modify: `src/App.css`

- [ ] **Step 1: Replace top-level shell and nav styling**

Create a floating command-island nav detached from the top on desktop and a compact bottom command dock on mobile. Keep all existing anchors and source drive link.

- [ ] **Step 2: Redesign the hero**

Use an asymmetrical mission grid: text and CTAs on the left, nested prototype command card on the right, status chips over the visual, and cinematic background texture.

- [ ] **Step 3: Redesign evidence and system cards**

Apply double-bezel card styling to metrics, features, render cards, gallery cards, impact cards, and team surfaces. Give metrics stronger numerical hierarchy and improve contrast.

- [ ] **Step 4: Upgrade the 360 inspection module**

Make the 360 section feel like the primary product inspection tool: larger frame, better command header, refined controls, stronger thumbnails, and responsive fullscreen support.

- [ ] **Step 5: Add motion safely**

Use transform/opacity animations with custom cubic-bezier timing. Add `prefers-reduced-motion` overrides that disable decorative animations.

- [ ] **Step 6: Verify responsive breakpoints**

Ensure layouts collapse cleanly at `1080px`, `740px`, and `520px`, preserving the existing mobile 360 controls and bottom nav usability.

### Task 4: Verification And Polish

**Files:**
- Modify if needed: `src/App.test.tsx`

- [ ] **Step 1: Run tests**

Run: `npm test`

Expected: Vitest passes. If scene labels changed and a test expects `Scene 03`, update the test to query the new accessible label.

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: TypeScript build and Vite build pass.

- [ ] **Step 3: Run lint**

Run: `npm run lint`

Expected: ESLint passes. Fix any lint issues caused by markup updates.

- [ ] **Step 4: Confirm local server still responds**

Run: `curl -I http://127.0.0.1:5173`

Expected: `HTTP/1.1 200 OK` if the dev server is still running.

## Self-Review

- Spec coverage: metadata, typography, theme, layout, 360 viewer, accessibility, mobile, and verification are covered.
- Placeholder scan: no TODO/TBD placeholders remain.
- Type consistency: plan only uses existing files and CSS class hooks; no new TypeScript APIs are required.
