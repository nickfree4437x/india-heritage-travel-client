"use client";

import { Briefcase, Leaf, Users, PersonStanding } from "lucide-react";
import { ReactNode } from "react";

interface NavLink {
  name: string;
  id: string;
}

interface Item {
  icon: ReactNode;
  title: string;
  id: string;
}

export default function SuitableFor() {

  const navLinks: NavLink[] = [
    { name: "Delhi", id: "delhi" },
    { name: "Mandawa", id: "mandawa" },
    { name: "Jaipur", id: "jaipur" },
    { name: "Agra", id: "agra" },
  ];

  const items: Item[] = [
    {
      icon: <Briefcase size={40} />,
      title: "Corporate Travel",
      id: "corporate",
    },
    {
      icon: <Leaf size={40} />,
      title: "Spiritual, Cultural, Artistic & Gastronomic Interests",
      id: "spiritual",
    },
    {
      icon: <Users size={40} />,
      title: "Friends & Family Travel",
      id: "family",
    },
    {
      icon: <PersonStanding size={40} />,
      title: "Solo Travel",
      id: "solo",
    },
  ];

  // ✅ FIX: proper type added
  const handleScroll = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🔥 TOP LINKS BAR */}
      <div className="bg-[#9b7a50] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center gap-6 text-sm md:text-base font-medium flex-wrap">
          
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

      {/* 🎯 MAIN SECTION */}
      <section className="py-20 bg-[#f8f6f2] text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-16 text-[#2c2c2c]">
          Suitable For
        </h2>

        {/* Items */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">

          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleScroll(item.id)}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-[#9b7a50] group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <p className="text-sm md:text-base font-medium text-gray-800 max-w-[200px]">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}