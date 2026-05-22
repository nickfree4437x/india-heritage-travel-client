import HeroSection from "./components/HeroSection";
import JaipurGuideIntroSection from "./components/JaipurGuideIntroSection";
import DayOneJaipurSection from "./components/DayOneJaipurSection";
import JaipurDayTwoSection from "./components/JaipurDayTwoSection";
import JaipurDayTwoExtraSection from "./components/JaipurDayTwoExtraSection";
import JaipurDayThreeSection from "./components/JaipurDayThreeSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

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