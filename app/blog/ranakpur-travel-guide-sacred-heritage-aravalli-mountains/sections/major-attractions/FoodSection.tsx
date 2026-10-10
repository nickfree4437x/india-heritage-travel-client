"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food and Flavors Near Ranakpur
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            A major Jain pilgrimage site, you’ll find that the city’s restaurants are heavy on pure 
            vegetarian (satvik) dishes – especially those where food isn’t cooked using onion/garlic 
            as is common in most temple adjacent eateries. You can try thalis containing dals/baatis/
            churmas, gatte ki sabzi along with other fresh rotis.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The local vegetarian dishes become available at most nearby resorts which offer accommodations 
            for travelers who want to stay near town. The heritage hotels provide guests with two dining 
            options which include authentic Rajasthani dishes and standard continental meals for those 
            seeking superior dining experiences after their sightseeing activities.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788417029/fabhotels-Thali-and-More-600x400-1_ygtbbe.jpg"
              alt="Food and flavors near Ranakpur - Rajasthani cuisine and local dining"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via manahotels
          </p>
        </div>
      </div>
    </section>
  );
}