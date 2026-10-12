// app/blogs/india-food-guide/components/MoreFoodSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

// Related blogs data
const blogs = [
  {
    title:
      "Top 10 Places to Visit in India During Summer",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779652419/blog-7_kt857x.jpg",
    date: "20 Apr",
    slug: "top-place-to-visit-in-india",
  },
  {
    title:
      "The Ultimate First-Time Traveler's Guide to India",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782540276/pexels-soubhagya23-17685500_tihzeu.jpg",
    date: "Dec 10",
    slug: "indian-traveller-guide",
  },
  {
    title:
      "Ultimate 10-Day Luxury India Tour Itinerary",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779819835/blog-10_ex9fic.webp",
    date: "02 May",
    slug: "ultimate-luxury-india",
  },
];

export default function MoreFoodSection() {
  return (
    <section className="w-full bg-white pb-12 md:pb-14 pt-12 md:pt-14 border-t border-[#ddd4ca]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={`/blog/${blog.slug}`}
              className="group block"
            >
              {/* Blog Image */}
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

                {/* Image Overlay */}
                <div className="
                  absolute inset-0
                  bg-black/0 group-hover:bg-black/10
                  transition-all duration-500
                " />
              </div>

              {/* Content */}
              <div className="pt-7">
                {/* Title */}
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

                {/* Meta Info */}
                <div className="
                  flex items-center gap-5
                  mt-5
                  text-[#5f5f5f]
                  text-[14px]
                  font-light
                ">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} strokeWidth={1.8} />
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