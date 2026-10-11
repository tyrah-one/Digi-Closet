import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCloset } from '../ClosetContext'
import OutfitCollage from '../components/OutfitCollage'
import ScatteredPieces from '../components/ScatteredPieces'

export default function OutfitsPage() {
  const { outfits, deleteOutfit } = useCloset()
  const [editing, setEditing] = useState(false)
  // The outfit waiting for a "Yes, delete" click
  const [confirmingId, setConfirmingId] = useState<string | null>(null)

  return (
    <section>
      <div className="page-header">
        <h1>Saved Outfits</h1>
        <ScatteredPieces layout="page" />
        {outfits.length > 0 && (
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
            {editing && confirmingId !== outfit.id && (
              <button
                className="delete-badge"
                aria-label="Delete outfit"
                onClick={() => setConfirmingId(outfit.id)}
              >
                ✕
              </button>
            )}
            {confirmingId === outfit.id && (
              <div className="confirm-box">
                <span>Delete this outfit?</span>
                <div className="button-row">
                  <button className="danger" onClick={() => deleteOutfit(outfit.id)}>
                    Yes, delete
                  </button>
                  <button onClick={() => setConfirmingId(null)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
