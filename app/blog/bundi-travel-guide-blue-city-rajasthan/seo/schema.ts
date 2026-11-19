// ============================================
// CONSTANTS
// ============================================
const SITE_URL = "https://indiaheritagetravel.com";
const BLOG_URL = `${SITE_URL}/blog/bundi-travel-guide-blue-city-rajasthan`;
const IMAGE_URL =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1788000847/sanya-kakkar-fji2eOJ2ugk-unsplash_tvzs9n.jpg";

// ============================================
// BUNDI TRAVEL GUIDE SCHEMA
// ============================================
export const bundiTravelGuideSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BLOG_URL}#article`,
  headline:
    "Bundi Travel Guide: The Forgotten Blue Kingdom of Rajasthan",
  description:
    "Our Bundi travel guide reveals Rajasthan's forgotten blue city, Taragarh Fort, Chitrashala paintings, stepwells, food, itineraries and luxury travel tips.",
  image: [IMAGE_URL],
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
  "@id": "https://indiaheritagetravel.com/#organization",
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
    "Bundi Travel Guide",
    "Bundi Rajasthan",
    "Blue City Bundi",
    "Taragarh Fort",
    "Bundi Palace",
    "Chitrashala Bundi",
    "Bundi Stepwells",
    "Raniji Ki Baori",
    "Bundi Itinerary",
    "Things to Do in Bundi",
    "Bundi Travel Tips",
    "Offbeat Rajasthan",
    "Rajasthan Heritage Travel",
    "Luxury Rajasthan Travel",
  ],
};