export type SeatKind = 'seat' | 'berth'
export type SeatType = 'seater' | 'berth' | 'sleeper' | 'semi_sleeper'
export type SeatPosition = 'left' | 'right'
export type SeatBerthType = 'single' | 'double'
export type SeatGenderRestriction = 'female' | 'male' | null

export type SeatStatus =
  | 'available'
  | 'occupied'
  | 'selected'
  | 'ladies'
  | 'blocked'
  | 'booked'
  | 'female'
  | 'male'

export interface BusSeat {
  id: string
  label: string
  price: number
  kind: SeatKind
  type?: SeatType
  status: SeatStatus
  row: number
  column?: 'A' | 'C'
  position?: SeatPosition
  berth_type?: SeatBerthType
  gender_restriction?: SeatGenderRestriction
  currency?: 'INR'
}

export interface BusSeatRow {
  row: number
  seats: BusSeat[]
}

export interface BusDeck {
  id: 'lower' | 'upper'
  title: string
  subtitle: string
  seats: BusSeat[]
  hasBerths: boolean
  rows?: BusSeatRow[]
  available?: boolean
  type?: 'lower' | 'upper'
}

export interface BusLocation {
  id: string
  descriptor: {
    name: string
    short_desc?: string
  }
  gps: string
  city: string
  state: string
}

export interface BusPoint {
  id: string
  name: string
  address: string
  gps: string
  time: string
}

export interface BusCancellationRule {
  before_hours: number
  refund_percent: number
}

export interface BusCancellationPolicy {
  allowed: boolean
  rules: BusCancellationRule[]
}

export interface Bus {
  id: number
  name: string
  type: string
  rating: number
  reviews: number
  depart: string
  arrive: string
  boarding: string
  dropping: string
  duration: string
  price: number
  seats: number
  singleSeats?: number
  tags: string[]
  promoBadge?: string
  offerNote?: string
  images?: string[]
  decks: BusDeck[]
  layout_type?: string
  has_upper_deck?: boolean
  has_lower_deck?: boolean
  locations: BusLocation[]
  boarding_points: BusPoint[]
  dropping_points: BusPoint[]
  amenities: string[]
  cancellation_policy: BusCancellationPolicy
}
