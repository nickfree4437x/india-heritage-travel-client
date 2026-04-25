"use client";

import { Briefcase, Leaf, Users, User } from "lucide-react";

export default function SuitableFor() {
  const items = [
    {
      icon: <Briefcase size={40} />,
      title: "Corporate Travel",
    },
    {
      icon: <Leaf size={40} />,
      title: "Spiritual, Cultural, Artistic & Gastronomic Interests",
    },
    {
      icon: <Users size={40} />,
      title: "Friends & Family Travel",
    },
    {
      icon: <User size={40} />,
      title: "Solo Travel",
    },
  ];

  return (
    <>
      {/* 🔥 STICKY NAV */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center gap-6 text-[15px] md:text-lg font-medium">

          <a href="#delhi" className="hover:underline">Delhi</a>
          <span className="opacity-60">|</span>

          <a href="#mandawa" className="hover:underline">Mandawa</a>
          <span className="opacity-60">|</span>

          <a href="#jaipur" className="hover:underline">Jaipur</a>
          <span className="opacity-60">|</span>

          <a href="#agra" className="hover:underline">Agra</a>
          <span className="opacity-60">|</span>

          <a href="#varanasi" className="hover:underline">Varanasi</a>

        </div>
      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="py-20 bg-[#f8f6f2]">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#2c2c2c] mb-16 tracking-wide">
          Suitable For
        </h2>

        {/* Items */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 text-center px-6">

          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center gap-4 
                         px-6 py-8 rounded-md
                         transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-[#9b7a50] transition-all duration-500 ">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-sm md:text-base font-medium text-gray-800 max-w-[180px] leading-snug">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}