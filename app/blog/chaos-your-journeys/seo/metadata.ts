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
    "How the Right India Travel Agency Can Transform Your Journey | India Heritage Travel",
  description:
    "Discover how the right India travel agency can simplify planning, provide local expertise, create personalized itineraries, and help you enjoy a seamless and memorable travel experience across India.",
  keywords: [
    "India Travel Agency",
    "India Travel Companies",
    "India Tour Packages",
    "Travel Agency India",
    "India Travel Planning",
    "India Heritage Travel",
    "Custom India Tours",
    "Luxury India Travel",
    "India Vacation Planning",
    "India Holiday Packages",
    "Private Tours India",
    "Travel Experts India",
    "India Travel Guide",
    "Best India Travel Agency",
    "Personalized India Tours",
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
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779639547/blog-5_kpbanj.jpg",
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
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779639547/blog-5_kpbanj.jpg",
    ],
  },
};