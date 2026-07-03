import type { Metadata } from "next";

import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
  organizationSchema,
} from "./seo/schema";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

import HeroSection from "./sections/hero/HeroSection";
import LuxuryIndiaTourSection from "./sections/luxury-india/LuxuryIndiaTourSection";
import RoyalCitiesSection from "./sections/royal-cities/RoyalCitiesSection";
import SpiritualFinaleSection from "./sections/spiritual-final/SpiritualFinaleSection";

import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata =
  pageMetadata;

export default function BlogDetailsPage() {
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
            name: "Luxury India Tour Itinerary",
            url:
              "https://indiaheritagetravel.com/blog/ultimate-luxury-india",
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

      {/* Page Section */}
      <HeroSection />
      <LuxuryIndiaTourSection />
      <RoyalCitiesSection />
      <SpiritualFinaleSection />
      <Moreblogs />
      <Footer />
    </main>
  );
}