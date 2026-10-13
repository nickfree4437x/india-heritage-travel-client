import type { Metadata } from "next";

// ============================================
// JAIPUR TRAVEL GUIDE - SEO METADATA
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
    "Jaipur Travel Guide: Best Places to Visit & 3-Day Itinerary",
  description:
    "Plan your Jaipur trip with this complete travel guide covering Amber Fort, City Palace, local markets, cultural experiences, travel tips, food recommendations, and a detailed 3-day itinerary.",
  keywords: [
    "Jaipur Travel Guide",
    "Jaipur 3 Day Itinerary",
    "Best Places to Visit in Jaipur",
    "Things to Do in Jaipur",
    "Jaipur Travel Tips",
    "Jaipur Sightseeing",
    "Jaipur Tourist Attractions",
    "Pink City Jaipur",
    "Amber Fort Jaipur",
    "City Palace Jaipur",
    "Hawa Mahal Jaipur",
    "Jaipur Local Markets",
    "Jaipur Food Guide",
    "Rajasthan Travel Guide",
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
    canonical: "/blog/jaipur-travel-tips",
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
    url: "https://indiaheritagetravel.com/blog/jaipur-travel-tips",
    siteName: "India Heritage Travel",
    title:
      "Jaipur Travel Guide: Best Places to Visit, Travel Tips & 3-Day Itinerary",
    description:
      "Explore Jaipur's forts, palaces, local markets, cultural landmarks, food experiences, and essential travel tips with this complete first-time visitor's guide.",
    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779822612/blog-11_payr6l.jpg",
        width: 1200,
        height: 630,
        alt: "Jaipur Travel Guide and 3-Day Itinerary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jaipur Travel Guide | Best Places to Visit & 3-Day Itinerary",
    description:
      "Discover Jaipur's top attractions, travel tips, local markets, cultural experiences, and a detailed 3-day itinerary.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779822612/blog-11_payr6l.jpg",
    ],
  },
};