// app/blogs/india-food-guide/components/MoreFoodSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

// Related blogs data
const blogs = [
  {
    title:
      "Mandu Luxury Heritage Stays: Romantic Luxury Among Medieval Ruins",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789368460/aakansha-agrawal-fipoV_f13Zw-unsplash_ghphxi.jpg",
    date: "14 September",
    slug: "mandu-luxury-heritage-stays-romantic-guide",
  },
  {
    title:
      "Fort Kochi Boutique Hotels: Colonial History & Boutique Luxury",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789727256/pexels-santram-gayakvad-1342424125-31288326_jfm83t.jpg",
    date: "18 September",
    slug: "fort-kochi-boutique-hotels",
  },
  {
    title:
      "Nawalgarh Heritage Haveli Stays: The Complete Guide to Shekhawati's Painted Mansions",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789029314/ancient-well-nawalgarh-12793400_rwv6kx.webp",
    date: "10 September",
    slug: "nawalgarh-heritage-haveli-stays-shekhawati-guide",
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