# Pipe Bending Calculator

Field calculator for conduit bending. Supports EMT, IMC, and Rigid pipe. Hand benders and mechanical benders. Calculates: 90° stubs, back-to-back bends, offsets, 3-point saddles, 4-point saddles, rolling offsets, concentric bends, and segment bends.

Built with React 18 (CDN) + Babel Standalone for zero build step.

## Run locally

Open `index.html` in a browser (needs CDN access for React + Babel), or serve with a static file server.

## Deploy

Push to `main` — GitHub Pages serves from root.

## KHub standard

`sw.js` (app shell cached), `js/config.js`, `js/error-boundary.js`, `js/a11y.js`, `js/perf.js`, `css/` (4 layers), `.eslintrc.json`, `.prettierrc`, `TEST-CHECKLIST.md`

Note: app.js is Babel-transpiled at runtime — not precached by SW.

## Version

v1.0.0 — Restructured to KHub standard 2026-06-05
