import type { Metadata } from "next"
import { MissionSection } from "@/components/about/mission-section"
import { FounderProfile } from "@/components/about/founder-profile"
import { TeamSection } from "@/components/about/team-section"
import { OurStory } from "@/components/about/our-story"

export const metadata: Metadata = {
  title: "About QACI - Building Infrastructure for Africa's Creative Economy",
  description:
    "Learn about QACI's mission to connect African creators and entrepreneurs with global markets, capital, and visibility through our annual flagship event.",
}

export default function AboutPage() {
  return (
    <>
      <MissionSection />
      <FounderProfile />
      <TeamSection />
      <OurStory />
    </>
  )
}
