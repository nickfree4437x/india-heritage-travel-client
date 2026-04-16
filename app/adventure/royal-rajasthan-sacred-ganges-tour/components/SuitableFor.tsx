"use client";

import { Briefcase, Flower, Users, User } from "lucide-react";

export default function SuitableFor() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6 text-center">

      {/* Top Navigation */}
      <div className="bg-[#9b7a50] text-white py-3 px-4 mb-12 text-sm md:text-base font-medium flex flex-wrap justify-center gap-4">
        {[
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
        ].map((city, index) => (
          <span key={index} className="flex items-center gap-3">
            {city}
            {index !== 10 && <span>|</span>}
          </span>
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#3d2f1c] mb-12">
        Suitable For
      </h2>

      {/* Items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

        {/* Item 1 */}
        <div className="flex flex-col items-center gap-4">
          <Briefcase size={50} className="text-[#9b7a50]" />
          <p className="font-medium text-gray-800">Corporate Travel</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center gap-4">
          <Flower size={50} className="text-[#9b7a50]" />
          <p className="font-medium text-gray-800 text-center max-w-[220px]">
            Spiritual, Cultural, Artistic & Gastronomic Interests
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center gap-4">
          <Users size={50} className="text-[#9b7a50]" />
          <p className="font-medium text-gray-800">Friends & Family Travel</p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center gap-4">
          <User size={50} className="text-[#9b7a50]" />
          <p className="font-medium text-gray-800">Solo Travel</p>
        </div>

      </div>
    </section>
  );
}