import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${SITE_URL}/blog/ranakpur-travel-guide-sacred-heritage-aravalli-mountains`;
const HERO_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1788413511/alexander-schimmeck-VSsoSC6a1Gw-unsplash_l6mzem.jpg";
const BLOG_TITLE =
  "Ranakpur Travel Guide: Sacred Heritage in the Aravalli Mountains (2026)";
const BLOG_DESCRIPTION =
  "The complete Ranakpur Travel Guide: explore the 15th-century Chaumukha Jain Temple, Aravalli wildlife, luxury stays, and expert itineraries with India Heritage Travel.";

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BLOG_URL}#article`,
  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: [HERO_IMAGE],
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
  inLanguage: "en",
  articleSection: "Rajasthan Travel",
  keywords: [
    "Ranakpur Travel Guide",
    "Ranakpur Jain Temple",
    "Chaumukha Jain Temple",
    "Ranakpur Rajasthan",
    "Ranakpur Tourism",
    "Ranakpur From Udaipur",
    "Ranakpur From Jodhpur",
    "Kumbhalgarh and Ranakpur",
    "Ranakpur Aravalli Mountains",
    "Ranakpur Wildlife",
    "Ranakpur Heritage Hotels",
    "Ranakpur Luxury Travel",
    "Ranakpur Itinerary",
    "Ranakpur Sightseeing",
    "Places to Visit in Ranakpur",
    "Things to Do in Ranakpur",
    "Rajasthan Heritage Tours",
    "Rajasthan Luxury Travel",
    "India Heritage Travel",
  ],
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": BLOG_URL,
  url: BLOG_URL,
  name: BLOG_TITLE,
  description:
    "The complete Ranakpur Travel Guide covering the Chaumukha Jain Temple, Aravalli Mountains, wildlife, luxury stays, nearby attractions and suggested itineraries.",
  isPartOf: {
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "India Heritage Travel Blog",
    url: `${SITE_URL}/blog`,
  },
  about: {
    "@type": "Place",
    name: "Ranakpur",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  inLanguage: "en",
};

// ============================================
// ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "India Heritage Travel",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
  },
};