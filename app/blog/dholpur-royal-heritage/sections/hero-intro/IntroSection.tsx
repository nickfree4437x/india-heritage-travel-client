"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why Dholpur Belongs on Your Itinerary
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            While most tourists who visit Agra make their way to Delhi or Jaipur, very few venture down 
            the small road leading to Dholpur, a small royal town near Rajasthan where the ravines of 
            Chambal commence. The Dholpur royal legacy is an unique combination of an elegant royal 
            palace that combines Dutch and Belgian architecture, ruins of a lotus garden constructed 
            by Babur, a temple next to a lily pond, and a river where the gharials and Gangetic Dolphins 
            still live.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            It is certainly not a place that screams of its presence. Rather, it caters to the leisurely 
            tourist who is looking for a night in the newly restored royal palace, a ride in a boat early 
            in the morning, and a day filled with both Mughal history and the local wildlife. Dholpur is 
            indeed the perfect destination for tourists who want to experience the Rajasthan and Chambal 
            beyond the Taj Mahal.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791976911/images_1_ch7yp4.jpg"
              alt="Dholpur itinerary - why it belongs with Dholpur Palace and Chambal ravines"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via encrypted-tbn0
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          The following guide will give you information on the history, places you should visit, wildlife 
          of the region, choice of lodging, and how to reach Dholpur from Agra and Jaipur.
        </p>
      </div>
    </section>
  );
}