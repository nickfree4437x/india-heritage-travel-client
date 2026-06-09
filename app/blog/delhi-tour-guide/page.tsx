// app/blogs/delhi-tour-guide/page.tsx
import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import DelhiGuideSection from "./sections/guide/DelhiGuideSection";
import DelhiExtraGuideSection from "./sections/extra-guide/DelhiExtraGuideSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: "New Delhi Travel Guide | Essential Tips for First-Time Visitors",
  description: "Navigate New Delhi with practical travel tips, cultural insights, iconic attractions, local experiences, food recommendations, and essential advice for first-time travelers. : indiaheritagetravel.com/blog/delhi-tour-guide",
  alternates: {
    canonical: "/blog/delhi-tour-guide",
  },
};

export default function DelhiTourGuidePage() {
  return (
    <main className="w-full bg-white">

      <HeroSection />

      <DelhiGuideSection />

      <DelhiExtraGuideSection />
      <Moreblogs/>
      <Footer/>

    </main>
  );
}