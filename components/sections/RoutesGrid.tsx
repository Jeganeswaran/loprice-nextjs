import React from 'react'
import Link from 'next/link'
import { routes as defaultRoutes } from '@/lib/data'

export default function RoutesGrid({routes}:{routes?:any[]}){
  const list = routes ?? defaultRoutes
  return (
    <section className="container-shell pb-12 sm:pb-16">
      <div><h2 className="section-title">Popular bus routes</h2><p className="section-copy">Fast shortcuts for routes customers commonly search.</p></div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((r:any)=>(
          <Link href={`/search?from=${r.from}&to=${r.to}`} key={`${r.from}-${r.to}`} className="card group p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4"><div><div className="text-sm text-neutral-400">{r.from}</div><div className="my-1 text-xl font-black">→ {r.to}</div><div className="mt-3 flex items-center gap-4 text-xs text-neutral-500"><span>{r.time}</span><span>{r.buses}+ buses</span></div></div><div className="text-right"><div className="text-xs text-neutral-400">From</div><div className="text-2xl font-black text-[#bf2629]">₹{r.fare}</div></div></div>
            <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-sm font-semibold"><span>View buses</span></div>
          </Link>
        ))}
      </div>
    </section>
  )
}
