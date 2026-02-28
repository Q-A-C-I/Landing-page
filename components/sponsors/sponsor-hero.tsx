"use client"

import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"

export function SponsorHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="kente-pattern absolute inset-0 opacity-20" />
      <SectionWrapper className="relative pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-sm tracking-widest text-gold uppercase">
            Partnership Opportunities
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] text-cream">
            <span className="text-balance">
              Align Your Brand with African Excellence
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-warm-beige/80">
            QACI delivers 15M+ impressions across TV, streaming, and social
            media. Reach Africa{"'"}s most dynamic consumers and entrepreneurs.
          </p>
          <Link
            href="#sponsor-form"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-base font-bold text-charcoal transition-transform hover:scale-105 hover:rotate-1"
          >
            Download Sponsorship Deck
          </Link>
        </div>
      </SectionWrapper>
    </section>
  )
}
