import type { Metadata } from "next";

// ============================================
// INDIA WILDLIFE SAFARI GUIDE - SEO METADATA
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
    "India Wildlife Safari Guide (2026) | Best National Parks & Tiger Safaris",
  description:
    "Discover the ultimate India Wildlife Safari Guide with the best national parks, tiger reserves, safari tips, luxury lodges, the best time to visit, and everything you need to plan an unforgettable wildlife adventure.",
  keywords: [
    "India Wildlife Safari Guide",
    "India Tiger Safari",
    "Best National Parks in India",
    "Tiger Reserves India",
    "Ranthambore Safari",
    "Bandhavgarh National Park",
    "Kanha National Park",
    "Jim Corbett National Park",
    "Kaziranga National Park",
    "Gir National Park",
    "Indian Wildlife Tour",
    "Luxury Wildlife Safari India",
    "Wildlife Photography India",
    "Best Time for Tiger Safari",
    "India Safari Travel Guide",
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
    canonical: "/blog/india-wildlife-safari-guide",
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
    url: "https://indiaheritagetravel.com/blog/india-wildlife-safari-guide",
    siteName: "India Heritage Travel",
    title:
      "India Wildlife Safari Guide (2026) | Best National Parks & Tiger Safaris",
    description:
      "Explore India's finest wildlife destinations, tiger reserves, safari experiences, luxury lodges, and expert travel advice.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784377287/gautam-arora-dCnHbVhM2w8-unsplash_kwmu2r.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Bengal Tiger during a wildlife safari in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "India Wildlife Safari Guide (2026)",
    description:
      "Everything you need to know before planning a wildlife safari in India, including tiger reserves, luxury lodges, safari tips, and the best time to visit.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1784377287/gautam-arora-dCnHbVhM2w8-unsplash_kwmu2r.jpg",
    ],
  },
};