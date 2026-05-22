import HeroSection from "./components/HeroSection";
import BlogContentSection from "./components/BlogContentSection";
import BlogExtraContentSection from "./components/BlogExtraContentSection";
import BlogFinalSection from "./components/BlogFinalSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

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