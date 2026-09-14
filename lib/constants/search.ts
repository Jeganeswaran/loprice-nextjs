export const DEFAULT_SEARCH = {
  from: 'Chennai',
  to: 'Bangalore',
  date: '2026-09-02',
} as const

export const DEPARTURE_SLOTS = ['Morning', 'Afternoon', 'Evening', 'Night'] as const

export const AMENITIES = ['Charging point', 'Live tracking', 'Blanket', 'Water bottle'] as const

export const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price', label: 'Lowest price' },
  { value: 'rating', label: 'Top rated' },
  { value: 'departure', label: 'Departure' },
] as const
