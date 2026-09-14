import { offers } from '@/lib/data'
import OfferHero from '@/components/offers/OfferHero'
import OfferGrid from '@/components/offers/OfferGrid'

export const metadata = {
  title: 'Offers & Promotions | LoPrice.com',
  description:
    'Discover introductory, payment, and route-based bus ticket promotions on LoPrice.com.',
}

/**
 * Map raw offers from `lib/data` to the UI shape.
 * `variant` and `expiry` are inferred from the title so the existing data
 * works without modification. When the data source adds explicit fields,
 * prefer those over inference.
 */
function normalizeOffers(raw: typeof offers) {
  return [...raw, ...raw.slice(0, 2)].map((o, i) => {
    const t = o.title.toLowerCase()
    const variant =
      t.includes('intro') || t.includes('new')
        ? 'intro'
        : t.includes('pay') || t.includes('upi') || t.includes('card')
        ? 'payment'
        : t.includes('route') || t.includes('city')
        ? 'route'
        : 'default'

    return {
      title: o.title,
      value: o.value,
      desc: o.desc,
      code: o.code,
      variant: variant as 'intro' | 'payment' | 'route' | 'default',
      // Fallback expiry — replace with real data when available
      expiry: i % 2 === 0 ? 'Ends soon' : 'Limited time',
    }
  })
}

export default function OffersPage() {
  const normalized = normalizeOffers(offers)

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <OfferHero />

      <section className="container-shell py-12">
        {/* Section header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-neutral-900 sm:text-2xl">
              Active offers
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              {normalized.length} promotions available right now
            </p>
          </div>
          <span className="hidden text-xs font-semibold uppercase tracking-wider text-neutral-400 sm:block">
            Updated weekly
          </span>
        </div>

        <OfferGrid offers={normalized} />
      </section>
    </main>
  )
}