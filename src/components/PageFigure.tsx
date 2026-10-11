import homeFigure from '../assets/figures/home.webp'
import uploadFigure from '../assets/figures/upload.webp'
import mixMatchFigure from '../assets/figures/mixmatch.webp'
import outfitsFigure from '../assets/figures/outfits.webp'

// The large halftone cut-out figures in the background of each page.
// To add one for another page: put the image in src/assets/figures/,
// import it here, add it to FIGURES, and position it in index.css
// with a `.page-figure.<name>` rule.
const FIGURES = {
  home: homeFigure,
  upload: uploadFigure,
  mixmatch: mixMatchFigure,
  outfits: outfitsFigure,
}

export default function PageFigure({ name }: { name: keyof typeof FIGURES }) {
  return (
    // The layer covers the whole page behind the content and trims
    // anything that hangs past the bottom of the page
    <div className="figure-layer" aria-hidden="true">
      <img className={`page-figure ${name}`} src={FIGURES[name]} alt="" />
    </div>
  )
}
