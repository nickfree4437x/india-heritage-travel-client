
import type { Metadata } from "next";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import HeroSection from "./components/HeroSection";
import BlogsGrid from "./components/BlogsGrid";

// SEO Metadata
import { metadata as pageMetadata } from "./components/metadata";

// ============================================
// PAGE PROPS
// ============================================

type BlogsPageProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

// ============================================
// DYNAMIC SEO METADATA
// ============================================

export async function generateMetadata({
  searchParams,
}: BlogsPageProps): Promise<Metadata> {
  const params = await searchParams;

  const requestedPage = Number(params?.page || "1");

  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  const canonicalUrl =
    currentPage === 1
      ? "/blog"
      : `/blog?page=${currentPage}`;

  return {
    ...pageMetadata,

    alternates: {
      ...pageMetadata.alternates,
      canonical: canonicalUrl,
    },
  };
}

// ============================================
// PAGE COMPONENT
// ============================================

export default async function BlogsPage({
  searchParams,
}: BlogsPageProps) {
  const params = await searchParams;

  const requestedPage = Number(params?.page || "1");

  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  return (
    <main className="w-full bg-white">
      <HeroSection />

      {/* Blogs Grid */}
      <BlogsGrid currentPage={currentPage} />

      <Footer />
    </main>
  );
}
