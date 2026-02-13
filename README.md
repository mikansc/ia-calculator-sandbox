# Sandbox Math Tests

Overview
--------
<img width="1102" height="682" alt="image" src="https://github.com/user-attachments/assets/80cc075b-d1ac-48ee-823d-a5f5a0c0a19a" />

This small web project contains a set of JavaScript modules and tests for basic math utilities and a simple 3D scene demo. It includes a tiny UI and test suite configured with Vitest and builds with Webpack.

**Dependencies:**
- Node.js (v14+ recommended)
- Dev dependencies listed in `package.json`

Quick Start
-----------

1. Install dependencies:

```bash
yarn install
```

2. Run a local static server (fast preview):

```bash
yarn dev
```

3. Start Webpack dev server:

```bash
yarn start
```

4. Run tests:

```bash
yarn test
```

Build
-----

Create a production build with:

```bash
yarn build
```

For a development build:

```bash
yarn build:dev
```

Bundle Analysis
---------------

The production build demonstrates Webpack's optimization capabilities:

**Output Files:**
- `bundle.js`: 2.86 KiB (minified)
- `bundle.js.map`: 12 KiB (source map)
- `styles.css`: 5.55 KiB
- `styles.css.map`: 7.6 KiB (source map)
- `index.html`: 1.62 KiB

**Total bundle size:** 8.42 KiB (excluding source maps)
**Total with source maps:** 19.7 KiB

**Optimization Effects:**
- JavaScript modules (6.15 KiB source) → 2.86 KiB bundled (**~53% size reduction**)
- Code minification and tree-shaking applied
- Source maps generated for debugging production builds
- CSS processed with PostCSS and optimized

The bundler combines multiple JavaScript modules (index.js, math.js, scene3d.js, calculator-ui.js) into a single optimized bundle with dead code elimination and minification.

Deployment
----------

The project builds static assets into the Webpack output directory. To deploy:

- Run `yarn build` to produce optimized assets.
- Upload the resulting files (the Webpack output directory) to your static host (Netlify, Vercel, Surge, GitHub Pages, S3, etc.).

If you use GitHub Pages, you can deploy the build directory using a small deployment script or the `gh-pages` package.

Project Structure
-----------------

- `src/` — source files (JS, HTML, styles)
- `index.test.js`, `math.test.js`, `scene3d.test.js` — test files
- `package.json` — scripts and devDependencies

Author
------

LinkedIn: https://www.linkedin.com/in/michaelnsc

Note about authorship
---------------------

This project was made entirely using IA — no single line of code was written by me.

If you want changes to the README or additional deployment examples (GitHub Actions, Docker, or CI), tell me what you'd like and I can add them.
