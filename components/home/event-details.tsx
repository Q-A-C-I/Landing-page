"use client"

import { useState } from "react"
import { MapPin, Calendar, ChevronDown } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { cn } from "@/lib/utils"

const days = [
  {
    day: "Day 1 - Friday",
    title: "Trade Fair Opening + Fashion Showcase",
    time: "10 AM - 10 PM",
    highlights:
      "Exhibitor booths open, 27 contestants fashion showcase",
  },
  {
    day: "Day 2 - Saturday",
    title: "Peak Trade Day + Talent Showcase",
    time: "10 AM - 11 PM",
    highlights:
      "Investment pitch stage, cultural performances, 27 contestants talent round",
  },
  {
    day: "Day 3 - Sunday",
    title: "Grand Finale + Awards",
    time: "12 PM - 10 PM",
    highlights:
      "Top 10 finalists compete, winner crowned, Best Exhibitor awards",
  },
]

export function EventDetails() {
  const [openDay, setOpenDay] = useState<number | null>(0)

  return (
    <SectionWrapper pattern="mudcloth" className="bg-warm-beige">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          Save The Date
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          August 15-17, 2026
        </h2>
        <div className="mt-3 flex flex-col items-center justify-center gap-3 text-muted-foreground sm:flex-row sm:gap-6">
          <span className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gold" />
            Eko Convention Centre, Lagos, Nigeria
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gold" />
            3-Day Event
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="relative border-l-2 border-gold/30 pl-8">
          {days.map((d, i) => (
            <div key={d.day} className="relative mb-8 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+5px)] flex h-3 w-3 items-center justify-center">
                <div className={cn(
                  "h-3 w-3 rounded-full border-2 border-gold transition-colors",
                  openDay === i ? "bg-gold" : "bg-cream"
                )} />
              </div>

              <button
                type="button"
                onClick={() => setOpenDay(openDay === i ? null : i)}
                className="flex w-full items-center justify-between rounded-2xl border border-border bg-cream p-5 text-left transition-all duration-300 hover:border-gold hover:shadow-md"
                aria-expanded={openDay === i}
              >
                <div>
                  <p className="font-display text-xs tracking-widest text-deep-orange uppercase">
                    {d.day}
                  </p>
                  <p className="mt-1 font-serif text-xl font-bold text-charcoal">
                    {d.title}
                  </p>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                    openDay === i && "rotate-180"
                  )}
                />
              </button>

              {openDay === i && (
                <div className="mt-3 rounded-xl bg-cream/60 p-5">
                  <p className="mb-1 text-sm font-semibold text-charcoal">
                    {d.time}
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    {d.highlights}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
