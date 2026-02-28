import type { Metadata } from "next"
import { ExhibitorHero } from "@/components/exhibitors/exhibitor-hero"
import { WhyExhibit } from "@/components/exhibitors/why-exhibit"
import { BoothPackages } from "@/components/exhibitors/booth-packages"
import { ExhibitorCategories } from "@/components/exhibitors/exhibitor-categories"
import { ApplicationProcess } from "@/components/exhibitors/application-process"
import { ExhibitorForm } from "@/components/exhibitors/exhibitor-form"

export const metadata: Metadata = {
  title: "Become an Exhibitor | QACI - Africa's Premier Trade Exhibition",
  description:
    "Reserve your booth at QACI 2026. Access 6,500+ buyers and investors across 54 African markets. Booths from N1.5M. Limited to 200 exhibitors.",
}

export default function ExhibitorsPage() {
  return (
    <>
      <ExhibitorHero />
      <WhyExhibit />
      <BoothPackages />
      <ExhibitorCategories />
      <ApplicationProcess />
      <ExhibitorForm />
    </>
  )
}
