import type { Metadata } from "next";

// ============================================
// SAFE LUXURY DESTINATIONS - SEO METADATA
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
    "Safe Luxury Destinations in India for Solo Female Travellers",
  description:
    "Discover safe luxury destinations in India for solo female travellers, from Rajasthan and Kerala to Goa and the Himalayas, with heritage stays and memorable experiences.",
  keywords: [
    "Safe Luxury Destinations in India",
    "Luxury Destinations in India",
    "Safe Places in India for Solo Female Travellers",
    "Solo Female Travel India",
    "Luxury Travel India",
    "Luxury Holidays in India",
    "Safe Travel in India",
    "Luxury Heritage Hotels India",
    "Best Destinations for Solo Female Travellers in India",
    "Luxury India Travel Guide",
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
    canonical: "/blog/safe-luxury-destinations",
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
    url: "https://indiaheritagetravel.com/blog/safe-luxury-destinations",
    siteName: "India Heritage Travel",
    title:
      "Safe Luxury Destinations in India for Solo Female Travellers",
    description:
      "Explore India's safest luxury destinations featuring heritage stays, curated cultural experiences, premium hospitality, scenic landscapes, and exclusive travel experiences.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782539739/blog-2_ma62qv_msocje.jpg",
        width: 1200,
        height: 630,
        alt: "Safe Luxury Destinations in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Safe Luxury Destinations in India for Solo Female Travellers",
    description:
      "Discover India's safest luxury destinations with heritage stays, exclusive experiences, and premium hospitality.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782539739/blog-2_ma62qv_msocje.jpg",
    ],
  },
};