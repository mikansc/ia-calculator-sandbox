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
npm install
```

2. Run a local static server (fast preview):

```bash
npm run dev
```

3. Start Webpack dev server:

```bash
npm start
```

4. Run tests:

```bash
npm test
```

Build
-----

Create a production build with:

```bash
npm run build
```

For a development build:

```bash
npm run build:dev
```

Deployment
----------

The project builds static assets into the Webpack output directory. To deploy:

- Run `npm run build` to produce optimized assets.
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
