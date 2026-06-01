import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import JaipurGuideIntroSection from "./components/JaipurGuideIntroSection";
import DayOneJaipurSection from "./components/DayOneJaipurSection";
import JaipurDayTwoSection from "./components/JaipurDayTwoSection";
import JaipurDayTwoExtraSection from "./components/JaipurDayTwoExtraSection";
import JaipurDayThreeSection from "./components/JaipurDayThreeSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Jaipur Travel Guide | Best Places to Visit, Tips & 3-Day Itinerary",
  description:
    "Explore Jaipur's forts, palaces, local markets, cultural landmarks, food experiences, and essential travel tips with this complete first-time visitor's guide. : indiaheritagetravel.com/blog/jaipur-travel-tips",
};

export default function BlogDetailsPage() {
  return (
    <main>
      <HeroSection />
      <JaipurGuideIntroSection />
      <DayOneJaipurSection />
      <JaipurDayTwoSection />
      <JaipurDayTwoExtraSection />
      <JaipurDayThreeSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}