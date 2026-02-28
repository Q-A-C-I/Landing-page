import type { Metadata, Viewport } from "next"
import { Work_Sans, Playfair_Display, Bebas_Neue } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ClientProviders } from "@/components/client-providers"

import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

export const metadata: Metadata = {
  title: "QACI - Queen of African Culture & Innovation | Pan-African Trade & Cultural Platform",
  description:
    "Africa's premier platform connecting 54 nations through culture, commerce, and innovation. 200+ exhibitors, N50M in prizes. August 15-17, 2026, Lagos.",
  keywords:
    "African culture, trade fair Lagos, African fashion, pan-African business, cultural showcase, African innovation, exhibitor opportunities Nigeria",
  openGraph: {
    title: "QACI - Queen of African Culture & Innovation",
    description:
      "Africa's premier platform connecting 54 nations through culture, commerce, and innovation. August 15-17, 2026, Lagos.",
    url: "https://qaci.africa",
    siteName: "QACI Africa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QACI - Queen of African Culture & Innovation",
    description:
      "Africa's premier platform connecting 54 nations through culture, commerce, and innovation.",
  },
}

export const viewport: Viewport = {
  themeColor: "#BF8F00",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${workSans.variable} ${playfair.variable} ${bebas.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased">
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
