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
    <section className="py-20 bg-[#f8f6f2]">

      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#2c2c2c] mb-16">
        Suitable For
      </h2>

      {/* Items */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center px-6">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 group"
          >
            {/* Icon */}
            <div className="text-[#9b7a50] group-hover:scale-110 transition duration-300">
              {item.icon}
            </div>

            {/* Text */}
            <p className="text-sm md:text-base font-medium text-gray-800 max-w-[180px]">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}