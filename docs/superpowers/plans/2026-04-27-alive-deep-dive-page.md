# ALIVE Deep Dive Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a polished Deep Dive page section that explains ALIVE in more detail using analyzed content from the provided image folder.

**Architecture:** Keep the current single-page React app. Add data arrays and a `ProjectDeepDive` component in `src/App.tsx`, copy curated image assets into `public/alive/deep-dive/`, and add scoped CSS in `src/App.css`.

**Tech Stack:** React 19, TypeScript, Vite, CSS, Vitest, existing static assets under `public/alive/`.

---

## File Structure

- Modify: `src/App.tsx` for data arrays, nav link, hero CTA, and the new Deep Dive component.
- Modify: `src/App.css` for Deep Dive page styling and responsive layout.
- Modify: `src/App.test.tsx` for coverage of the new nav item and extracted project facts.
- Create: `public/alive/deep-dive/poster.webp`
- Create: `public/alive/deep-dive/render-ortho.webp`
- Create: `public/alive/deep-dive/field-testing.webp`
- Create: `public/alive/deep-dive/assembly.webp`
- Create: `public/alive/deep-dive/water-deployment.webp`
- Create: `public/alive/deep-dive/speed-timing.webp`

### Task 1: Curate Assets

- [ ] **Step 1: Create the destination directory**

Run: `mkdir -p public/alive/deep-dive`

Expected: directory exists.

- [ ] **Step 2: Convert selected images to webp**

Use Pillow to convert and resize selected source images to web-friendly `.webp` files in `public/alive/deep-dive/`.

- [ ] **Step 3: Verify generated assets exist**

Run: `ls public/alive/deep-dive`

Expected: all 6 `.webp` files are present.

### Task 2: Add Deep Dive Component

- [ ] **Step 1: Add arrays in `src/App.tsx`**

Add arrays for project facts, anatomy items, procedure stages, evidence images, performance results, vision models, safety results, feasibility results, and roadmap items.

- [ ] **Step 2: Add `ProjectDeepDive` component in `src/App.tsx`**

Render all Deep Dive sections using the arrays. Use semantic headings and descriptive image alt text.

- [ ] **Step 3: Add navigation and CTA**

Add `Deep Dive` to the nav and add a hero CTA linking to `#deep-dive`.

### Task 3: Style The Page

- [ ] **Step 1: Add Deep Dive CSS in `src/App.css`**

Style the page as a dossier using the existing command-center palette, bento grids, evidence cards, and responsive breakpoints.

- [ ] **Step 2: Include `#deep-dive` scroll margin**

Add `#deep-dive` wherever section scroll margins are declared.

### Task 4: Test And Verify

- [ ] **Step 1: Update tests in `src/App.test.tsx`**

Assert the nav includes `Deep Dive` and the page renders `Project Deep Dive`, `0.998 m/s`, `YOLOv8n 640x640`, and `87%`.

- [ ] **Step 2: Run tests**

Run: `npm test`

Expected: all tests pass.

- [ ] **Step 3: Run lint**

Run: `npm run lint`

Expected: no lint errors.

- [ ] **Step 4: Run build**

Run: `npm run build`

Expected: TypeScript and Vite build succeed.

## Self-Review

- Spec coverage: page structure, content facts, asset strategy, nav, tests, and verification are covered.
- Placeholder scan: no TODO/TBD placeholders remain.
- Type consistency: all planned data is local React data rendered by one component; no new external APIs are introduced.
