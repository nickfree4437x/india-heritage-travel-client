import type { Metadata } from "next";

// ============================================
// LUXURY GOLDEN TRIANGLE TOUR - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL("https://indiaheritagetravel.com"),
  applicationName: "India Heritage Travel",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  title:
    "Luxury Golden Triangle Tour India: Delhi, Agra & Jaipur Luxury Travel Guide | India Heritage Travel",
  description:
    "Experience a luxury Golden Triangle Tour across Delhi, Agra, and Jaipur with palace hotels, private chauffeurs, VIP experiences, expert guides, and customized itineraries.",
  keywords: [
    "Luxury Golden Triangle Tour",
    "Luxury Golden Triangle Tour India",
    "Golden Triangle Luxury Travel",
    "Luxury Delhi Agra Jaipur Tour",
    "Golden Triangle Private Tour",
    "Luxury India Tour Packages",
    "Luxury Rajasthan Tour",
    "Luxury India Holidays",
    "Golden Triangle Travel Guide",
    "Luxury Heritage Hotels India",
    "Palace Hotels India",
    "Luxury Jaipur Tour",
    "Luxury Agra Tour",
    "Luxury Delhi Tour",
    "India Heritage Travel",
  ],
  authors: [
    {
      name: "India Heritage Travel",
      url: "https://indiaheritagetravel.com",
    },
  ],
  creator: "India Heritage Travel",
  publisher: "India Heritage Travel",
  category: "Travel",
  alternates: {
    canonical: "/blog/luxury-golden-triangle-tour",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://indiaheritagetravel.com/blog/luxury-golden-triangle-tour",
    siteName: "India Heritage Travel",
    title:
      "Luxury Golden Triangle Tour India: Delhi, Agra & Jaipur Luxury Travel Guide",
    description:
      "Experience a luxury Golden Triangle Tour across Delhi, Agra, and Jaipur with palace hotels, private chauffeurs, VIP experiences, expert guides, and customized itineraries.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782279641/pexels-axp-photography-500641970-19195961_aqlgse.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Golden Triangle Tour India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Luxury Golden Triangle Tour India",
    description:
      "Discover Delhi, Agra, and Jaipur in ultimate comfort with luxury hotels, private guides, VIP experiences, and customized travel itineraries.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782279641/pexels-axp-photography-500641970-19195961_aqlgse.jpg",
    ],
  },
};