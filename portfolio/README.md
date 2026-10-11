# Portfolio

A static UX/UI portfolio styled to match the Digi Closet site (same colours, fonts, thin lines and logo), in a **single self-contained file**: `index.html`.
No build step and no other files needed — open it in any browser.

## Adding your work
Your content is in the first `<script>` block at the top of `index.html`:

- `SITE` — your name, masthead, logo, tagline, intro, about text, email and links.
- `PROJECTS` — one entry per portfolio piece. Each has a short `blurb` (shown on the home page cards)
  and a longer `story` (the write-up on the project's own page). Put `{ heading: "..." }` inside `story` for section headings.

Each project opens at `index.html#project-<id>`.

Drop images into `images/` and reference them, e.g. `cover: "images/atelier-cover.jpg"`
(or use a full `https://...` image URL). Leave `cover` / `src` empty to show an empty frame. Set `featured: true` on the project you want shown first, full width.
`SITE.masthead` is the big home-page title; the O nearest its middle becomes your logo.
Leave `SITE.logo` empty to use the Digi Closet logo, or point it at another image.

## Changing the look
The Digi Closet colours and fonts are CSS variables at the top of the `<style>` block in `index.html`.

## Publishing
Any static host works (GitHub Pages, Netlify, Vercel). For GitHub Pages, serve the `portfolio/` folder.
