"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Luxury Travel Tips for Women
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785138467/pexels-shantanu09-11974144_kki5zm.jpg"
              alt="Luxury travel tips for women in India - private experiences and boutique hotels"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
             Past the well worn routes, there are a few quieter places that kind of nudge travellers toward 
             a different kind of mood. Pondicherry’s French Quarter feels slow and walkable, with colonial 
             architecture mixed in plus that easy café culture, and it just works. Nainital gives you lakeside 
             quiet, ideal for a relaxed couple of days when you want to step away from the crowds a bit. Then 
             Assam’s Majuli , an island dotted by villages, is home to the centuries old Vaishnavite Sattra 
             tradition , where monastic life supports art, music , and careful manuscript preservation. It’s 
             a cultural detour that’s genuinely rare, especially if you have the extra time to linger.
          </p>
        </div>
        
      </div>
    </section>
  );
}