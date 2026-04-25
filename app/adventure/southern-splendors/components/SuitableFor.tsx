"use client";

import { Briefcase, Leaf, Users, User } from "lucide-react";

export default function SuitableFor() {
  return (
    <section className="w-full bg-[#f4f0ea] pb-16">

      {/* 🔥 TOP LOCATION BAR (CENTERED EXACT) */}
      <div className="bg-[#9b7a50] text-white py-3">
        <div className="flex justify-center items-center flex-wrap text-sm md:text-base font-medium gap-3">

          {[
            "Mumbai",
            "Cochin",
            "Alleppey",
            "Thekkady",
            "Munnar",
            "Ooty",
            "Mysore",
            "Hassan",
            "Hampi",
          ].map((place, i) => (
            <span key={i} className="flex items-center gap-3">
              <a
                href={`#${place.toLowerCase()}`}
                className="hover:underline"
              >
                {place}
              </a>
              {i !== 8 && <span>|</span>}
            </span>
          ))}

        </div>
      </div>

      {/* 🎯 TITLE */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#2c2c2c] mt-16 mb-14">
        Suitable For
      </h2>

      {/* 🔥 SIMPLE ICONS (NO CARDS) */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center px-6">

        {/* Item */}
        <div className="flex flex-col items-center gap-4">
          <Briefcase className="w-12 h-12 text-[#9b7a50]" />
          <p className="font-medium text-gray-700">
            Corporate Travel
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Leaf className="w-12 h-12 text-[#9b7a50]" />
          <p className="font-medium text-gray-700 leading-snug">
            Spiritual, Cultural, Artistic & Gastronomic Interests
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Users className="w-12 h-12 text-[#9b7a50]" />
          <p className="font-medium text-gray-700">
            Friends & Family Travel
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <User className="w-12 h-12 text-[#9b7a50]" />
          <p className="font-medium text-gray-700">
            Solo Travel
          </p>
        </div>

      </div>
    </section>
  );
}