"use client";

import { Briefcase, Flower2, Users, User } from "lucide-react";

export default function SuitableFor() {
  return (
    <>
      {/* 🔥 STICKY LOCATION BAR (UPGRADED) */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4 whitespace-nowrap text-sm md:text-base font-medium">

          <a href="#cochin" className="hover:underline">Cochin</a>
          <span className="opacity-60">|</span>

          <a href="#alleppey" className="hover:underline">Alleppey</a>
          <span className="opacity-60">|</span>

          <a href="#thekkady" className="hover:underline">Thekkady</a>
          <span className="opacity-60">|</span>

          <a href="#munnar" className="hover:underline">Munnar</a>
          <span className="opacity-60">|</span>

          <a href="#madurai" className="hover:underline">Madurai</a>
          <span className="opacity-60">|</span>

          <a href="#thanjavur" className="hover:underline">Thanjavur</a>
          <span className="opacity-60">|</span>

          <a href="#pondicherry" className="hover:underline">Pondicherry</a>
          <span className="opacity-60">|</span>

          <a href="#mahabalipuram" className="hover:underline">Mahabalipuram</a>
          <span className="opacity-60">|</span>

          <a href="#mumbai" className="hover:underline">Mumbai</a>

        </div>
      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="bg-[#f4f0ea] pt-20 pb-10">

        {/* 🏷 Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-[#2c2c2c] tracking-wide">
          Suitable For
        </h2>

        {/* 🎴 CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 
                        gap-x-12 gap-y-10 
                        max-w-6xl mx-auto px-6 text-center">

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500  ">

            <Briefcase
              size={42}
              className="text-[#9A7A58] transition-all duration-500  "
            />
            <p className="font-medium text-[#3a3a3a]">
              Corporate Travel
            </p>
          </div>

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500  ">

            <Flower2
              size={42}
              className="text-[#9A7A58] transition-all duration-500  "
            />
            <p className="font-medium text-[#3a3a3a] leading-snug">
              Spiritual, Cultural, Artistic & Gastronomic Interests
            </p>
          </div>

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500  ">

            <Users
              size={42}
              className="text-[#9A7A58] transition-all duration-500  "
            />
            <p className="font-medium text-[#3a3a3a]">
              Friends & Family Travel
            </p>
          </div>

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500  ">

            <User
              size={42}
              className="text-[#9A7A58] transition-all duration-500  "
            />
            <p className="font-medium text-[#3a3a3a]">
              Solo Travel
            </p>
          </div>

        </div>

      </section>
    </>
  );
}