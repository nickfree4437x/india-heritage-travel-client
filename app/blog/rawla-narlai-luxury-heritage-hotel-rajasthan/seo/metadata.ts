import type { Metadata } from "next";

// ============================================
// RAWLA NARLAI - SEO METADATA
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
    "Rawla Narlai: Luxury Heritage Hotel in Rajasthan | India Heritage Travel",
  description:
    "Explore Rawla Narlai in Rajasthan, with heritage suites, stepwell dining, cultural experiences, and nearby Aravalli landscapes. Plan your heritage stay.",
  keywords: [
    "Rawla Narlai",
    "Rawla Narlai Rajasthan",
    "Rawla Narlai Heritage Hotel",
    "Rawla Narlai Luxury Stay",
    "Rawla Narlai Hotel Review",
    "Luxury Heritage Hotels in Rajasthan",
    "Heritage Stay in Rajasthan",
    "Narlai Rajasthan",
    "Luxury Hotels Near Ranakpur",
    "Stepwell Dining Rajasthan",
    "Aravalli Hills Heritage Stay",
    "Rajasthan Heritage Travel",
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
    canonical: "/blog/rawla-narlai-luxury-heritage-hotel-rajasthan",
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
    url: "https://indiaheritagetravel.com/blog/rawla-narlai-luxury-heritage-hotel-rajasthan",
    siteName: "India Heritage Travel",
    title:
      "Rawla Narlai: Luxury Heritage Stay in Rajasthan",
    description:
      "Explore Rawla Narlai's heritage accommodation, dining experiences, and cultural charm in Rajasthan.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782297620/23.06.2026_11.28.01_REC_xq38bb.jpg",
        width: 1200,
        height: 630,
        alt: "Rawla Narlai Luxury Heritage Hotel Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rawla Narlai Rajasthan: Luxury Heritage Hotel & Experiences",
    description:
      "Explore royal suites, stepwell dining, leopard safaris, and authentic heritage hospitality at Rawla Narlai in Rajasthan.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782297620/23.06.2026_11.28.01_REC_xq38bb.jpg",
    ],
  },
};