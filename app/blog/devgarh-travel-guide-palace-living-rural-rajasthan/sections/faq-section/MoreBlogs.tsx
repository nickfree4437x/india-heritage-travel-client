// app/blogs/india-food-guide/components/MoreFoodSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

// Related blogs data
const blogs = [
  {
    title:
      "Jawai Travel Guide: Where Luxury Meets Leopard Country",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1787455333/advik-mehta-J7g4hCd8oDo-unsplash_iouelw.jpg",
    date: "24 Auguest",
    slug: "jawai-travel-guide-leopard-country-rajasthan",
  },
  {
    title:
      "Jodhpur Travel Guide: The Blue City",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786763699/makm-photography-u0irC_UnbOk-unsplash_m0rqt5.jpg",
    date: "15 Auguest",
    slug: "jodhpur-travel-guide-blue-city",
  },
  {
    title:
      "Udaipur Travel Guide: The City of Lakes",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786681413/jainam-mehta-AVFjDGbqiqE-unsplash_yyofaq.jpg",
    date: "14 Auguest",
    slug: "udaipur-travel-guide-city-of-lakes",
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