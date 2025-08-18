import type React from "react"
import "@/app/globals.css"
import { Montserrat, Open_Sans } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cannabis Delivery San Bernardino | Flower Dept - Same Day Weed Delivery Rialto, Fontana, Colton, Highland CA",
  description:
    "🌿 #1 Cannabis Delivery San Bernardino County! Premium weed delivery Rialto, Fontana, Colton, Highland. Same-day delivery 24/7. Top-shelf flowers, concentrates, edibles. Call (763) 344-1778 now! Licensed dispensary delivery service.",
  keywords: [
    "cannabis delivery San Bernardino",
    "weed delivery San Bernardino",
    "marijuana delivery San Bernardino",
    "cannabis delivery Rialto",
    "weed delivery Rialto",
    "marijuana delivery Rialto",
    "cannabis delivery Fontana",
    "weed delivery Fontana",
    "marijuana delivery Fontana",
    "cannabis delivery Colton",
    "weed delivery Colton",
    "marijuana delivery Colton",
    "cannabis delivery Highland",
    "weed delivery Highland",
    "marijuana delivery Highland",
    "cannabis delivery Inland Empire",
    "weed delivery Inland Empire",
    "San Bernardino dispensary delivery",
    "24/7 cannabis delivery",
    "same day weed delivery",
    "premium cannabis delivery",
    "medical marijuana delivery",
    "recreational cannabis delivery",
    "cannabis delivery near me",
    "weed delivery near me",
    "top shelf cannabis delivery",
    "fast cannabis delivery",
    "discreet weed delivery",
    "licensed cannabis delivery",
    "cannabis delivery service",
    "marijuana delivery service",
    "Flower Dept cannabis",
    "best cannabis delivery",
    "cheap weed delivery",
    "quality cannabis delivery",
  ],
  openGraph: {
    title: "🌿 Cannabis Delivery San Bernardino | Same Day Weed Delivery | Flower Dept",
    description:
      "Premium cannabis delivery in San Bernardino, Rialto, Fontana, Colton & Highland. Same-day delivery 24/7! Top-shelf flowers, concentrates & edibles. Call (763) 344-1778 now!",
    type: "website",
    locale: "en_US",
    siteName: "Flower Dept - Cannabis Delivery",
    url: "https://flowerdept.com",
    images: [
      {
        url: "/images/flower-dept-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flower Dept - Premium Cannabis Delivery San Bernardino County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🌿 Cannabis Delivery San Bernardino | Same Day Delivery | Flower Dept",
    description: "Premium cannabis delivery San Bernardino County. Same-day delivery 24/7! Call (763) 344-1778",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://flowerdept.com",
  },
  verification: {
    google: "your-google-verification-code-here",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Flower Dept",
              alternateName: "Flower Dept Cannabis Delivery",
              description:
                "Premium cannabis delivery service in San Bernardino County offering same-day delivery of top-shelf flowers, concentrates, and edibles",
              url: "https://flowerdept.com",
              telephone: "(763) 344-1778",
              priceRange: "$$",
              image: "https://flowerdept.com/images/flower-dept-logo.png",
              logo: "https://flowerdept.com/images/flower-dept-logo.png",
              serviceType: [
                "Cannabis Delivery",
                "Marijuana Delivery",
                "Medical Cannabis Delivery",
                "Recreational Cannabis Delivery",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cannabis Products",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Premium Cannabis Flowers",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Cannabis Concentrates",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Cannabis Edibles",
                    },
                  },
                ],
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "San Bernardino",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
                {
                  "@type": "City",
                  name: "Rialto",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
                {
                  "@type": "City",
                  name: "Fontana",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
                {
                  "@type": "City",
                  name: "Colton",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
                {
                  "@type": "City",
                  name: "Highland",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "CA",
                addressCountry: "US",
                addressLocality: "San Bernardino County",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "34.1083",
                longitude: "-117.2898",
              },
              openingHours: "Mo-Su 00:00-23:59",
              paymentAccepted: ["Cash", "Debit Card", "Credit Card"],
              currenciesAccepted: "USD",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
              },
              sameAs: ["https://www.instagram.com/flowerdept", "https://www.facebook.com/flowerdept"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What areas do you deliver cannabis to in San Bernardino County?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We deliver premium cannabis to San Bernardino, Rialto, Fontana, Colton, Highland and surrounding areas in San Bernardino County. Call (763) 344-1778 to confirm delivery to your location.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How fast is cannabis delivery in San Bernardino?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer same-day cannabis delivery within 30-60 minutes in our service areas. We're available 24/7 for your convenience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the minimum order for cannabis delivery?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "There is a $50 minimum order amount for cannabis delivery. We accept cash, debit cards, and credit cards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need ID for cannabis delivery in California?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you must be 21+ and provide valid government-issued ID. New customers must complete our secure verification process by texting ID photos to (763) 344-1778.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
