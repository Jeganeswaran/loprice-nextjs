import React from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function BenefitsGrid(){
  const items = ['Compare multiple buses','Choose your seat','Check amenities','Digital ticket','Easy support','Boarding details','Fare comparison','Secure payments','Trip history','Booking status']
  return (
    <section className="container-shell pb-12 sm:pb-16">
      <div className="rounded-3xl bg-white p-6 sm:p-8"><h2 className="section-title">Benefits of booking bus tickets online</h2><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{items.map(x=><div key={x} className="flex items-center gap-2 rounded-xl bg-neutral-50 px-3 py-3 text-sm font-semibold"><CheckCircle2 size={17} className="text-green-600"/>{x}</div>)}</div></div>
    </section>
  )
}
