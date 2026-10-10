# Portfolio — magazine edition

A static, editorial-style UX/UI portfolio. No build step: open `index.html` in a browser.

## Adding your work
Everything you write lives in **`js/projects.js`**:

- `SITE` — your name, masthead, tagline, intro, editor's letter (about), email and links.
- `PROJECTS` — one entry per portfolio piece. Each has a short `blurb` (shown on the home page cards)
  and a longer `story` (the case-study article). Put `{ heading: "..." }` inside `story` for section headings.

Drop images into `images/` and reference them, e.g. `cover: "images/atelier-cover.jpg"`.
Leave `cover` / `src` empty to show a colored placeholder in the project's `tone`.
Set `featured: true` on the project you want as the cover story.

## Changing the look
Colors and fonts are CSS variables at the top of `css/style.css`.

## Publishing
Any static host works (GitHub Pages, Netlify, Vercel). For GitHub Pages, serve the `portfolio/` folder.
