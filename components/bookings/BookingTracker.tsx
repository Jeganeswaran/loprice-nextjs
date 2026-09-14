"use client";

import { useState } from "react";
import TrackTicketForm from "./TrackTicketForm";
import TicketResult from "./TicketResult";

export default function BookingTracker() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    bookingId: string;
    from: string;
    to: string;
    date: string;
    departure: string;
    boarding: string;
    seat: string;
    status: "On Time" | "Delayed" | "Completed";
  } | null>(null);

  const handleTrack = (ticketId: string, mobile: string) => {
    setIsLoading(true);
    // Simulate API Call
    setTimeout(() => {
      setIsLoading(false);
      // Mock Result Data
      setResult({
        bookingId: ticketId,
        from: "Chennai",
        to: "Bangalore",
        date: "Today, 24 Oct",
        departure: "9:30 PM",
        boarding: "Koyambedu",
        seat: "L08",
        status: "On Time",
      });
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <TrackTicketForm onTrack={handleTrack} isLoading={isLoading} />
      
      {result && (
        <TicketResult 
          bookingId={result.bookingId}
          from={result.from}
          to={result.to}
          date={result.date}
          departure={result.departure}
          boarding={result.boarding}
          seat={result.seat}
          status={result.status}
        />
      )}
    </div>
  );
}