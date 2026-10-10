import type { Metadata } from "next";

// ============================================
// TRAVEL AGENCY GUIDE - SEO METADATA
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
    "How to Choose the Right India Travel Agency for Your Trip",
  description:
    "Learn how to choose the right India travel agency for your trip, compare local expertise and personalized itineraries, and understand what to check before booking.",
  keywords: [
    "How to Choose an India Travel Agency",
    "India Travel Agency",
    "Best India Travel Agency",
    "India Tour Operator",
    "Local Travel Agency India",
    "Personalized India Tours",
    "Custom India Tour Packages",
    "Private Tours India",
    "India Travel Planning",
    "Choosing a Tour Operator in India",
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
    canonical: "/blog/chaos-your-journeys",
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
    url: "https://indiaheritagetravel.com/blog/chaos-your-journeys",
    siteName: "India Heritage Travel",
    title:
      "How the Right India Travel Agency Can Transform Your Journey",
    description:
      "Learn how expert travel planning, local knowledge, personalized itineraries, and trusted guidance can transform your India journey into a smooth and unforgettable experience.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782731045/pexels-daciana-cristina-visan-2149801141-31301782_xtgnau.jpg",
        width: 1200,
        height: 630,
        alt: "How the Right India Travel Agency Can Transform Your Journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How the Right India Travel Agency Can Transform Your Journey",
    description:
      "Discover how the right travel agency can make planning easier and create a more meaningful travel experience in India.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782731045/pexels-daciana-cristina-visan-2149801141-31301782_xtgnau.jpg",
    ],
  },
};