"use client";

import Image from "next/image";
import { Calendar, User } from "lucide-react";

type Blog = {
  title: string;
  date: string;
  category: string;
  image: string;
};

const blogs: Blog[] = [
  {
    title: "A Guide to Indian Food: What to Try & What to Avoid",
    date: "JAN 05, 2026",
    category: "TRAVEL",
    image: "/blog1.jpg",
  },
  {
    title: "Top Safe & Luxury Destinations in India for Solo Female Travellers",
    date: "DEC 23, 2025",
    category: "TRAVEL",
    image: "/blog2.jpg",
  },
  {
    title: "The Ultimate First-Time Traveler’s Guide to India",
    date: "DEC 10, 2025",
    category: "TRAVEL",
    image: "/blog3.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#f4f0ea] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#8b6a3d] mb-3">
            Recent Blog Posts
          </h2>

          <p className="text-lg text-[#8b6a3d] tracking-wide">
            Explore Our Blogs
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-[220px] group-hover:scale-110 transition duration-500"
                />

                {/* Category */}
                <span className="absolute bottom-4 right-4 bg-[#9b7445] text-white text-xs px-4 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  {blog.date}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-snug">
                  {blog.title}
                </h3>

                {/* Author */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User size={16} />
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    By: IHT-ADMIN
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <button className="bg-[#9b7445] text-white px-10 py-4 rounded-lg font-medium hover:bg-[#7e5f3a] transition">
            MORE UPDATES
          </button>
        </div>

      </div>
    </section>
  );
}