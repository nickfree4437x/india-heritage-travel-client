import type { Metadata } from "next";

// ============================================
// HERITAGE HOTELS - SEO METADATA
// ============================================

const canonicalUrl =
  "https://indiaheritagetravel.com/blog/top-heritage-hotel-in-india";

const socialImage =
  "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779638017/blog-9_h4aqqf.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://indiaheritagetravel.com"),

  applicationName: "India Heritage Travel",
  referrer: "origin-when-cross-origin",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  title: "Best Heritage Hotels in India: Royal Palace Stays",

  description:
    "Discover the best heritage hotels in India, from Rajasthan's royal palace hotels to historic forts and heritage havelis. Explore traditional architecture, cultural experiences, and distinctive stays for your India trip.",

  keywords: [
    "Best Heritage Hotels in India",
    "Heritage Hotels in India",
    "Luxury Heritage Hotels India",
    "Heritage Hotels in Rajasthan",
    "Palace Hotels in India",
    "Royal Palace Stays in India",
    "Historic Hotels in India",
    "Heritage Hotels in Jaipur",
    "Palace Hotels in Rajasthan",
    "Heritage Havelis in India",
    "Luxury Heritage Stays India",
    "Royal Heritage Stays in India",
  ],

  authors: [
    {
      name: "India Heritage Travel",
      url: "https://indiaheritagetravel.com",
    },
  ],

  creator: "India Heritage Travel",
  publisher: "India Heritage Travel",
  category: "Travel",

  alternates: {
    canonical: canonicalUrl,
  },

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

  openGraph: {
    type: "article",
    locale: "en_US",
    url: canonicalUrl,
    siteName: "India Heritage Travel",
    title: "Best Heritage Hotels in India: Royal Palace Stays",
    description:
      "Explore India's heritage hotels, royal palaces, historic architecture and distinctive cultural stays.",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Heritage hotels and royal palace stays in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Heritage Hotels in India: Royal Palace Stays",
    description:
      "Discover heritage hotels, royal palaces and historic stays across India.",
    images: [socialImage],
  },
};