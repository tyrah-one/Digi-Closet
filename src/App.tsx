import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ClothingPage from './pages/ClothingPage'
import UploadPage from './pages/UploadPage'
import MixMatchPage from './pages/MixMatchPage'
import OutfitsPage from './pages/OutfitsPage'

export default function App() {
  return (
    <>
      <header className="nav">
        <NavLink to="/" className="logo">
          Digi-Closet
        </NavLink>
        <nav>
          <NavLink to="/clothing">My Clothing</NavLink>
          <NavLink to="/upload">Upload</NavLink>
          <NavLink to="/mix-match">Mix &amp; Match</NavLink>
          <NavLink to="/outfits">Saved Outfits</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clothing" element={<ClothingPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/mix-match" element={<MixMatchPage />} />
          <Route path="/outfits" element={<OutfitsPage />} />
        </Routes>
      </main>
    </>
  )
}
