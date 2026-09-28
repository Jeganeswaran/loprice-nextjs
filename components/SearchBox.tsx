"use client";

import { useRouter } from "next/navigation";
import {
  ArrowRightLeft,
  CalendarDays,
  MapPin,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [from, setFrom] = useState("Chennai");
  const [to, setTo] = useState("Bodi (Tamil Nadu)");
  const [date, setDate] = useState("2026-09-02");
  const [tripType, setTripType] = useState<"today" | "tomorrow">("today");
  const [womenOnly, setWomenOnly] = useState(false);
  const [isWomenInfoOpen, setIsWomenInfoOpen] = useState(false);

  const swap = () => {
    const a = from;
    setFrom(to);
    setTo(a);
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`,
    );
  };

  return (
    <>
    <form
      onSubmit={submit}
      className="mx-auto w-full max-w-[1280px] rounded-[18px] bg-white p-3 shadow-[0_14px_28px_rgba(15,23,42,0.10)] ring-1 ring-black/5 backdrop-blur-[1px]"
    >
      <div className="grid grid-cols-1 gap-2 rounded-[14px] border border-neutral-200 p-2 sm:grid-cols-2 lg:grid-cols-[1.05fr_54px_1.05fr_0.95fr_1fr_1.05fr]">
        <label className="flex items-center gap-3 rounded-[12px] px-2 text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-600 ring-1 ring-neutral-200">
            <MapPin size={14} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-medium text-neutral-500">From</div>
            <input
              className="w-full bg-transparent font-semibold text-neutral-900 outline-none"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
        </label>

        <button
          type="button"
          onClick={swap}
          className="mx-auto my-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-white shadow-sm"
          aria-label="Swap cities"
        >
          <ArrowRightLeft size={18} />
        </button>

        <label className="flex  items-center gap-3 rounded-[12px] px-4 text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-600 ring-1 ring-neutral-200">
            <MapPin size={14} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-medium text-neutral-500">To</div>
            <input
              className="w-full bg-transparent font-semibold text-neutral-900 outline-none"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </label>

        <div className="flex items-center gap-3 rounded-[12px] px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-600 ring-1 ring-neutral-200">
            <CalendarDays size={14} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-medium text-neutral-500">
              Date of Journey
            </div>
            <div className="flex items-center gap-2 font-semibold text-neutral-900">
              <input
                type="date"
                className="w-full bg-transparent font-semibold text-neutral-900 outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-center rounded-[12px]">
          <div className="flex items-center rounded-full bg-white p-1 ring-1 ring-neutral-200">
            {["today", "tomorrow"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTripType(option as "today" | "tomorrow")}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  tripType === option
                    ? "bg-[#f9dfe0] text-[#ce4a4d]"
                    : "text-neutral-600"
                }`}
              >
                {option === "today" ? "Today" : "Tomorrow"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-[12px]">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#d1484a] ring-1 ring-neutral-200">
              <ShieldCheck size={14} />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-medium text-neutral-500">
                Booking for women
              </div>
              <button
                type="button"
                onClick={() => setIsWomenInfoOpen(true)}
                className="text-left text-sm font-medium text-neutral-700 underline decoration-dotted underline-offset-2 hover:text-neutral-950"
                aria-haspopup="dialog"
              >
                Know more
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setWomenOnly((value) => !value)}
            className={`relative h-7 w-12 rounded-full transition ${womenOnly ? "bg-[#1d1d1d]" : "bg-[#d8d8d8]"}`}
            aria-label="Toggle women only"
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${womenOnly ? "left-6" : "left-1"}`}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
        <button
          type="submit"
          className="mt-3 flex w-full items-center justify-center gap-3 rounded-full bg-[#d75e5a] px-6 py-2 text-center text-[16px] font-semibold text-white shadow-[0_10px_25px_rgba(215,94,90,0.22)] transition hover:bg-[#cf4e4d] sm:w-auto"
        >
          <Search size={16} /> Search buses
        </button>
      </div>
    </form>
    {isWomenInfoOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="women-booking-title">
        <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 id="women-booking-title" className="text-lg font-semibold text-neutral-900">
              Booking for women
            </h2>
            <button
              type="button"
              onClick={() => setIsWomenInfoOpen(false)}
              className="-mr-2 -mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Turn on this option to look for women-only bus booking options. Availability may vary by route and operator.
          </p>
        </div>
      </div>
    )}
    </>
  );
}
