"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Where Nawalgarh Fits Into Shekhawati's Story
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Nawalgarh is located in Jhunjhunu district of Rajasthan, approximately mid-way between Jhunjhunu 
            and Sikar. It is a part of the Shekhawati region whose name means ‘garden of the Shekhawat clan’. 
            If Jaipur and Udaipur have the royal palace, Shekhawati has its own unique attraction, an open-air 
            museum of trader’s mansions painted not by kings but by the merchants who have funded a major part 
            of the commercial history of India. As for Nawalgarh, with all its frescoed havelis, forts, and 
            courtyards, this town is usually believed to be the best single point of departure to see Shekhawati.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            As most of Nawalgarh’s attractions are hidden behind closed doors and walls, this town requires 
            time to explore. It is definitely not a list-checking attraction – it is the town to be seen 
            walking around and preferably accompanied by a local guide.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789030879/Nawalgarh-Fort_npb92f.jpg"
              alt="Nawalgarh Shekhawati overview - painted havelis and merchant heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via rajasthantourplanner
          </p>
        </div>
      </div>
    </section>
  );
}