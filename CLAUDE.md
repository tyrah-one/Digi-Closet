# Digi-Closet

A digital closet website: upload clothing photos, mix & match them into outfits, save outfits as collages.

The owner is a beginner (some Java, a little HTML/CSS). Keep code simple and readable, and explain changes in plain language.

## Stack
- React + TypeScript + Vite, react-router-dom (HashRouter)
- Plain CSS in `src/index.css` (no CSS framework yet). Minimal style using the owner's Resene colour palette (Kina Brown text on Half Alabaster, small accents); colors and fonts are tokens at the top of the file
- Fonts from Google Fonts (linked in `index.html`): Bodoni Moda for headings/nav, Archivo Black for the big home-page title only, Jost for everything else
- Data lives in localStorage via `src/ClosetContext.tsx`. No backend yet; Supabase is the planned next step.

## Layout
- `src/types.ts` – ClothingItem, Outfit, Category (jacket/top/bottom)
- `src/ClosetContext.tsx` – shared closet state + localStorage persistence
- `src/pages/` – one file per page
- `src/components/OutfitCollage.tsx` – collage used on Mix & Match and Saved Outfits
- `src/assets/logo.png` – the owner's logo, shown in the top bar

## Commands
- `npm run dev` – local dev server
- `npm run build` – typecheck + production build (run before committing)
- `npm run lint` – oxlint
