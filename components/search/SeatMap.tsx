'use client'

import { User } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import type { BusDeck, BusSeat } from '@/lib/types/bus'

interface SeatMapProps {
  deck?: BusDeck
  selectedSeats?: string[]
  onSeatSelect?: (seat: BusSeat) => void
}

function SteeringWheelIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 3v6.5M4.5 16.5l5.4-3.2M19.5 16.5l-5.4-3.2" />
    </svg>
  )
}

function getSeatVisual(status: BusSeat['status'], isSelected: boolean) {
  if (isSelected) {
    return { seat: 'border-[#bf2629] bg-[#fff1f1]', price: 'text-[#bf2629]' }
  }

  if (status === 'ladies') {
    return { seat: 'border-pink-400 bg-white', price: 'text-indigo-600' }
  }

  if (status === 'occupied' || status === 'blocked') {
    return { seat: 'cursor-not-allowed border-slate-200 bg-slate-100', price: 'text-slate-400' }
  }

  return { seat: 'border-emerald-400 bg-white hover:-translate-y-0.5', price: 'text-indigo-600' }
}

function SeatButton({
  seat,
  selectedSeats,
  onSeatSelect,
}: {
  seat: BusSeat
  selectedSeats: string[]
  onSeatSelect?: (seat: BusSeat) => void
}) {
  const disabled = seat.status === 'occupied' || seat.status === 'blocked'
  const isSelected = selectedSeats.includes(seat.id)
  const isBerth = seat.kind === 'berth'
  const isLadiesSeat = seat.status === 'ladies'
  const visual = getSeatVisual(seat.status, isSelected)

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        disabled={disabled}
        onClick={() => onSeatSelect?.(seat)}
        aria-label={`${seat.label}, ${seat.kind}, ${seat.status}, ${disabled ? 'sold' : `₹${seat.price}`}`}
        className={cn(
          'relative flex items-end justify-center overflow-hidden rounded-t-md border-2 transition-all duration-150',
          visual.seat,
          !isBerth && 'h-10 w-8',
          isBerth && 'h-16 w-8',
        )}
      >
        {isLadiesSeat && !disabled && (
          <User size={11} className="absolute top-1.5 text-pink-500" />
        )}
        <span
          className={cn(
            'mb-1 h-1.5 w-4 rounded-full',
            disabled ? 'bg-slate-300' : isSelected ? 'bg-[#bf2629]' : 'bg-emerald-400',
          )}
        />
      </button>

      <span className={cn('text-[10px] font-bold', disabled ? 'text-slate-400' : visual.price)}>
        {disabled ? 'Sold' : `₹${seat.price}`}
      </span>
    </div>
  )
}

interface RenderRow {
  row: number
  leftUpper?: BusSeat
  aisleSeat?: BusSeat
  windowSeat?: BusSeat
}

function buildRowsFromDeck(deck?: BusDeck): RenderRow[] {
  if (!deck) return []

  const seatsByRow = new Map<number, BusSeat[]>()

  for (const seat of deck.seats) {
    const seats = seatsByRow.get(seat.row) ?? []
    seats.push(seat)
    seatsByRow.set(seat.row, seats)
  }

  return Array.from(seatsByRow.entries())
    .sort(([a], [b]) => a - b)
    .map(([row, seats]) => {
      const leftUpper = seats.find((seat) =>
        seat.label.endsWith('U'),
      )

      const numberedSeats = seats
        .filter((seat) => !seat.label.endsWith('U'))
        .sort(
          (a, b) =>
            Number(a.label) - Number(b.label),
        )

      return {
        row,
        leftUpper,
        aisleSeat: numberedSeats[0],
        windowSeat: numberedSeats[1],
      }
    })
}

export default function SeatMap({
  deck,
  selectedSeats = [],
  onSeatSelect,
}: SeatMapProps) {
  const rows = buildRowsFromDeck(deck)
  const isLowerDeck = deck?.id === 'lower'

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-black text-slate-900">
            {deck?.title ?? 'Select seats'}
          </h3>

          <p className="text-[11px] font-semibold text-slate-500">
            {deck?.subtitle ?? 'Seat layout'}
          </p>
        </div>

        {isLowerDeck && (
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500">
            <SteeringWheelIcon size={15} />
          </span>
        )}
      </div>

      <div className="rounded-[28px] border border-slate-300 bg-gradient-to-b from-slate-50 to-white p-3 shadow-inner">
        <div className="mb-4 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-center">
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
            Front
          </span>
        </div>

        <div className="max-h-[520px] overflow-y-auto px-1">
          <div className="grid grid-cols-[minmax(54px,0.65fr)_32px_minmax(120px,1.6fr)] gap-x-3">
            {rows.map((row) => (
              <div
                key={row.row}
                className="contents"
              >
                <div
                  className={cn(
                    'flex min-h-[52px] items-center justify-center',
                    row.leftUpper && 'py-1',
                  )}
                >
                  {row.leftUpper && (
                    <SeatButton
                      seat={row.leftUpper}
                      selectedSeats={selectedSeats}
                      onSeatSelect={onSeatSelect}
                    />
                  )}
                </div>

                <div className="relative flex min-h-[52px] items-center justify-center">
                  <span className="h-full border-l border-dashed border-slate-300" />
                </div>

                <div className="flex min-h-[30px] items-center justify-center gap-2">
                  {row.aisleSeat && (
                    <SeatButton
                      seat={row.aisleSeat}
                      selectedSeats={selectedSeats}
                      onSeatSelect={onSeatSelect}
                    />
                  )}

                  {row.windowSeat && (
                    <SeatButton
                      seat={row.windowSeat}
                      selectedSeats={selectedSeats}
                      onSeatSelect={onSeatSelect}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}