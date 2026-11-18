// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/alwar-luxury-heritage-retreats";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1791870799/images_at5yuw.jpg";
const BLOG_TITLE =
  "Alwar Luxury Heritage Retreats: Forgotten Palaces, Wild Aravallis and Royal Stays";
const BLOG_DESCRIPTION =
  "Discover Alwar's luxury heritage retreats, royal palaces, Siliserh Lake Palace, Hill Fort Kesroli, Tijara Fort-Palace and Sariska Tiger Reserve in this complete Rajasthan travel guide.";

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
    name: "Alwar, Rajasthan",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alwar",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  keywords: [
    "Alwar Luxury Heritage Retreats",
    "Alwar luxury heritage hotels",
    "Alwar heritage stays",
    "Siliserh Lake Palace",
    "Hill Fort Kesroli",
    "Tijara Fort Palace",
    "Sariska Tiger Reserve",
    "Alwar Rajasthan travel guide",
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
        name: "Alwar Luxury Heritage Retreats",
        item: BLOG_URL,
      },
    ],
  },
  about: {
    "@type": "TouristDestination",
    name: "Alwar",
    description:
      "A Rajasthan destination known for its royal heritage, historic palaces, Aravalli landscapes and access to Sariska Tiger Reserve.",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Rajasthan, India",
    },
  },
};
