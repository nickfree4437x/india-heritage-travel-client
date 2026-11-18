import type { Metadata } from "next";

import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
  itemListSchema,
} from "./seo/schema";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

import HeroSection from "./sections/hero/HeroSection";
import SummerPlacesContentSection from "./sections/summer-paces/SummerPlacesContentSection";

import RishikeshSection from "./sections/cities/rishikesh/RishikeshSection";
import SpitiValleySection from "./sections/cities/spitivalley/SpitiValleySection";
import AndamanSection from "./sections/cities/andaman/AndamanSection";
import LehLadakhSection from "./sections/cities/leh-ladakh/LehLadakhSection";
import CoorgSection from "./sections/cities/coorg/CoorgSection";
import OotySection from "./sections/cities/ooty/OotySection";
import DarjeelingSection from "./sections/cities/darjeeling/DarjeelingSection";
import AuliSection from "./sections/cities/auli/AuliSection";
import ShillongSection from "./sections/cities/shilong/ShillongSection";

import Moreblogs from "./sections/more-blogs/Moreblogs";
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
            name: "Top 10 Places to Visit in India During Summer",
            url: "https://indiaheritagetravel.com/blog/top-place-to-visit-in-india",
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

      {/* ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema
          ),
        }}
      />
      
      {/* Page Sections */}
      <HeroSection />
      <SummerPlacesContentSection />
      <RishikeshSection />
      <SpitiValleySection />
      <AndamanSection />
      <LehLadakhSection />
      <CoorgSection />
      <OotySection />
      <DarjeelingSection />
      <AuliSection />
      <ShillongSection />
      <Moreblogs />
      <Footer />

    </main>
  );
}