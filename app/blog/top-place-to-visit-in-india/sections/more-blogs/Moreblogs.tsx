// app/blogs/india-food-guide/components/MoreFoodSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

// ============================================================
// DATA
// ============================================================

const blogs = [
  {
    title: "Luxury Ayurveda & Wellness Retreats in India - Your Perfect Escape",
    image:
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779801053/blog-8_rtahzc.jpg",
    date: "06 Mar",
    slug: "luxury-ayurveda-retreat",
  },
  {
    title: "The Ultimate First-Time Traveler's Guide to India",
    image:
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779637895/blog-3_dksm9v.jpg",
    date: "10 Dec",
    slug: "indian-traveller-guide",
  },
  {
    title: "Top Heritage Hotels in India for an Exclusive Stay",
    image:
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779638017/blog-9_h4aqqf.jpg",
    date: "6 Feb",
    slug: "top-heritage-hotel-in-india",
  },
];

// ============================================================
// COMPONENT
// ============================================================

export default function MoreFoodSection() {
  return (
    <section className="w-full bg-white pb-14 border-t border-[#ddd4ca]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        
        {/* ============================================
            TOP AREA (Heading)
            ============================================ */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-14">
          {/* You can add a heading here if needed */}
        </div>

        {/* ============================================
            BLOG GRID
            ============================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">
          
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={`/blog/${blog.slug}`}
              className="group block"
            >
              {/* --- Image --- */}
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={700}
                  height={500}
                  className="
                    w-full
                    h-[260px] sm:h-[300px]
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-[1.03]
                  "
                />

                {/* Overlay */}
                <div className="
                  absolute inset-0
                  bg-black/0 group-hover:bg-black/10
                  transition-all duration-500
                " />
              </div>

              {/* --- Content --- */}
              <div className="pt-7">
                
                {/* Title */}
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

                {/* Meta (Comments + Date) */}
                <div className="
                  flex items-center gap-5 mt-5
                  text-[#5f5f5f] text-[14px] font-light
                ">
                  {/* Comments */}
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} strokeWidth={1.8} />
                    <span>0</span>
                  </div>

                  {/* Date */}
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