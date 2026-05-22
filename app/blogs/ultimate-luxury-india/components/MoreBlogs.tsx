// app/blogs/india-food-guide/components/MoreFoodSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const blogs = [
  {
    title:
      "Top Safe & Luxury Destinations in India for Solo Female Travellers",
    image: "/blogs/blog-2/blog-2.jpg",
    date: "August 21, 2024",
    slug: "safe-luxury-destinations",
  },
  {
    title:
      "The Ultimate First-Time Traveler’s Guide to India",
    image: "/blogs/blog-3/blog-3.jpg",
    date: "November 28, 2025",
    slug: "indian-traveler-guide",
  },
  {
    title:
      "Top Heritage Hotels in India for an Exclusive Stay",
    image: "/blogs/blog-9/blog-9.jpg",
    date: "January 12, 2026",
    slug: "top-heritage-hotel",
  },
];

export default function MoreFoodSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 border-t border-[#ddd4ca]">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* TOP AREA */}
        <div
          className="
            flex
            flex-col
            gap-5

            sm:flex-row
            sm:items-end
            sm:justify-between

            mb-12
            sm:mb-14
          "
        >

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">

          {blogs.map((blog, index) => (
            <Link
                key={index}
                href={`/blogs/${blog.slug}`}
                className="group block"
              >

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-sm">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={700}
                  height={500}
                  className="
                    w-full

                    h-[260px]
                    sm:h-[300px]

                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-[1.03]
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-black/0
                    group-hover:bg-black/10

                    transition-all
                    duration-500
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="pt-7">

                {/* TITLE */}
                <h3
                  className="
                    text-[18px]
                    sm:text-[22px]

                    leading-[1.2]

                    text-[#111111]

                    transition-colors
                    duration-300

                    group-hover:text-[#7C5C38]
                  "
                  style={{
                    fontFamily: "'Marcellus', serif",
                  }}
                >
                  {blog.title}
                </h3>

                {/* META */}
                <div
                  className="
                    flex
                    items-center
                    gap-5

                    mt-5

                    text-[#8b8b8b]
                    text-sm
                  "
                >

                  <div className="flex items-center gap-2">

                    <MessageCircle
                      size={16}
                      strokeWidth={1.8}
                    />

                    <span>0</span>
                  </div>

                  <span>{blog.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}