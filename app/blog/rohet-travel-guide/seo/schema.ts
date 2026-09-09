import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// =====================================================
// ROHET TRAVEL GUIDE SCHEMA
// =====================================================

const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${SITE_URL}/blog/rohet-travel-guide`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787710578/rohet-garh-swimming-pool_qtieun.webp";

export const rohetTravelGuideSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BLOG_URL}#article`,
  headline:
    "Rohet Travel Guide: Palace Life & Bishnoi Village Experiences | India Heritage Travel",
  description:
    "This Rohet travel guide covers Rohet Garh Palace, Bishnoi village safaris, wildlife, food, rural Rajasthan experiences and a suggested itinerary for a luxury heritage escape near Jodhpur.",
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
    "Rohet Travel Guide",
    "Rohet Rajasthan",
    "Rohet Garh",
    "Rohet Garh Palace",
    "Rohet Palace",
    "Rohet Heritage Hotel",
    "Rohet Bishnoi Village Safari",
    "Bishnoi Village Safari",
    "Rohet Wildlife Safari",
    "Rohet Blackbuck Safari",
    "Rohet Chinkara Safari",
    "Rohet Marwari Horse Riding",
    "Rohet Camel Safari",
    "Rohet Rajasthan Travel",
    "Rohet Luxury Travel",
    "Rohet Travel Itinerary",
    "Rohet Things to Do",
    "Rohet Attractions",
    "Rohet Food",
    "Rohet Near Jodhpur",
    "Jodhpur to Rohet",
    "Bishnoi Community Rajasthan",
    "Rural Rajasthan",
    "Marwar Rajasthan",
    "Luxury Rajasthan Travel",
    "Rajasthan Heritage Tour",
    "India Heritage Travel",
  ],
  about: [
    {
      "@type": "Place",
      name: "Rohet",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rohet",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Place",
      name: "Rohet Garh",
    },
    {
      "@type": "Place",
      name: "Jodhpur",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jodhpur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
  ],
};

export default rohetTravelGuideSchema;