import Avatar from "@/components/ui/Avatar";
import { Mail, Phone, MapPin, Edit3, ShieldCheck } from "lucide-react";

export default function PersonalDetails() {
  // Mock user data - in a real app, this comes from your auth provider/database
  const user = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    isVerified: true,
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Profile Header Card */}
      <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#bf2629] opacity-5 blur-3xl -mr-10 -mt-10" />
        
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <Avatar name={user.name} size="lg" />
          
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1>
              {user.isVerified && (
                <span title="Verified Account">
                  <ShieldCheck size={20} className="text-emerald-500" aria-label="Verified Account" />
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-slate-500">Member since Jan 2024</p>
            
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-100 border border-slate-200">
              <Edit3 size={14} />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: Mail, label: "Email Address", value: user.email, color: "text-blue-500", bg: "bg-blue-50" },
          { icon: Phone, label: "Mobile Number", value: user.phone, color: "text-emerald-500", bg: "bg-emerald-50" },
          { icon: MapPin, label: "Location", value: user.location, color: "text-amber-500", bg: "bg-amber-50" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-sm border border-slate-100 transition hover:shadow-md">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}>
              <item.icon size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</p>
              <p className="mt-1 text-sm font-medium text-slate-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}