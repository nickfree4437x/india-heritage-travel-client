import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

import { blogs } from "../data/blogsData";

const BLOGS_PER_PAGE = 9;

type BlogsGridProps = {
  currentPage: number;
};

export default function BlogsGrid({ currentPage }: BlogsGridProps) {
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const validCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (validCurrentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  return (
    <section className="py-14 sm:py-16 xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">
          {currentBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group block"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={420}
                  className="
                    w-full
                    h-[240px] sm:h-[280px] xl:h-[300px]
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* Blog Content */}
              <div className="pt-6">
                <h3 className="
                  text-[18px] md:text-[20px]
                  leading-[1.22]
                  font-normal
                  tracking-normal
                  text-[#111]
                  break-words
                  transition-colors duration-300
                  group-hover:text-[#7C5C38]
                ">
                  {blog.title}
                </h3>

                <p className="
                  mt-3
                  text-[14px] leading-5
                  text-[#5f5f5f]
                  font-light
                ">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-5 mt-4 text-[#8a8a8a]">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} strokeWidth={1.7} />
                    <span className="text-[12px] md:text-[13px] font-light">0</span>
                  </div>
                  <span className="text-[12px] md:text-[13px] font-light">{blog.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-16 sm:mt-20">
          {/* Previous Button */}
          {validCurrentPage > 1 ? (
            <Link
              href={`/blog?page=${validCurrentPage - 1}`}
              className="
                w-[44px] h-[44px]
                flex items-center justify-center
                rounded-xl
                border border-[#e8dfd3]
                bg-white
                text-[#8b6a3d]
                transition-all duration-300
                hover:bg-[#8f6d42] hover:text-white hover:border-[#8b6a3d]
              "
            >
              <ChevronLeft size={18} strokeWidth={1.8} />
            </Link>
          ) : (
            <span className="
              w-[44px] h-[44px]
              flex items-center justify-center
              rounded-xl
              border border-[#e8dfd3]
              bg-white
              text-[#8b6a3d]
              opacity-40
              cursor-not-allowed
            ">
              <ChevronLeft size={18} strokeWidth={1.8} />
            </span>
          )}

          {/* Page Numbers */}
          <div className="flex items-center gap-2 sm:gap-3">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <Link
                  key={pageNumber}
                  href={`/blog?page=${pageNumber}`}
                  className={`
                    relative
                    min-w-[44px] h-[44px]
                    flex items-center justify-center
                    rounded-xl
                    text-[13px] font-medium
                    transition-all duration-300
                    ${
                      validCurrentPage === pageNumber
                        ? `
                          bg-[#8f6d42] text-white
                          shadow-sm
                          scale-[1.04]
                        `
                        : `
                          bg-white text-[#8b6a3d]
                          border border-[#e8dfd3]
                          hover:bg-[#8f6d42] hover:text-white hover:border-[#8b6a3d]
                        `
                    }
                  `}
                >
                  {pageNumber}
                </Link>
              );
            })}
          </div>

          {/* Next Button */}
          {validCurrentPage < totalPages ? (
            <Link
              href={`/blog?page=${validCurrentPage + 1}`}
              className="
                w-[44px] h-[44px]
                flex items-center justify-center
                rounded-xl
                border border-[#e8dfd3]
                bg-white
                text-[#8b6a3d]
                transition-all duration-300
                hover:bg-[#8f6d42] hover:text-white hover:border-[#8b6a3d]
              "
            >
              <ChevronRight size={20} strokeWidth={1.8} />
            </Link>
          ) : (
            <span className="
              w-[44px] h-[44px]
              flex items-center justify-center
              rounded-xl
              border border-[#e8dfd3]
              bg-white
              text-[#8b6a3d]
              opacity-40
              cursor-not-allowed
            ">
              <ChevronRight size={20} strokeWidth={1.8} />
            </span>
          )}
        </div>
      </div>
    </section>
  );
}