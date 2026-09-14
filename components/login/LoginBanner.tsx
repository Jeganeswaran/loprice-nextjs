import { BusFront, ShieldCheck, Zap, MapPin } from "lucide-react";

export default function LoginBanner() {
  const features = [
    { icon: Zap, text: "Lightning-fast bookings" },
    { icon: ShieldCheck, text: "100% secure payments" },
    { icon: MapPin, text: "Track trips in real-time" },
  ];

  return (
    <div className="relative hidden overflow-hidden bg-[#0b1b3d] p-10 text-white md:flex md:flex-col md:justify-center">
      {/* Ambient glowing background orb */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#bf2629] opacity-40 blur-[100px]" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-[80px]" />

      {/* Content wrapper to sit above the glow */}
      <div className="relative z-10 flex flex-col h-full justify-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <BusFront size={28} className="text-white" />
        </div>
        
        <h1 className="mt-8 text-4xl font-black tracking-tight leading-tight">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            LoPrice.
          </span>
        </h1>
        
        <p className="mt-4 text-base leading-relaxed text-blue-100/70 max-w-xs">
          Your premium gateway to seamless travel. Save searches, manage tickets, and explore more for less.
        </p>

        {/* Feature List */}
        <ul className="mt-10 space-y-4">
          {features.map(({ icon: Icon, text }, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-medium text-blue-50/80">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <Icon size={12} className="text-white" />
              </div>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}