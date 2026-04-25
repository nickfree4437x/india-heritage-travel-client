"use client";

import { Briefcase, Leaf, Users, PersonStanding } from "lucide-react";

export default function SuitableFor() {
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
      {/* 🔥 STICKY NAV (Clickable Scroll Links) */}
      <div className="sticky top-0 z-30 bg-[#9b7a50] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center gap-6 text-[15px] md:text-lg font-medium">

          <a href="#srinagar" className="hover:underline">Srinagar</a>
          <span className="opacity-60">|</span>

          <a href="#gulmarg" className="hover:underline">Gulmarg</a>
          <span className="opacity-60">|</span>

          <a href="#pahalgam" className="hover:underline">Pahalgam</a>
          <span className="opacity-60">|</span>

          <a href="#kargil" className="hover:underline">Kargil</a>
          <span className="opacity-60">|</span>

          <a href="#leh" className="hover:underline">Leh</a>
          <span className="opacity-60">|</span>

          <a href="#nubra" className="hover:underline">Nubra Valley</a>
          <span className="opacity-60">|</span>

          <a href="#pangong" className="hover:underline">Pangong Lake</a>

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
                         transition-all duration-500
                         "
            >

              <div className="text-[#9b7a50] transition-all duration-500 ">
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