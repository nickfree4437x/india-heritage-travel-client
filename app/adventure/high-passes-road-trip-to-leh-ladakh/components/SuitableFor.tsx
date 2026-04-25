"use client";

import { Briefcase, Leaf, Users, PersonStanding } from "lucide-react";

export default function SuitableFor() {
  const items = [
    { icon: <Briefcase size={40} />, title: "Corporate Travel" },
    { icon: <Leaf size={40} />, title: "Spiritual, Cultural, Artistic & Gastronomic Interests" },
    { icon: <Users size={40} />, title: "Friends & Family Travel" },
    { icon: <PersonStanding size={40} />, title: "Solo Travel" },
  ];

  const locations = [
    { name: "Delhi", id: "delhi" },
    { name: "Chandigarh", id: "chandigarh" },
    { name: "Manali", id: "manali" },
    { name: "Jispa", id: "jispa" },
    { name: "Leh", id: "leh" },
    { name: "Nubra Valley", id: "nubra" },
    { name: "Pangong Lake", id: "pangong" },
  ];

  return (
    <>
      {/* 🔥 FULL WIDTH STICKY BAR (HERO KE NICHE CHIPKI HUI) */}
      <div className="w-full bg-[#9b7a50] text-white text-center py-3 text-sm md:text-base font-medium tracking-wide flex flex-wrap justify-center gap-2">

        {locations.map((loc, index) => (
          <span key={loc.id} className="flex items-center gap-2">
            
            <a href={`#${loc.id}`} className="hover:underline transition">
              {loc.name}
            </a>

            {index !== locations.length - 1 && (
              <span className="opacity-60">|</span>
            )}

          </span>
        ))}

      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="pt-16 pb-16 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
            Suitable For
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 transition-all duration-300"
              >
                <div className="text-[#9b7a50] transition-transform duration-300 ">
                  {item.icon}
                </div>

                <p className="text-sm md:text-base font-medium text-gray-700 max-w-[200px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}