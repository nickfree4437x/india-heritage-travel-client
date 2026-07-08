import type { Metadata } from "next";

// ============================================
// UNESCO WORLD HERITAGE SITES - SEO METADATA
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
    "UNESCO World Heritage Sites in India: Complete Travel Guide 2026 | India Heritage Travel",
  description:
    "Explore UNESCO World Heritage Sites in India, including the Taj Mahal, Hampi, Ajanta Caves, Ellora Caves, Jaipur, Red Fort, Qutub Minar, Konark Sun Temple, and other iconic landmarks.",
  keywords: [
    "UNESCO World Heritage Sites India",
    "India UNESCO Sites",
    "UNESCO Sites India",
    "Taj Mahal UNESCO",
    "Hampi UNESCO Site",
    "Ajanta Caves",
    "Ellora Caves",
    "Red Fort Delhi",
    "Qutub Minar",
    "Jaipur UNESCO City",
    "Konark Sun Temple",
    "UNESCO Heritage India",
    "Historic Places in India",
    "India Cultural Heritage",
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
    canonical: "/blog/unesco-world-heritage-sites-in-india",
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
    url: "https://indiaheritagetravel.com/blog/unesco-world-heritage-sites-in-india",
    siteName: "India Heritage Travel",
    title:
      "UNESCO World Heritage Sites in India: Complete Travel Guide 2026",
    description:
      "Discover India's most iconic UNESCO World Heritage Sites, from the Taj Mahal and Red Fort to Hampi, Ajanta, Ellora, Jaipur, and Konark Sun Temple.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782714314/pexels-roman-saienko-1867764487-38198571_poijud.jpg",
        width: 1200,
        height: 630,
        alt: "UNESCO World Heritage Sites in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "UNESCO World Heritage Sites in India",
    description:
      "A complete guide to India's UNESCO World Heritage Sites including the Taj Mahal, Hampi, Jaipur, Ajanta, Ellora, and more.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782714314/pexels-roman-saienko-1867764487-38198571_poijud.jpg",
    ],
  },
};