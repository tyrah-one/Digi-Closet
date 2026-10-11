import { useState } from 'react'
import { useCloset } from '../ClosetContext'

// Where each scattered piece sits, how big it is and how much it tilts.
// "home" pieces sit around the big title; "page" pieces sit in the
// space between a page's title and its buttons.
const SPOTS = {
  home: ['spot-1', 'spot-2', 'spot-3', 'spot-4'],
  page: ['spot-1', 'spot-2', 'spot-3'],
}

// Picks random pieces from the closet each time a page opens and
// scatters them around the title like stickers. Purely decoration.
export default function ScatteredPieces({ layout }: { layout: 'home' | 'page' }) {
  const { items } = useCloset()
  const spots = SPOTS[layout]

  // Pick once when the page opens, so pieces don't jump around while you use it
  const [pickedIds] = useState(() =>
    [...items]
      .sort(() => Math.random() - 0.5)
      .slice(0, spots.length)
      .map((item) => item.id),
  )

  // Skip any piece that has since been deleted
  const pieces = pickedIds
    .map((id) => items.find((item) => item.id === id))
    .filter((item) => item !== undefined)

  return (
    <div className={`scatter scatter-${layout}`} aria-hidden="true">
      {pieces.map((piece, i) => (
        <img key={piece.id} className={spots[i]} src={piece.image} alt="" />
      ))}
    </div>
  )
}
