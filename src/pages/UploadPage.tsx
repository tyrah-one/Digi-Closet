import { useRef, useState, type FormEvent } from 'react'
import { useCloset } from '../ClosetContext'
import { resizeImage } from '../resizeImage'
import { CATEGORIES, type Category } from '../types'
import ScatteredPieces from '../components/ScatteredPieces'

const CATEGORY_NAMES: Record<Category, string> = { jacket: 'Jacket', top: 'Top', bottom: 'Bottom' }

export default function UploadPage() {
  const { addItem } = useCloset()
  const fileInput = useRef<HTMLInputElement>(null)

  const [image, setImage] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState<Category>('top')
  const [message, setMessage] = useState('')

  async function handleFile(file: File | undefined) {
    if (!file) return
    try {
      setImage(await resizeImage(file))
      setMessage('')
    } catch (err) {
      setMessage((err as Error).message)
    }
  }

  function clearForm() {
    setImage(null)
    setName('')
    if (fileInput.current) fileInput.current.value = ''
  }

  function handleSave(e: FormEvent) {
    e.preventDefault()
    if (!image) return
    addItem({ name: name.trim() || 'Untitled', category, image })
    setMessage(`Saved "${name.trim() || 'Untitled'}" to your closet!`)
    clearForm()
  }

  function handleDelete() {
    clearForm()
    setMessage('Upload discarded.')
  }

  return (
    <section>
      <div className="page-header">
        <h1>Upload a Piece</h1>
        <ScatteredPieces layout="page" />
      </div>

      <form className="upload-form" onSubmit={handleSave}>
        <label className="photo-drop">
          {image ? <img src={image} alt="Preview" /> : <span>Click to choose a photo</span>}
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </label>

        <label>
          Name
          <input
            type="text"
            placeholder="e.g. Yellow plaid blazer"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Category
          <select value={category} onChange={(e) => setCategory(e.target.value as Category)}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {CATEGORY_NAMES[c]}
              </option>
            ))}
          </select>
        </label>

        <div className="button-row">
          <button type="submit" className="primary" disabled={!image}>
            Save
          </button>
          <button type="button" className="danger" onClick={handleDelete} disabled={!image}>
            Delete
          </button>
        </div>

        {message && <p className="message">{message}</p>}
      </form>
    </section>
  )
}
