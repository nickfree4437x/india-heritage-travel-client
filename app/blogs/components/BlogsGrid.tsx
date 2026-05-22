// app/blogs/components/BlogsGrid.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { blogs } from "../data/blogsData";

const BLOGS_PER_PAGE = 6;

export default function BlogsGrid() {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    blogs.length / BLOGS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * BLOGS_PER_PAGE;

  const currentBlogs = blogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-[#f4f0ea]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">

          {currentBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group block"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={420}
                  className="
                    w-full
                    h-[240px]
                    sm:h-[280px]
                    lg:h-[300px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="pt-8">

                {/* TITLE */}
                <h3
                  className="
                    text-[25px]
                    leading-[1.22]

                    font-normal
                    tracking-normal

                    text-[#111]

                    break-words

                    transition-colors
                    duration-300

                    group-hover:text-[#7C5C38]
                  "
                  style={{
                    fontFamily: "'Marcellus', serif",
                    fontWeight: 400,
                    wordWrap: "break-word",
                    textTransform: "none",
                    lineHeight: 1,
                  }}
                >
                  {blog.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-5
                    text-[#5f5f5f]
                    font-light
                  "
                >
                  {blog.excerpt}
                </p>

                {/* META */}
                <div className="flex items-center gap-5 mt-6 text-[#8a8a8a]">

                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} strokeWidth={1.7} />
                    <span className="text-sm">0</span>
                  </div>

                  <span className="text-sm">
                    {blog.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-3 mt-16 sm:mt-20">

          {Array.from({
            length: totalPages,
          }).map((_, index) => (

            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`
                relative

                min-w-[42px]
                h-[42px]

                rounded-full

                text-sm
                font-medium

                transition-all
                duration-300

                ${
                  currentPage === index + 1
                    ? `
                      bg-[#2b2b2b]
                      text-white
                      shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                    `
                    : `
                      bg-white/90
                      text-[#2b2b2b]

                      border
                      border-[#e7dfd4]

                      hover:border-[#2b2b2b]
                      hover:bg-[#2b2b2b]
                      hover:text-white
                    `
                }
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}