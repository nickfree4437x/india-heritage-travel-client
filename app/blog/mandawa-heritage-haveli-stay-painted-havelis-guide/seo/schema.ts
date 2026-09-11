import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/mandawa-heritage-haveli-stay-painted-havelis-guide";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const HERO_IMAGE = `${SITE_URL}https://res.cloudinary.com/dja5yspwr/image/upload/v1788954498/vikram-chouhan-udaipur-web-designer-N-3yaHfspfo-unsplash_kq76qe.jpg`;
const BLOG_TITLE =
  "Mandawa Heritage Haveli Stay: A Luxury Guide to Rajasthan's Painted Havelis";
const BLOG_DESCRIPTION =
  "Discover the perfect Mandawa Heritage Haveli Stay — frescoed forts, hidden havelis, and luxury Shekhawati experiences curated by India Heritage Travel.";

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
    "Mandawa Heritage Haveli Stay",
    "Mandawa Heritage Haveli",
    "Mandawa Rajasthan",
    "Mandawa Travel Guide",
    "Mandawa Havelis",
    "Mandawa Painted Havelis",
    "Shekhawati Havelis",
    "Shekhawati Rajasthan",
    "Mandawa Fort",
    "Castle Mandawa",
    "Mandawa Frescoes",
    "Mandawa Luxury Stay",
    "Mandawa Heritage Hotel",
    "Mandawa Itinerary",
    "Mandawa From Jaipur",
    "Mandawa From Delhi",
    "Shekhawati Heritage Tour",
    "Nawalgarh",
    "Fatehpur Shekhawati",
    "Dundlod",
    "Ramgarh Shekhawati",
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
    "A complete guide to experiencing a luxury Mandawa Heritage Haveli Stay, exploring painted havelis, fresco art, Mandawa Fort, Shekhawati culture and nearby heritage destinations.",
  isPartOf: {
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "India Heritage Travel Blog",
    url: `${SITE_URL}/blog`,
  },
  about: {
    "@type": "Place",
    name: "Mandawa",
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