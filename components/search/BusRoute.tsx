interface BusRouteProps {
  bus: {
    depart: string;
    boarding: string;
    arrive: string;
    dropping: string;
    duration: string;
  };
}

export default function BusRoute({ bus }: BusRouteProps) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:min-w-[330px]">
      <div>
        <div className="text-xl font-black">{bus.depart}</div>

        <div className="text-xs text-neutral-500">{bus.boarding}</div>
      </div>

      <div className="text-center">
        <div className="text-xs text-neutral-400">{bus.duration}</div>

        <div className="my-1 border-t border-dashed border-neutral-300" />

        <div className="text-[11px] text-neutral-400">Direct</div>
      </div>

      <div className="text-right">
        <div className="text-xl font-black">{bus.arrive}</div>

        <div className="text-xs text-neutral-500">{bus.dropping}</div>
      </div>
    </div>
  );
}
