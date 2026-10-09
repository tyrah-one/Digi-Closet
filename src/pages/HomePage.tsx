import { Link } from 'react-router-dom'
import { useCloset } from '../ClosetContext'

export default function HomePage() {
  const { items, outfits } = useCloset()

  return (
    <section className="home">
      <h1>Welcome to your Digi-Closet</h1>
      <p>
        Upload your clothes, then mix and match them to find the ideal outfit.
      </p>
      <p className="muted">
        {items.length} pieces · {outfits.length} saved outfits
      </p>

      <div className="home-links">
        <Link to="/clothing" className="card-link">
          <strong>My Clothing</strong>
          <span>See every piece in your closet</span>
        </Link>
        <Link to="/upload" className="card-link">
          <strong>Upload</strong>
          <span>Add a new piece</span>
        </Link>
        <Link to="/mix-match" className="card-link">
          <strong>Mix &amp; Match</strong>
          <span>Build an outfit</span>
        </Link>
        <Link to="/outfits" className="card-link">
          <strong>Saved Outfits</strong>
          <span>Your outfit collages</span>
        </Link>
      </div>
    </section>
  )
}
