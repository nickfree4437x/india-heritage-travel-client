import type { Metadata } from "next";

// ============================================
// RAJASTHAN FORTS & PALACES - SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL("https://indiaheritagetravel.com"),
  applicationName: "India Heritage Travel",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  title:
    "15 Best Forts and Palaces in Rajasthan | India Heritage Travel",
  description:
    "Explore the 15 best forts and palaces in Rajasthan, including Amber Fort, Mehrangarh Fort, City Palace Udaipur, Jaisalmer Fort, Chittorgarh, and Kumbhalgarh with expert travel tips.",
  keywords: [
    "Forts and Palaces in Rajasthan",
    "Best Forts in Rajasthan",
    "Rajasthan Heritage Sites",
    "Amber Fort Jaipur",
    "Mehrangarh Fort Jodhpur",
    "City Palace Udaipur",
    "Jaisalmer Fort",
    "Chittorgarh Fort",
    "Kumbhalgarh Fort",
    "Rajasthan Travel Guide",
    "Rajasthan Tourism",
    "Historic Places in Rajasthan",
    "Royal Palaces Rajasthan",
    "Heritage Hotels Rajasthan",
    "India Heritage Travel",
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
    canonical: "/blog/top-forts-and-palaces-in-rajasthan",
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
    url: "https://indiaheritagetravel.com/blog/top-forts-and-palaces-in-rajasthan",
    siteName: "India Heritage Travel",
    title:
      "15 Best Forts & Palaces in Rajasthan: Ultimate Heritage Travel Guide",
    description:
      "Explore Rajasthan's most spectacular forts and palaces, including Amber Fort, Mehrangarh Fort, City Palace Udaipur, Jaisalmer Fort, Chittorgarh, and Kumbhalgarh.",
    images: [
      {
        url: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782461064/chirag-vashist-mnqLnEBHMp8-unsplash_fkxnnf.jpg",
        width: 1200,
        height: 630,
        alt: "Top Forts and Palaces in Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "15 Best Forts & Palaces in Rajasthan",
    description:
      "Discover Rajasthan's iconic forts and palaces with expert travel insights, history, and planning tips.",
    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782461064/chirag-vashist-mnqLnEBHMp8-unsplash_fkxnnf.jpg",
    ],
  },
};