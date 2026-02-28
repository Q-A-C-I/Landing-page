"use client"

import Link from "next/link"
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from "lucide-react"

const footerColumns = [
  {
    title: "QACI",
    links: [
      { label: "About", url: "/about" },
      { label: "Mission & Values", url: "/about#mission" },
      { label: "Team", url: "/about#team" },
      { label: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Become an Exhibitor", url: "/exhibitors" },
      { label: "Apply as Contestant", url: "/apply" },
      { label: "Sponsor QACI", url: "/sponsors" },
      { label: "Buy Tickets", url: "/tickets" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", url: "/faq" },
      { label: "Press Kit", url: "/press" },
      { label: "Careers", url: "/careers" },
      { label: "Blog", url: "/blog" },
    ],
  },
]

const socialLinks = [
  { platform: "Instagram", url: "https://instagram.com/qaciafrica", Icon: Instagram },
  { platform: "Twitter/X", url: "https://twitter.com/qaciafrica", Icon: Twitter },
  { platform: "LinkedIn", url: "https://linkedin.com/company/qaciafrica", Icon: Linkedin },
  { platform: "Facebook", url: "https://facebook.com/qaciafrica", Icon: Facebook },
  { platform: "YouTube", url: "https://youtube.com/@qaciafrica", Icon: Youtube },
]

export function Footer() {
  return (
    <footer className="mudcloth-pattern bg-charcoal text-warm-beige">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {/* Column links */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 sm:mb-4 font-serif text-base sm:text-lg font-bold text-gold">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {col.links.map((link) => (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      className="text-xs sm:text-sm text-warm-beige/70 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect + Newsletter */}
          <div>
            <h3 className="mb-3 sm:mb-4 font-serif text-base sm:text-lg font-bold text-gold">
              Connect
            </h3>
            <div className="mb-5 sm:mb-6 flex gap-2 sm:gap-3">
              {socialLinks.map(({ platform, url, Icon }) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-warm-beige/10 text-warm-beige transition-colors hover:bg-gold hover:text-charcoal"
                  aria-label={`Follow us on ${platform}`}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            {/* Newsletter Signup */}
            <p className="mb-2 text-xs sm:text-sm font-semibold text-warm-beige">
              Stay Updated
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-warm-beige/20 bg-warm-beige/5 px-3 py-2 text-xs sm:text-sm text-warm-beige placeholder:text-warm-beige/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-lg bg-gold px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-charcoal transition-transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 h-px bg-warm-beige/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs text-warm-beige/50 md:flex-row">
          <p>
            {"© 2026 Urban Afrique Innovations Ltd. All rights reserved."}
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
