import type { Metadata } from "next";

// ============================================
// TAJ MAHAL TRAVEL GUIDE - SEO METADATA
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
    "Taj Mahal Travel Guide: Tickets, Timings & Travel Tips | India Heritage Travel",
  description:
     "Plan your Taj Mahal visit with this travel guide covering history, entry tickets, opening hours, the best time to visit, nearby attractions, and Agra itinerary tips.",
  keywords: [
    "Taj Mahal Travel Guide",
    "Taj Mahal Tickets",
    "Taj Mahal Entry Fee",
    "Taj Mahal Timings",
    "Best Time to Visit Taj Mahal",
    "Taj Mahal Sunrise Tour",
    "Agra Travel Guide",
    "Taj Mahal Opening Hours",
    "Things to Do in Agra",
    "Agra Fort",
    "Taj Mahal Photography",
    "Taj Mahal History",
    "Taj Mahal Architecture",
    "Agra Tourist Attractions",
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
    canonical: "/blog/the-complete-taj-mahal-travel-guide",
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
    url: "https://indiaheritagetravel.com/blog/the-complete-taj-mahal-travel-guide",
    siteName: "India Heritage Travel",
    title:
     "Taj Mahal Travel Guide: Tickets, Timings & Travel Tips",
    description:
     "Discover the Taj Mahal's history, ticket information, visiting hours, nearby attractions, and practical tips for planning your Agra trip.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783055150/pexels-ayush-dwivedi-1217090-27374536_wfmxjg.jpg",
        width: 1200,
        height: 630,
        alt: "Taj Mahal Travel Guide",
      },
    ],
  },
  twitter: {
   card: "summary_large_image",
   title: "Taj Mahal Travel Guide",
   description:
    "Explore the Taj Mahal with practical tips on tickets, timings, the best time to visit, nearby attractions, and Agra itinerary planning.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1783055150/pexels-ayush-dwivedi-1217090-27374536_wfmxjg.jpg",
    ],
  },
};