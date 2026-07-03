import type { Metadata } from "next";

// SEO
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common
import Footer from "@/src/sections/footer/Footer";
import HeroSection from "./section/hero-overview/HeroSection";
import OverViewSection from "./section/hero-overview/OverViewSection";
import HistorySection from "./section/history-architecture/HistorySection";
import HowToReachSection from "./section/history-architecture/HowToReach";
import TicketSection from "./section/ticket-timing/TicketSection";
import BestTimeSection from "./section/ticket-timing/VisitSection";
import NearbyAttractionsSection from "./section/ticket-timing/NearbyAttractionsSection";
import ItinerarySection from "./section/itinerary-food/ItinerarySection";
import FoodSection from "./section/itinerary-food/FoodSection";
import FAQSchema from "./section/faq/FAQSchema";
import FAQSection from "./section/faq/FAQSection";
import MoreBlogSection from "./section/more-blogs/MoreBlogs";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "The Complete Taj Mahal Travel Guide: History, Tickets & Best Time to Visit",

  description:
    "Complete Taj Mahal travel guide covering history, architecture, ticket prices, opening hours, sunrise visits, nearby attractions, photography tips, and a detailed Agra itinerary.",

  image:
    "https://res.cloudinary.com/dja5yspwr/image/upload/v1783055150/pexels-ayush-dwivedi-1217090-27374536_wfmxjg.jpg",

  author: {
    "@type": "Organization",
    name: "India Heritage Travel",
  },

  publisher: {
    "@type": "Organization",

    name: "India Heritage Travel",

    logo: {
      "@type": "ImageObject",

      url:
        "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png",
    },
  },

  mainEntityOfPage: {
    "@type": "WebPage",

    "@id":
      "https://indiaheritagetravel.com/blog/the-complete-taj-mahal-travel-guide",
  },
};

// ======================================================
// METADATA
// ======================================================

export const metadata: Metadata = {
  title:
    "Taj Mahal Travel Guide: History, Tickets & Best Time to Visit",

  description:
    "Plan the perfect Taj Mahal visit with our complete guide covering ticket prices, entry timings, history, architecture, photography tips, nearby attractions, and the best time to visit Agra.",

  keywords: [
    "Taj Mahal Travel Guide",
    "Taj Mahal Tickets",
    "Taj Mahal Entry Fee",
    "Best Time to Visit Taj Mahal",
    "Taj Mahal Sunrise Tour",
    "Agra Travel Guide",
    "Taj Mahal Opening Hours",
    "Things to Do in Agra",
    "Agra Fort",
    "India Heritage Travel",
  ],

  alternates: {
    canonical: "/blog/the-complete-taj-mahal-travel-guide",
  },

  openGraph: {
    title:
      "The Complete Taj Mahal Travel Guide: History, Tickets & Best Time to Visit",

    description:
      "Everything you need for a perfect Taj Mahal visit including ticket information, opening hours, sunrise experiences, photography tips, nearby attractions, and Agra itinerary planning.",

    url:
      "https://indiaheritagetravel.com/blog/the-complete-taj-mahal-travel-guide",

    siteName: "India Heritage Travel",

    images: [
      {
        url:
          "https://res.cloudinary.com/dja5yspwr/image/upload/v1783055150/pexels-ayush-dwivedi-1217090-27374536_wfmxjg.jpg",

        width: 1200,

        height: 630,

        alt:
          "Taj Mahal Travel Guide",
      },
    ],

    locale: "en_US",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "The Complete Taj Mahal Travel Guide",

    description:
      "History, tickets, best time to visit, sunrise views, Agra attractions, photography tips, and itinerary planning for the Taj Mahal.",

    images: [
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1783055150/pexels-ayush-dwivedi-1217090-27374536_wfmxjg.jpg",
    ],
  },
};

// ======================================================
// PAGE
// ======================================================

export default function TajMahalTravelGuidePage() {
  return (
    <main className="w-full bg-white">

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://indiaheritagetravel.com",
          },
          {
            name: "Blog",
            url: "https://indiaheritagetravel.com/blog",
          },
          {
            name: "Taj Mahal Travel Guide",
            url:
              "https://indiaheritagetravel.com/blog/taj-mahal-travel-guide",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* FAQ Schema */}
      <FAQSchema/>

      {/* Blog Sections */}
      <HeroSection/>
      <OverViewSection/>
      <HistorySection/>
      <HowToReachSection />
      <TicketSection/>
      <BestTimeSection/>
      <NearbyAttractionsSection/>
      <ItinerarySection/>
      <FoodSection/>
      <FAQSection/>

      {/* <MoreBlogsSection /> */}
      <MoreBlogSection/>
      <Footer />

    </main>
  );
}