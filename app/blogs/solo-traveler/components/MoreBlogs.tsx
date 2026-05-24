// app/blogs/india-food-guide/components/MoreFoodSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const blogs = [
  {
    title:
      "From Chaos to Bliss: How the Right India Travel Agency Can Flip....",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779639547/blog-5_kpbanj.jpg",
    date: "29 Nov",
    slug: "chaos-your-journeys",
  },
  {
    title:
      "The Ultimate First-Time Traveler’s Guide to India",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779637895/blog-3_dksm9v.jpg",
    date: "Dec 10",
    slug: "indian-traveler-guide",
  },
  {
    title:
      "Top Heritage Hotels in India for an Exclusive Stay",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779638017/blog-9_h4aqqf.jpg",
    date: "Feb 6",
    slug: "top-heritage-hotel",
  },
];

export default function MoreFoodSection() {
  return (
    <section className="w-full bg-white pb-14 border-t border-[#ddd4ca]">

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
                    md:text-[20px]
                    leading-[1.22]

                    font-normal
                    tracking-normal

                    text-[#111]

                    break-words

                    transition-colors
                    duration-300

                    group-hover:text-[#7C5C38]
                  "
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

                    text-[#5f5f5f]
                    text-[14px]
                    font-light
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