'use client'

import { ArrowRight, CheckCircle2, Clock3 } from 'lucide-react'

interface BookingSummaryProps { seatLabel: string | null; fare: number; onContinue?: () => void }

export default function BookingSummary({ seatLabel, fare, onContinue }: BookingSummaryProps) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center gap-2 text-sm font-black text-slate-900"><CheckCircle2 size={18} className="text-emerald-600" /> Booking summary</div>
      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between"><span className="text-slate-500">Seat / berth</span><span className="font-bold">{seatLabel ?? 'Select a seat'}</span></div>
        <div className="flex justify-between"><span className="text-slate-500">Base fare</span><span className="font-bold">₹{seatLabel ? fare : 0}</span></div>
        <div className="flex justify-between border-t border-dashed border-slate-200 pt-3"><span className="font-semibold">Payable</span><span className="text-xl font-black text-[#bf2629]">₹{seatLabel ? fare : 0}</span></div>
      </div>
      <div className="mt-4 flex items-start gap-2 rounded-xl bg-blue-50 p-3 text-[11px] leading-4 text-blue-700"><Clock3 size={15} className="mt-0.5 shrink-0" /> Seats are held for 10 minutes after selection.</div>
      <button type="button" disabled={!seatLabel} onClick={onContinue} className="btn-primary mt-4 w-full disabled:cursor-not-allowed disabled:opacity-40">Continue <ArrowRight size={15} className="ml-auto" /></button>
    </aside>
  )
}
