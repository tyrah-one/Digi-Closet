# Digi-Closet
Digital Closet for stable and statement clothing pieces, with a feature to "mix and match" the pieces to find a ideal outfit. 

## Pages
- **Home** – links to everything
- **My Clothing** – every piece, grouped by jackets / tops / bottoms. **Edit** shows a ✕ to delete pieces.
- **Upload** – add a photo, name it, pick a category, then **Save** (or **Delete** to discard it)
- **Mix & Match** – flip through jackets, tops and bottoms with the arrows, then **Save Outfit**
- **Saved Outfits** – your outfits as collages. **Edit** shows a ✕ to delete outfits.

## Running it
You need [Node.js](https://nodejs.org) installed.

```bash
npm install      # first time only
npm run dev      # start the site at http://localhost:5173
npm run build    # build the finished site into dist/
```

## Live website
Every change merged into `main` is published automatically to GitHub Pages
(see `.github/workflows/deploy-pages.yml`):
https://tyrah-one.github.io/Digi-Closet/

## How it works
- Built with React + TypeScript + Vite, styled with plain CSS (`src/index.css`).
- Clothes and outfits are saved in your browser's localStorage, so they stay on the device and browser you used. Photos are shrunk before saving to save space.
