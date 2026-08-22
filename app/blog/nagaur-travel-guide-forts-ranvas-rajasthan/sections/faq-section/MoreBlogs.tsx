// app/blogs/india-food-guide/components/MoreFoodSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

// Related blogs data
const blogs = [
  {
    title:
      "Pushkar Travel Guide: The Sacred Lake City",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1787110091/austin-curtis-cN1mrrdZ0V4-unsplash_v3emoq.jpg",
    date: "19 Auguest",
    slug: "pushkar-travel-guide-sacred-lake-city",
  },
  {
    title:
      "Bikaner Travel Guide: Forts, Palaces & Luxury Desert Tours",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786948187/salil-cZVUoTtGAlU-unsplash_zafycv.jpg",
    date: "17 Auguest",
    slug: "bikaner-travel-guide",
  },
  {
    title:
      "Jaisalmer Travel Guide: The Golden City",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786850130/hotel-lal-garh-fort-and-palace-9hz-7Qpg5wc-unsplash_z3rlbe.jpg",
    date: "16 Auguest",
    slug: "jaisalmer-travel-guide-golden-city",
  },
];

export default function MoreFoodSection() {
  return (
    <section className="w-full bg-white pb-14 border-t border-[#ddd4ca]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Related Posts Title */}
        <div className="mb-12 sm:mb-14">
        </div>

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