import type { Metadata } from "next";

// ============================================
// HONEYMOON TOUR PACKAGES - SEO METADATA
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
    "Best Honeymoon Destinations in India: Romantic Getaways for Couples",
  description:
    "Discover the best honeymoon tour packages in India featuring luxury resorts, heritage hotels, romantic escapes, cultural experiences, scenic destinations, and personalized itineraries for unforgettable memories.",
  keywords: [
    "Best Honeymoon Destinations in India",
    "Honeymoon Tour Packages in India",
    "India Honeymoon Packages",
    "Romantic Getaways in India",
    "Honeymoon Places in India for Couples",
    "Luxury Honeymoon India",
    "Romantic Holidays in India",
    "Kerala Honeymoon Destinations",
    "Goa Honeymoon Packages",
    "Rajasthan Honeymoon Destinations",
    "Couple Travel India",
    "Honeymoon Planning Tips India",
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
    canonical: "/blog/honeymoon-tour-package",
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
    url: "https://indiaheritagetravel.com/blog/honeymoon-tour-package",
    siteName: "India Heritage Travel",
    title:
      "Best Honeymoon Destinations in India: Romantic Getaways for Couples",
    description:
      "Explore romantic honeymoon destinations across India with luxury stays, cultural experiences, personalized itineraries, scenic landscapes, and unforgettable travel moments.",
    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779635049/hero-3_wj3zaa.jpg",
        width: 1200,
        height: 630,
        alt: "Best Honeymoon Tour Packages in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Honeymoon Destinations in India: Romantic Getaways for Couples",
    description:
      "Discover luxury honeymoon experiences, romantic destinations, and personalized couple tours across India.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779635049/hero-3_wj3zaa.jpg",
    ],
  },
};