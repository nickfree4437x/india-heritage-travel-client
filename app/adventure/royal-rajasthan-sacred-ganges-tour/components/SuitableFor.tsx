"use client";

import { Briefcase, Flower, Users, User } from "lucide-react";

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
  "Orchha",
  "Varanasi",
];

export default function SuitableFor() {
  return (
    <>
      {/* 🔥 STICKY NAVBAR */}
      <div className="sticky top-0 z-30 bg-[#9b7a50] text-white">

        <div className="max-w-6xl mx-auto py-3 px-4 text-sm md:text-base font-medium flex flex-wrap justify-center gap-4">

          {cities.map((city, index) => (
            <span key={index} className="flex items-center gap-3">

              {/* ✅ CLICKABLE LINK */}
              <a
                href={`#${city.toLowerCase()}`}
                className="hover:underline cursor-pointer"
              >
                {city}
              </a>

              {index !== cities.length - 1 && <span>|</span>}
            </span>
          ))}

        </div>
      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="bg-[#f5f5f5] py-16 px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3d2f1c] mb-12">
          Suitable For
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {/* Item 1 */}
          <div className="group flex flex-col items-center gap-4 transition-all duration-300">
            <Briefcase size={50} className="text-[#9b7a50] transition" />
            <p className="font-medium text-gray-800">Corporate Travel</p>
          </div>

          {/* Item 2 */}
          <div className="group flex flex-col items-center gap-4 transition-all duration-300">
            <Flower size={50} className="text-[#9b7a50] transition" />
            <p className="font-medium text-gray-800 text-center max-w-[220px]">
              Spiritual, Cultural, Artistic & Gastronomic Interests
            </p>
          </div>

          {/* Item 3 */}
          <div className="group flex flex-col items-center gap-4 transition-all duration-300">
            <Users size={50} className="text-[#9b7a50] transition" />
            <p className="font-medium text-gray-800">Friends & Family Travel</p>
          </div>

          {/* Item 4 */}
          <div className="group flex flex-col items-center gap-4 transition-all duration-300">
            <User size={50} className="text-[#9b7a50] transition" />
            <p className="font-medium text-gray-800">Solo Travel</p>
          </div>

        </div>
      </section>
    </>
  );
}