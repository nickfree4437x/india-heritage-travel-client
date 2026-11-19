const SITE_URL = "https://indiaheritagetravel.com";

const BLOG_PATH = "/blog/murshidabad-nawabi-heritage-silk";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1792578586/pexels-souvik-dutta-2153793012-36099871_qw9jar.jpg";

const BLOG_TITLE = "Murshidabad Heritage Travel Guide: Palaces & Silk";

const BLOG_DESCRIPTION =
  "Explore Murshidabad's Nawabi heritage, Hazarduari Palace, historic mosques, Kathgola gardens and Bengal's silk-weaving traditions with this practical heritage travel guide.";

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

  articleSection: "West Bengal Heritage Travel",

  about: {
    "@type": "Place",
    name: "Murshidabad, West Bengal",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Murshidabad",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  },

  keywords: [
    "Murshidabad Nawabi Heritage and Silk",
    "Murshidabad travel guide",
    "Murshidabad Nawabi history",
    "Hazarduari Palace",
    "Katra Mosque Murshidabad",
    "Kathgola Gardens",
    "Murshidabad silk weaving",
    "Bengal silk heritage",
    "West Bengal heritage tourism",
    "India Heritage Travel",
  ],
};

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
        name: "Murshidabad Heritage Travel Guide",
        item: BLOG_URL,
      },
    ],
  },

  about: {
    "@type": "TouristDestination",
    name: "Murshidabad",
    description:
      "A heritage destination in West Bengal known for Nawabi history, historic palaces, mosques, gardens and silk-weaving traditions.",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "West Bengal, India",
    },
  },
};
