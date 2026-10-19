"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Where to Stay: Heritage Hotels and Luxury Camps
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
             Ranthambore has one of India’s finest selections of luxury wildlife accommodations. They 
             can be grouped into three broad categories. Property specifications, prices, and policies 
             keep on changing, and we confirm everything just prior to making a reservation.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           However, while assessing the quality of such facilities, ensure that you assess the distance 
           of the facility from the entrance of the national park (the further it is, the more time you 
           spend commuting and less time you have for sleeping prior to early morning game drives), if 
           the accommodation itself organizes safaris and helps in getting necessary permits.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792406288/pexels-ansh-yati-875278361-34649658_rhktpl.jpg"
              alt="Where to stay in Ranthambore - heritage hotels and luxury jungle camps"
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