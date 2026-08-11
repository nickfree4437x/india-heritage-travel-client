// ============================================
// CONSTANTS
// ============================================
const BASE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${BASE_URL}/blog/india-travel-cost-guide`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1786420508/c-rayban-CIXoFys3gsw-unsplash_cewrpk.jpg";
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
      name: "India Travel Cost Guide",
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
    "India Travel Cost Guide 2026 | Daily Budget, Hotels, Transport & Visa Costs",
  description:
    "How much does a trip to India cost in 2026? Explore realistic India travel costs for budget, mid-range and luxury travellers, including visas, hotels, food, transport, attraction fees, regional costs and a 7-day Golden Triangle budget.",
  image: [IMAGE_URL],
  author: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: BASE_URL,
  },
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
  isPartOf: {
    "@type": "Blog",
    "@id": `${BASE_URL}/blog`,
    name: "India Heritage Travel Blog",
    url: `${BASE_URL}/blog`,
  },
  inLanguage: "en-US",
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "India Travel Cost Guide",
  description:
    "A complete guide to India travel costs in 2026 covering visa fees, flights, accommodation, food, transportation, attraction fees, regional costs, daily budgets, luxury travel and a sample Golden Triangle itinerary.",
  url: BLOG_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "India Heritage Travel",
    url: BASE_URL,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    "@id": `${BLOG_URL}#breadcrumb`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: IMAGE_URL,
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
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
  },
};