import type { Metadata } from "next"
import { SponsorHero } from "@/components/sponsors/sponsor-hero"
import { SponsorBenefits } from "@/components/sponsors/sponsor-benefits"
import { SponsorTiers } from "@/components/sponsors/sponsor-tiers"
import { TargetSponsors } from "@/components/sponsors/target-sponsors"
import { SponsorContactForm } from "@/components/sponsors/sponsor-contact-form"

export const metadata: Metadata = {
  title: "Sponsor QACI | Align Your Brand with African Excellence",
  description:
    "QACI delivers 15M+ impressions across TV, streaming, and social media. Sponsorship packages from N10M to N100M. Reach Africa's most dynamic consumers.",
}

export default function SponsorsPage() {
  return (
    <>
      <SponsorHero />
      <SponsorBenefits />
      <SponsorTiers />
      <TargetSponsors />
      <SponsorContactForm />
    </>
  )
}
