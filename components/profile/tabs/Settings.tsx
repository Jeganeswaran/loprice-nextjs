"use client";

import { useState } from "react";
import { Moon, Globe, BellRing, Lock, Trash2, ChevronRight } from "lucide-react";
import LoginDevices from "./LoginDevices"; // 👈 Import the new component

export default function Settings() {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailUpdates: false,
    darkMode: false,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Preferences Card */}
      <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100">
        {/* ... (existing preferences code stays the same) ... */}
        <h3 className="text-lg font-bold text-slate-900 mb-1">Preferences</h3>
        <p className="text-sm text-slate-500 mb-6">Customize how LoPrice works for you.</p>
        {/* ... rest of preferences ... */}
      </div>

      {/* Security & Account Card */}
      <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Security & Account</h3>
        
        <div className="space-y-1">
          <button className="flex w-full items-center justify-between rounded-2xl p-3 transition hover:bg-slate-50">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Lock size={18} />
              </div>
              <p className="text-sm font-semibold text-slate-800">Change Password</p>
            </div>
            <ChevronRight size={18} className="text-slate-400" />
          </button>

          <button className="flex w-full items-center justify-between rounded-2xl p-3 transition hover:bg-rose-50 group">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <Trash2 size={18} />
              </div>
              <p className="text-sm font-semibold text-rose-600">Delete Account</p>
            </div>
            <ChevronRight size={18} className="text-rose-300 group-hover:text-rose-500" />
          </button>
        </div>
      </div>

      {/* 👇 NEW: Login Devices Section */}
      <LoginDevices />

    </div>
  );
}