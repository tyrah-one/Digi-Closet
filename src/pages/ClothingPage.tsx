import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCloset } from '../ClosetContext'
import { CATEGORIES, CATEGORY_LABELS } from '../types'

export default function ClothingPage() {
  const { items, outfits, deleteItem } = useCloset()
  const [editing, setEditing] = useState(false)
  // The piece waiting for a "Yes, delete" click
  const [confirmingId, setConfirmingId] = useState<string | null>(null)

  function outfitsUsing(id: string) {
    return outfits.filter((o) => o.jacketId === id || o.topId === id || o.bottomId === id).length
  }

  return (
    <section>
      <div className="page-header">
        <h1>My Clothing</h1>
        {items.length > 0 && (
          <button
            onClick={() => {
              setEditing(!editing)
              setConfirmingId(null)
            }}
          >
            {editing ? 'Done' : 'Edit'}
          </button>
        )}
      </div>

      {items.length === 0 && (
        <p className="empty">
          Your closet is empty. <Link to="/upload">Upload your first piece</Link>.
        </p>
      )}

      {CATEGORIES.map((category) => {
        const piecesInCategory = items.filter((item) => item.category === category)
        if (piecesInCategory.length === 0) return null

        return (
          <div key={category}>
            <h2 className={`category-heading ${category}`}>{CATEGORY_LABELS[category]}</h2>
            <div className="grid">
              {piecesInCategory.map((item) => (
                <figure key={item.id} className="piece">
                  <img src={item.image} alt={item.name} />
                  <figcaption>{item.name}</figcaption>
                  {editing && confirmingId !== item.id && (
                    <button
                      className="delete-badge"
                      aria-label={`Delete ${item.name}`}
                      onClick={() => setConfirmingId(item.id)}
                    >
                      ✕
                    </button>
                  )}
                  {confirmingId === item.id && (
                    <div className="confirm-box">
                      <span>Delete this piece?</span>
                      {outfitsUsing(item.id) > 0 && (
                        <small>Also deletes {outfitsUsing(item.id)} outfit(s) using it.</small>
                      )}
                      <div className="button-row">
                        <button className="danger" onClick={() => deleteItem(item.id)}>
                          Yes, delete
                        </button>
                        <button onClick={() => setConfirmingId(null)}>Cancel</button>
                      </div>
                    </div>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
