"use client";

import { Briefcase, Leaf, Users, Mountain } from "lucide-react";

export default function SuitableFor() {
  return (
    <>
      {/* 🔥 STICKY NAV */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center items-center gap-4 md:gap-6 text-[14px] md:text-lg font-medium">

          <a href="#delhi" className="hover:underline">Delhi</a>
          <span className="opacity-60">|</span>

          <a href="#mandawa" className="hover:underline">Mandawa</a>
          <span className="opacity-60">|</span>

          <a href="#pushkar" className="hover:underline">Pushkar</a>
          <span className="opacity-60">|</span>

          <a href="#bundi" className="hover:underline">Bundi</a>
          <span className="opacity-60">|</span>

          <a href="#ranthambore" className="hover:underline">Ranthambore</a>
          <span className="opacity-60">|</span>

          <a href="#jaipur" className="hover:underline">Jaipur</a>
          <span className="opacity-60">|</span>

          <a href="#agra" className="hover:underline">Agra</a>

        </div>
      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="bg-[#f4f0ea] pt-20 pb-10">

        {/* 🏷 Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-[#2c2c2c] tracking-wide">
          Suitable For
        </h2>

        {/* 🎯 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 
                        gap-x-12 gap-y-10 
                        max-w-6xl mx-auto px-6 text-center">

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500">

            <Briefcase
              size={42}
              className="text-[#9A7A58] transition-all duration-500"
            />
            <p className="font-medium text-[#3a3a3a]">
              Corporate Travel
            </p>
          </div>

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500">

            <Leaf
              size={42}
              className="text-[#9A7A58] transition-all duration-500"
            />
            <p className="font-medium text-[#3a3a3a]">
              Nature & Wildlife Enthusiasts
            </p>
          </div>

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500">

            <Users
              size={42}
              className="text-[#9A7A58] transition-all duration-500"
            />
            <p className="font-medium text-[#3a3a3a]">
              Friends & Family Travel
            </p>
          </div>

          {/* CARD */}
          <div className="group flex flex-col items-center gap-4 
                          px-6 py-8 rounded-md
                          transition-all duration-500">

            <Mountain
              size={42}
              className="text-[#9A7A58] transition-all duration-500"
            />
            <p className="font-medium text-[#3a3a3a]">
              Adventure Seekers
            </p>
          </div>

        </div>

      </section>
    </>
  );
}