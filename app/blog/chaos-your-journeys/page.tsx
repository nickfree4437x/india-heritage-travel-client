import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import BlogContentSection from "./sections/content/BlogContentSection";
import BlogExtraContentSection from "./sections/extra-content/BlogExtraContentSection";
import BlogFinalSection from "./sections/final-content/BlogFinalSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: "How the Right India Travel Agency Can Transform Your Journey | Travel Planning Guide",
  description:
    "Learn how expert travel planning, local knowledge, personalized itineraries, and trusted guidance can turn your India journey into a seamless experience.",
  alternates: {
    canonical: "/blog/chaos-your-journeys",
  },
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