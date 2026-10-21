import type { Metadata } from "next";

const SITE_URL = "https://indiaheritagetravel.com";

const BLOG_PATH = "/blog/murshidabad-nawabi-heritage-silk";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1792578586/pexels-souvik-dutta-2153793012-36099871_qw9jar.jpg";

const BLOG_TITLE = "Murshidabad Heritage Travel Guide: Palaces & Silk";

const BLOG_DESCRIPTION =
  "Explore Murshidabad's Nawabi heritage, Hazarduari Palace, historic mosques, Kathgola gardens and Bengal's silk-weaving traditions with this practical heritage travel guide.";

const FEATURED_IMAGE_ALT =
  "Neoclassical Hazarduari Palace in Murshidabad, West Bengal, glowing at sunset beside the Bhagirathi River";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: "India Heritage Travel",
  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,

  keywords: [
    "Murshidabad Nawabi Heritage and Silk",
    "Murshidabad travel guide",
    "Murshidabad heritage tourism",
    "Murshidabad Nawabi history",
    "Murshidabad Bengal Nawabs",
    "Hazarduari Palace",
    "Hazarduari Palace Museum",
    "Nizamat Imambara",
    "Katra Mosque Murshidabad",
    "Motijheel Murshidabad",
    "Kathgola Gardens",
    "Khushbagh Murshidabad",
    "Wasif Manzil",
    "Murshidabad silk",
    "Murshidabad silk weaving",
    "Murshidabad handloom heritage",
    "Baluchari saree history",
    "Bengal silk heritage",
    "Jagat Seth family",
    "Murshidabad architecture",
    "Murshidabad heritage walk",
    "Things to do in Murshidabad",
    "Best time to visit Murshidabad",
    "Kolkata to Murshidabad",
    "Berhampore travel guide",
    "Cossimbazar heritage",
    "Plassey historical site",
    "Murshidabad itinerary",
    "Murshidabad solo female travel",
    "West Bengal heritage tourism",
    "India Heritage Travel",
  ],

  authors: [{ name: "India Heritage Travel" }],
  creator: "India Heritage Travel",
  publisher: "India Heritage Travel",
  category: "Travel",

  alternates: {
    canonical: BLOG_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "article",
    locale: "en_US",
    url: BLOG_URL,
    siteName: "India Heritage Travel",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,

    images: [
      {
        url: FEATURED_IMAGE,
        width: 1200,
        height: 630,
        alt: FEATURED_IMAGE_ALT,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,

    images: [
      {
        url: FEATURED_IMAGE,
        alt: FEATURED_IMAGE_ALT,
      },
    ],
  },
};