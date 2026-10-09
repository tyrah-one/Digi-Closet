import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCloset } from '../ClosetContext'
import OutfitCollage from '../components/OutfitCollage'

export default function OutfitsPage() {
  const { outfits, deleteOutfit } = useCloset()
  const [editing, setEditing] = useState(false)

  return (
    <section>
      <div className="page-header">
        <h1>Saved Outfits</h1>
        {outfits.length > 0 && (
          <button onClick={() => setEditing(!editing)}>{editing ? 'Done' : 'Edit'}</button>
        )}
      </div>

      {outfits.length === 0 && (
        <p className="empty">
          No saved outfits yet. <Link to="/mix-match">Go mix and match</Link>.
        </p>
      )}

      <div className="outfit-grid">
        {outfits.map((outfit) => (
          <div key={outfit.id} className="outfit-card">
            <OutfitCollage outfit={outfit} />
            <span className="muted">{new Date(outfit.createdAt).toLocaleDateString()}</span>
            {editing && (
              <button
                className="delete-badge"
                aria-label="Delete outfit"
                onClick={() => confirm('Delete this outfit?') && deleteOutfit(outfit.id)}
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
