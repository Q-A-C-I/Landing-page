"use client"

import { SectionWrapper } from "@/components/section-wrapper"

const categories = [
  { name: "Fashion & Textiles", pct: "40%" },
  { name: "Food & Beverage", pct: "20%" },
  { name: "Arts, Crafts & Home Goods", pct: "15%" },
  { name: "Beauty & Personal Care", pct: "15%" },
  { name: "Technology & Innovation", pct: "10%" },
]

export function ExhibitorCategories() {
  return (
    <SectionWrapper className="bg-background">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 font-display text-sm tracking-widest text-deep-orange uppercase">
          Categories
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-charcoal">
          Who Should Exhibit?
        </h2>
      </div>

      <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex items-center justify-between rounded-2xl border border-border bg-cream px-6 py-4 transition-all hover:border-gold hover:shadow-md"
          >
            <span className="font-serif text-lg font-bold text-charcoal">
              {cat.name}
            </span>
            <span className="rounded-lg bg-gold/10 px-3 py-1 font-display text-sm tracking-wider text-gold">
              {cat.pct}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
