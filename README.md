# Strategic Automation Leadership

English learner guide for the Power Automate leadership workshop, built with VitePress.

## Local development

Requires Node.js 24 and npm.

```bash
npm ci
npm run docs:dev
```

VitePress prints the local preview URL.

## Validate the site

```bash
npm run docs:build
npm run docs:preview
```

The generated site is in `docs/.vitepress/dist`.

## Publication

Pushing to `main` triggers the GitHub Pages workflow. The public site is [Strategic Automation Leadership](https://teerasej.github.io/power-automate-leadership-workshop/).

Exercises and sample data are generic learning materials. Case figures are fictional. Physical Flow-card originals, private facilitator files, and validation evidence are excluded from the public package.
