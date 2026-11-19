// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/ranthambore-luxury-heritage-wildlife";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1792403803/gaurav-sharma-G0hzu3bLew4-unsplash_wvsrxl.jpg";
const BLOG_TITLE =
  "Ranthambore Luxury Heritage and Wildlife: Where Royal Rajasthan Meets the Tiger Forest";
const BLOG_DESCRIPTION =
  "Explore Ranthambore's royal history, ancient fort, tiger safaris, wildlife conservation, luxury jungle camps and heritage stays with this complete travel guide.";

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
  "@id": "https://indiaheritagetravel.com/#organization",
},
  articleSection: "Rajasthan Wildlife and Heritage Travel",
  about: {
    "@type": "Place",
    name: "Ranthambore National Park",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sawai Madhopur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  keywords: [
    "Ranthambore Luxury Heritage and Wildlife",
    "Ranthambore National Park",
    "Ranthambore tiger safari",
    "Ranthambore Fort",
    "Ranthambore wildlife conservation",
    "Ranthambore heritage hotels",
    "Luxury tented camps Ranthambore",
    "Rajasthan wildlife holidays",
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
        name: "Ranthambore Luxury Heritage and Wildlife",
        item: BLOG_URL,
      },
    ],
  },
  about: {
    "@type": "TouristDestination",
    name: "Ranthambore National Park",
    description:
      "A wildlife destination in Rajasthan known for tiger safaris, historic Ranthambore Fort and its natural landscapes.",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Rajasthan, India",
    },
  },
};
