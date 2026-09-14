export default function BookingSteps() {
  return (
    <div className="flex items-center justify-center border-b border-slate-200 bg-white text-xs font-semibold sm:text-sm">
      <div className="flex min-w-[720px] items-center justify-center gap-0">
        <div className="relative flex h-11 items-center border-b-2 border-[#bf2629] px-7 font-bold text-[#bf2629]">Select seats</div>
        <div className="h-px w-8 bg-slate-200" />
        <div className="px-7 py-3 text-slate-500">Board/Drop point</div>
        <div className="h-px w-8 bg-slate-200" />
        <div className="px-7 py-3 text-slate-400">Passenger Info</div>
      </div>
    </div>
  )
}
