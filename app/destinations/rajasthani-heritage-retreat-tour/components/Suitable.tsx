"use client";

import {
  Briefcase,
  Flower2,
  Users,
  PersonStanding,
} from "lucide-react";

const cities = [
  "Delhi",
  "Mandawa",
  "Bikaner",
  "Jaisalmer",
  "Jodhpur",
  "Udaipur",
  "Pushkar",
  "Jaipur",
  "Agra",
];

export default function Suitable() {
  return (
    <>
      {/* 🔥 STICKY CITY NAV (Hero ke niche chipka hua) */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white">

        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-center items-center gap-4 text-[14px] md:text-[15px] font-medium">

          {cities.map((city, i) => (
            <div key={i} className="flex items-center gap-4">
              <a
                href={`#${city.toLowerCase()}`}
                className="relative hover:underline transition"
              >
                {city}
              </a>

              {i !== cities.length - 1 && (
                <span className="opacity-60">|</span>
              )}
            </div>
          ))}

        </div>
      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="bg-[#f4f0ea] pt-16 pb-20">

        {/* 🔹 Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-[#2c2c2c] tracking-wide">
          Suitable For
        </h2>

        {/* 🔹 Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 
                        gap-x-12 gap-y-10 
                        max-w-6xl mx-auto px-6 text-center">

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500">

            <Briefcase size={42} className="text-[#9A7A58]" />
            <p className="font-medium text-[#3a3a3a]">
              Corporate Travel
            </p>
          </div>

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500">

            <Flower2 size={42} className="text-[#9A7A58]" />
            <p className="font-medium text-[#3a3a3a] leading-snug">
              Spiritual, Cultural, Artistic & Gastronomic Interests
            </p>
          </div>

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500">

            <Users size={42} className="text-[#9A7A58]" />
            <p className="font-medium text-[#3a3a3a]">
              Friends & Family Travel
            </p>
          </div>

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500">

            <PersonStanding size={42} className="text-[#9A7A58]" />
            <p className="font-medium text-[#3a3a3a]">
              Solo Travel
            </p>
          </div>

        </div>

      </section>
    </>
  );
}