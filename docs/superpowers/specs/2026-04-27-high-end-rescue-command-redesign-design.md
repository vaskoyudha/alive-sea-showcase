# High-End Rescue Command Redesign Design

## Goal

Redesign the ALIVE showcase into a high-end Rescue Command Center experience while preserving the current React/Vite app structure, English content, ALIVE assets, and Photo Sphere 360 viewer behavior.

## Visual Direction

The redesign should feel like a premium emergency-response operations surface rather than a generic blue technology landing page. The visual system uses OLED navy/black foundations, rescue orange as the dominant action color, cyan as the sensor/AI accent, and warm sand/gold for human-impact moments.

The selected high-end design archetype is an ethereal tactical interface with an asymmetrical bento layout. Major surfaces should use nested double-bezel architecture: a subtle outer shell plus a distinct inner core. Typography should avoid generic default choices and use a premium Google Fonts pairing that works in the existing CSS setup.

## Page Structure

The existing sections remain, but their hierarchy changes:

- Hero becomes the mission-control opening: ALIVE identity, emergency-response positioning, primary CTA to inspect the 360 viewer, secondary CTA to validation evidence, prototype render, status chips, and compact mission stats.
- Evidence metrics become sharper dashboard cards with stronger number hierarchy.
- System architecture becomes a three-step operational flow: Detect, Navigate, Deliver.
- Industrial design board becomes a product-inspection board with premium render cards.
- 360 viewer becomes the central inspection module with clearer command styling, stronger scene controls, and preserved Photo Sphere functionality.
- Testing becomes an evidence section with gallery cards that read as validation proof.
- Vision AI becomes an intelligence panel with model labels and result charts.
- Impact/team closes with warmer human context and competition credibility.

## Interaction And Motion

Use custom cubic-bezier transitions for navigation, buttons, cards, and scene controls. Avoid generic `ease-in-out`, `transition: all`, and heavy blur on scrolling containers. Add scroll-entry animation classes using CSS animation only, with a `prefers-reduced-motion` override.

Interactive elements must preserve accessibility: visible focus states, semantic buttons and links, adequate touch targets, and reduced-motion support.

## Technical Scope

Modify the existing single-page app without introducing a new UI framework. Keep the current arrays and `View360` component in `src/App.tsx`, but improve labels/copy where useful. Most redesign work lives in `src/App.css` and `src/index.css`, with small metadata updates in `index.html`.

Do not remove installed taste skills or existing test setup. Existing tests should continue to pass, especially the tests around evidence metrics and 360 viewer controls.

## Verification

Run:

- `npm test`
- `npm run build`

If lint is practical after the redesign, run `npm run lint` as an additional check.

## Constraints

- No git commit unless explicitly requested.
- Preserve the local asset paths under `/alive/`.
- Preserve the 360 viewer initialization and fullscreen fallback behavior.
- Preserve mobile responsiveness and improve small-screen navigation where possible.
- Avoid banned high-end visual design anti-patterns: Inter/Arial/Roboto as the primary font, generic flat cards, top-glued edge-to-edge nav, `transition: all`, and absent focus states.
