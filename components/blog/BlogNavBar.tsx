"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  tag?: string; // Optional: filter tag for the blog listing
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Flights", href: "/flights" },
  { label: "Hotels", href: "/hotels" },
  { label: "Trains", href: "/trains" },
  { label: "Buses", href: "/" },
  { label: "Visa", href: "/visa" },
  { label: "Destinations", href: "/blog", tag: "Destinations" },
  { label: "Blog", href: "/blog" },
];

export default function BlogNavBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag");

  const isActive = (item: NavItem) => {
    // If item has a tag, check if that tag is active in the URL
    if (item.tag) {
      return pathname === "/blog" && activeTag === item.tag;
    }
    // Otherwise, exact match on pathname (no query params)
    return pathname === item.href && !activeTag;
  };

  return (
    <div className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-16 z-40">
      <div className="container-shell">
        <nav className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
          {navItems.map((item) => {
            const active = isActive(item);
            const href = item.tag ? `${item.href}?tag=${encodeURIComponent(item.tag)}` : item.href;

            return (
              <Link
                key={item.label}
                href={href}
                className={`relative whitespace-nowrap px-4 py-4 text-sm font-medium transition-colors ${
                  active
                    ? "text-[#bf2629] font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
                
                {/* Active Underline Indicator */}
                {active && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#bf2629]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}