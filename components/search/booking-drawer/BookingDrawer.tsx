'use client'

import { useMemo } from 'react'
import { ShieldCheck, X } from 'lucide-react'
import BottomSheet from '@/components/ui/BottomSheet'
import RatingBadge from '@/components/search/RatingBadge'
import type { Bus, BusSeat } from '@/lib/types/bus'
import BookingSteps from './BookingSteps'
import PolicyTabs from './PolicyTabs'
import SeatMap from '@/components/search/SeatMap'

interface BookingDrawerProps {
  open: boolean
  bus: Bus | null
  date?: string
  selectedSeats: string[]
  onSeatSelect: (seat: BusSeat) => void
  onClose: () => void
  onContinue?: (seats: BusSeat[]) => void
}

function formatDisplayDate(date?: string) {
  if (!date) return null
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return null
  return parsed.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short' })
}

export default function BookingDrawer({ open, bus, date, selectedSeats, onSeatSelect, onClose, onContinue }: BookingDrawerProps) {
  const selected = useMemo(
    () => bus?.decks.flatMap((deck) => deck.seats).filter((seat) => selectedSeats.includes(seat.id)) ?? [],
    [bus, selectedSeats],
  )

  if (!bus) return null

  const images = bus.images && bus.images.length > 0 ? bus.images : ['/images/online-bus-ticket-booking-a-l-p.webp']
  const originState = bus.locations.find((location) => location.city === bus.boarding)?.state
  const destinationState = bus.locations.find((location) => location.city === bus.dropping)?.state
  const regionLabel = [originState, destinationState].filter((state, index, all) => state && all.indexOf(state) === index).join(' · ')
  const displayDate = formatDisplayDate(date)
  const fareTotal = selected.reduce((total, seat) => total + seat.price, 0) || bus.price

  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      title={`${bus.boarding} → ${bus.dropping}`}
      description={`${bus.name} · ${bus.depart} - ${bus.arrive}`}
      wide
      showHeader={false}
    >
      <div className="min-h-[680px] bg-[#eef1f4]">
        <div className="border-b border-slate-200 bg-white px-4 py-3">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-2xl font-light leading-none text-slate-600 transition hover:bg-slate-50"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="flex-1 pl-4 text-sm font-black text-slate-800">
              <span>{bus.boarding}</span>
              <span className="mx-2 text-slate-400">›</span>
              <span>{bus.dropping}</span>
              {regionLabel && <span className="ml-2 text-slate-400">({regionLabel})</span>}
            </div>
          </div>
        </div>

        <BookingSteps />

        <div className="mx-auto grid max-w-[1500px] gap-4 px-4 py-5 lg:grid-cols-[minmax(420px,0.95fr)_minmax(420px,1.05fr)] lg:px-8">
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900">Select seats</h3>
                <p className="text-xs font-semibold text-slate-500">Ambience with seat information</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">
                <ShieldCheck size={14} /> {bus.seats} seats
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {bus.decks.map((deck) => (
                <SeatMap key={deck.id} deck={deck} selectedSeats={selectedSeats} onSeatSelect={onSeatSelect} />
              ))}
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="truncate text-lg font-black text-slate-900">{bus.name}</h3>
                <p className="mt-1 truncate text-xs font-semibold text-slate-500">
                  {bus.depart} - {bus.arrive}
                  {displayDate ? ` · ${displayDate}` : ''}
                </p>
                <p className="mt-0.5 truncate text-xs font-semibold text-slate-500">{bus.type}</p>
              </div>
              <div className="shrink-0">
                <RatingBadge rating={bus.rating} reviews={bus.reviews} />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {images.slice(0, 3).map((image, index) => (
                <div key={image} className="h-24 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <img src={image} alt={`${bus.name} bus ${index + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-4">
              <PolicyTabs bus={bus} />
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
              <div>
                <div className="text-xs font-black text-slate-600">Selected seats</div>
                <div className="mt-1 text-xs font-bold text-slate-500">
                  {selected.length ? selected.map((seat) => seat.label).join(', ') : 'None selected yet'}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-500">Fare</div>
                <div className="text-xl font-black text-[#bf2629]">₹{fareTotal}</div>
              </div>
            </div>

            <button
              type="button"
              disabled={selected.length === 0}
              onClick={() => onContinue?.(selected)}
              className="mt-4 w-full rounded-xl bg-[#bf2629] px-4 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[#8d1517] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </aside>
        </div>
      </div>
    </BottomSheet>
  )
}