import React from 'react'
import { Search, Star, BusFront, WalletCards, TicketCheck } from 'lucide-react'

export default function BookingSteps(){
  const steps = [[Search,'Search','Choose from, to and date'],[Star,'Compare','Check fare, time and rating'],[BusFront,'Select','Pick a bus and seat'],[WalletCards,'Pay','Complete secure checkout'],[TicketCheck,'Travel','Get ticket and trip details']]
  return (
    <section className="container-shell pb-12 sm:pb-16">
      <div><h2 className="section-title">How to book bus tickets online</h2><p className="section-copy">Five clear steps from journey search to confirmed ticket.</p></div>
      <div className="mt-6 grid gap-4 md:grid-cols-5">
        {steps.map(([Icon,title,copy]:any,i)=><div key={title} className="card p-5"><div className="flex items-center justify-between"><span className="text-xs font-black text-neutral-300">0{i+1}</span><Icon size={21} className="text-[#bf2629]"/></div><h3 className="mt-8 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{copy}</p></div>)}
      </div>
    </section>
  )
}
