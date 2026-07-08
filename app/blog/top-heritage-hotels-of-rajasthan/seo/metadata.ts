import type { Metadata } from "next";

// ============================================
// HERITAGE HOTELS RAJASTHAN - SEO METADATA
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
    "Top Heritage Hotels of Rajasthan: Best Palace & Luxury Stays Guide | India Heritage Travel",
  description:
    "Discover the best heritage hotels in Rajasthan, including Rambagh Palace, Taj Lake Palace, Umaid Bhawan Palace, Samode Palace, and luxury royal stays across Jaipur, Udaipur, Jodhpur, and Jaisalmer.",
  keywords: [
    "Heritage Hotels Rajasthan",
    "Best Heritage Hotels Rajasthan",
    "Luxury Hotels Rajasthan",
    "Palace Hotels Rajasthan",
    "Rambagh Palace Jaipur",
    "Taj Lake Palace Udaipur",
    "Umaid Bhawan Palace",
    "Samode Palace",
    "RAAS Jodhpur",
    "Rajasthan Luxury Travel",
    "Rajasthan Heritage Stays",
    "Luxury Rajasthan Hotels",
    "Royal Palace Hotels India",
    "Luxury Heritage Hotels India",
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
    canonical: "/blog/top-heritage-hotels-of-rajasthan",
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
    url: "https://indiaheritagetravel.com/blog/top-heritage-hotels-of-rajasthan",
    siteName: "India Heritage Travel",
    title:
      "Top Heritage Hotels of Rajasthan: Best Palace & Luxury Stays Guide",
    description:
      "Explore Rajasthan's finest heritage hotels, including Rambagh Palace, Taj Lake Palace, Umaid Bhawan Palace, Samode Palace, and other iconic royal stays.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782554877/Rambagh_Palace_Jaipur_ny9xx7.jpg",
        width: 1200,
        height: 630,
        alt: "Top Heritage Hotels of Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Heritage Hotels of Rajasthan",
    description:
      "Discover Rajasthan's most luxurious palace hotels and heritage stays across Jaipur, Udaipur, Jodhpur, and Jaisalmer.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782554877/Rambagh_Palace_Jaipur_ny9xx7.jpg",
    ],
  },
};