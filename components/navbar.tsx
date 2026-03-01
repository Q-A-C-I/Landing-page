"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Exhibitors", href: "/exhibitors" },
  { label: "Apply", href: "/apply", highlight: true },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Tickets", href: "/tickets" }
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-gold lg:text-3xl">
            QACI
          </span>
          <span className="sr-only">Queen of African Culture & Innovation</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative px-4 py-2 text-sm font-medium transition-colors",
                link.highlight
                  ? "text-gold"
                  : scrolled
                    ? "text-charcoal hover:text-gold"
                    : "text-cream hover:text-gold"
              )}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:left-1/4 group-hover:w-1/2" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/exhibitors#form"
          className="hidden rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal transition-transform hover:scale-105 hover:rotate-1 lg:inline-block"
        >
          Reserve Booth
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn("rounded-lg p-2 lg:hidden", scrolled ? "text-charcoal" : "text-cream")}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-cream lg:hidden">
          <div className="flex flex-col gap-2 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                  link.highlight
                    ? "bg-gold/10 text-gold"
                    : "text-charcoal hover:bg-gold/5 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/exhibitors#form"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-lg bg-gold px-5 py-3 text-center text-lg font-semibold text-charcoal transition-transform"
            >
              Reserve Booth
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
