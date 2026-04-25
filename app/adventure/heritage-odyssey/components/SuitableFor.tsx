"use client";

import { Briefcase, Leaf, Users, User } from "lucide-react";

export default function SuitableFor() {
  return (
    <>
      {/* 🔥 STICKY LOCATION BAR */}
      <div className="sticky top-0 z-30 bg-[#9b7a50] text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center gap-4 text-sm md:text-base font-medium tracking-wide flex-wrap">

          <a href="#delhi" className="hover:underline">Delhi</a>
          <span className="opacity-60">|</span>

          <a href="#jaipur" className="hover:underline">Jaipur</a>
          <span className="opacity-60">|</span>

          <a href="#agra" className="hover:underline">Agra</a>
          <span className="opacity-60">|</span>

          <a href="#ajanta" className="hover:underline">Ajanta & Ellora</a>
          <span className="opacity-60">|</span>

          <a href="#mumbai" className="hover:underline">Mumbai</a>
          <span className="opacity-60">|</span>

          <a href="#cochin" className="hover:underline">Cochin</a>
          <span className="opacity-60">|</span>

          <a href="#alleppey" className="hover:underline">Alleppey</a>
          <span className="opacity-60">|</span>

          <a href="#thekkady" className="hover:underline">Thekkady</a>
          <span className="opacity-60">|</span>

          <a href="#munnar" className="hover:underline">Munnar</a>

        </div>
      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="w-full bg-[#f5f5f5] py-16">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Suitable For
        </h2>

        {/* Icons Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center px-4">

          <div className="group flex flex-col items-center gap-4 transition-all duration-300 ">
            <Briefcase className="w-12 h-12 text-[#9b7a50] transition-transform duration-300 " />
            <p className="font-semibold text-gray-800">
              Corporate Travel
            </p>
          </div>

          <div className="group flex flex-col items-center gap-4 transition-all duration-300 ">
            <Leaf className="w-12 h-12 text-[#9b7a50] transition-transform duration-300 " />
            <p className="font-semibold text-gray-800 leading-snug">
              Spiritual, Cultural, Artistic & Gastronomic Interests
            </p>
          </div>

          <div className="group flex flex-col items-center gap-4 transition-all duration-300 ">
            <Users className="w-12 h-12 text-[#9b7a50] transition-transform duration-300 " />
            <p className="font-semibold text-gray-800">
              Friends & Family Travel
            </p>
          </div>

          <div className="group flex flex-col items-center gap-4 transition-all duration-300 ">
            <User className="w-12 h-12 text-[#9b7a50] transition-transform duration-300 " />
            <p className="font-semibold text-gray-800">
              Solo Travel
            </p>
          </div>

        </div>

      </section>
    </>
  );
}