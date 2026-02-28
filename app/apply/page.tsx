import type { Metadata } from "next"
import { ContestantHero } from "@/components/contestants/contestant-hero"
import { PrizeBreakdown } from "@/components/contestants/prize-breakdown"
import { CompetitionRounds } from "@/components/contestants/competition-rounds"
import { Eligibility } from "@/components/contestants/eligibility"
import { SelectionProcess } from "@/components/contestants/selection-process"
import { WhatWeProvide } from "@/components/contestants/what-we-provide"
import { ContestantForm } from "@/components/contestants/contestant-form"

export const metadata: Metadata = {
  title: "Apply as Contestant | QACI - Represent Your Country, Win N10 Million",
  description:
    "QACI seeks 54 representatives (ages 18-35) who embody African creativity, innovation, and cultural pride. N42M total prize pool. Apply by May 31, 2026.",
}

export default function ApplyPage() {
  return (
    <>
      <ContestantHero />
      <PrizeBreakdown />
      <CompetitionRounds />
      <Eligibility />
      <SelectionProcess />
      <WhatWeProvide />
      <ContestantForm />
    </>
  )
}
