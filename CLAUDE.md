# Digi-Closet

A digital closet website: upload clothing photos, mix & match them into outfits, save outfits as collages.

The owner is a beginner (some Java, a little HTML/CSS). Keep code simple and readable, and explain changes in plain language.

## Stack
- React + TypeScript + Vite, react-router-dom (HashRouter)
- Plain CSS in `src/index.css` (no CSS framework yet)
- Data lives in localStorage via `src/ClosetContext.tsx`. No backend yet; Supabase is the planned next step.

## Layout
- `src/types.ts` – ClothingItem, Outfit, Category (jacket/top/bottom)
- `src/ClosetContext.tsx` – shared closet state + localStorage persistence
- `src/pages/` – one file per page
- `src/components/OutfitCollage.tsx` – collage used on Mix & Match and Saved Outfits

## Commands
- `npm run dev` – local dev server
- `npm run build` – typecheck + production build (run before committing)
- `npm run lint` – oxlint
