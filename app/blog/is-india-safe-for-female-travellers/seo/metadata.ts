import type { Metadata } from "next";

// ============================================
// INDIA SAFETY FOR FEMALE TRAVELLERS - SEO METADATA
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
    "Is India Safe for Female Travellers? (2026) | Safety Guide & Travel Tips",
  description:
    "Learn whether India is safe for female travellers in 2026 with expert advice on destinations, transport, accommodation, cultural etiquette, scams, safety tips, and women-only tours.",
  keywords: [
    "Is India Safe for Female Travellers",
    "Solo Female Travel India",
    "Women Travel Safety India",
    "India Safety Guide",
    "Women Only Tours India",
    "Safe Places for Women in India",
    "India Travel Safety Tips",
    "Female Traveller India",
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
    canonical: "/blog/is-india-safe-for-female-travellers",
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
    url: "https://indiaheritagetravel.com/blog/is-india-safe-for-female-travellers",
    siteName: "India Heritage Travel",
    title:
      "Is India Safe for Female Travellers? (2026) | Safety Guide & Travel Tips",
    description:
      "Everything women need to know before travelling to India, including safety advice, destinations, transport, accommodation, and practical travel tips.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785038986/pexels-ajaybhargavguduru-939722_doeur2.jpg",
        width: 1200,
        height: 630,
        alt: "Female traveller exploring Amber Fort in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Is India Safe for Female Travellers? (2026)",
    description:
      "Expert safety advice for women travelling in India including destinations, transport, accommodation, clothing, and practical planning.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1785038986/pexels-ajaybhargavguduru-939722_doeur2.jpg",
    ],
  },
};