import type { Metadata } from "next";
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
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Top 10 Places to Visit in India During Summer",

  description:
    "Discover the best places to visit in India, from scenic mountains and cultural landmarks to heritage cities, beaches, and unforgettable travel experiences.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779652419/blog-7_kt857x.jpg",

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
      "https://indiaheritagetravel.com/blog/top-place-to-visit-in-india",
  },
};

export const metadata: Metadata = {
  title: "Best Places to Visit in India | Top Travel Destinations & Experiences",
  description:
    "Discover the best places to visit in India, from scenic mountains and cultural landmarks to heritage cities, beaches, and unforgettable travel experiences.",
  alternates: {
    canonical: "/blog/top-place-to-visit-in-india",
  },
};

export default function BlogDetailsPage() {
  return (
    <main>

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
            name: "Top Places to Visit in India | Best Travel Destinations & Experiences",
            url: "https://indiaheritagetravel.com/blog/top-place-to-visit-in-india",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema
          ),
        }}
      />

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
      <Moreblogs/>
      <Footer/>
    </main>
  );
}