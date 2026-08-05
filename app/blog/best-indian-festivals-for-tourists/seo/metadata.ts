import type { Metadata } from "next";

// ============================================
// BEST INDIAN FESTIVALS - SEO METADATA
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
    "Best Indian Festivals for Tourists (2026) | Holi, Diwali, Pushkar & More",
  description:
    "Discover the best Indian festivals for tourists including Holi, Diwali, Durga Puja, Pushkar Camel Fair, Navratri, Onam, Pongal, Hornbill Festival and expert travel tips for planning your cultural journey.",
  keywords: [
    "Best Indian Festivals",
    "Indian Festivals for Tourists",
    "Holi Festival India",
    "Diwali India",
    "Durga Puja Kolkata",
    "Pushkar Camel Fair",
    "Navratri Gujarat",
    "Garba Festival",
    "Onam Kerala",
    "Pongal Tamil Nadu",
    "Hornbill Festival Nagaland",
    "Kumbh Mela",
    "Desert Festival Jaisalmer",
    "India Cultural Festivals",
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
    canonical: "/blog/best-indian-festivals-for-tourists",
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
    url: "https://indiaheritagetravel.com/blog/best-indian-festivals-for-tourists",
    siteName: "India Heritage Travel",
    title:
      "Best Indian Festivals for Tourists (2026) | Holi, Diwali, Pushkar & More",
    description:
      "Plan your India journey around Holi, Diwali, Durga Puja, Pushkar Camel Fair, Kumbh Mela and more with this complete festival travel guide.",
    images: [
      {
        url: "ttps://res.cloudinary.com/dja5yspwr/image/upload/v1785903404/pexels-yankrukov-8819845_azck8i.jpg",
        width: 1200,
        height: 630,
        alt: "Tourists celebrating Indian festivals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Indian Festivals for Tourists (2026)",
    description:
      "Complete guide to India's most spectacular cultural festivals.",
    images: [
      "ttps://res.cloudinary.com/dja5yspwr/image/upload/v1785903404/pexels-yankrukov-8819845_azck8i.jpg",
    ],
  },
};