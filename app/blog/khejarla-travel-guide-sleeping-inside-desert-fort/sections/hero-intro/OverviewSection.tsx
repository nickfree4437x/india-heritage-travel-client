"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: What Is Khejarla?
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Khejarla village is located in Jodhpur area of Rajasthan. Majority of it is located in proximity 
            of an ancient fort. The locals generally believe that this fort has a history of about four 
            hundred years. With passage of time, families settled there and houses and small establishments 
            sprang up from the vicinity of the fort.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Walk inside and you can still feel what it was made for.You will not find crowd control lines. 
            There is no ticket queue. You will not be pushed through a set of souvenir stalls. The view is 
            quieter instead. There is the village. There is the fort. There is farmland nearby. Beyond that, 
            the desert keeps going toward the horizon. The reason people take the detour is also straightforward. 
            Khejarla is one of the few heritage stays in Rajasthan where the idea of “stay in a fort” is real, 
            not just a slogan. The fort functions as the hotel. Rooms, open courtyards, and the ramparts have 
            been used for guests, but the original 17th century structure was not stripped away. That is why 
            travelers who care about heritage and slow journeys now look for Khejarla by name. They do not 
            only settle for a generic “Rajasthan palace hotel.”
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787836914/9_ukijrb.jpg"
              alt="Khejarla overview - red sandstone heritage fort near Jodhpur Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via jodhpurfortkhejarla
          </p>
        </div>
      </div>
    </section>
  );
}