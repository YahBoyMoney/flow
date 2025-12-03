import type React from "react"
import "@/app/globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import type { Metadata, Viewport } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://flowerdept.com"),
  title: {
    default: "Flower Dept | #1 Cannabis Delivery San Bernardino, Rialto, Fontana | Call (763) 344-1778",
    template: "%s | Flower Dept Cannabis Delivery",
  },
  description:
    "San Bernardino County's top-rated cannabis delivery service. Premium flower, edibles & concentrates delivered in 30 mins to San Bernardino, Rialto, Fontana, Colton & Highland. Daily specials from $5/g. Licensed, lab-tested, discreet. Call (763) 344-1778 now!",
  keywords: [
    // Primary keywords
    "cannabis delivery San Bernardino",
    "weed delivery San Bernardino",
    "marijuana delivery San Bernardino",
    "dispensary delivery San Bernardino",
    // City-specific keywords
    "cannabis delivery Rialto",
    "weed delivery Rialto",
    "marijuana delivery Rialto CA",
    "cannabis delivery Fontana",
    "weed delivery Fontana",
    "marijuana delivery Fontana CA",
    "cannabis delivery Colton",
    "weed delivery Colton CA",
    "cannabis delivery Highland CA",
    "weed delivery Highland",
    // Service keywords
    "24 hour cannabis delivery",
    "same day weed delivery",
    "fast marijuana delivery near me",
    "licensed cannabis delivery California",
    "premium cannabis delivery",
    "cheap weed delivery San Bernardino",
    "best dispensary delivery near me",
    // Product keywords
    "flower delivery San Bernardino",
    "edibles delivery Fontana",
    "concentrates delivery Rialto",
    // Brand
    "Flower Dept",
    "Flower Dept San Bernardino",
    "flowerdeptsb",
  ],
  authors: [{ name: "Flower Dept" }],
  creator: "Flower Dept",
  publisher: "Flower Dept",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  openGraph: {
    title: "Flower Dept | #1 Cannabis Delivery in San Bernardino County",
    description:
      "Premium cannabis delivered in 30 mins. Daily specials from $5/g. Serving San Bernardino, Rialto, Fontana, Colton & Highland. Call (763) 344-1778!",
    type: "website",
    locale: "en_US",
    siteName: "Flower Dept",
    url: "https://flowerdept.com",
    images: [
      {
        url: "/images/flower-dept-logo.png",
        width: 1200,
        height: 630,
        alt: "Flower Dept - Premium Cannabis Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower Dept | Cannabis Delivery San Bernardino County",
    description: "Premium cannabis delivered fast. Daily specials from $5/g. Call (763) 344-1778",
    images: ["/images/flower-dept-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://flowerdept.com",
  },
  category: "Cannabis Delivery",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://flowerdept.com",
              name: "Flower Dept",
              description:
                "Premium cannabis delivery service in San Bernardino County. Fast, discreet delivery of lab-tested cannabis products.",
              url: "https://flowerdept.com",
              telephone: "+1-763-344-1778",
              priceRange: "$$",
              image: "https://flowerdept.com/images/flower-dept-logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Bernardino",
                addressRegion: "CA",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "34.1083",
                longitude: "-117.2898",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "San Bernardino",
                  "@id": "https://en.wikipedia.org/wiki/San_Bernardino,_California",
                },
                { "@type": "City", name: "Rialto" },
                { "@type": "City", name: "Fontana" },
                { "@type": "City", name: "Colton" },
                { "@type": "City", name: "Highland" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: ["https://www.instagram.com/flowerdeptsb/"],
              potentialAction: {
                "@type": "OrderAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "tel:+17633441778",
                  actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
                },
                deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "500",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Daily Specials",
                itemListElement: [
                  { "@type": "Offer", name: "Monday - $5 Gram Madness", description: "Everything $5/g" },
                  { "@type": "Offer", name: "Tuesday - 7g Tuesday", description: "7g for $20" },
                  { "@type": "Offer", name: "Wednesday - Half Zip", description: "Half Ounce $50" },
                  { "@type": "Offer", name: "Thursday - Ten Sack", description: "10g for $50" },
                  { "@type": "Offer", name: "Friday - Fat O Friday", description: "Ounce $100" },
                  { "@type": "Offer", name: "Saturday - Top Shelf", description: "Premium Ounce $120" },
                  { "@type": "Offer", name: "Sunday - Sunday Stash", description: "7g for $20 OR Half O for $50" },
                ],
              },
            }),
          }}
        />
        {/* FAQ Schema for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What areas does Flower Dept deliver to?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Flower Dept delivers to San Bernardino, Rialto, Fontana, Colton, and Highland in San Bernardino County, California.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How fast is delivery from Flower Dept?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Average delivery time is 30 minutes or less. We offer 24/7 delivery service.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are Flower Dept's daily specials?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We have daily specials: Monday $5/g, Tuesday 7g for $20, Wednesday Half Oz $50, Thursday 10g for $50, Friday Oz $100, Saturday Premium Oz $120, Sunday choice of 7g/$20 or Half Oz/$50.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I order from Flower Dept?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Call us at (763) 344-1778 to place your order. First-time customers need to verify their ID by sending a photo of their ID and a selfie.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
