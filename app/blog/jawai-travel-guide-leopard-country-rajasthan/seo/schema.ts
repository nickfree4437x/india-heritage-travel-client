// ============================================
// CONSTANTS
// ============================================

const SITE_URL = "https://indiaheritagetravel.com";

const BLOG_URL =
  "https://indiaheritagetravel.com/blog/jawai-travel-guide-leopard-country-rajasthan/";

// ============================================
// JAWAI TRAVEL GUIDE SCHEMA
// ============================================

const JawaiTravelGuideSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  "@id": `${BLOG_URL}#article`,

  headline:
    "Jawai Travel Guide: Where Luxury Meets Leopard Country | Rajasthan",

  description:
    "Our complete Jawai travel guide covers leopard safaris, granite hills, Rabari culture, Jawai Dam, luxury tented camps, best time to visit, itineraries and practical travel tips.",

  image: [
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1787455333/advik-mehta-J7g4hCd8oDo-unsplash_iouelw.jpg",
  ],

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
    "Jawai Travel Guide",
    "Jawai Rajasthan",
    "Jawai Leopard Safari",
    "Jawai Leopard Country",
    "Jawai Wildlife Safari",
    "Jawai Hills",
    "Jawai Dam",
    "Rabari Culture Jawai",
    "Jawai Luxury Camps",
    "Jawai Safari",
    "Jawai Itinerary",
    "Jawai Travel Tips",
    "Rajasthan Wildlife Tour",
    "Luxury Rajasthan Travel",
  ],
};

export default JawaiTravelGuideSchema;