import type { Metadata } from "next";

const SITE_URL = "https://indiaheritagetravel.com";

const BLOG_PATH = "/blog/osian-heritage-luxury-desert-travel";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const FEATURED_IMAGE =
  "https://res.cloudinary.com/dja5yspwr/image/upload/v1792492130/pexels-ethan-sarkar-2060961318-32851834_p9tcae.jpg";

const BLOG_TITLE =
  "Osian Heritage & Luxury Desert Travel: Temples, Thar Sunsets & Stays";

const BLOG_DESCRIPTION =
  "Discover Osian near Jodhpur, from ancient Jain and Hindu temples and Pratihara architecture to luxury desert camps, camel safaris, sunset dinners and practical travel tips.";

const FEATURED_IMAGE_ALT =
  "Ancient sandstone temples of Osian glowing at sunset on the edge of the Thar Desert, Rajasthan";

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
    "Osian Heritage and Luxury Desert Travel",
    "Osian travel guide",
    "Osian Rajasthan",
    "Osian temples",
    "Osian heritage travel",
    "Osian luxury desert camps",
    "Osian luxury desert safari",
    "Osian camel safari",
    "Osian jeep safari",
    "Mahavira Jain Temple Osian",
    "Sachiya Mata Temple",
    "Harihara Temples Osian",
    "Surya Temple Osian",
    "Pipla Devi Temple",
    "Katan Baori Osian",
    "Osian Pratihara architecture",
    "Gurjara-Pratihara temples",
    "Osian Jain heritage",
    "Osian Hindu temples",
    "Osian desert camping",
    "Osian luxury tented camps",
    "Osian private desert dinner",
    "Osian folk music",
    "Things to do in Osian",
    "Best time to visit Osian",
    "Jodhpur to Osian",
    "Osian itinerary",
    "Osian heritage hotels",
    "Osian solo female travel",
    "Rajasthan desert travel",
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