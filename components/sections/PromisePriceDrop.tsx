import React from "react";
import { CheckCircle2, Clock3 } from "lucide-react";
import Link from "next/link";

export default function PromisePriceDrop() {
  return (
    <section className="container-shell py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
        <div className="rounded-3xl bg-neutral-950 p-7 text-white sm:p-9">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-rose-300">
            LoPrice promise
          </span>
          <h2 className="mt-2 text-3xl font-black">
            Make the final price easy to understand.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-300 sm:text-base">
            The product should make price comparison visible without hiding fees
            or forcing the user through multiple screens.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Compare bus fares",
              "See discounts clearly",
              "Surface value options",
              "Show final payable price",
            ].map((x) => (
              <div
                key={x}
                className="flex items-center gap-3 rounded-xl bg-white/7 px-4 py-3 text-sm font-semibold"
              >
                <CheckCircle2 size={18} className="text-rose-300" />
                {x}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-[#fff1f1] p-7 sm:p-9">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#bf2629]">
              PRICE DROP
            </span>
            <span className="text-xs text-neutral-500">
              Chennai → Bangalore
            </span>
          </div>
          <div className="mt-8">
            <div className="text-sm text-neutral-500 line-through">
              Earlier ₹699
            </div>
            <div className="mt-1 text-5xl font-black text-[#bf2629]">₹549</div>
            <div className="mt-2 font-semibold text-green-700">
              You save ₹150
            </div>
          </div>
          <Link
            href="/search?from=Chennai&to=Bangalore"
            className="btn-primary mt-8 w-full"
          >
            View low fares
          </Link>
        </div>
      </div>
    </section>
  );
}
