import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/maheshwar-heritage-travel-guide";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1789547607/pexels-arvind-aditya-253087253-13214083_mecr3u.jpg";
const BLOG_TITLE =
  "Maheshwar Heritage Travel Guide: Royal Palaces, Narmada Ghats & Timeless Culture";
const BLOG_DESCRIPTION =
  "Plan the perfect Maheshwar heritage travel experience: explore Ahilya Fort, the sacred Narmada ghats, Holkar history and Maheshwari weaves with our complete luxury travel guide.";

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: [FEATURED_IMAGE],
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
      url: `${SITE_URL}/images/logo.png`,
    },
  },
  articleSection: "Central India Travel",
  about: {
    "@type": "Place",
    name: "Maheshwar",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maheshwar",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
  },
  keywords: [
    "Maheshwar Heritage Travel Guide",
    "Maheshwar heritage travel",
    "Maheshwar Madhya Pradesh",
    "Ahilya Fort",
    "Maheshwar ghats",
    "Narmada ghats Maheshwar",
    "Maheshwari saree",
    "Ahilyabai Holkar",
    "Maheshwar temples",
    "Maheshwar luxury travel",
    "Maheshwar heritage hotel",
  ],
  inLanguage: "en-US",
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  url: BLOG_URL,
  image: FEATURED_IMAGE,
  isPartOf: {
    "@type": "WebSite",
    name: "India Heritage Travel",
    url: SITE_URL,
  },
  about: {
    "@type": "Place",
    name: "Maheshwar",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maheshwar",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
  },
  mainEntity: {
    "@type": "TouristDestination",
    name: "Maheshwar",
    description:
      "Maheshwar is a historic heritage destination on the banks of the Narmada River in Madhya Pradesh, known for Ahilya Fort, sacred ghats, temples, Holkar history and Maheshwari handloom traditions.",
    touristType: [
      "Heritage travelers",
      "Luxury travelers",
      "Cultural travelers",
      "Solo travelers",
    ],
  },
  inLanguage: "en-US",
};

// ============================================
// ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "India Heritage Travel",
  legalName: "India Heritage Travel Pvt. Ltd.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo.png`,
  },
  telephone: "+91-7062101914",
  sameAs: [
    "https://www.facebook.com/indiaheritagetravel",
    "https://www.instagram.com/indiaheritagetravel",
  ],
};