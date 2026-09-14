import React from "react";
import {
  BadgeIndianRupee,
  BusFront,
  ShieldCheck,
  Zap,
  MapPinned,
  Headphones,
} from "lucide-react";

export default function WhyLoPrice() {
  const items = [
    [
      BadgeIndianRupee,
      "Low fare discovery",
      "Compare options and surface better-value trips.",
    ],
    [
      BusFront,
      "More bus choices",
      "Browse operator, bus type, timing and amenity options.",
    ],
    [
      ShieldCheck,
      "Secure booking flow",
      "A clear checkout designed for trusted payment integrations.",
    ],
    [
      Zap,
      "Instant confirmation",
      "Show ticket status and trip details immediately after booking.",
    ],
    [
      MapPinned,
      "Useful boarding details",
      "Keep boarding points, landmarks and drop points easy to find.",
    ],
    [
      Headphones,
      "Helpful support",
      "Put cancellation, refund and ticket assistance within reach.",
    ],
  ] as any;

  return (
    <section className="container-shell pb-12 sm:pb-16">
      <div className="overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="grid lg:grid-cols-[.9fr_1.1fr]">
          
          {/* LEFT - Background Image */}
          <div
            className="relative min-h-[360px] overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/why-loprice-bg.jpeg')",
            }}
          >
            {/* Image overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-center p-8 text-white sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[.2em] text-white/80">
                Why LoPrice
              </span>

              <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
                A booking experience built around price, clarity and speed.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                The UI keeps the primary journey simple: search, compare,
                select, pay and travel.
              </p>
            </div>
          </div>

          {/* RIGHT - Features */}
          <div className="p-6 sm:p-8 bg-neutral-100">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map(([Icon, title, copy]: any) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white p-4 transition hover:-translate-y-1 hover:shadow-sm"
                >
                  <Icon size={22} className="text-[#bf2629]" />

                  <h3 className="mt-3 font-bold">{title}</h3>

                  <p className="mt-1 text-sm leading-6 text-neutral-500">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
