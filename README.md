# Pipe Bending Calculator

Field calculator for conduit bending. Supports EMT, IMC, and Rigid pipe. Hand benders and mechanical benders. Calculates: 90° stubs, back-to-back bends, offsets, 3-point saddles, 4-point saddles, rolling offsets, concentric bends, and segment bends.

Built with React 18. **Mode:** framework-hosted inside the KHub shell (see KHub-Boilerplate `docs/UX-STANDARDS.md` §1). **Archetype:** calculator · **Layout:** compact (see `docs/APP-ARCHETYPES.md`).

React and ReactDOM are self-hosted in `js/vendor/` and precached by the service worker, so a cold offline launch works after installation. The UI source lives in `js/app.jsx` and is compiled once to browser-ready `js/app.js` — no browser-side Babel, no runtime CDN dependencies. Google Fonts are optional: they runtime-cache after first load and every font-family declares a local fallback stack.

## Run locally

Open `index.html` in a browser, or serve with a static file server. No CDN access required.

## Deploy

Push to `main` — GitHub Pages serves from root.

## KHub standard

`sw.js` (app shell cached), `js/config.js`, `js/error-boundary.js`, `js/a11y.js`, `js/perf.js`, `css/` (4 layers), `.eslintrc.json`, `.prettierrc`, `TEST-CHECKLIST.md`

## Rebuilding the app after editing

`js/app.js` is generated — edit `js/app.jsx`, then:

```bash
npx babel js/app.jsx --presets @babel/preset-react --no-babelrc --out-file js/app.js
# preset options: { "runtime": "classic", "development": false }
```

Then bump `CACHE_VERSION` in `sw.js` (required — installed users never receive new assets otherwise).

## Version

v1.0.0 — Restructured to KHub standard 2026-06-05
