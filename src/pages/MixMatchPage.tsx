import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCloset } from '../ClosetContext'
import OutfitCollage from '../components/OutfitCollage'
import type { ClothingItem, Outfit } from '../types'

interface SlotProps {
  label: string
  pieces: (ClothingItem | null)[] // null means "nothing" (only used for the jacket slot)
  index: number
  onChange: (index: number) => void
}

// One row of the outfit: ◀ [ picture ] ▶
function Slot({ label, pieces, index, onChange }: SlotProps) {
  const piece = pieces[index]
  const count = pieces.length

  return (
    <div className="slot">
      <button aria-label={`Previous ${label}`} disabled={count < 2} onClick={() => onChange((index - 1 + count) % count)}>
        ◀
      </button>
      <div className="slot-window">
        {piece ? (
          <>
            <img src={piece.image} alt={piece.name} />
            <span className="slot-label">{piece.name}</span>
          </>
        ) : (
          <span className="muted">{count === 0 ? `No ${label}s yet` : `No ${label}`}</span>
        )}
      </div>
      <button aria-label={`Next ${label}`} disabled={count < 2} onClick={() => onChange((index + 1) % count)}>
        ▶
      </button>
    </div>
  )
}

export default function MixMatchPage() {
  const { items, addOutfit } = useCloset()

  // The jacket slot starts with a "no jacket" option, since jackets are optional
  const jackets = [null, ...items.filter((i) => i.category === 'jacket')]
  const tops = items.filter((i) => i.category === 'top')
  const bottoms = items.filter((i) => i.category === 'bottom')

  const [jacketIndex, setJacketIndex] = useState(0)
  const [topIndex, setTopIndex] = useState(0)
  const [bottomIndex, setBottomIndex] = useState(0)
  const [justSaved, setJustSaved] = useState<Outfit | null>(null)

  // Keep the indexes in range if pieces get deleted
  const jacket = jackets[jacketIndex % jackets.length]
  const top = tops[topIndex % tops.length]
  const bottom = bottoms[bottomIndex % bottoms.length]

  function handleSave() {
    if (!top || !bottom) return
    setJustSaved(addOutfit({ jacketId: jacket?.id ?? null, topId: top.id, bottomId: bottom.id }))
  }

  function change(setter: (i: number) => void) {
    return (i: number) => {
      setter(i)
      setJustSaved(null)
    }
  }

  return (
    <section>
      <h1>Mix &amp; Match</h1>
      <p className="muted">Use the arrows to flip through your closet, Cher-style.</p>

      <div className="mix-layout">
        <div className="slots">
          <Slot label="jacket" pieces={jackets} index={jacketIndex % jackets.length} onChange={change(setJacketIndex)} />
          <Slot label="top" pieces={tops} index={tops.length ? topIndex % tops.length : 0} onChange={change(setTopIndex)} />
          <Slot label="bottom" pieces={bottoms} index={bottoms.length ? bottomIndex % bottoms.length : 0} onChange={change(setBottomIndex)} />

          <button className="primary save-outfit" onClick={handleSave} disabled={!top || !bottom}>
            Save Outfit
          </button>
          {(!top || !bottom) && (
            <p className="muted">
              You need at least one top and one bottom. <Link to="/upload">Upload some</Link>.
            </p>
          )}
        </div>

        {justSaved && (
          <div className="saved-preview">
            <h2>Saved!</h2>
            <OutfitCollage outfit={justSaved} />
            <Link to="/outfits">See all saved outfits →</Link>
          </div>
        )}
      </div>
    </section>
  )
}
