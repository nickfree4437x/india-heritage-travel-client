"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Why Udaipur Is Called the City of Lakes
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Udaipur is set in the Girwa Valley of the Aravalli Range, held between four linked water bodies
            - Pichola, Fateh Sagar, Swaroop Sagar, and Udai Sagar. This layout, along with centuries of Mewar 
            royal patronage, gives the city its lasting nickname: the City of Lakes. Unlike the desert-fort 
            skylines of Jodhpur or Jaisalmer, Udaipur feels gentler and more romantic - with calm water 
            reflections, whitewashed havelis, and palace domes that seem to hover.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Udaipur consistently ranks among India's top destinations for honeymooners and luxury travellers. 
            The mix of heritage buildings, craft markets, and lakeside fine dining makes it one of the most 
            camera-friendly cities across the subcontinent.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786682540/pexels-tonyzebastian-21382502_k8mxx4.jpg"
              alt="Udaipur City of Lakes - Aravalli Valley and Lake Pichola"
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