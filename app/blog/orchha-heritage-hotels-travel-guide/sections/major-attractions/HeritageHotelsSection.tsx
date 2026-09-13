"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Orchha Heritage Hotels: Where to Sleep in a Forgotten Kingdom
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Up until recently, Orchha remained a day destination, visited by people as a part of their 
            travel between Khajuraho and Jhansi in a bus ride. Things have changed. With a handful of 
            Orchha heritage hotels emerging, travellers can experience what used to be the privilege of 
            the royals, staying at the Orchha Heritage Hotels, spending time within Orchha rather than 
            travelling through it.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           MPT Sheesh Mahal is the top-notch Orchha heritage hotel, located on the premises of the Orchha 
           Fort Complex – the only Indian opportunity to sleep inside a functioning Bundela palace with an 
           access to the Jahangir Mahal and Raja Mahal through the courtyard of the hotel. Nearby are riverside 
           Orchha heritage resorts, such as MPT Betwa Retreat, offering comfortable accommodation and a view at 
           the Betwa River along with easy access to the fort complex and other historical sites.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789318888/pexels-rsapmech-11473368_oopqfu.jpg"
              alt="Orchha Heritage Hotels: Where to Sleep in a Forgotten Kingdom"
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