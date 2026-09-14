import Link from 'next/link'
import { ArrowRight, Ticket, Sparkles, Clock } from 'lucide-react'
import CopyCodeButton from './CopyCodeButton'
import OfferBadge from './OfferBadge'

type Variant = 'intro' | 'payment' | 'route' | 'default'

interface Offer {
  title: string
  value: string
  desc: string
  code: string
  variant?: Variant
  expiry?: string
}

interface OfferCardProps {
  offer: Offer
  index?: number
}

export default function OfferCard({ offer, index = 0 }: OfferCardProps) {
  const { title, value, desc, code, variant = 'default', expiry } = offer

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#bf2629]/30 hover:shadow-lg hover:shadow-red-900/5"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Top-right decorative ribbon */}
      <span
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-[#bf2629]/8 to-[#8f171a]/4 transition-transform duration-500 group-hover:scale-125"
      />

      {/* Header: badge + expiry */}
      <header className="relative flex items-center justify-between">
        <OfferBadge variant={variant}>
          <Sparkles size={10} strokeWidth={2.75} />
          {title}
        </OfferBadge>
        {expiry && (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-neutral-400">
            <Clock size={10} strokeWidth={2.5} />
            {expiry}
          </span>
        )}
      </header>

      {/* Value */}
      <div className="relative mt-4">
        <div className="text-4xl font-black leading-none tracking-tight text-neutral-900">
          {value}
        </div>
        <div className="mt-1 h-1 w-10 rounded-full bg-[#bf2629]" />
      </div>

      {/* Description */}
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-neutral-500">
        {desc}
      </p>

      {/* Ticket-shaped divider */}
      <div className="relative mt-5 flex items-center gap-2" aria-hidden="true">
        <span className="h-px flex-1 bg-neutral-100" />
        <Ticket size={12} className="text-neutral-300" />
        <span className="h-px flex-1 bg-neutral-100" />
      </div>

      {/* Footer: code + CTA */}
      <footer className="relative mt-5 flex items-center justify-between gap-3">
        <CopyCodeButton code={code} />
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-bold text-[#bf2629] outline-none transition-all duration-200 hover:gap-2 focus-visible:ring-2 focus-visible:ring-[#bf2629] focus-visible:ring-offset-2"
        >
          Book now
          <ArrowRight size={15} strokeWidth={2.5} />
        </Link>
      </footer>
    </article>
  )
}