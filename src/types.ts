// The three kinds of clothing the closet supports
export type Category = 'jacket' | 'top' | 'bottom'

export const CATEGORIES: Category[] = ['jacket', 'top', 'bottom']

export const CATEGORY_LABELS: Record<Category, string> = {
  jacket: 'Jackets',
  top: 'Tops',
  bottom: 'Bottoms',
}

// One piece of clothing in the closet
export interface ClothingItem {
  id: string
  name: string
  category: Category
  image: string // the photo, stored as a data URL
}

// A saved outfit points at the clothing pieces it uses
export interface Outfit {
  id: string
  jacketId: string | null // jackets are optional
  topId: string
  bottomId: string
  createdAt: number
}
