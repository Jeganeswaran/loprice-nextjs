import Link from 'next/link'
import { Home, TicketCheck, Gift, UserRound } from 'lucide-react'

export default function BottomNav(){
  return <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white px-2 py-2 lg:hidden">
    <div className="mx-auto grid max-w-md grid-cols-4">
      {[
        ['/', 'Home', Home], ['/bookings','Trips',TicketCheck], ['/offers','Offers',Gift], ['/login','Account',UserRound]
      ].map(([href,label,Icon]: any)=><Link key={href} href={href} className="flex flex-col items-center gap-1 py-1 text-[11px] font-semibold text-neutral-600"><Icon size={19}/>{label}</Link>)}
    </div>
  </nav>
}
