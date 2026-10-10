"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Packing Tips for Women Travelers
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Pack lightweight, breathable layers in natural fabrics, with a scarf or shawl for covering 
            shoulders and hair at temples and mosques. Comfortable closed-toe walking shoes are essential 
            for uneven stone steps at forts and temples, while a light jacket covers cool December–January 
            mornings in Rajasthan and Delhi. A cross-body bag with a zip closure keeps valuables secure in 
            markets and crowded monuments. Carry a basic first aid kit, hand sanitiser, and any personal 
            medication in original packaging with a prescription copy.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785391461/pexels-timur-weber-9185809_e1vc6j.jpg"
              alt="Packing list for women's luxury India tour - essentials and safety tips"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}