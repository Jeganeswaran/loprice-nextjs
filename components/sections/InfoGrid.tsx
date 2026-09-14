import React from 'react'
import { BusFront, TicketCheck, WalletCards, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function InfoGrid(){
  const items = [
    [BusFront,'Bus booking','Private, RTC, AC, non-AC, sleeper and seater options.'],
    [TicketCheck,'Track ticket','Keep booking and trip details in one place.'],
    [WalletCards,'Payments','Design ready for UPI, cards and net banking.'],
    [Smartphone,'Mobile first','Responsive interactions designed for one-handed use.'],
  ] as any

  return (
    <section className="bg-white/80 py-12 sm:py-16">
      <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center">
        <div><span className="text-xs font-bold uppercase tracking-[.2em] text-[#bf2629]">Book bus tickets at LoPrice</span><h2 className="mt-2 section-title">Online bus booking, without the clutter.</h2><p className="section-copy">Search routes, compare departure times, fares, ratings and bus types, then continue to seat selection. Long-form SEO content can live below the transactional sections so it does not block booking.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/search?from=Chennai&to=Bangalore" className="btn-primary">Search buses</Link><Link href="/help" className="btn-secondary">How booking works</Link></div></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(([Icon,title,copy]:any)=>(
            <div className="rounded-2xl border border-neutral-100 bg-[#f7f8fa] p-5" key={title}><Icon className="text-[#bf2629]"/><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{copy}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
