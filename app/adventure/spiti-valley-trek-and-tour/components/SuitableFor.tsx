"use client";

import { Briefcase, Leaf, Users, PersonStanding } from "lucide-react";

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
      icon: <PersonStanding size={40} />,
      title: "Solo Travel",
    },
  ];

  const locations = [
    "Delhi",
    "Chandigarh",
    "Manali",
    "Chandra Tal",
    "Kaza",
    "Tabo",
    "Langza",
  ];

  return (
    <section className="bg-[#f8f8f8]">

      {/* 🔥 FULL WIDTH LOCATION BAR (HERO SE CHIPKI) */}
      <div className="w-full bg-[#9b7a50] text-white text-center py-4 text-sm md:text-base font-medium tracking-wide">
        {locations.map((loc, index) => {
          const id = loc.toLowerCase().replace(/\s+/g, "-"); // id format

          return (
            <span key={index}>
              <a href={`#${id}`} className="hover:underline cursor-pointer">
                {loc}
              </a>

              {index !== locations.length - 1 && (
                <span className="mx-3">|</span>
              )}
            </span>
          );
        })}
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
          Suitable For
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4">

              <div className="text-[#9b7a50]">
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
  );
}