import uploadFigure from '../assets/figures/upload.webp'

// The large halftone cut-out figures that sit at the edge of each page.
// To add one for another page: put the image in src/assets/figures/,
// import it here, add it to FIGURES, and position it in index.css
// with a `.page-figure.<name>` rule.
const FIGURES = {
  upload: uploadFigure,
}

export default function PageFigure({ name }: { name: keyof typeof FIGURES }) {
  return <img className={`page-figure ${name}`} src={FIGURES[name]} alt="" aria-hidden="true" />
}
