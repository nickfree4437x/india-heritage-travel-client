import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";

const BLOG_URL = `${BASE_URL}/blog/chaos-your-journeys`;

const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1782731045/pexels-daciana-cristina-visan-2149801141-31301782_xtgnau.jpg";

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
      name: "How to Choose the Right India Travel Agency for Your Trip",
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

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },

  headline:
    "How to Choose the Right India Travel Agency for Your Trip",

  alternativeHeadline:
    "Why Choosing the Right India Travel Agency Matters",

  description:
    "Discover how the right India travel agency can simplify planning, provide local expertise, create personalized itineraries, and help you enjoy a seamless and memorable travel experience across India.",

  image: {
    "@type": "ImageObject",
    url: IMAGE_URL,
    width: 1200,
    height: 630,
  },

  // ==========================================
  // AUTHOR
  // ==========================================
  author: BLOG_AUTHORS.isha,

  // ==========================================
  // PUBLISHER
  // ==========================================
  publisher: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
  },

  inLanguage: "en",

  articleSection: "Travel Planning",

  keywords: [
    "How to Choose an India Travel Agency",
    "India Travel Agency",
    "Best India Travel Agency",
    "India Tour Operator",
    "Local Travel Agency India",
    "Personalized India Tours",
    "Custom India Tour Packages",
    "Private Tours India",
    "India Travel Planning",
    "Choosing a Tour Operator in India",
  ],

  isAccessibleForFree: true,
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

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  url: BLOG_URL,

  name:
    "How to Choose the Right India Travel Agency for Your Trip",

  description:
    "Learn how expert travel planning, local knowledge, personalized itineraries, and trusted guidance can transform your India journey into a smooth and memorable experience.",

  isPartOf: {
    "@type": "WebSite",
    url: BASE_URL,
    name: "India Heritage Travel",
  },

  inLanguage: "en",
};