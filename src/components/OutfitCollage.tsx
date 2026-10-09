import { useCloset } from '../ClosetContext'
import type { Outfit } from '../types'

// Shows an outfit's pieces pinned to a board, slightly overlapping and tilted
export default function OutfitCollage({ outfit }: { outfit: Outfit }) {
  const { findItem } = useCloset()
  const jacket = findItem(outfit.jacketId)
  const top = findItem(outfit.topId)
  const bottom = findItem(outfit.bottomId)

  return (
    <div className={`collage ${jacket ? '' : 'no-jacket'}`}>
      {jacket && <img className="collage-jacket" src={jacket.image} alt={jacket.name} />}
      {top && <img className="collage-top" src={top.image} alt={top.name} />}
      {bottom && <img className="collage-bottom" src={bottom.image} alt={bottom.name} />}
    </div>
  )
}
