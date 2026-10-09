import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { ClothingItem, Outfit } from './types'

// Everything is saved in the browser's localStorage for now.
// (Later this can be swapped for a real database like Supabase.)
const ITEMS_KEY = 'digi-closet:items'
const OUTFITS_KEY = 'digi-closet:outfits'

function load<T>(key: string): T[] {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '[]') as T[]
  } catch {
    return []
  }
}

function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    alert('Your closet storage is full. Delete some pieces or outfits to make room.')
  }
}

interface ClosetContextValue {
  items: ClothingItem[]
  outfits: Outfit[]
  addItem: (item: Omit<ClothingItem, 'id'>) => void
  deleteItem: (id: string) => void
  addOutfit: (outfit: Omit<Outfit, 'id' | 'createdAt'>) => Outfit
  deleteOutfit: (id: string) => void
  findItem: (id: string | null) => ClothingItem | undefined
}

const ClosetContext = createContext<ClosetContextValue | null>(null)

// Wrap the app in this so every page shares the same closet data
export function ClosetProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ClothingItem[]>(() => load(ITEMS_KEY))
  const [outfits, setOutfits] = useState<Outfit[]>(() => load(OUTFITS_KEY))

  useEffect(() => save(ITEMS_KEY, items), [items])
  useEffect(() => save(OUTFITS_KEY, outfits), [outfits])

  const value: ClosetContextValue = {
    items,
    outfits,
    addItem: (item) => setItems((prev) => [...prev, { ...item, id: crypto.randomUUID() }]),
    deleteItem: (id) => {
      setItems((prev) => prev.filter((item) => item.id !== id))
      // An outfit can't exist without one of its pieces, so remove those too
      setOutfits((prev) =>
        prev.filter((o) => o.jacketId !== id && o.topId !== id && o.bottomId !== id),
      )
    },
    addOutfit: (outfit) => {
      const saved = { ...outfit, id: crypto.randomUUID(), createdAt: Date.now() }
      setOutfits((prev) => [saved, ...prev])
      return saved
    },
    deleteOutfit: (id) => setOutfits((prev) => prev.filter((o) => o.id !== id)),
    findItem: (id) => items.find((item) => item.id === id),
  }

  return <ClosetContext.Provider value={value}>{children}</ClosetContext.Provider>
}

// oxlint-disable-next-line react/only-export-components
export function useCloset() {
  const ctx = useContext(ClosetContext)
  if (!ctx) throw new Error('useCloset must be used inside <ClosetProvider>')
  return ctx
}
