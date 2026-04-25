"use client";

import { Briefcase, Leaf, Users, PersonStanding } from "lucide-react";

export default function YogaSuitableFor() {
  const items = [
    {
      icon: <Briefcase size={42} />,
      title: "Corporate Travel",
    },
    {
      icon: <Leaf size={42} />,
      title: "Spiritual, Cultural, Artistic & Gastronomic Interests",
    },
    {
      icon: <Users size={42} />,
      title: "Friends & Family Travel",
    },
    {
      icon: <PersonStanding size={42} />,
      title: "Solo Travel",
    },
  ];

  return (
    <>
      {/* 🔥 STICKY FULL-WIDTH NAV (Hero ke niche chipka hua) */}
      <div className="sticky top-0 z-30 bg-[#9b7a50] text-white w-full">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center gap-6 text-[15px] md:text-lg font-medium flex-wrap">

          <a href="#delhi" className="hover:underline">Delhi</a>
          <span className="opacity-60">|</span>

          <a href="#agra" className="hover:underline">Agra</a>
          <span className="opacity-60">|</span>

          <a href="#jaipur" className="hover:underline">Jaipur</a>
          <span className="opacity-60">|</span>

          <a href="#delhi2" className="hover:underline">Delhi</a>
          <span className="opacity-60">|</span>

          <a href="#rishikesh" className="hover:underline">Rishikesh</a>
          <span className="opacity-60">|</span>

          <a href="#delhi3" className="hover:underline">Delhi</a>

        </div>
      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="bg-[#f4f0ea] pt-20 pb-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-[#2c2c2c] tracking-wide">
          Suitable For
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 
                        gap-x-12 gap-y-10 
                        max-w-6xl mx-auto px-6 text-center">

          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-4 
                         px-6 py-8 rounded-md
                         transition-all duration-500"
            >

              <div className="text-[#9b7a50] transition-all duration-500">
                {item.icon}
              </div>

              <p className="font-medium text-[#3a3a3a] leading-snug max-w-[200px]">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}