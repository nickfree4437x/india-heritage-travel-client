// app/blogs/india-food-guide/components/MoreFoodSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

// Related blogs data
const blogs = [
  {
    title:
      "Women-Only Heritage Tours in India: What to Expect & How to Prepare",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784898459/pexels-jaiveer-2452265_rwouvl.jpg",
    date: "24 July",
    slug: "women-only-heritage-tours-india",
  },
  {
    title:
      "Top Heritage Sites in North India: A Traveler's Guide to Top Monuments",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784526694/pexels-absoluteabhi-37967925_ousrlv.jpg",
    date: "20 July",
    slug: "top-heritage-sites-in-north-india",
  },
  {
    title:
      "India for Solo Travelers: Cultural, Wellness and Offbeat Experiences",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779641987/blog-4_rarjqw.jpg",
    date: "04 Dec",
    slug: "solo-traveller",
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