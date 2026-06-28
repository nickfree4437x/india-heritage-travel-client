// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/solo-traveler`;
const IMAGE_URL =
  "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1579641987/blog-4_rarjqw.jpg";
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
      name: "Solo Women Travel India",
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
    "Solo Women Travel India | Safe, Meaningful & Empowering Travel Experiences",
  alternativeHeadline:
    "Empowering Solo Travel Experiences for Women Across India",
  description:
    "Explore safe and meaningful solo travel experiences across India. Discover wellness retreats, cultural journeys, hidden destinations, travel planning tips, and empowering adventures designed for solo women travelers.",
  image: {
    "@type": "ImageObject",
    url: IMAGE_URL,
    width: 1200,
    height: 630,
  },
  author: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: BASE_URL,
  },
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
  articleSection: "Solo Travel",
  keywords: [
    "Solo Women Travel India",
    "Solo Female Travel India",
    "Women Solo Travel",
    "Safe Travel India",
    "India Travel Guide",
    "Wellness Travel India",
    "Hidden Places India",
    "Cultural Travel India",
    "India Heritage Travel",
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
    "Solo Women Travel India | Safe, Meaningful & Empowering Travel Experiences",
  description:
    "Discover safe and meaningful solo travel experiences across India through wellness retreats, cultural journeys, hidden destinations, and inspiring adventures.",
  isPartOf: {
    "@type": "WebSite",
    url: BASE_URL,
    name: "India Heritage Travel",
  },
  inLanguage: "en",
};