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
    <section className="bg-[#f4f0ea] py-12">

      {/* 🔹 Scroll Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-4 text-lg font-medium mb-10 text-gray-700 px-4">
        {cities.map((city, i) => (
          <div key={i} className="flex items-center gap-4">
            <a
              href={`#${city.toLowerCase()}`}
              className="hover:text-[#c29d59] transition"
            >
              {city}
            </a>
            {i !== cities.length - 1 && <span>|</span>}
          </div>
        ))}
      </div>

      {/* 🔹 Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Suitable For
      </h2>

      {/* 🔹 Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6 text-center">

        <div className="flex flex-col items-center gap-4 hover:scale-105 transition">
          <Briefcase size={40} className="text-[#8b6b3e]" />
          <p className="font-medium">Corporate Travel</p>
        </div>

        <div className="flex flex-col items-center gap-4 hover:scale-105 transition">
          <Flower2 size={40} className="text-[#8b6b3e]" />
          <p className="font-medium text-center">
            Spiritual, Cultural, Artistic & Gastronomic Interests
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 hover:scale-105 transition">
          <Users size={40} className="text-[#8b6b3e]" />
          <p className="font-medium">Friends & Family Travel</p>
        </div>

        <div className="flex flex-col items-center gap-4 hover:scale-105 transition">
          <PersonStanding size={40} className="text-[#8b6b3e]" />
          <p className="font-medium">Solo Travel</p>
        </div>

      </div>

    </section>
  );
}