import { Clock3, MapPin, TicketCheck, Share2, Download, Bus } from "lucide-react";

interface TicketResultProps {
  bookingId: string;
  from: string;
  to: string;
  date: string;
  departure: string;
  boarding: string;
  seat: string;
  status: "On Time" | "Delayed" | "Completed";
}

export default function TicketResult({
  bookingId,
  from,
  to,
  date,
  departure,
  boarding,
  seat,
  status,
}: TicketResultProps) {
  const isOnTime = status === "On Time";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Main Ticket Card */}
      <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#0b1b3d] to-[#1a2f5e] p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <Bus size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-100/70 uppercase tracking-wider">Booking ID</p>
                <p className="text-sm font-bold">{bookingId}</p>
              </div>
            </div>
            
            <div className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
              isOnTime 
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
            }`}>
              <span className={`h-1.5 w-1.5 rounded-full ${isOnTime ? "bg-emerald-400" : "bg-amber-400"} animate-pulse`} />
              {status}
            </div>
          </div>

          {/* Route Display */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex-1">
              <p className="text-2xl font-black tracking-tight">{from}</p>
              <p className="text-xs text-blue-100/60 mt-1">{date}</p>
            </div>
            
            <div className="flex flex-col items-center px-4">
              <div className="h-2 w-2 rounded-full bg-white/40" />
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-white/10 via-white/40 to-white/10 my-1.5" />
              <div className="h-2 w-2 rounded-full bg-[#bf2629] ring-4 ring-[#bf2629]/30" />
            </div>
            
            <div className="flex-1 text-right">
              <p className="text-2xl font-black tracking-tight">{to}</p>
              <p className="text-xs text-blue-100/60 mt-1">Arrives Next Day</p>
            </div>
          </div>
        </div>

        {/* Perforated Divider (Fake Ticket Tear) */}
        <div className="relative h-6 bg-slate-50">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 h-6 w-6 rounded-full bg-slate-100 border-r border-slate-200" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 h-6 w-6 rounded-full bg-slate-100 border-l border-slate-200" />
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-slate-200" />
        </div>

        {/* Details Grid */}
        <div className="bg-slate-50 p-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
              <Clock3 size={16} className="text-[#bf2629]" />
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Departure</p>
              <p className="text-sm font-bold text-slate-900">{departure}</p>
            </div>
            
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
              <MapPin size={16} className="text-[#bf2629]" />
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Boarding</p>
              <p className="text-sm font-bold text-slate-900">{boarding}</p>
            </div>
            
            <div className="col-span-2 sm:col-span-1 rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
              <TicketCheck size={16} className="text-[#bf2629]" />
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Seat</p>
              <p className="text-sm font-bold text-slate-900">{seat}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-slate-700 border border-slate-200 transition hover:bg-slate-50">
              <Download size={14} />
              Download
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-slate-700 border border-slate-200 transition hover:bg-slate-50">
              <Share2 size={14} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}