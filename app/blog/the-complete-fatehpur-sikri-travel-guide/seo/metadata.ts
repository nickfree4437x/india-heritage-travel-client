import type { Metadata } from "next";

// ============================================
// FATEHPUR SIKRI TRAVEL GUIDE - SEO METADATA
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
    "Fatehpur Sikri Travel Guide 2026: History, Tickets, Timings & Top Attractions | India Heritage Travel",
  description:
    "Complete Fatehpur Sikri Travel Guide covering history, architecture, ticket prices, timings, how to reach, top attractions, photography tips, nearby places, itineraries, and expert travel advice.",
  keywords: [
    "Fatehpur Sikri Travel Guide",
    "Fatehpur Sikri",
    "Fatehpur Sikri Tickets",
    "Fatehpur Sikri Timings",
    "Fatehpur Sikri History",
    "Buland Darwaza",
    "Tomb of Salim Chishti",
    "Panch Mahal",
    "Diwan i Khas",
    "Jodha Bai Palace",
    "UNESCO Sites India",
    "Agra Attractions",
    "Golden Triangle India",
    "Places to Visit Near Agra",
    "Fatehpur Sikri Photography",
    "Fatehpur Sikri Architecture",
    "Akbar Capital City",
    "Luxury India Tours",
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
    canonical: "/blog/fatehpur-sikri-travel-guide",
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
    url: "https://indiaheritagetravel.com/blog/fatehpur-sikri-travel-guide",
    siteName: "India Heritage Travel",
    title:
      "Fatehpur Sikri Travel Guide 2026: History, Tickets, Timings & Top Attractions",
    description:
      "Discover Fatehpur Sikri's fascinating history, Mughal architecture, top attractions, practical travel tips, and nearby experiences with this complete travel guide.",
    images: [
      {
        url: "/images/blogs/fatehpur-sikri/hero.webp",
        width: 1200,
        height: 630,
        alt: "Buland Darwaza at Fatehpur Sikri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatehpur Sikri Travel Guide 2026",
    description:
      "Everything you need to know before visiting Fatehpur Sikri, including history, architecture, timings, tickets, attractions, and travel tips.",
    images: [
      "/images/blogs/fatehpur-sikri/hero.webp",
    ],
  },
};