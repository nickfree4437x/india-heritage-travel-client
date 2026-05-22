// app/blogs/page.tsx

import HeroSection from "./components/HeroSection";
import BlogsGrid from "./components/BlogsGrid";
import Footer from "@/src/components/sections/footer/Footer";

export default function BlogsPage() {
  return (
    <main className="w-full bg-[#f4f0ea]">
      <HeroSection />
      <BlogsGrid />
      <Footer/>
    </main>
  );
}