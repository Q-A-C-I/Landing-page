"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { CalendarDays } from "lucide-react"

export function TicketHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="mudcloth-pattern absolute inset-0 opacity-30" />
      <SectionWrapper className="relative pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-sm tracking-widest text-gold uppercase">
            Attend QACI 2026
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] text-cream">
            <span className="text-balance">
              Experience QACI Live. August 15-17, 2026.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-warm-beige/80">
            Witness 54 nations compete. Shop 200+ African brands. Connect with
            innovators.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5">
            <CalendarDays className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-gold">
              Ticket sales open June 1, 2026
            </span>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
