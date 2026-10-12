"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why Alwar Belongs on Your Rajasthan Itinerary
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Name most tourists' top royal cities of Rajasthan and Alwar will not appear in their minds. 
            It is just what distinguishes it from all other destinations. Located in the foothills of 
            Aravalli and situated on the road from Delhi to Jaipur, this former princely state gives an 
            opportunity to experience truly unique Alwar luxury heritage accommodation such as a fort 
            which used to be home to emperors, the palace with corridors wide enough to pass an elephant's 
            howdah through, lake palace intended for a beloved queen and the tiger reserve less than an hour 
            away.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            It is safe to say that you will hardly encounter crowds there. All palaces of Alwar are faded 
            but not forgotten, all streets are alive but not full of tourist facilities and the best 
            accommodation will give you feeling of a host and not of an extra booking. For those travellers 
            who have seen everything in the Golden Triangle or simply want something less rushed and more 
            romantic, this area of Rajasthan is one of the gems to explore.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791786576/pexels-axp-photography-500641970-19149575_mmx02m.jpg"
              alt="Alwar Rajasthan itinerary - why it belongs with Bala Quila Fort and Sariska Tiger Reserve"
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