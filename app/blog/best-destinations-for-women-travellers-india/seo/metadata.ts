import type { Metadata } from "next";

// ============================================
// BEST DESTINATIONS FOR WOMEN TRAVELLERS - SEO METADATA
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
    "Best Destinations for Women Travellers in India (2026) | Complete Travel Guide",
  description:
    "Discover the best destinations for women travellers in India including Rajasthan, Kerala, Rishikesh, Goa, Himachal Pradesh and the Golden Triangle with expert travel tips and itinerary ideas.",
  keywords: [
    "Best Destinations for Women Travellers in India",
    "Best Places for Solo Female Travellers India",
    "Safe Places for Women in India",
    "Women Travel India",
    "Rajasthan for Women Travellers",
    "Kerala Solo Travel",
    "Rishikesh Women Travel",
    "Goa Solo Female Travel",
    "Golden Triangle Women Tour",
    "Luxury Women Tours India",
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
    canonical: "/blog/best-destinations-for-women-travellers-india",
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
    url: "https://indiaheritagetravel.com/blog/best-destinations-for-women-travellers-india",
    siteName: "India Heritage Travel",
    title:
      "Best Destinations for Women Travellers in India (2026) | Complete Travel Guide",
    description:
      "Explore India's safest and most rewarding destinations for women travellers with expert planning advice and curated itineraries.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785123229/pexels-sunaina-ravikumar-1597491343-27403390_ce8irk.jpg",
        width: 1200,
        height: 630,
        alt: "Best destinations for women travellers in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Destinations for Women Travellers in India (2026)",
    description:
      "Discover Rajasthan, Kerala, Goa, Rishikesh, the Himalayas and more with practical travel advice for women visiting India.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1785123229/pexels-sunaina-ravikumar-1597491343-27403390_ce8irk.jpg",
    ],
  },
};