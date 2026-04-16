"use client";

import { Briefcase, Leaf, Users, User } from "lucide-react";

export default function SuitableFor() {
  return (
    <section className="w-full bg-[#f5f5f5] py-12 border-t">
      
      {/* Top Locations Bar */}
      <div className="bg-[#9b7a50] text-white text-center py-3 text-sm md:text-base font-medium tracking-wide">
        Mumbai &nbsp; | &nbsp; Cochin &nbsp; | &nbsp; Alleppey &nbsp; | &nbsp; Thekkady &nbsp; | &nbsp; Munnar &nbsp; | &nbsp; Ooty &nbsp; | &nbsp; Mysore &nbsp; | &nbsp; Hassan &nbsp; | &nbsp; Hampi
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mt-10 mb-10">
        Suitable For
      </h2>

      {/* Icons Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center px-4">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <Briefcase className="w-12 h-12 text-[#9b7a50] mb-4" />
          <p className="font-semibold text-gray-800">
            Corporate Travel
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <Leaf className="w-12 h-12 text-[#9b7a50] mb-4" />
          <p className="font-semibold text-gray-800 leading-snug">
            Spiritual, Cultural, Artistic & Gastronomic Interests
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <Users className="w-12 h-12 text-[#9b7a50] mb-4" />
          <p className="font-semibold text-gray-800">
            Friends & Family Travel
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center">
          <User className="w-12 h-12 text-[#9b7a50] mb-4" />
          <p className="font-semibold text-gray-800">
            Solo Travel
          </p>
        </div>

      </div>
    </section>
  );
}