import OfferCard from './OfferCard'

interface OfferGridProps {
  offers: Array<{
    title: string
    value: string
    desc: string
    code: string
    variant?: 'intro' | 'payment' | 'route' | 'default'
    expiry?: string
  }>
}

export default function OfferGrid({ offers }: OfferGridProps) {
  if (!offers.length) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-300 bg-white/60 p-12 text-center">
        <p className="text-sm text-neutral-500">
          No offers available right now. Check back soon.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {offers.map((offer, i) => (
        <OfferCard key={`${offer.code}-${i}`} offer={offer} index={i} />
      ))}
    </div>
  )
}