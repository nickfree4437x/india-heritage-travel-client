import type { Metadata } from "next";

// ============================================
// WOMEN-ONLY HERITAGE TOURS - SEO METADATA
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
    "Women-Only Heritage Tours in India (2026) | What to Expect, Wear & Prepare",
  description:
    "Plan the perfect women-only heritage tour in India with expert travel advice on safety, clothing, packing, cultural etiquette, itineraries, and luxury heritage experiences.",
  keywords: [
    "Women Only Heritage Tours India",
    "Women Only Tours India",
    "Solo Female Travel India",
    "Luxury Women Tours India",
    "Women Travel Safety India",
    "Women Travel Guide India",
    "India Heritage Travel",
    "Golden Triangle Women Tour",
    "Women Only Rajasthan Tour",
    "Women Only Cultural Tour India",
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
    canonical: "/blog/women-only-heritage-tours-india",
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
    url: "https://indiaheritagetravel.com/blog/women-only-heritage-tours-india",
    siteName: "India Heritage Travel",
    title:
      "Women-Only Heritage Tours in India (2026) | What to Expect, Wear & Prepare",
    description:
      "Discover what to expect, what to wear, how to prepare, safety tips, itineraries, and luxury experiences for women-only heritage tours in India.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784898459/pexels-jaiveer-2452265_rwouvl.jpg",
        width: 1200,
        height: 630,
        alt: "Women exploring India's heritage sites together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Women-Only Heritage Tours in India (2026)",
    description:
      "Everything you need to know before joining a women-only heritage tour in India.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1784898459/pexels-jaiveer-2452265_rwouvl.jpg",
    ],
  },
};