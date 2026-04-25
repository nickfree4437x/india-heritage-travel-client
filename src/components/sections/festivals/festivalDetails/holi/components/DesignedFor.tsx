"use client";

import { Briefcase, Users, User, Flower } from "lucide-react";

export default function DesignedFor() {
  const items = [
    {
      icon: <Flower size={42} />,
      text: "Spiritual, Cultural, Artistic & Gastronomic Interests",
    },
    {
      icon: <Briefcase size={42} />,
      text: "Corporate Travel",
    },
    {
      icon: <Users size={42} />,
      text: "Friends & Family Travel",
    },
    {
      icon: <User size={42} />,
      text: "Solo Travel",
    },
  ];

  return (
    <section className="bg-[#f4f0ea] pt-20 pb-10" id="about">

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-[#2c2c2c] tracking-wide">
        Designed For
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 
                      gap-x-12 gap-y-10 
                      max-w-6xl mx-auto px-6 text-center">

        {items.map((item, i) => (
          <div
            key={i}
            className="group flex flex-col items-center gap-4 
                       px-6 py-8 rounded-md
                       transition-all duration-500"
          >

            {/* ICON */}
            <div className="text-[#9A7A58]">
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
  );
}