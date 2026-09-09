import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";

const BLOG_URL = `${BASE_URL}/blog/best-destinations-for-women-travellers-india`;

const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1785123229/pexels-sunaina-ravikumar-1597491343-27403390_ce8irk.jpg";

const LOGO_URL =
  "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png";

// ============================================
// BREADCRUMB SCHEMA
// ============================================
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${BASE_URL}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Destinations for Women Travellers in India",
      item: BLOG_URL,
    },
  ],
};

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline:
    "Best Destinations for Women Travellers in India (2026) | Complete Travel Guide",

  description:
    "Discover the best destinations for women travellers in India including Rajasthan, Kerala, Rishikesh, Goa, Himachal Pradesh and the Golden Triangle with expert travel tips and itinerary ideas.",

  image: IMAGE_URL,

  // Centralized real person author
  author: BLOG_AUTHORS.isha,

  // Publisher remains the organization
  publisher: {
    "@type": "Organization",
    name: "India Heritage Travel",
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
  },

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  name: "Best Destinations for Women Travellers in India",

  description:
    "A complete travel guide to the best destinations for women travellers in India, covering Rajasthan, Kerala, Goa, Rishikesh, hill stations, the Golden Triangle, hidden gems, travel tips, and itinerary planning.",

  url: BLOG_URL,
};

// ============================================
// ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "India Heritage Travel",
  url: BASE_URL,
  logo: LOGO_URL,
};