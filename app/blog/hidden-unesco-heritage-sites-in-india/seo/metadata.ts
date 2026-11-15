import type { Metadata } from "next";

// ============================================
// HIDDEN UNESCO HERITAGE SITES - SEO METADATA
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
    "Hidden UNESCO Heritage Sites in India (2026) | Offbeat UNESCO Travel Guide",
  description:
    "Discover India's hidden UNESCO World Heritage Sites including Champaner-Pavagadh, Rani ki Vav, Bhimbetka, the Hoysalas, and the Moidams with expert travel tips, itineraries, and planning advice.",
  keywords: [
    "Hidden UNESCO Heritage Sites India",
    "Offbeat UNESCO India",
    "Champaner Pavagadh",
    "Rani ki Vav",
    "Bhimbetka",
    "Sacred Ensembles of the Hoysalas",
    "Moidams Assam",
    "UNESCO India Guide",
    "Lesser Known UNESCO India",
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
    canonical: "/blog/hidden-unesco-heritage-sites-india",
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
    url: "https://indiaheritagetravel.com/blog/hidden-unesco-heritage-sites-in-india",
    siteName: "India Heritage Travel",
    title:
      "Hidden UNESCO Heritage Sites in India (2026) | Offbeat UNESCO Travel Guide",
    description:
      "Explore India's most fascinating yet lesser-known UNESCO World Heritage Sites with expert planning tips and curated itineraries.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784723097/Entry_to__Auditorium_Cave__vdskzu.jpg",
        width: 1200,
        height: 630,
        alt: "Hidden UNESCO Heritage Sites in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hidden UNESCO Heritage Sites in India (2026)",
    description:
      "Plan an unforgettable journey through India's most underrated UNESCO World Heritage Sites.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1784723097/Entry_to__Auditorium_Cave__vdskzu.jpg",
    ],
  },
};