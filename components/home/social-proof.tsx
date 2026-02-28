"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "QACI isn't just an event\u2014it's the marketplace where we connected with buyers who tripled our export orders.",
    author: "Amina Okafor",
    title: "Founder, AfroThreads Fashion",
  },
  {
    quote:
      "As a sponsor, we got unmatched visibility across 54 African markets. The ROI was immediate.",
    author: "Chidi Nwankwo",
    title: "Head of Brand, MTN Nigeria",
  },
  {
    quote:
      "QACI gave my fashion label the global exposure I'd been chasing for years. Three distributors approached us on Day 1.",
    author: "Fatou Diallo",
    title: "Creative Director, Dakar Designs",
  },
]

const partnerLogos = [
  "GTBank",
  "MTN",
  "UBA",
  "Access Bank",
  "Dangote",
  "Airtel",
]

export function SocialProof() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <SectionWrapper className="bg-warm-beige" pattern="kente">
      <div className="text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          Trusted Partners
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          {"Trusted by Africa's Leading Brands"}
        </h2>
      </div>

      {/* Logo grid */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
        {partnerLogos.map((logo) => (
          <div
            key={logo}
            className="group flex h-16 w-32 items-center justify-center rounded-xl bg-cream px-4 py-3 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          >
            <span className="font-serif text-lg font-bold text-charcoal/60 transition-colors group-hover:text-gold">
              {logo}
            </span>
          </div>
        ))}
      </div>

      {/* Testimonial Carousel */}
      <div className="mx-auto mt-16 max-w-2xl">
        <div className="relative rounded-2xl border border-gold/20 bg-cream p-8 lg:p-10">
          <div className="absolute -left-3 top-0 bottom-0 w-1 rounded-full bg-gold" />
          <Quote className="mb-4 h-8 w-8 text-gold/40" />
          <blockquote className="font-serif text-xl font-medium leading-relaxed text-charcoal lg:text-2xl">
            {`"${testimonials[current].quote}"`}
          </blockquote>
          <div className="mt-6">
            <p className="font-semibold text-charcoal">
              {testimonials[current].author}
            </p>
            <p className="text-sm text-muted-foreground">
              {testimonials[current].title}
            </p>
          </div>
        </div>

        {/* Nav arrows */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-charcoal"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === current ? "w-8 bg-gold" : "w-2 bg-gold/30"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-charcoal"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  )
}
