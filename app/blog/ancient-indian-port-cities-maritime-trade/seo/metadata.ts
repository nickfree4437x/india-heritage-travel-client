import type { Metadata } from "next";

const SITE_URL = "https://www.indiaheritagetravel.com";
const BLOG_PATH = "/blog/ancient-indian-port-cities-maritime-trade";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const BLOG_TITLE =
  "Ancient Indian Port Cities and Maritime Trade | India Heritage Travel";

const BLOG_DESCRIPTION =
  "Explore ancient Indian port cities and maritime trade, from Lothal and Muziris to Arikamedu, Puhar, Tamralipta, Bharuch and Sopara.";

const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1793181024/pexels-ibrahim-poonawala-53441506-11195186_x9zcfm.jpg";

const FEATURED_IMAGE_ALT =
  "Historic Indian port cities and maritime trade routes connecting India's ancient coastal trading centres";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: "India Heritage Travel",
  referrer: "origin-when-cross-origin",

  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,

  keywords: [
    "ancient Indian port cities and maritime trade",
    "ancient seaports of India",
    "maritime trade in ancient India",
    "Indian Ocean trade routes",
    "Lothal ancient port",
    "Muziris ancient port",
    "Pattanam archaeological site",
    "Arikamedu ancient port",
    "Puhar ancient port",
    "Tamralipta ancient port",
    "Bharuch ancient port",
    "Sopara ancient port",
    "Roman trade with India",
    "spice trade in ancient India",
    "historic port cities in India",
    "ancient Indian maritime history",
    "India's coastal trade heritage",
    "India Heritage Travel",
  ],

  authors: [
    {
      name: "India Heritage Travel",
      url: SITE_URL,
    },
  ],

  creator: "India Heritage Travel",
  publisher: "India Heritage Travel",
  category: "Travel",

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  alternates: {
    canonical: BLOG_PATH,
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
    locale: "en_IN",
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