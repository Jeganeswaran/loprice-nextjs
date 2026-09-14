import { Filter } from "lucide-react";
import { AMENITIES, DEPARTURE_SLOTS } from "@/lib/constants/search";

interface SearchFiltersProps {
  acOnly: boolean;
  sleeper: boolean;
  onAcChange: (value: boolean) => void;
  onSleeperChange: (value: boolean) => void;
}

export default function SearchFilters({
  acOnly,
  sleeper,
  onAcChange,
  onSleeperChange,
}: SearchFiltersProps) {
  return (
    <aside className="hidden h-fit rounded-lg border border-neutral-100 bg-white p-5 lg:block">
      <div className="flex items-center gap-2 font-semibold">
        <Filter size={18} />
        Filters
      </div>

      <div className="mt-5 border-t border-neutral-200 pt-4">
        <div className="text-sm font-semibold">Bus type</div>

        <label className="mt-2 flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={acOnly}
            onChange={(e) => onAcChange(e.target.checked)}
          />
          AC buses
        </label>

        <label className="mt-2 flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={sleeper}
            onChange={(e) => onSleeperChange(e.target.checked)}
          />
          Sleeper
        </label>
      </div>

      <div className="mt-5 border-t border-neutral-200 pt-4">
        <div className="text-sm font-semibold">Departure</div>

        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
          {DEPARTURE_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              className="rounded-lg border border-neutral-200 px-2 py-2 hover:border-[#bf2629]"
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 border-t border-neutral-200 pt-5">
        <div className="text-sm font-semibold">Amenities</div>

        {AMENITIES.map((amenity) => (
          <label key={amenity} className="mt-2 flex items-center gap-3 text-sm">
            <input type="checkbox" />
            {amenity}
          </label>
        ))}
      </div>
    </aside>
  );
}
