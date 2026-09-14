import { Bell, Tag, Info, CheckCircle2 } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Your trip to Pune is confirmed!",
    desc: "Booking ID LP-9823746. Boarding at Dadar at 08:30 AM.",
    time: "2 hours ago",
    unread: true,
    type: "booking",
  },
  {
    id: 2,
    title: "Flat 20% OFF on your next trip",
    desc: "Use code LOPRICE20 to avail the discount. Valid till 31st Oct.",
    time: "1 day ago",
    unread: true,
    type: "offer",
  },
  {
    id: 3,
    title: "Refund Processed Successfully",
    desc: "₹450 has been credited back to your LoPrice Wallet.",
    time: "3 days ago",
    unread: false,
    type: "success",
  },
  {
    id: 4,
    title: "Scheduled Maintenance Notice",
    desc: "Our services will be briefly unavailable on 28th Oct from 2 AM - 4 AM.",
    time: "1 week ago",
    unread: false,
    type: "info",
  },
];

export default function Notifications() {
  const getIconStyles = (type: string) => {
    switch (type) {
      case "booking": return "bg-blue-50 text-blue-600";
      case "offer": return "bg-amber-50 text-amber-600";
      case "success": return "bg-emerald-50 text-emerald-600";
      default: return "bg-slate-100 text-slate-500";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "booking": return <Bell size={18} />;
      case "offer": return <Tag size={18} />;
      case "success": return <CheckCircle2 size={18} />;
      default: return <Info size={18} />;
    }
  };

  return (
    <div className="animate-in fade-in duration-500 rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900">Notifications</h3>
        <button className="text-xs font-bold text-[#bf2629] hover:underline">Mark all as read</button>
      </div>

      <div className="space-y-1">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`relative flex items-start gap-4 rounded-2xl p-4 transition hover:bg-slate-50 ${
              notif.unread ? "bg-slate-50/50" : ""
            }`}
          >
            {/* Unread Dot */}
            {notif.unread && (
              <span className="absolute top-5 right-5 h-2 w-2 rounded-full bg-[#bf2629]" />
            )}

            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${getIconStyles(notif.type)}`}>
              {getIcon(notif.type)}
            </div>
            
            <div className="flex-1 pr-4">
              <p className={`text-sm ${notif.unread ? "font-bold text-slate-900" : "font-medium text-slate-700"}`}>
                {notif.title}
              </p>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">{notif.desc}</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}