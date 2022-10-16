export interface Localized {
  locale: string
  value: string
}

export interface AutocompleteItem {
  uid: string
  score: number
  title: Localized[]
}

export interface Ion {
  uid: string
  title: Localized[]
  createdAt: string
  content: Localized[]
  keywords: string[]
}
