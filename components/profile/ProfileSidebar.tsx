"use client";

import { 
  UserRound, 
  TicketCheck, 
  Wallet, 
  Settings, 
  LogOut,
  Bell
} from "lucide-react";

// Define the type for the tab IDs to ensure type safety
export type TabId = "details" | "bookings" | "wallet" | "notifications" | "settings";

const menuItems = [
  { id: "details", label: "Personal Details", icon: UserRound },
  { id: "bookings", label: "My Bookings", icon: TicketCheck },
  { id: "wallet", label: "Wallet & Refunds", icon: Wallet },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Account Settings", icon: Settings },
] as const; // Use 'as const' so TypeScript infers the exact string literals

interface ProfileSidebarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function ProfileSidebar({ activeTab, onTabChange }: ProfileSidebarProps) {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
        {menuItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex items-center gap-3 whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-[#bf2629] text-white shadow-lg shadow-[#bf2629]/30"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon size={18} className={isActive ? "text-white" : "text-slate-400"} />
              {label}
            </button>
          );
        })}
        
        <div className="hidden lg:block mt-4 pt-4 border-t border-slate-100">
          <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-rose-500 hover:bg-rose-50 transition-colors">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
}