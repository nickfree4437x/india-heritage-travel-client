import { BLOG_AUTHORS } from "@/src/common/seo/authors";

// ============================================
// CONSTANTS
// ============================================

const SITE_URL = "https://indiaheritagetravel.com";

const BLOG_URL =
  `${SITE_URL}/blog/devgarh-travel-guide-palace-living-rural-rajasthan`;

const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1787540855/794597_fd4032cb16f84cbab9b5f5000e911a33_mv2_im009v.avif";


// ============================================
// DEVGARH TRAVEL GUIDE SCHEMA
// ============================================

const devgarhArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",

  "@id": `${BLOG_URL}#article`,

  headline:
    "Devgarh Travel Guide: Palace Living in Rural Rajasthan | India Heritage Travel",

  description:
    "Our Devgarh travel guide covers Deogarh Mahal's history, village safaris, Aravalli experiences, Mewari culture, luxury palace stays, itineraries and practical travel tips for exploring rural Rajasthan.",

  image: [IMAGE_URL],

  url: BLOG_URL,

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": BLOG_URL,
  },

  author: BLOG_AUTHORS.isha,

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
    "Devgarh Travel Guide",
    "Devgarh Rajasthan",
    "Deogarh Rajasthan",
    "Deogarh Mahal",
    "Devgarh Mahal",
    "Devgarh Palace",
    "Devgarh Palace Hotel",
    "Devgarh Rural Rajasthan",
    "Devgarh Village Safari",
    "Devgarh Jeep Safari",
    "Devgarh Horse Safari",
    "Devgarh Aravalli Hills",
    "Devgarh Heritage Hotel",
    "Devgarh Luxury Travel",
    "Devgarh Itinerary",
    "Devgarh Tourism",
    "Kumbhalgarh Fort",
    "Ranakpur Jain Temples",
    "Rajsamand Lake",
    "Mewar Rajasthan",
    "Rajasthan Heritage Travel",
    "Luxury Rajasthan Travel",
    "India Heritage Travel",
  ],
};

export default devgarhArticleSchema;