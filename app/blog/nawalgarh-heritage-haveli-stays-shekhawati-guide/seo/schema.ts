// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_PATH = "/blog/nawalgarh-heritage-haveli-stays-shekhawati-guide";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const HERO_IMAGE = `${SITE_URL}https://res.cloudinary.com/dja5yspwr/image/upload/v1788954498/vikram-chouhan-udaipur-web-designer-N-3yaHfspfo-unsplash_kq76qe.jpg`;
const BLOG_TITLE =
  "Nawalgarh Heritage Haveli Stays: The Complete Guide to Shekhawati's Painted Mansions";
const BLOG_DESCRIPTION =
  "Discover Nawalgarh Heritage Haveli Stays in Shekhawati — frescoed mansions, boutique havelis, forts and insider tips. Plan your luxury heritage escape with India Heritage Travel.";

// ============================================
// ARTICLE SCHEMA
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BLOG_URL}#article`,
  headline: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  image: [HERO_IMAGE],
  url: BLOG_URL,
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
      url: `${SITE_URL}/logo.png`,
    },
  },
  isPartOf: {
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "India Heritage Travel Blog",
    url: `${SITE_URL}/blog`,
  },
  inLanguage: "en",
  articleSection: "Rajasthan Travel",
  keywords: [
    "Nawalgarh Heritage Haveli Stays",
    "Nawalgarh Heritage Haveli",
    "Nawalgarh Travel Guide",
    "Nawalgarh Rajasthan",
    "Nawalgarh Havelis",
    "Shekhawati Havelis",
    "Shekhawati Travel Guide",
    "Shekhawati Frescoes",
    "Nawalgarh Heritage Hotels",
    "Nawalgarh Boutique Hotels",
    "Nawalgarh Luxury Stay",
    "Podar Haveli Museum",
    "Nawalgarh Fort",
    "Bala Qila Nawalgarh",
    "Aath Haveli Nawalgarh",
    "Morarka Haveli",
    "Bansidhar Bhagat Ji Haveli",
    "Mandawa",
    "Dundlod",
    "Fatehpur Shekhawati",
    "Mahansar",
    "Rajasthan Heritage Hotels",
    "Rajasthan Luxury Travel",
    "Shekhawati Heritage Tour",
    "India Heritage Travel",
  ],
};

// ============================================
// WEBPAGE SCHEMA
// ============================================
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": BLOG_URL,
  url: BLOG_URL,
  name: BLOG_TITLE,
  description:
    "A complete guide to Nawalgarh Heritage Haveli Stays, exploring Shekhawati's painted mansions, fresco art, historic havelis, forts and nearby heritage destinations.",
  isPartOf: {
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "India Heritage Travel Blog",
    url: `${SITE_URL}/blog`,
  },
  about: {
    "@type": "Place",
    name: "Nawalgarh",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  inLanguage: "en",
};

// ============================================
// ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "India Heritage Travel",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
  },
};