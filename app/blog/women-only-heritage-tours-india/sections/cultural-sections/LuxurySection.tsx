"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Luxury Travelers
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784896262/pexels-gokul-purushothaman-125319319-10534203_a5johg.jpg"
              alt="Luxury travelers India - private heritage tours and palace hotel stays"
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
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            BTry to ask, in a very direct way, about heritage palace hotel upgrades lots of those ex royal 
            residences in Udaipur, Jodhpur, and Jaipur now run as five star places. Also request a private 
            guide at each major stop, instead of tagging along with a shared group tour, because it gives 
            you a lot more freedom for pacing ,and for taking photos when you actually want to, not when 
            the schedule says so
          </p>
        </div>
      </div>
    </section>
  );
}