"use client";

import { Search, TicketCheck, Loader2 } from "lucide-react";
import { useState } from "react";

interface TrackTicketFormProps {
  onTrack: (ticketId: string, mobile: string) => void;
  isLoading: boolean;
  initialTicketId?: string;
}

export default function TrackTicketForm({
  onTrack,
  isLoading,
  initialTicketId = "LP20260902001",
}: TrackTicketFormProps) {
  const [ticket, setTicket] = useState(initialTicketId);
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticket && mobile.length === 10) {
      onTrack(ticket, mobile);
    }
  };

  return (
    <div className="rounded-[2rem] bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Booking ID
            </label>
            <div className="group flex rounded-2xl bg-slate-50 border border-slate-200 focus-within:bg-white focus-within:border-[#bf2629] focus-within:ring-4 focus-within:ring-[#bf2629]/10 transition-all duration-300">
              <span className="flex items-center px-4 text-slate-400 border-r border-slate-200">
                <TicketCheck size={16} />
              </span>
              <input
                type="text"
                value={ticket}
                onChange={(e) => setTicket(e.target.value.toUpperCase())}
                className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm font-bold tracking-wide text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="LP2026..."
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Mobile Number
            </label>
            <div className="group flex rounded-2xl bg-slate-50 border border-slate-200 focus-within:bg-white focus-within:border-[#bf2629] focus-within:ring-4 focus-within:ring-[#bf2629]/10 transition-all duration-300">
              <span className="flex items-center px-4 text-sm font-medium text-slate-500 border-r border-slate-200">
                +91
              </span>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="98765 43210"
                maxLength={10}
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || mobile.length < 10}
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#bf2629] px-4 py-4 text-sm font-bold text-white shadow-lg shadow-[#bf2629]/30 transition-all hover:bg-[#a62023] hover:shadow-[#bf2629]/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Search size={16} />
            )}
            {isLoading ? "Searching..." : "Track Ticket"}
          </span>
        </button>
      </form>
    </div>
  );
}
