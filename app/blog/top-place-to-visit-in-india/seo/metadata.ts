import type { Metadata } from "next";

// ============================================
// TOP SUMMER DESTINATIONS - SEO METADATA
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
    "Top 10 Places to Visit in India During Summer | India Heritage Travel",
  description:
    "Discover the top 10 places to visit in India during summer, including hill stations, mountain escapes, beaches, adventure destinations, and cultural experiences perfect for a memorable vacation.",
  keywords: [
    "Top 10 Places to Visit in India During Summer",
    "Best Places to Visit in India",
    "Summer Destinations India",
    "India Summer Travel",
    "Hill Stations in India",
    "Rishikesh Travel Guide",
    "Spiti Valley Trip",
    "Andaman Islands Travel",
    "Leh Ladakh Tour",
    "Coorg Tourism",
    "Ooty Travel Guide",
    "Darjeeling Tourism",
    "Auli Travel",
    "Shillong Travel Guide",
    "India Heritage Travel",
    "India Tour Packages",
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
    canonical: "/blog/top-place-to-visit-in-india",
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
    url: "https://indiaheritagetravel.com/blog/top-place-to-visit-in-india",
    siteName: "India Heritage Travel",
    title:
      "Top 10 Places to Visit in India During Summer",
    description:
      "Explore India's best summer destinations, from scenic hill stations and Himalayan adventures to beaches, cultural landmarks, and unforgettable travel experiences.",
    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779652419/blog-7_kt857x.jpg",
        width: 1200,
        height: 630,
        alt: "Top 10 Places to Visit in India During Summer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top 10 Places to Visit in India During Summer",
    description:
      "Discover India's most beautiful summer destinations, including mountains, beaches, cultural escapes, and adventure hotspots.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779652419/blog-7_kt857x.jpg",
    ],
  },
};