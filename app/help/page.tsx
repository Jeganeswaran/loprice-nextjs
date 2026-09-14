import FAQ from "@/components/FAQ";
import {
  CircleHelp,
  MessageCircle,
  PhoneCall,
  TicketCheck,
} from "lucide-react";

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <section className="container-shell py-10 sm:py-14">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-sm font-bold text-[#bf2629]">
            <CircleHelp size={18} /> Help centre
          </div>
          <h1 className="mt-2 text-4xl font-black">How can we help?</h1>
          <p className="mt-3 text-neutral-500">
            Find booking, payment, cancellation and travel answers quickly.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            [
              TicketCheck,
              "Booking support",
              "Get help with booking IDs, seats and trip details.",
            ],
            [
              MessageCircle,
              "Chat support",
              "Connect to an in-app support experience.",
            ],
            [
              PhoneCall,
              "Urgent trip help",
              "Keep urgent departure-day help easy to access.",
            ],
          ].map(([Icon, title, copy]: any) => (
            <div className="card p-5" key={title}>
              <Icon className="text-[#bf2629]" />
              <h2 className="mt-4 font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-500">{copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="section-title">Frequently asked questions</h2>
          <div className="mt-6">
            <FAQ />
          </div>
        </div>
      </section>
    </main>
  );
}
