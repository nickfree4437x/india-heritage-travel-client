import type { Metadata } from "next";

// ============================================
// HERITAGE HOTELS - SEO METADATA
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
    "Best Heritage Hotels in India | Luxury Palace Stays & Royal Experiences | India Heritage Travel",
  description:
    "Discover India's most iconic heritage hotels featuring royal palaces, luxury accommodations, cultural experiences, historic architecture, and unforgettable hospitality.",
  keywords: [
    "Best Heritage Hotels in India",
    "Luxury Palace Hotels India",
    "Heritage Hotels India",
    "Royal Palace Stays India",
    "Luxury Hotels India",
    "Historic Hotels India",
    "Palace Hotels Rajasthan",
    "Royal Experiences India",
    "Heritage Tourism India",
    "Luxury Travel India",
    "India Heritage Travel",
    "Historic Accommodations India",
    "Cultural Stays India",
    "Luxury Palace Experience",
    "India Hotel Guide",
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
    canonical: "/blog/top-heritage-hotel-in-india",
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
    url: "https://indiaheritagetravel.com/blog/top-heritage-hotel-in-india",
    siteName: "India Heritage Travel",
    title:
      "Best Heritage Hotels in India | Luxury Palace Stays & Royal Experiences",
    description:
      "Explore India's finest heritage hotels, royal palaces, luxury stays, cultural experiences, and historic hospitality experiences.",
    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779638017/blog-9_h4aqqf.jpg",
        width: 1200,
        height: 630,
        alt: "Best Heritage Hotels in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Heritage Hotels in India | Royal Palace Stays",
    description:
      "Discover iconic heritage hotels, royal palaces, and luxury stays across India.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779638017/blog-9_h4aqqf.jpg",
    ],
  },
};