import { BusFront, MapPin, Star } from 'lucide-react'
import type { Bus } from '@/lib/types/bus'

export default function BookingHeader({ bus }: { bus: Bus }) {
  return (
    <div className="border-b border-slate-200 bg-white px-4 py-4 sm:px-7">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#fff1f1] text-[#bf2629]"><BusFront size={21} /></div>
          <div className="min-w-0">
            <h3 className="truncate font-black text-slate-900">{bus.name}</h3>
            <p className="truncate text-xs text-slate-500">{bus.type}</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 text-sm font-semibold text-slate-600 sm:flex">
          <MapPin size={16} className="text-[#bf2629]" /> {bus.boarding} <span className="text-slate-300">→</span> {bus.dropping}
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-lg bg-amber-500 px-2.5 py-1.5 text-xs font-black text-white"><Star size={13} fill="currentColor" /> {bus.rating}</div>
      </div>
    </div>
  )
}
