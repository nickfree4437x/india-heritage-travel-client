// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/neemrana-fort-palace-stay";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1791613344/pexels-pramodtiwari-33797765_qphwvf.jpg";
const BLOG_TITLE =
  "Neemrana Fort Palace Stay: The Art of Staying in a Historic Fort";
const BLOG_DESCRIPTION =
  "Plan your Neemrana Fort Palace stay with our complete guide to its Rajput history, eleven terraced levels, heritage experiences, stepwell, luxury accommodation, itineraries and travel tips.";

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: [FEATURED_IMAGE],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },
  url: BLOG_URL,
  author: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "India Heritage Travel",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
  },
  articleSection: "Rajasthan Travel",
  about: {
    "@type": "Place",
    name: "Neemrana Fort Palace",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Neemrana",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  keywords: [
    "Neemrana Fort Palace Stay",
    "Neemrana Fort Palace",
    "Neemrana heritage hotel",
    "Rajasthan heritage hotels",
    "Historic fort hotels in India",
    "Neemrana travel guide",
    "Neemrana Fort architecture",
    "Neemrana Baori stepwell",
    "Neemrana weekend trip",
    "India Heritage Travel",
  ],
  inLanguage: "en",
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BLOG_URL}#webpage`,
  url: BLOG_URL,
  name: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "India Heritage Travel",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: FEATURED_IMAGE,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Neemrana Fort Palace Stay",
        item: BLOG_URL,
      },
    ],
  },
  about: {
    "@type": "TouristDestination",
    name: "Neemrana Fort Palace",
    description:
      "A historic fort palace in Neemrana, Rajasthan, known for its terraced architecture and heritage hospitality.",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Rajasthan, India",
    },
  },
};
