import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import BlogContentSection from "./components/BlogContentSection";
import BlogExtraContentSection from "./components/BlogExtraContentSection";
import BlogFinalSection from "./components/BlogFinalSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "How the Right India Travel Agency Can Transform Your Journey | Travel Planning Guide",
  description:
    "Learn how expert travel planning, local knowledge, personalized itineraries, and trusted guidance can turn your India journey into a seamless experience.",
};

export default function BlogDetailsPage() {
  return (
    <main>
      <HeroSection />
      <BlogContentSection />
      <BlogExtraContentSection />
      <BlogFinalSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}