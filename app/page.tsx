import { Hero } from "@/components/home/hero"
import { ValueProposition } from "@/components/home/value-proposition"
import { EventDetails } from "@/components/home/event-details"
import { ExhibitorCTA } from "@/components/home/exhibitor-cta"
import { ContestantInfo } from "@/components/home/contestant-info"
import { SponsorOpportunities } from "@/components/home/sponsor-opportunities"
import { SocialProof } from "@/components/home/social-proof"
import { CTAFooter } from "@/components/home/cta-footer"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <EventDetails />
      <ExhibitorCTA />
      <ContestantInfo />
      <SponsorOpportunities />
      <SocialProof />
      <CTAFooter />
    </>
  )
}
