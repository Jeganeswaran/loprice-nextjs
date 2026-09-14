import { MapPin } from "lucide-react";
import type { Bus } from "@/lib/types/bus";
import RatingBadge from "./RatingBadge";
import BusTiming from "./BusTiming";
import BusFare from "./BusFare";
import BusTags from "./BusTags";

interface BusCardProps {
  bus: Bus;
  isSelected: boolean;
  selectedSeats: string[];
  onSelect: () => void;
}

export default function BusCard({
  bus,
  isSelected,
  selectedSeats,
  onSelect,
}: BusCardProps) {
  return (
    <div className="card overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
            Direct Bus
          </span>

          {bus.promoBadge && (
            <span className="inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-700">
              {bus.promoBadge}
            </span>
          )}
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-[180px]">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-neutral-800">{bus.name}</h2>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-[#bf2629]">
                <MapPin size={14} />
              </span>
            </div>
            <div className="mt-1 text-sm font-medium text-neutral-500">{bus.type}</div>
          </div>

          <RatingBadge rating={bus.rating} reviews={bus.reviews} />

          <BusTiming bus={bus} />

          <BusFare bus={bus} />
        </div>

        <BusTags
          tags={bus.tags}
          offerNote={bus.offerNote}
          isSelected={isSelected}
          onSelect={onSelect}
        />
      </div>

      {isSelected && (
        <div className="border-t border-neutral-100 bg-[#fffafa] px-5 py-3 text-xs font-semibold text-[#bf2629]">
          {selectedSeats.length
            ? `${selectedSeats.length} seat${selectedSeats.length > 1 ? "s" : ""} selected`
            : "Seat selection opened"}
        </div>
      )}
    </div>
  );
}
