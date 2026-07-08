import type { Metadata } from "next";

// Metadata & Schemas
import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
  organizationSchema,
} from "./seo/schema";

// SEO
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./section/faq/FAQSchema";

// Common
import Footer from "@/src/sections/footer/Footer";

// Sections
import HeroSection from "./section/hero-overview/HeroSection";
import OverViewSection from "./section/hero-overview/OverViewSection";
import HistorySection from "./section/history-architecture/HistorySection";
import HowToReachSection from "./section/history-architecture/HowToReach";
import TicketSection from "./section/ticket-timing/TicketSection";
import BestTimeSection from "./section/ticket-timing/VisitSection";
import NearbyAttractionsSection from "./section/ticket-timing/NearbyAttractionsSection";
import ItinerarySection from "./section/itinerary-food/ItinerarySection";
import FoodSection from "./section/itinerary-food/FoodSection";
import FAQSection from "./section/faq/FAQSection";
import MoreBlogSection from "./section/more-blogs/MoreBlogs";

export const metadata: Metadata =
  pageMetadata;

export default function TajMahalTravelGuidePage() {
  return (
    <main className="w-full bg-white">

      {/* Breadcrumb Schema */}
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
              "https://indiaheritagetravel.com/blog/the-complete-taj-mahal-travel-guide",
          },
        ]}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema
          ),
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema
          ),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            organizationSchema
          ),
        }}
      />

      {/* FAQ Schema */}
      <FAQSchema />

      {/* Blog Sections */}
      <HeroSection />
      <OverViewSection />
      <HistorySection />
      <HowToReachSection />
      <TicketSection />
      <BestTimeSection />
      <NearbyAttractionsSection />
      <ItinerarySection />
      <FoodSection />
      <FAQSection />
      <MoreBlogSection />
      <Footer />

    </main>
  );
}