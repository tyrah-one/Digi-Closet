import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCloset } from '../ClosetContext'
import { CATEGORIES, CATEGORY_LABELS } from '../types'

export default function ClothingPage() {
  const { items, outfits, deleteItem } = useCloset()
  const [editing, setEditing] = useState(false)

  function handleDelete(id: string, name: string) {
    const usedIn = outfits.filter(
      (o) => o.jacketId === id || o.topId === id || o.bottomId === id,
    ).length
    const warning = usedIn > 0 ? `\n\nThis will also delete ${usedIn} saved outfit(s) that use it.` : ''
    if (confirm(`Delete "${name}" from your closet?${warning}`)) {
      deleteItem(id)
    }
  }

  return (
    <section>
      <div className="page-header">
        <h1>My Clothing</h1>
        {items.length > 0 && (
          <button onClick={() => setEditing(!editing)}>{editing ? 'Done' : 'Edit'}</button>
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
            <h2>{CATEGORY_LABELS[category]}</h2>
            <div className="grid">
              {piecesInCategory.map((item) => (
                <figure key={item.id} className="piece">
                  <img src={item.image} alt={item.name} />
                  <figcaption>{item.name}</figcaption>
                  {editing && (
                    <button
                      className="delete-badge"
                      aria-label={`Delete ${item.name}`}
                      onClick={() => handleDelete(item.id, item.name)}
                    >
                      ✕
                    </button>
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
