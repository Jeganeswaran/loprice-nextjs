'use client'

import { useMemo, useState } from 'react'
import type { Bus, BusSeat } from '@/lib/types/bus'

export type SortOption = 'recommended' | 'price' | 'rating' | 'departure'

export function useBusSearch(buses: Bus[]) {
  const [sort, setSort] = useState<SortOption>('recommended')
  const [acOnly, setAcOnly] = useState(false)
  const [sleeper, setSleeper] = useState(false)
  const [selectedBus, setSelectedBus] = useState<number | null>(null)
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  const filteredBuses = useMemo(() => {
    const result = buses.filter((bus) =>
      (!acOnly || /\bac\b/i.test(bus.type)) &&
      (!sleeper || /sleeper/i.test(bus.type)),
    )

    if (sort === 'price') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'rating') return [...result].sort((a, b) => b.rating - a.rating)
    if (sort === 'departure') return [...result].sort((a, b) => a.depart.localeCompare(b.depart))
    return result
  }, [buses, sort, acOnly, sleeper])

  const selectBus = (busId: number | null) => {
    setSelectedBus((current) => (current === busId ? null : busId))
    setSelectedSeats([])
  }

  const selectSeat = (seat: BusSeat) => {
    setSelectedSeats((current) => {
      if (current.includes(seat.id)) {
        return current.filter((id) => id !== seat.id)
      }

      return [...current, seat.id]
    })
  }

  return {
    sort,
    setSort,
    acOnly,
    setAcOnly,
    sleeper,
    setSleeper,
    selectedBus,
    selectedSeats,
    setSelectedSeats,
    selectSeat,
    selectBus,
    filteredBuses,
  }
}
