import { TicketCheck, MapPin, Calendar, Clock, ChevronRight, BusFront } from "lucide-react";

const bookings = [
  {
    id: "LP-9823746",
    status: "Upcoming",
    from: "Mumbai",
    to: "Pune",
    date: "24 Oct, 2024",
    time: "08:30 AM",
    bus: "Volvo AC Sleeper (2+1)",
    seats: "L4, L5",
    amount: "₹850",
  },
  {
    id: "LP-1029384",
    status: "Completed",
    from: "Pune",
    to: "Bangalore",
    date: "12 Sep, 2024",
    time: "09:00 PM",
    bus: "Scania Multi-Axle AC",
    seats: "U12",
    amount: "₹1,450",
  },
  {
    id: "LP-5647382",
    status: "Cancelled",
    from: "Delhi",
    to: "Jaipur",
    date: "05 Aug, 2024",
    time: "06:00 AM",
    bus: "Express Non-AC",
    seats: "S22",
    amount: "₹450",
  },
];

export default function MyBookings() {
  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {bookings.map((booking) => {
        const isUpcoming = booking.status === "Upcoming";
        const isCancelled = booking.status === "Cancelled";

        return (
          <div 
            key={booking.id} 
            className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm border border-slate-100 transition hover:shadow-md"
          >
            {/* Status Badge */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  isUpcoming ? "bg-blue-50 text-blue-600" : 
                  isCancelled ? "bg-rose-50 text-rose-600" : "bg-slate-100 text-slate-500"
                }`}>
                  <BusFront size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Booking ID</p>
                  <p className="text-sm font-bold text-slate-800">{booking.id}</p>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                isUpcoming ? "bg-emerald-50 text-emerald-600" : 
                isCancelled ? "bg-rose-50 text-rose-600" : "bg-slate-100 text-slate-500"
              }`}>
                {booking.status}
              </span>
            </div>

            {/* Route Info */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-1">
                <p className="text-xs text-slate-400">From</p>
                <p className="text-lg font-bold text-slate-900">{booking.from}</p>
              </div>
              <div className="flex flex-col items-center px-2 text-slate-300">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <div className="h-px w-12 bg-slate-200 my-1" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#bf2629]" />
              </div>
              <div className="flex-1 text-right">
                <p className="text-xs text-slate-400">To</p>
                <p className="text-lg font-bold text-slate-900">{booking.to}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-50">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-slate-400" />
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-semibold">Date</p>
                  <p className="text-xs font-medium text-slate-700">{booking.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-slate-400" />
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-semibold">Time</p>
                  <p className="text-xs font-medium text-slate-700">{booking.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TicketCheck size={14} className="text-slate-400" />
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-semibold">Seats</p>
                  <p className="text-xs font-medium text-slate-700">{booking.seats}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-xs font-bold">₹</span>
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-semibold">Amount</p>
                  <p className="text-xs font-medium text-slate-700">{booking.amount}</p>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-slate-500 truncate pr-4">{booking.bus}</p>
              <button className="flex items-center gap-1 text-xs font-bold text-[#bf2629] hover:underline">
                View Ticket <ChevronRight size={14} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}