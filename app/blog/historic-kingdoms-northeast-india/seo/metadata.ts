
import type { Metadata } from "next";

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  // ----- BASE -----
  metadataBase: new URL("https://www.indiaheritagetravel.com"),
  applicationName: "India Heritage Travel",
  referrer: "origin-when-cross-origin",

  // ----- FORMAT DETECTION -----
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // ----- BASIC SEO -----
  title:
    "Historic Kingdoms of Northeast India: Ancient Capitals & Heritage | India Heritage Travel",

  description:
    "Explore the historic kingdoms of Northeast India, from Assam's Ahom dynasty and Tripura's Manikya rulers to Manipur, Meghalaya and Sikkim's living cultural heritage.",

  keywords: [
    "Historic Kingdoms of Northeast India",
    "Northeast India heritage tour",
    "Ancient kingdoms of Northeast India",
    "Ahom Kingdom Assam",
    "Charaideo Moidams",
    "Sivasagar heritage sites",
    "Manikya dynasty Tripura",
    "Meitei kingdom Manipur",
    "Sikkim Buddhist heritage",
    "Northeast India cultural tourism",
    "Northeast India historical places",
    "Northeast India travel itinerary",
  ],

  // ----- AUTHOR & PUBLISHER -----
  authors: [
    {
      name: "India Heritage Travel",
    },
  ],

  creator: "India Heritage Travel",
  publisher: "India Heritage Travel",
  category: "Travel",

  // ----- CANONICAL -----
  alternates: {
    canonical: "/blog/historic-kingdoms-northeast-india",
  },

  // ----- ROBOTS -----
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ----- OPEN GRAPH (Facebook / LinkedIn) -----
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://www.indiaheritagetravel.com/blog/historic-kingdoms-northeast-india",
    siteName: "India Heritage Travel",

    title:
      "Historic Kingdoms of Northeast India: Ancient Capitals & Heritage | India Heritage Travel",

    description:
      "Explore the historic kingdoms of Northeast India, from Assam's Ahom dynasty and Tripura's Manikya rulers to Manipur, Meghalaya and Sikkim's living cultural heritage.",

    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1795174079/images_rr6eyy.jpg",
        width: 1200,
        height: 630,
        alt: "Historic kingdoms and cultural landscapes of Northeast India",
      },
    ],
  },

  // ----- TWITTER (X) -----
  twitter: {
    card: "summary_large_image",
    title:
      "Historic Kingdoms of Northeast India: Ancient Capitals & Heritage | India Heritage Travel",
    description:
      "Explore the historic kingdoms of Northeast India, from Assam's Ahom dynasty and Tripura's Manikya rulers to Manipur, Meghalaya and Sikkim's living cultural heritage.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1795174079/images_rr6eyy.jpg",
    ],
  },
};
