import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/unesco-world-heritage-sites-in-india`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1782714314/pexels-roman-saienko-1867764487-38198571_poijud.jpg";

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
      name: "UNESCO World Heritage Sites in India",
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
  headline: "UNESCO World Heritage Sites in India | Travel Guide",
  description:
   "Explore India's UNESCO World Heritage Sites, including the Taj Mahal, Hampi, Ajanta and Ellora Caves, Jaipur, and Konark Sun Temple, with tips for planning your visit.",
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
  name: "UNESCO World Heritage Sites in India",
description:
  "Discover India's UNESCO-listed heritage, including historic monuments, cultural landmarks, and natural sites, with practical travel-planning tips.",
  url: BLOG_URL,
};
