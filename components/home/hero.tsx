"use client"

import Link from "next/link"
import Image from "next/image"

const stats = [
  "200+ Exhibitors",
  "N1.2B+ in Trade",
  "54 Countries",
  "15M+ Viewers",
]

export function Hero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden lg:min-h-[80vh]">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Vibrant African fashion show with dramatic lighting and diverse models on the runway"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Kente overlay */}
      <div className="kente-pattern absolute inset-0" />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-xl sm:max-w-3xl lg:max-w-7xl flex-col gap-4 px-3 py-14 pt-24 sm:gap-8 sm:px-4 sm:py-20 sm:pt-36 lg:px-8 lg:py-36 lg:pt-56">
        <h1 className="max-w-4xl font-serif text-[clamp(1.5rem,4vw,3rem)] font-black leading-tight text-cream">
          <span className="text-balance text-black block mt-2 sm:mt-6 break-words">
            Where African Creativity Meets Global Capital
          </span>
        </h1>

        <p className="max-w-2xl text-[clamp(0.9rem,2vw,1.15rem)] leading-relaxed text-warm-beige/90 break-words">
          The premier platform connecting 54 African nations through culture,
          commerce, and innovation
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-12 sm:mb-16 lg:mb-24">
          <Link
            href="/exhibitors"
            className="inline-flex max-w-full items-center justify-center rounded-lg bg-gold px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-charcoal transition-transform hover:scale-105 hover:rotate-1 w-full sm:w-auto"
          >
            Apply as Exhibitor
          </Link>
          <Link
            href="/apply"
            className="inline-flex max-w-full items-center justify-center rounded-lg border-2 border-cream/40 bg-cream/10 px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-black backdrop-blur-sm transition-all hover:border-gold hover:bg-gold/20 hover:text-black w-full sm:w-auto"
          >
            Become a Contestant
          </Link>
        </div>

        {/* Stats ticker */}
        <div className="mt-6 sm:mt-8 overflow-hidden rounded-none sm:rounded-xl border border-cream/10 bg-charcoal/40 py-2 sm:py-3 backdrop-blur-sm -mx-4 sm:mx-0">
          <div className="animate-ticker flex w-max gap-8 sm:gap-12 whitespace-nowrap px-4 sm:px-6">
            {[...stats, ...stats].map((stat, i) => (
              <span
                key={i}
                className="flex items-center gap-2 font-display text-base sm:text-lg tracking-wider text-gold"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
