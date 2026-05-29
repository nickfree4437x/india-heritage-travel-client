import HeroSection from "./components/HeroSection";
import HoneymoonContentSection from "./components/HoneymoonContentSection";
import RomanticEscapesSection from "./components/RomanticEscapesSection";
import HoneymoonFinalSection from "./components/HoneymoonFinalSection";
import HoneymoonFaqSection from "./components/HoneymoonFaqSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

export default function BlogDetailsPage() {
  return (
    <main>
      <HeroSection />
      <HoneymoonContentSection />
      <RomanticEscapesSection />
      <HoneymoonFinalSection />
      <HoneymoonFaqSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}