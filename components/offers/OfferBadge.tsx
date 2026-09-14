
import type { ReactNode } from 'react'

type Variant = 'intro' | 'payment' | 'route' | 'default'

const variants: Record<Variant, string> = {
  intro: 'bg-rose-50 text-rose-700 ring-rose-200/70',
  payment: 'bg-amber-50 text-amber-700 ring-amber-200/70',
  route: 'bg-sky-50 text-sky-700 ring-sky-200/70',
  default: 'bg-neutral-100 text-neutral-700 ring-neutral-200',
}

interface OfferBadgeProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

export default function OfferBadge({
  children,
  variant = 'default',
  className = '',
}: OfferBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ring-1 ring-inset ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}