import React from 'react'
import { offers as defaultOffers } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function OffersGrid({offers}:{offers?:any[]}){
  const list = offers ?? defaultOffers
  return (
    <section className="container-shell py-10 sm:py-14">
      <div className="flex items-end justify-between gap-4">
        <div><h2 className="section-title font-medium">Bus booking discount offers</h2><p className="section-copy">Useful offers without overwhelming the booking flow.</p></div>
        <Link href="/offers" className="hidden items-center gap-1 text-sm font-semibold text-[#bf2629] sm:flex">View all <ArrowRight size={16}/></Link>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((o:any)=>(
          <div key={o.code} className="card relative overflow-hidden p-5">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#bf2629]/8"/>
            <div className="text-xs font-bold uppercase tracking-wider text-[#bf2629]">{o.title}</div>
            <div className="mt-2 text-2xl font-black">{o.value}</div>
            <p className="mt-2 text-sm leading-6 text-neutral-500">{o.desc}</p>
            <div className="mt-5 flex items-center justify-between"><span className="rounded-lg bg-neutral-100 px-2.5 py-1.5 font-mono text-xs font-bold">{o.code}</span><span className="text-xs font-semibold text-neutral-400">T&C apply</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}
