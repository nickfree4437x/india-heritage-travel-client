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

  return (
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
            className="flex flex-col items-center gap-4 group cursor-pointer"
          >
            {/* Icon */}
            <div className="text-[#9b7a50] group-hover:scale-110 transition">
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
  );
}