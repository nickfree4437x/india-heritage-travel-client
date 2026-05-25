
import Footer from "@/src/components/sections/footer/Footer";
import FAQHero from "./FAQHero";
import FaqSection from "@/src/components/sections/festivals/common/FAQSection";

export default function FAQPage() {
  return (
    <div className="bg-white">
      <FAQHero />
      <div className="mt-10">
        <FaqSection/>
      </div>
      <Footer/>
    </div>
  );
}