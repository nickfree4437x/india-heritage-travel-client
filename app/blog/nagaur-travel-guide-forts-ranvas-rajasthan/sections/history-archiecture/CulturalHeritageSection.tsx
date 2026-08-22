"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural & Spiritual Heritage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Nagaur’s identity is not just Rajput. Honestly the place feels like a real cultural crossroads, 
            sort of, where Rajput courts, Mughal governance, and a firm Sufi spiritual thread meet, and that 
            thread goes way back before much of the fort’s current architecture even shows up.  
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            You have the dargah of the Sufi saint Hazrat Hamiduddin Nagauri, a respected 13th-century mystic, 
            and his shrine pulls in pilgrims from all around, giving Nagaur a devotional vibe that feels 
            different from Rajasthan’s more temple-driven cities. And this Sufi current didn’t stay locked 
            in religion only. It also touched Ranvas’ celebrated cuisine, drawing on Mughal-Sufi food 
            traditions as much as Marwari home cooking. Then, beyond that, you can add the Bansiwala temple, 
            and the cenotaphs of Amar Singh Ji, so a heritage walk through Nagaur’s older quarters feels 
            layered, not flat.  
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787371341/pexels-setu-r8-7171320_nn36tw.jpg"
              alt="Nagaur cultural and spiritual heritage - temples dargahs and Sufi traditions"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}