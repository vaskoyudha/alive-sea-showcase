# ALIVE Deep Dive Page Design

## Goal

Add a project-focused Deep Dive page section that translates the provided ALIVE poster and evidence folder into a readable, premium web experience.

## Content Source

Use `/home/vascosera/Downloads/ALIVE-20260427T153858Z-3-001 (2)/ALIVE` as the source evidence folder. The folder includes the full research poster, design renders, 360 panoramas, field test documentation, safety videos, speed/responsivity evidence, and object-detection videos.

## Content Analysis To Represent

ALIVE stands for Advanced Lifeboat for Flood Evacuation. It is a smart lifeboat prototype based on object detection for flood evacuation. The research problem is flood rescue risk in Indonesia, especially drowning risk caused by limited rescue equipment and response time. The objective is to design a remote-controlled object-detection lifeboat prototype and evaluate its feasibility for simulated flood rescue.

The page must include these extracted facts:

- Project timeline: 5 months, November 2025 to March 2026.
- Locations: Al Falah Darussalam Junior High School for design/build and InfinITS Tekno Sains Park for testing/evaluation.
- Components: Raspberry Pi, webcam, LiPo battery, receiver/control system, thrusters, and floating catamaran-style hull.
- Functional results: 1.43s stop delay, 2.88s 90-degree turn, 20.41s zig-zag time for a 20m course, 0.998 m/s average speed, and 20.06s average 20m time.
- Vision models: YOLOv11n 640x640, YOLOv8n 640x640, and YOLOv8n 240x120. YOLOv8n 640x640 is presented as the best balance between speed and accuracy for Raspberry Pi 4.
- Safety results: stability succeeded 5 times, electrical durability succeeded 3 times, return to base succeeded 5 times.
- Feasibility results: functional 100%, object detection 100%, basic safety 87%.
- SDG alignment: SDG 11 and SDG 3.
- Recommendations: stronger hull material, wide-angle/thermal camera, autonomous operation, victim retrieval mechanism, disaster-agency collaboration.

## Page Structure

Add a `Deep Dive` navigation link that points to `#deep-dive`. The page section should be a large dossier-style section below the existing team section, using the current Rescue Command Center visual language.

Sections inside the Deep Dive:

- Mission Brief: concise explanation of problem, objective, timeline, and research location.
- System Anatomy: component cards for vision, compute, control, power, propulsion, and hull.
- Research Procedure: staged flow from design to build, test, analyze, and improve.
- Evidence Wall: curated image grid from poster, design render, assembly, water deployment, and speed result.
- Performance Results: metric cards for timing and speed values.
- Vision AI Analysis: model comparison cards and selected-model explanation.
- Safety And Feasibility: safety counts and feasibility percentages.
- Next Version Roadmap: recommendations converted into future improvements.

## Asset Strategy

Copy a curated subset of images into `public/alive/deep-dive/` as compressed web assets. Avoid copying the entire folder because it contains many large images and videos. Use source images that cover the full project story:

- Poster: `Banner Alive.png`
- Render: `ALIVE Design/render-ortho.png`
- Field testing: `Documentation of Testing/Uji Coba 5/Copy of IMG-20250928-WA0036.jpg`
- Assembly: `Documentation of Testing/Uji Coba 5/Copy of IMG-20250928-WA0030.jpg`
- Water deployment: `Documentation of Testing/Uji Coba 4/Copy of 20250928_162451.jpg`
- Speed timing: `Functional Testing Result (Speed and Responsivity)/Kecepatan/Screenshot_20250917_205323_Clock.jpg`

## Technical Constraints

Keep the existing React/Vite single-page architecture. Do not add a router or new runtime dependency. Add small data arrays in `src/App.tsx`, render a `ProjectDeepDive` component, and extend `src/App.css` with Deep Dive styles. Preserve existing 360 viewer behavior and tests.

## Verification

Run `npm test`, `npm run lint`, and `npm run build`. Update tests to confirm the Deep Dive nav and important extracted facts render.
