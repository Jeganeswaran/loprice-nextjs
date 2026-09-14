"use client";

import { useState } from "react";
import { 
  Laptop, 
  Smartphone, 
  Tablet, 
  Monitor, 
  LogOut, 
  ShieldCheck, 
  MapPin, 
  Clock,
  AlertTriangle
} from "lucide-react";

interface Device {
  id: string;
  name: string;
  type: "desktop" | "mobile" | "tablet";
  os: string;
  browser: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
}

const initialDevices: Device[] = [
  {
    id: "1",
    name: "MacBook Pro",
    type: "desktop",
    os: "macOS Sonoma",
    browser: "Chrome 121",
    location: "Mumbai, India",
    lastActive: "Active now",
    isCurrent: true,
  },
  {
    id: "2",
    name: "iPhone 14 Pro",
    type: "mobile",
    os: "iOS 17.3",
    browser: "Safari Mobile",
    location: "Mumbai, India",
    lastActive: "2 hours ago",
    isCurrent: false,
  },
  {
    id: "3",
    name: "iPad Air",
    type: "tablet",
    os: "iPadOS 17.2",
    browser: "Safari",
    location: "Pune, India",
    lastActive: "Yesterday",
    isCurrent: false,
  },
  {
    id: "4",
    name: "Windows PC",
    type: "desktop",
    os: "Windows 11",
    browser: "Edge 120",
    location: "Bangalore, India",
    lastActive: "3 days ago",
    isCurrent: false,
  },
];

export default function LoginDevices() {
  const [devices, setDevices] = useState<Device[]>(initialDevices);
  const [loggingOutId, setLoggingOutId] = useState<string | null>(null);

  const handleLogout = (id: string) => {
    setLoggingOutId(id);
    // Simulate API call
    setTimeout(() => {
      setDevices((prev) => prev.filter((d) => d.id !== id));
      setLoggingOutId(null);
    }, 800);
  };

  const getDeviceIcon = (type: Device["type"]) => {
    switch (type) {
      case "mobile": return <Smartphone size={20} />;
      case "tablet": return <Tablet size={20} />;
      case "desktop": return <Laptop size={20} />;
      default: return <Monitor size={20} />;
    }
  };

  const otherDevicesCount = devices.filter((d) => !d.isCurrent).length;

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck size={20} className="text-emerald-500" />
            Login Devices
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            You are logged into <span className="font-bold text-slate-700">{devices.length}</span> device{devices.length !== 1 && "s"}.
          </p>
        </div>
        
        {/* "Logout all other devices" Action */}
        {otherDevicesCount > 0 && (
          <button 
            onClick={() => setDevices((prev) => prev.filter((d) => d.isCurrent))}
            className="hidden sm:flex items-center gap-1.5 rounded-xl bg-rose-50 px-3 py-2 text-xs font-bold text-rose-600 transition hover:bg-rose-100"
          >
            <LogOut size={14} />
            Logout All Others
          </button>
        )}
      </div>

      {/* Security Warning (if many devices) */}
      {otherDevicesCount > 2 && (
        <div className="mb-5 flex items-start gap-3 rounded-2xl bg-amber-50 border border-amber-100 p-4 text-xs text-amber-800">
          <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-600" />
          <p>
            Don't recognize a device? <span className="font-bold">Change your password immediately</span> and logout all other sessions.
          </p>
        </div>
      )}

      {/* Devices List */}
      <div className="space-y-3">
        {devices.map((device) => (
          <div 
            key={device.id} 
            className={`group relative flex items-start gap-4 rounded-2xl p-4 transition border ${
              device.isCurrent 
                ? "bg-emerald-50/40 border-emerald-100" 
                : "bg-slate-50/50 border-slate-100 hover:bg-slate-50"
            }`}
          >
            {/* Device Icon */}
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
              device.isCurrent 
                ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30" 
                : "bg-white text-slate-600 border border-slate-200"
            }`}>
              {getDeviceIcon(device.type)}
            </div>

            {/* Device Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-bold text-slate-900">{device.name}</p>
                {device.isCurrent && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                    This Device
                  </span>
                )}
              </div>
              
              <p className="text-xs text-slate-500 mt-1">
                {device.browser} • {device.os}
              </p>

              {/* Meta Info Row */}
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin size={11} />
                  {device.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {device.lastActive}
                </span>
              </div>
            </div>

            {/* Action Button (Only for non-current devices) */}
            {!device.isCurrent && (
              <button
                onClick={() => handleLogout(device.id)}
                disabled={loggingOutId === device.id}
                className="shrink-0 self-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"
              >
                {loggingOutId === device.id ? "Logging out..." : "Logout"}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Mobile-friendly "Logout All" Button */}
      {otherDevicesCount > 0 && (
        <button 
          onClick={() => setDevices((prev) => prev.filter((d) => d.isCurrent))}
          className="sm:hidden mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-50 px-4 py-3 text-xs font-bold text-rose-600 transition hover:bg-rose-100"
        >
          <LogOut size={14} />
          Logout from all other devices
        </button>
      )}
    </div>
  );
}