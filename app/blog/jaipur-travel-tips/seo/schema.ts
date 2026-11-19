import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/jaipur-travel-tips`;
const IMAGE_URL =
  "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779822612/blog-11_payr6l.jpg";

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
      name: "Jaipur Travel Guide: Best Places to Visit & 3-Day Itinerary",
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
    "Jaipur Travel Guide: Best Places to Visit & 3-Day Itinerary: Best Places to Visit, Travel Tips & 3-Day Itinerary",
  description:
    "Plan your Jaipur trip with this complete travel guide covering Amber Fort, City Palace, local markets, cultural experiences, travel tips, food recommendations, and a detailed 3-day itinerary.",
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
  name: "Jaipur Travel Guide: Best Places to Visit & 3-Day Itinerary",
  description:
    "Explore Jaipur's forts, palaces, local markets, cultural landmarks, food experiences, and essential travel tips with this complete first-time visitor's guide.",
  url: BLOG_URL,
};
