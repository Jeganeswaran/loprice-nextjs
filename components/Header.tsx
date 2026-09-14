"use client";

import Link from "next/link";
import {
  Menu,
  TicketCheck,
  CircleHelp,
  Gift,
  UserRound,
  BusFront,
  X,
} from "lucide-react";
import { useState } from "react";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Bus Tickets", icon: BusFront },
    { href: "/offers", label: "Offers", icon: Gift },
    { href: "/bookings", label: "Track Ticket", icon: TicketCheck },
    { href: "/help", label: "Help", icon: CircleHelp },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        
        <Logo height={80} />

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-[#bf2629]"
            >
              <Icon size={17} /> {label}
            </Link>
          ))}
          <Link href="/login" className="btn-secondary btn-sm text-sm py-1">
            <UserRound size={17} className="mr-2" /> Login / Sign Up
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-neutral-200 p-2.5 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-100 bg-white lg:hidden">
          <nav className="container-shell flex flex-col py-2">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                onClick={() => setOpen(false)}
                key={href}
                href={href}
                // Added py-3 for better mobile tap targets
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              >
                <Icon size={18} /> {label}
              </Link>
            ))}
            <Link 
              href="/login" 
              onClick={() => setOpen(false)}
              className="mt-2 btn-primary btn-xs text-sm"
            >
              Login / Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}