import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${SITE_URL}/blog/kumbhalgarh-travel-guide-forts-forests-mountain-luxury`;
const HERO_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1788326971/Kumbhalgarh_055_orpqyq.jpg";

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BLOG_URL}#article`,
  headline:
    "Kumbhalgarh Travel Guide: Forts, Forests & Mountain Luxury (2026)",
  description:
    "The complete Kumbhalgarh Travel Guide: history, the 36-km wall, wildlife safaris, luxury stays and a day-by-day itinerary for a private Rajasthan escape.",
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
    "Kumbhalgarh Travel Guide",
    "Kumbhalgarh Fort",
    "Kumbhalgarh Wildlife Sanctuary",
    "Kumbhalgarh Wildlife Safari",
    "Kumbhalgarh Itinerary",
    "Kumbhalgarh Luxury Travel",
    "Kumbhalgarh Heritage Tour",
    "Kumbhalgarh Travel Tips",
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
  name:
    "Kumbhalgarh Travel Guide: Forts, Forests & Mountain Luxury (2026)",
  description:
    "The complete Kumbhalgarh Travel Guide covering Kumbhalgarh Fort, its 36-km wall, wildlife sanctuary, luxury stays, experiences and itineraries.",
  isPartOf: {
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "India Heritage Travel Blog",
    url: `${SITE_URL}/blog`,
  },
  about: {
    "@type": "Place",
    name: "Kumbhalgarh",
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