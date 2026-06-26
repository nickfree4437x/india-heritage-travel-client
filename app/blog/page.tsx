import type { Metadata } from "next";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import HeroSection from "./components/HeroSection";
import BlogsGrid from "./components/BlogsGrid";

// SEO Metadata
import { metadata as pageMetadata } from "./components/metadata";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE PROPS
// ============================================
type BlogsPageProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

// ============================================
// PAGE COMPONENT
// ============================================
export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(Number(params?.page || "1"), 1);

  return (
    <main className="w-full bg-white">
      <HeroSection />

      {/* Blogs Grid */}
      <BlogsGrid currentPage={currentPage} />
      <Footer />
    </main>
  );
}