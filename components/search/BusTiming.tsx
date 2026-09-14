interface BusTimingProps {
  bus: {
    depart: string;
    arrive: string;
    duration: string;
    seats: number;
    singleSeats?: number;
  };
}

export default function BusTiming({ bus }: BusTimingProps) {
  return (
    <div className="text-center sm:min-w-[200px]">
      <div className="flex items-center justify-center gap-2 text-xl font-black text-neutral-800">
        <span>{bus.depart}</span>
        <span className="text-neutral-300">—</span>
        <span>{bus.arrive}</span>
      </div>

      <div className="mt-1 text-xs font-medium text-neutral-500">
        {bus.duration} · {bus.seats} Seats
        {bus.singleSeats ? (
          <span className="font-bold text-amber-600"> ({bus.singleSeats} Single)</span>
        ) : null}
      </div>
    </div>
  );
}
