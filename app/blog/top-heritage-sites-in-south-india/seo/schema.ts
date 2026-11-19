import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/top-heritage-sites-in-south-india`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1784608332/parul-gupta-UuyMc40kpv8-unsplash_svf2mh.jpg";

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
      name: "Top Heritage Sites in South India",
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
    "Top Heritage Sites in South India (2026) | Complete Travel Guide",
  description:
    "Discover the finest heritage sites across South India including Hampi, Mahabalipuram, Great Living Chola Temples, Kerala, Hyderabad, and more with travel tips, ticket prices, and itineraries.",
  image: IMAGE_URL,
  author: BLOG_AUTHORS.isha,
  publisher: {
  "@id": "https://indiaheritagetravel.com/#organization",
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
  name: "Top Heritage Sites in South India",
  description:
    "A complete guide to South India's most iconic heritage destinations including Hampi, Mahabalipuram, Chola Temples, Kerala, Hyderabad, and more with travel planning and visitor information.",
  url: BLOG_URL,
};
