import Link from "next/link";
import { Shield, FileText, RotateCcw, Ban, ChevronRight, Scale, Sparkles } from "lucide-react";
import ReadingProgress from "./ReadingProgress";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
  { href: "/terms-of-service", label: "Terms of Service", icon: FileText },
  { href: "/cancellation-policy", label: "Cancellation Policy", icon: Ban },
  { href: "/refund-policy", label: "Refund Policy", icon: RotateCcw },
];

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  activePath: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  activePath,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <ReadingProgress />
      
      <main className="relative min-h-screen bg-slate-50 overflow-hidden">
        
        {/* Ambient Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px] animate-pulse-slow" />
          <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-rose-200/40 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </div>

        {/* Decorative Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#0b1b3d 1px, transparent 1px), linear-gradient(90deg, #0b1b3d 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-shell relative z-10 py-12 lg:py-20">
          
          {/* Elegant Hero Header */}
          <div className="relative mx-auto max-w-4xl text-center mb-16">
            
            {/* Floating Legal Icon */}
            <div className="relative inline-block animate-float">
              <div className="absolute inset-0 rounded-3xl bg-[#bf2629]/20 blur-xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#bf2629] to-[#7f1114] text-white shadow-xl shadow-[#bf2629]/30 border border-white/20">
                <Scale size={28} />
              </div>
            </div>

            {/* Sparkle decoration */}
            <div className="absolute top-0 right-1/4 text-amber-400 animate-pulse hidden sm:block">
              <Sparkles size={20} />
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl bg-clip-text">
              {title}
            </h1>
            
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            {/* Last Updated Badge */}
            <div className="mt-6 inline-flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-lg shadow-slate-200/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Last updated: <span className="text-slate-900">{lastUpdated}</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            
            {/* Premium Sidebar Navigation */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-24">
                
                {/* Nav Card */}
                <div className="relative rounded-[2rem] bg-white/70 backdrop-blur-xl p-3 shadow-xl shadow-slate-200/50 border border-white/60">
                  
                  <div className="flex items-center gap-2 px-4 py-3 mb-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#bf2629]" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Legal Center
                    </p>
                  </div>

                  <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto hide-scrollbar">
                    {legalLinks.map(({ href, label, icon: Icon }) => {
                      const isActive = activePath === href;
                      return (
                        <Link
                          key={href}
                          href={href}
                          className={`group relative flex items-center gap-3 whitespace-nowrap rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-[#bf2629] to-[#a62023] text-white shadow-lg shadow-[#bf2629]/30"
                              : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                          }`}
                        >
                          {/* Active indicator dot */}
                          {isActive && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-white/60 hidden lg:block" />
                          )}
                          
                          <Icon 
                            size={16} 
                            className={`transition-transform group-hover:scale-110 ${
                              isActive ? "text-white" : "text-slate-400 group-hover:text-[#bf2629]"
                            }`} 
                          />
                          {label}
                          
                          {isActive && (
                            <ChevronRight size={14} className="ml-auto hidden lg:block opacity-60" />
                          )}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Trust Badge Below Sidebar */}
                <div className="hidden lg:flex items-center gap-3 mt-4 px-4 text-xs text-slate-400">
                  <Shield size={14} />
                  <span>Trusted & Transparent</span>
                </div>
              </div>
            </aside>

            {/* Content Article */}
            <div className="flex-1 min-w-0">
              <article className="relative rounded-[2rem] bg-white/90 backdrop-blur-xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-white/60">
                
                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-[#bf2629]/5 to-transparent rounded-tr-[2rem] pointer-events-none" />
                <div className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-bl-[2rem] pointer-events-none" />

                {/* Prose Content */}
                <div className="tracking-wide leading-relaxed space-y-5 prose prose-slate max-w-none text-slate-700 [&>h2]:scroll-mt-32 [&>h3]:scroll-mt-32 [&>h4]:scroll-mt-32">
                  {children}
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    © {new Date().getFullYear()} LoPrice.com — All rights reserved.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Shield size={12} />
                    Secure & Encrypted Document
                  </div>
                </div>
              </article>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}