"use client"

import { cn } from "@/lib/utils"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  pattern?: "kente" | "mudcloth" | "none"
}

export function SectionWrapper({
  children,
  className,
  id,
  pattern = "none",
}: SectionWrapperProps) {
  const { ref, isVisible } = useAnimateOnScroll(0.1)

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "px-3 py-10 sm:px-4 sm:py-12 lg:px-8 lg:py-24",
        pattern === "kente" && "kente-pattern",
        pattern === "mudcloth" && "mudcloth-pattern",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl transition-all duration-700",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        {children}
      </div>
    </section>
  )
}
