// app/blogs/delhi-tour-guide/page.tsx
import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import DelhiGuideSection from "./components/DelhiGuideSection";
import DelhiExtraGuideSection from "./components/DelhiExtraGuideSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "New Delhi Travel Guide | Essential Tips for First-Time Visitors",
  description: "Navigate New Delhi with practical travel tips, cultural insights, iconic attractions, local experiences, food recommendations, and essential advice for first-time travelers. : indiaheritagetravel.com/blog/delhi-tour-guide",
};

export default function DelhiTourGuidePage() {
  return (
    <main className="w-full bg-[#f4f0ea]">

      <HeroSection />

      <DelhiGuideSection />

      <DelhiExtraGuideSection />
      <Moreblogs/>
      <Footer/>

    </main>
  );
}