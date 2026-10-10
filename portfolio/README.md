# Portfolio — magazine edition

A static, editorial-style UX/UI portfolio in a **single self-contained file**: `index.html`.
No build step and no other files needed — open it in any browser.

## Adding your work
Your content is in the first `<script>` block at the top of `index.html`:

- `SITE` — your name, masthead, tagline, intro, editor's letter (about), email and links.
- `PROJECTS` — one entry per portfolio piece. Each has a short `blurb` (shown on the home page cards)
  and a longer `story` (the case-study article). Put `{ heading: "..." }` inside `story` for section headings.

Each project opens at `index.html#project/<id>`.

Drop images into `images/` and reference them, e.g. `cover: "images/atelier-cover.jpg"`
(or use a full `https://...` image URL). Leave `cover` / `src` empty to show a colored placeholder
in the project's `tone`. Set `featured: true` on the project you want as the cover story.

## Changing the look
Colors and fonts are CSS variables at the top of the `<style>` block in `index.html`.

## Publishing
Any static host works (GitHub Pages, Netlify, Vercel). For GitHub Pages, serve the `portfolio/` folder.
