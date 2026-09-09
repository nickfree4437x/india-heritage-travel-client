import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// =====================================================
// KHEJARLA TRAVEL GUIDE SCHEMA
// =====================================================

const SITE_URL = "https://indiaheritagetravel.com";

const BLOG_URL =
  `${SITE_URL}/blog/khejarla-travel-guide-sleeping-inside-desert-fort`;

const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787836159/17_ykuc89.jpg";

export const khejarlaTravelGuideSchema = {
  "@context": "https://schema.org",
  "@type": "Article",

  "@id": `${BLOG_URL}#article`,

  headline:
    "Khejarla Travel Guide: Sleeping Inside a Desert Fort in Rajasthan",

  description:
    "Our Khejarla travel guide covers the 400-year-old fort's history, safaris, food, best time to visit, Bishnoi village experiences and how to enjoy an authentic heritage stay inside a Rajasthan desert fort.",

  image: [IMAGE_URL],

  url: BLOG_URL,

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },

  author: BLOG_AUTHORS.isha,

  publisher: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: SITE_URL,

    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },

  isPartOf: {
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "India Heritage Travel Blog",
    url: `${SITE_URL}/blog`,
  },

  articleSection: "Rajasthan Travel",

  inLanguage: "en",

  keywords: [
    "Khejarla Travel Guide",
    "Khejarla Fort",
    "Khejarla Rajasthan",
    "Khejarla Heritage Hotel",
    "Palace Stay in Khejarla",
    "Sleeping in a Desert Fort",
    "Things to Do in Khejarla",
    "Khejarla Horse Safari",
    "Bishnoi Village Khejarla",
    "Best Time to Visit Khejarla",
    "How to Reach Khejarla",
    "Khejarla Itinerary",
    "Khejarla Wildlife Safari",
    "Khejarla Blackbuck Safari",
    "Khejarla Chinkara",
    "Marwari Horse Safari",
    "Khejarla Luxury Travel",
    "Khejarla Heritage Stay",
    "Offbeat Rajasthan Destinations",
    "Luxury Heritage Hotels Rajasthan",
    "Rajasthan Heritage Tour",
    "Luxury Rajasthan Travel",
    "India Heritage Travel",
  ],

  about: [
    {
      "@type": "Place",
      name: "Khejarla",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Khejarla",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },

    {
      "@type": "Place",
      name: "Khejarla Fort",
    },

    {
      "@type": "Place",
      name: "Rajasthan",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
  ],
};

export default khejarlaTravelGuideSchema;