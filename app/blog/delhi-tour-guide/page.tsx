import type { Metadata } from "next";

import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

import HeroSection from "./sections/hero/HeroSection";
import DelhiGuideSection from "./sections/guide/DelhiGuideSection";
import DelhiExtraGuideSection from "./sections/extra-guide/DelhiExtraGuideSection";

import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata =
  pageMetadata;

export default function DelhiTourGuidePage() {
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
            name: "New Delhi Travel Guide",
            url:
              "https://indiaheritagetravel.com/blog/delhi-tour-guide",
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

      {/* Page Section */}
      <HeroSection />
      <DelhiGuideSection />
      <DelhiExtraGuideSection />
      <Moreblogs />
      <Footer />

    </main>
  );
}