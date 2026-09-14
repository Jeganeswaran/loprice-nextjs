import { TicketCheck } from "lucide-react";

export default function BookingPageHeader() {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1f1] text-[#bf2629] shadow-sm">
        <TicketCheck size={26} />
      </div>
      <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        Track your ticket
      </h1>
      <p className="mt-3 text-sm text-slate-500 max-w-md mx-auto">
        Enter your booking ID and mobile number to view live trip status, boarding details, and seat info.
      </p>
    </div>
  );
}