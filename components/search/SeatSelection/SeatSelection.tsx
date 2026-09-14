
import { BusFront } from "lucide-react";

import SeatMap from "./SeatMap";
import BookingSummary from "../BookingSummary";

interface SeatSelectionProps {
    bus: {
        price: number;
    };
    selectedSeat: number | null;
    onSeatSelect: (seat: number) => void;
}

export default function SeatSelection({
    bus,
    selectedSeat,
    onSeatSelect,
}: SeatSelectionProps) {
    return (
        <div className="border-t border-neutral-100 bg-neutral-50 p-5 sm:p-6">

            <div className="grid gap-6 lg:grid-cols-[1fr_260px]">

                <div>

                    <div className="mb-4 flex items-center gap-2 font-bold">
                        <BusFront size={18} />
                        Select your seat
                    </div>

                    <SeatMap
                        selectedSeat={selectedSeat}
                        onSeatSelect={onSeatSelect}
                    />

                </div>

                <BookingSummary
                    seatLabel={selectedSeat !== null ? String(selectedSeat) : null}
                    fare={bus.price}
                />

            </div>

        </div>
    );
}