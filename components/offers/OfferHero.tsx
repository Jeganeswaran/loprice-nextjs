import Image from 'next/image'
import { Gift, Sparkles, ArrowRight, Bus } from 'lucide-react'
import Link from 'next/link'

interface OfferHeroProps {
  title?: string
  subtitle?: string
  highlight?: string
  backgroundImage?: string
}

export default function OfferHero({
  title = 'Save more on every journey.',
  subtitle = 'Discover introductory, payment and route-based promotions in one clean place.',
  highlight = 'LoPrice offers',
  backgroundImage = '/images/bus-hero.png',
}: OfferHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image layer */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-75"
        aria-hidden="true"
      />

      {/* Gradient overlay — darkens left, keeps right cinematic */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
      />

      {/* Secondary bottom fade for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 "
      />

      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 "
      />

      {/* Content */}
      <div className="container-shell relative py-8">
        <div className="max-w-2xl">

          {/* Headline */}
          <h1 className="mt-2 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {title.split(' ').map((word, i) =>
              word.toLowerCase() === 'journey.' ? (
                <span key={i} className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-rose-200 via-white to-rose-200 bg-clip-text text-transparent">
                    {word}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[#bf2629]/50 blur-sm"
                  />
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>


          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-neutral-900 shadow-lg shadow-black/20 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Browse buses
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm outline-none transition-all duration-200 hover:border-white/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Talk to support
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom edge accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </section>
  )
}