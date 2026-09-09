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
      name: "How the Right India Travel Agency Can Transform Your Journey",
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
    "How the Right India Travel Agency Can Transform Your Journey",

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
    "India Travel Agency",
    "India Travel Companies",
    "India Tour Packages",
    "Travel Agency India",
    "India Travel Planning",
    "India Heritage Travel",
    "Custom India Tours",
    "Luxury India Travel",
    "India Vacation Planning",
    "India Holiday Packages",
    "Private Tours India",
    "Best India Travel Agency",
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
    "How the Right India Travel Agency Can Transform Your Journey",

  description:
    "Learn how expert travel planning, local knowledge, personalized itineraries, and trusted guidance can transform your India journey into a smooth and memorable experience.",

  isPartOf: {
    "@type": "WebSite",
    url: BASE_URL,
    name: "India Heritage Travel",
  },

  inLanguage: "en",
};