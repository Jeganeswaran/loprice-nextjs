interface SeatMapProps {
  selectedSeat: number | null;
  onSeatSelect: (seat: number) => void;
}

const occupiedSeats = [3, 8, 12, 17];

export default function SeatMap({ selectedSeat, onSeatSelect }: SeatMapProps) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="mb-5 flex justify-end">
        <div className="rounded-lg border border-neutral-200 px-3 py-2 text-xs font-bold">
          Driver
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: 20 }, (_, index) => index + 1).map((seat) => {
          const occupied = occupiedSeats.includes(seat);
          const selected = selectedSeat === seat;

          return (
            <button
              key={seat}
              disabled={occupied}
              onClick={() => onSeatSelect(seat)}
              className={`
                h-12 rounded-lg border text-xs font-bold
                ${
                  occupied
                    ? "cursor-not-allowed bg-neutral-200 text-neutral-400"
                    : selected
                      ? "border-[#bf2629] bg-[#bf2629] text-white"
                      : "border-green-300 bg-green-50 text-green-800 hover:border-[#bf2629]"
                }
              `}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
