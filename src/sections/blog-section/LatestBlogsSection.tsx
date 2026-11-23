
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

import { blogs } from "@/app/blog/data/blogsData";

const LATEST_BLOGS_COUNT = 3;

export default function LatestBlogsSection() {
  // Get latest 3 blogs (newest first)
  const latestBlogs = blogs.slice(-LATEST_BLOGS_COUNT).reverse();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalBlogs = latestBlogs.length;

  // Navigate to next blog
  const nextBlog = () => {
    setCurrentIndex((prev) => (prev >= totalBlogs - 1 ? 0 : prev + 1));
  };

  // Navigate to previous blog
  const previousBlog = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalBlogs - 1 : prev - 1));
  };

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2
            className="
              text-[20px] sm:text-[24px] md:text-[28px]
              font-semibold
              tracking-wide
              text-[#6b4b26]
              leading-snug
              mb-2
              md:whitespace-nowrap
            "
          >
            Latest India Travel Blogs
          </h2>

          <p
            className="
              text-[12.5px] sm:text-[13.5px] md:text-[14px]
              font-normal
              leading-relaxed
              tracking-wide
              max-w-[580px]
              mx-auto
              text-[#595959]
            "
          >
            Explore the latest India travel blogs for destination guides, cultural
            insights, food experiences, and inspiration for your journey
            across India.
          </p>
        </div>

        {/* Mobile - One Card at a Time */}
        <div className="block md:hidden">
          <Link
            href={`/blog/${latestBlogs[currentIndex]?.slug}`}
            className="group block"
          >
            {/* Image */}
            <div className="relative overflow-hidden w-full">
              <Image
                src={latestBlogs[currentIndex]?.image}
                alt={latestBlogs[currentIndex]?.title || "India travel blog"}
                width={600}
                height={420}
                className="
                  w-full
                  h-[230px] sm:h-[280px]
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-[1.03]
                "
              />
            </div>

            {/* Content */}
            <div className="pt-5">
              <h3
                className="
                  text-[18px] sm:text-[20px]
                  leading-[1.22]
                  font-normal
                  tracking-normal
                  text-[#111]
                  break-words
                  transition-colors duration-300
                  group-hover:text-[#7C5C38]
                "
              >
                {latestBlogs[currentIndex]?.title}
              </h3>

              <p
                className="
                  mt-3
                  text-[14px]
                  leading-5
                  text-[#5f5f5f]
                  font-normal
                "
              >
                {latestBlogs[currentIndex]?.excerpt}
              </p>

              <div className="flex items-center gap-5 mt-4 text-[#595959]">
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} strokeWidth={1.7} />
                  <span className="text-[12px] font-normal">0</span>
                </div>

                <span className="text-[12px] font-normal">
                  {latestBlogs[currentIndex]?.date}
                </span>
              </div>
            </div>
          </Link>

          {/* Mobile Controls */}
          {totalBlogs > 1 && (
            <div className="mt-7">
              <div className="flex items-center justify-center gap-5">
                {/* Previous */}
                <button
                  type="button"
                  onClick={previousBlog}
                  aria-label="Previous blog"
                  className="
                    w-9 h-9
                    flex items-center justify-center
                    rounded-full
                    border border-[#e8dfd3]
                    bg-white
                    text-[#6b4b26]
                    transition-all duration-300
                    hover:bg-[#6b4b26] hover:text-white
                    active:scale-95
                  "
                >
                  <ChevronLeft size={17} strokeWidth={1.8} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-1">
                  {latestBlogs.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to blog ${index + 1}`}
                      aria-current={
                        index === currentIndex ? "true" : undefined
                      }
                      className="
                        w-12 h-12
                        flex items-center justify-center
                        rounded-full
                        transition-colors duration-300
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-[#6b4b26]
                      "
                    >
                      <span
                        aria-hidden="true"
                        className={`
                          block rounded-full transition-all duration-300
                          ${
                            index === currentIndex
                              ? "w-6 h-2 bg-[#c9a45c]"
                              : "w-2 h-2 bg-gray-400"
                          }
                        `}
                      />
                    </button>
                  ))}
                </div>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextBlog}
                  aria-label="Next blog"
                  className="
                    w-9 h-9
                    flex items-center justify-center
                    rounded-full
                    border border-[#e8dfd3]
                    bg-white
                    text-[#6b4b26]
                    transition-all duration-300
                    hover:bg-[#6b4b26] hover:text-white
                    active:scale-95
                  "
                >
                  <ChevronRight size={17} strokeWidth={1.8} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Tablet + Desktop - Multiple Cards */}
        <div
          className="
            hidden md:grid
            md:grid-cols-2 xl:grid-cols-3
            gap-x-8 gap-y-12
          "
        >
          {latestBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group block"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={420}
                  className="
                    w-full
                    h-[280px] xl:h-[300px]
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* Content */}
              <div className="pt-6">
                <h3
                  className="
                    text-[18px] md:text-[20px]
                    leading-[1.22]
                    font-normal
                    tracking-normal
                    text-[#111]
                    break-words
                    transition-colors duration-300
                    group-hover:text-[#7C5C38]
                  "
                >
                  {blog.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-5
                    text-[#5f5f5f]
                    font-normal
                  "
                >
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-5 mt-4 text-[#595959]">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} strokeWidth={1.7} />
                    <span className="text-[12px] md:text-[13px] font-normal">
                      0
                    </span>
                  </div>

                  <span className="text-[12px] md:text-[13px] font-normal">
                    {blog.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blogs */}
        <div className="flex justify-center mt-6 sm:mt-10">
          <Link
            href="/blog"
            className="
              inline-flex items-center gap-2
              rounded-md
              border border-[#6b4b26]
              px-6 py-3
              text-[12px]
              font-normal
              tracking-wide
              text-[#6b4b26]
              transition-all duration-300
              hover:bg-[#6b4b26] hover:text-white
            "
          >
            View All Blogs
            <ArrowRight size={15} strokeWidth={1.7} />
          </Link>
        </div>
      </div>
    </section>
  );
}
