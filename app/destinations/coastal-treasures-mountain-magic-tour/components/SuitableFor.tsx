"use client";

import { Briefcase, Leaf, Users, User } from "lucide-react";

export default function SuitableFor() {
  const navLinks = [
    { name: "Cochin", id: "cochin" },
    { name: "Alleppey", id: "alleppey" },
    { name: "Thekkady", id: "thekkady" },
    { name: "Munnar", id: "munnar" },
    { name: "Mumbai", id: "mumbai" },
  ];

  const items = [
    {
      icon: <Briefcase size={42} />,
      text: "Corporate Travel",
      id: "corporate",
    },
    {
      icon: <Leaf size={42} />,
      text: "Spiritual, Cultural, Artistic & Gastronomic Interests",
      id: "spiritual",
    },
    {
      icon: <Users size={42} />,
      text: "Friends & Family Travel",
      id: "family",
    },
    {
      icon: <User size={42} />,
      text: "Solo Travel",
      id: "solo",
    },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🔥 STICKY NAV (SAME AS GT) */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white">

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center gap-6 text-[15px] md:text-lg font-medium">

          {navLinks.map((link, i) => (
            <div key={i} className="flex items-center gap-6">

              <span
                onClick={() => handleScroll(link.id)}
                className="cursor-pointer hover:underline"
              >
                {link.name}
              </span>

              {i !== navLinks.length - 1 && (
                <span className="opacity-60">|</span>
              )}

            </div>
          ))}

        </div>
      </div>

      {/* 🎯 MAIN SECTION (SAME BG + SPACING) */}
      <section className="bg-[#f4f0ea] pt-20 pb-10">

        {/* 🏷 Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-[#2c2c2c] tracking-wide">
          Suitable For
        </h2>

        {/* 🎯 CARDS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 
                        gap-x-12 gap-y-10 
                        max-w-6xl mx-auto px-6 text-center">

          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => handleScroll(item.id)}
              className="group flex flex-col items-center gap-4 
                         px-6 py-8 rounded-md
                         transition-all duration-500 cursor-pointer"
            >

              {/* ICON */}
              <div className="text-[#9A7A58] transition-all duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              {/* TEXT */}
              <p className="font-medium text-[#3a3a3a] leading-snug">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}