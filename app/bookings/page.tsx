import BookingPageHeader from "@/components/bookings/BookingPageHeader";
import BookingTracker from "@/components/bookings/BookingTracker";

export const metadata = {
  title: "Track Your Ticket",
  description: "Track your LoPrice bus ticket status in real-time.",
};

export default function BookingsPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 py-10 sm:py-14">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-blue-100 opacity-50 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-rose-100 opacity-50 blur-[120px]" />
      </div>

      <section className="container-shell relative z-10">
        <div className="mx-auto max-w-2xl">
          <BookingPageHeader />
          
          <div className="mt-10">
            <BookingTracker />
          </div>
        </div>
      </section>
    </main>
  );
}