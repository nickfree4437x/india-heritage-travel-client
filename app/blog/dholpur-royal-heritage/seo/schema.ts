// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/dholpur-royal-heritage";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1791962978/images_p6ctdj.jpg";
const BLOG_TITLE =
  "Dholpur Royal Heritage: Palaces, Red Sandstone and the Chambal River";
const BLOG_DESCRIPTION =
  "Explore Dholpur's royal heritage, Raj Niwas Palace, Babur's Lotus Garden, Machkund Temple, Shergarh Fort and Chambal River safaris in this complete travel guide.";

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: [FEATURED_IMAGE],
  url: BLOG_URL,
  inLanguage: "en",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },
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
    name: "Dholpur, Rajasthan",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dholpur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  keywords: [
    "Dholpur Royal Heritage",
    "Dholpur travel guide",
    "Raj Niwas Palace Dholpur",
    "Dholpur red sandstone",
    "National Chambal Sanctuary",
    "Chambal River safari",
    "Dholpur heritage tourism",
    "Rajasthan heritage tour",
    "India Heritage Travel",
  ],
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
        name: "Dholpur Royal Heritage",
        item: BLOG_URL,
      },
    ],
  },
  about: {
    "@type": "TouristDestination",
    name: "Dholpur",
    description:
      "A destination in Rajasthan known for its royal heritage, red sandstone architecture and the nearby Chambal River landscape.",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Rajasthan, India",
    },
  },
};
