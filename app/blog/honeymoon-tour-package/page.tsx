import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import HoneymoonContentSection from "./sections/content/HoneymoonContentSection";
import RomanticEscapesSection from "./sections/romantic-escapes/RomanticEscapesSection";
import HoneymoonFinalSection from "./sections/final-content/HoneymoonFinalSection";
import HoneymoonFaqSection from "./sections/faq/HoneymoonFaqSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Best Honeymoon Tour Packages in India | Romantic & Luxury Getaways",
  description:
    "Explore romantic honeymoon destinations in India featuring luxury stays, cultural experiences, scenic landscapes, personalized itineraries, and unforgettable memories.",
};

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