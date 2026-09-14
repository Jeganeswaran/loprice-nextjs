import FAQ from '@/components/FAQ'
import HomeHero from '@/components/sections/HomeHero'
import OffersGrid from '@/components/sections/OffersGrid'
import WhyLoPrice from '@/components/sections/WhyLoPrice'
import RoutesGrid from '@/components/sections/RoutesGrid'
import InfoGrid from '@/components/sections/InfoGrid'
import PromisePriceDrop from '@/components/sections/PromisePriceDrop'
import BenefitsGrid from '@/components/sections/BenefitsGrid'
import BookingSteps from '@/components/sections/BookingSteps'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHero />
      <OffersGrid />
      <WhyLoPrice />
      <RoutesGrid />
      <InfoGrid />
      <PromisePriceDrop />
      <BenefitsGrid />
      <BookingSteps />
      <CTASection />
      <section className="container-shell pb-12 sm:pb-16">
        <div><h2 className="section-title">Online bus booking FAQs</h2><p className="section-copy">Categorised answers keep support content discoverable without turning the home page into a wall of text.</p></div>
        <div className="mt-6"><FAQ /></div>
      </section>

    </main>
  )
}
