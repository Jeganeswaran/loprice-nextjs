import type { Bus } from "@/lib/types/bus";
import BusCard from "./BusCard";

interface BusListProps {
  buses: Bus[];
  selectedBus: number | null;
  selectedSeats: string[];
  onBusSelect: (busId: number) => void;
}

export default function BusList({
  buses,
  selectedBus,
  selectedSeats,
  onBusSelect,
}: BusListProps) {
  if (!buses.length)
    return (
      <div className="card p-10 text-center">
        <h2 className="text-lg font-black">No buses match your filters</h2>
        <p className="mt-2 text-sm text-neutral-500">
          Try removing one or more filters to see more buses.
        </p>
      </div>
    );
  return (
    <div className="space-y-4">
      {buses.map((bus) => (
        <BusCard
          key={bus.id}
          bus={bus}
          isSelected={selectedBus === bus.id}
          selectedSeats={selectedBus === bus.id ? selectedSeats : []}
          onSelect={() => onBusSelect(bus.id)}
        />
      ))}
    </div>
  );
}
