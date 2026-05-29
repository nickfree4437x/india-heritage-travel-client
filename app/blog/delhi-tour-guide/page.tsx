// app/blogs/delhi-tour-guide/page.tsx

import HeroSection from "./components/HeroSection";
import DelhiGuideSection from "./components/DelhiGuideSection";
import DelhiExtraGuideSection from "./components/DelhiExtraGuideSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

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