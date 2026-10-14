"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Where to Stay: Heritage Hotels in Karauli
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The availability of accommodation is quite restricted in Karauli, but this is what makes it 
            special. The Bhanwar Vilas Palace, constructed way back in 1938 for the royalty, is the only 
            place that all the tour guides will recommend staying at. It provides about 40 air-conditioned 
            rooms and suites, a pool, museum of some old stuffs, and also various activities like folklore 
            shows, jeep safari or camel ride. Moving barefoot in the cool stoned corridors of the hotel is 
            an integral part of the stay experience.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           On the other hand, if you are someone who wants to have more options available to himself, 
           you can choose to stay in places like Jaipur, Sawai Madhopur or even Agra, and make a trip 
           to Karauli for a long day or a night.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791875872/images_3_igxepz.jpg"
              alt="Heritage hotels in Karauli - royal stays in Rajasthan's offbeat palace town"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via encrypted-tbn0
          </p>
        </div>
      </div>
    </section>
  );
}