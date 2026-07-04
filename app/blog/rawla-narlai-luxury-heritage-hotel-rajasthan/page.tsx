import type { Metadata } from "next";

// Metadata & Schemas
import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
  organizationSchema,
} from "./seo/schema";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";

// Common Components
import Footer from "@/src/sections/footer/Footer";

// Sections
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import LocationSection from "./sections/rooms-location/Location";
import RoomsSection from "./sections/rooms-location/RoomSection";
import MealSection from "./sections/meals-facilities/MealSection";
import Facilities from "./sections/meals-facilities/Facilities";
import MoreFacilities from "./sections/meals-facilities/MoreFacilities";
import FAQSection from "./sections/faq-conclusion/FaqSection";
import ConclusionSection from "./sections/faq-conclusion/Conclusion";
import MoreblogSection from "./sections/more-blogs/MoreBlog";

export const metadata: Metadata =
  pageMetadata;

export default function RawlaNarlaiPage() {
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
            name: "Rawla Narlai Rajasthan",
            url:
              "https://indiaheritagetravel.com/blog/rawla-narlai-luxury-heritage-hotel-rajasthan",
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

      {/* Page Section */}
      <HeroSection />
      <IntroSection />
      <LocationSection />
      <RoomsSection />
      <MealSection />
      <Facilities />
      <MoreFacilities />
      <FAQSection />
      <ConclusionSection />
      <MoreblogSection />
      <Footer />

    </main>
  );
}