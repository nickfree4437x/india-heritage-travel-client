import type { Metadata } from "next";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/india-travel-cost-guide`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786420508/c-rayban-CIXoFys3gsw-unsplash_cewrpk.jpg";

// ============================================
// INDIA TRAVEL COST GUIDE - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "India Travel Cost Guide 2026 | Daily Budget, Hotels, Transport & Visa Costs",
  description:
    "How much does a trip to India cost in 2026? Explore realistic India travel costs for budget, mid-range and luxury travellers, including visas, hotels, food, transport, attraction fees, regional costs and a 7-day Golden Triangle budget.",
  keywords: [
    "India Travel Cost Guide",
    "India Travel Cost 2026",
    "How Much Does a Trip to India Cost",
    "India Trip Cost",
    "India Travel Budget",
    "India Travel Budget 2026",
    "Cost of Traveling to India",
    "India Daily Travel Budget",
    "India Vacation Cost",
    "India Tourism Cost",
    "India Visa Cost",
    "India e Tourist Visa Cost",
    "India Hotel Prices",
    "India Accommodation Cost",
    "India Food Cost",
    "India Transportation Cost",
    "India Private Driver Cost",
    "India Tourist Attraction Fees",
    "India Travel Expenses",
    "Golden Triangle India Cost",
    "Delhi Agra Jaipur Cost",
    "Rajasthan Travel Cost",
    "Kerala Travel Cost",
    "India Luxury Travel Cost",
    "India Honeymoon Cost",
    "India Family Travel Cost",
    "India Solo Travel Cost",
    "India Heritage Travel",
    "India Heritage Tours",
    "India Travel Planning",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "India Travel Cost Guide 2026 | What a Trip to India Really Costs",
    description:
      "Get a realistic breakdown of India travel costs in 2026, from visas and flights to hotels, food, private drivers, monument tickets, regional travel and luxury heritage stays.",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "India travel cost guide showing a luxury heritage palace hotel courtyard in Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "India Travel Cost Guide 2026 | Budget, Mid-Range & Luxury Travel",
    description:
      "Plan your India trip with realistic 2026 costs for visas, hotels, food, transport, monument tickets, private drivers and luxury heritage travel.",
    images: [IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};