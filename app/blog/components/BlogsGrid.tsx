import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

import { blogs } from "../data/blogsData";

const BLOGS_PER_PAGE = 12;

type BlogsGridProps = {
  currentPage: number;
};

type PaginationItem = number | "ellipsis";

export default function BlogsGrid({ currentPage }: BlogsGridProps) {
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const validCurrentPage = Math.min(
    Math.max(currentPage, 1),
    Math.max(totalPages, 1)
  );
  const startIndex = (validCurrentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  // Desktop pagination logic
  const getDesktopPagination = (): PaginationItem[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (validCurrentPage <= 3) {
      return [1, 2, 3, 4, "ellipsis", totalPages];
    }

    if (validCurrentPage >= totalPages - 2) {
      return [1, "ellipsis", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, "ellipsis", validCurrentPage - 1, validCurrentPage, validCurrentPage + 1, "ellipsis", totalPages];
  };

  // Mobile pagination logic (max 3 pages)
  const getMobilePagination = (): number[] => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (validCurrentPage === 1) {
      return [1, 2, 3];
    }

    if (validCurrentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [validCurrentPage - 1, validCurrentPage, validCurrentPage + 1];
  };

  const desktopPagination = getDesktopPagination();
  const mobilePagination = getMobilePagination();

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
                  font-normal tracking-normal
                  text-[#111]
                  break-words
                  transition-colors duration-300
                  group-hover:text-[#7C5C38]
                ">
                  {blog.title}
                </h3>

                <p className="mt-3 text-[14px] leading-5 text-[#5f5f5f] font-light">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-5 mt-4 text-[#8a8a8a]">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} strokeWidth={1.7} />
                    <span className="text-[12px] md:text-[13px] font-light">0</span>
                  </div>
                  <span className="text-[12px] md:text-[13px] font-light">
                    {blog.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 sm:mt-20">
            {/* Desktop / Tablet Pagination */}
            <div className="hidden sm:flex justify-center items-center gap-2 md:gap-3">
              {/* Previous Button */}
              {validCurrentPage > 1 ? (
                <Link
                  href={`/blog?page=${validCurrentPage - 1}`}
                  aria-label="Previous page"
                  className="
                    w-10 h-10 md:w-11 md:h-11 shrink-0
                    flex items-center justify-center
                    rounded-xl
                    border border-[#e8dfd3] bg-white
                    text-[#8b6a3d]
                    transition-all duration-300
                    hover:bg-[#8f6d42] hover:text-white hover:border-[#8b6a3d]
                  "
                >
                  <ChevronLeft size={18} strokeWidth={1.8} />
                </Link>
              ) : (
                <span
                  aria-disabled="true"
                  className="
                    w-10 h-10 md:w-11 md:h-11 shrink-0
                    flex items-center justify-center
                    rounded-xl
                    border border-[#e8dfd3] bg-white
                    text-[#8b6a3d]
                    opacity-40 cursor-not-allowed
                  "
                >
                  <ChevronLeft size={18} strokeWidth={1.8} />
                </span>
              )}

              {/* Desktop Page Numbers */}
              <div className="flex items-center gap-2 md:gap-3">
                {desktopPagination.map((page, index) => {
                  if (page === "ellipsis") {
                    return (
                      <span
                        key={`desktop-ellipsis-${index}`}
                        aria-hidden="true"
                        className="
                          w-6 h-10 md:h-11
                          flex items-center justify-center
                          text-[13px] font-medium text-[#8b6a3d]
                        "
                      >
                        ...
                      </span>
                    );
                  }

                  const isActive = validCurrentPage === page;

                  return (
                    <Link
                      key={page}
                      href={`/blog?page=${page}`}
                      aria-current={isActive ? "page" : undefined}
                      aria-label={`Go to page ${page}`}
                      className={`
                        min-w-10 h-10 md:min-w-11 md:h-11 shrink-0
                        flex items-center justify-center
                        rounded-xl
                        text-[13px] font-medium
                        transition-all duration-300
                        ${isActive
                          ? "bg-[#8f6d42] text-white shadow-sm scale-[1.03]"
                          : "bg-white text-[#8b6a3d] border border-[#e8dfd3] hover:bg-[#8f6d42] hover:text-white hover:border-[#8b6a3d]"
                        }
                      `}
                    >
                      {page}
                    </Link>
                  );
                })}
              </div>

              {/* Next Button */}
              {validCurrentPage < totalPages ? (
                <Link
                  href={`/blog?page=${validCurrentPage + 1}`}
                  aria-label="Next page"
                  className="
                    w-10 h-10 md:w-11 md:h-11 shrink-0
                    flex items-center justify-center
                    rounded-xl
                    border border-[#e8dfd3] bg-white
                    text-[#8b6a3d]
                    transition-all duration-300
                    hover:bg-[#8f6d42] hover:text-white hover:border-[#8b6a3d]
                  "
                >
                  <ChevronRight size={19} strokeWidth={1.8} />
                </Link>
              ) : (
                <span
                  aria-disabled="true"
                  className="
                    w-10 h-10 md:w-11 md:h-11 shrink-0
                    flex items-center justify-center
                    rounded-xl
                    border border-[#e8dfd3] bg-white
                    text-[#8b6a3d]
                    opacity-40 cursor-not-allowed
                  "
                >
                  <ChevronRight size={19} strokeWidth={1.8} />
                </span>
              )}
            </div>

            {/* Mobile Pagination */}
            <div className="flex sm:hidden w-full items-center justify-center gap-2">
              {/* Previous Button */}
              {validCurrentPage > 1 ? (
                <Link
                  href={`/blog?page=${validCurrentPage - 1}`}
                  aria-label="Previous page"
                  className="
                    w-10 h-10 shrink-0
                    flex items-center justify-center
                    rounded-xl
                    border border-[#e8dfd3] bg-white
                    text-[#8b6a3d]
                    transition-all duration-300
                    hover:bg-[#8f6d42] hover:text-white
                  "
                >
                  <ChevronLeft size={17} strokeWidth={1.8} />
                </Link>
              ) : (
                <span
                  aria-disabled="true"
                  className="
                    w-10 h-10 shrink-0
                    flex items-center justify-center
                    rounded-xl
                    border border-[#e8dfd3] bg-white
                    text-[#8b6a3d]
                    opacity-40 cursor-not-allowed
                  "
                >
                  <ChevronLeft size={17} strokeWidth={1.8} />
                </span>
              )}

              {/* Mobile Page Numbers */}
              <div className="flex items-center gap-2">
                {mobilePagination.map((page) => {
                  const isActive = validCurrentPage === page;

                  return (
                    <Link
                      key={page}
                      href={`/blog?page=${page}`}
                      aria-current={isActive ? "page" : undefined}
                      aria-label={`Go to page ${page}`}
                      className={`
                        w-10 h-10 shrink-0
                        flex items-center justify-center
                        rounded-xl
                        text-[12px] font-medium
                        transition-all duration-300
                        ${isActive
                          ? "bg-[#8f6d42] text-white shadow-sm"
                          : "bg-white text-[#8b6a3d] border border-[#e8dfd3] hover:bg-[#8f6d42] hover:text-white"
                        }
                      `}
                    >
                      {page}
                    </Link>
                  );
                })}
              </div>

              {/* Next Button */}
              {validCurrentPage < totalPages ? (
                <Link
                  href={`/blog?page=${validCurrentPage + 1}`}
                  aria-label="Next page"
                  className="
                    w-10 h-10 shrink-0
                    flex items-center justify-center
                    rounded-xl
                    border border-[#e8dfd3] bg-white
                    text-[#8b6a3d]
                    transition-all duration-300
                    hover:bg-[#8f6d42] hover:text-white
                  "
                >
                  <ChevronRight size={18} strokeWidth={1.8} />
                </Link>
              ) : (
                <span
                  aria-disabled="true"
                  className="
                    w-10 h-10 shrink-0
                    flex items-center justify-center
                    rounded-xl
                    border border-[#e8dfd3] bg-white
                    text-[#8b6a3d]
                    opacity-40 cursor-not-allowed
                  "
                >
                  <ChevronRight size={18} strokeWidth={1.8} />
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}