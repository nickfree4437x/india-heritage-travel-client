import type { Metadata } from "next";

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata = {
  // ----- BASE -----
  metadataBase: new URL("https://indiaheritagetravel.com"),
  applicationName: "India Heritage Travel",
  referrer: "origin-when-cross-origin",

  // ----- FORMAT DETECTION -----
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // ----- BASIC SEO -----
  title:
    "Luxury Ayurveda Retreats in India: Wellness & Travel Guide",

  description:
    "Explore India's finest luxury Ayurveda retreats offering holistic healing, wellness therapies, yoga experiences, relaxation programs, personalized treatments, and rejuvenating wellness escapes.",

  keywords: [
    "Luxury Ayurveda Retreats in India",
    "Ayurveda Retreat India",
    "Best Ayurveda Retreats in India",
    "Luxury Wellness Retreats India",
    "Ayurveda Wellness Retreat Kerala",
    "Yoga and Ayurveda Retreat India",
    "Ayurveda Holiday India",
    "Wellness Retreats in India",
    "Ayurveda Travel Guide",
    "Luxury Wellness Travel India",
    "Ayurveda Resorts in India",
    "India Wellness Tourism",
  ],

  // ----- AUTHOR & PUBLISHER -----
  authors: [
    {
      name: "India Heritage Travel",
      url: "https://indiaheritagetravel.com",
    },
  ],

  creator: "India Heritage Travel",
  publisher: "India Heritage Travel",
  category: "Travel",

  // ----- CANONICAL -----
  alternates: {
    canonical: "/blog/luxury-ayurveda-retreat",
  },

  // ----- ROBOTS -----
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

  // ----- OPEN GRAPH (Facebook / LinkedIn) -----
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://indiaheritagetravel.com/blog/luxury-ayurveda-retreat",
    siteName: "India Heritage Travel",

    title:
      "Luxury Ayurveda Retreats in India | Wellness, Healing & Relaxation Guide",

    description:
      "Discover luxury Ayurveda retreats in India offering wellness therapies, yoga programs, holistic healing, rejuvenation experiences, and peaceful escapes.",

    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779801053/blog-8_rtahzc.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Ayurveda Retreats in India",
      },
    ],
  },

  // ----- TWITTER (X) -----
  twitter: {
    card: "summary_large_image",
    title: "Luxury Ayurveda Retreats in India | Wellness & Healing Guide",
    description:
      "Explore India's leading Ayurveda retreats featuring wellness therapies, yoga, holistic healing, and luxury rejuvenation experiences.",
    images: [
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779801053/blog-8_rtahzc.jpg",
    ],
  },
};