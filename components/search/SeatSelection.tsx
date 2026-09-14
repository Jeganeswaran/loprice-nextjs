'use client'

import type { Bus, BusSeat } from '@/lib/types/bus'
import BookingDrawer from './booking-drawer/BookingDrawer'

interface SeatSelectionProps {
  bus: Bus | null
  open: boolean
  selectedSeats: string[]
  onSeatSelect: (seat: BusSeat) => void
  onClose: () => void
}

/** Backwards-compatible wrapper. New code should use BookingDrawer directly. */
export default function SeatSelection({ bus, open, selectedSeats, onSeatSelect, onClose }: SeatSelectionProps) {
  return <BookingDrawer open={open} bus={bus} selectedSeats={selectedSeats} onSeatSelect={onSeatSelect} onClose={onClose} />
}
