import React from 'react'
import Link from 'next/link'
import { Clock3 } from 'lucide-react'

export default function CTASection(){
  return (
    <section className="container-shell pb-12 sm:pb-16">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#bf2629] to-[#8d171a] p-7 text-white sm:p-9">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><div className="flex items-center gap-2 text-sm font-bold text-rose-100"><Clock3 size={18}/> Last hour ticket booking</div><h2 className="mt-2 text-3xl font-black">Need to travel today?</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-rose-50/85 sm:text-base">Use a dedicated shortcut to find buses departing soon, then sort by departure time or price.</p></div>
          <Link href="/search?from=Chennai&to=Bangalore&today=1" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-bold text-[#bf2629]">Find buses leaving soon</Link>
        </div>
      </div>
    </section>
  )
}
