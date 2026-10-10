"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Pushkar Camel Fair (Pushkar Mela)
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            If you can time your trip around it , the Pushkar Camel Fair is worth sort of building your whole 
            itinerary on its own. It’s held every year in the Hindu month of Kartik, and the fair draws more 
            than 50,000 camels horses and cattle, brought in by traders, and by the Raika herding communities 
            from all over Rajasthan. You’ll also see camel races, tug of war contests , moustache and turban 
            competitions, plus folk music performances that feel very up close.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            For 2026, the Pushkar Camel Fair is approximately set for 17 to 24 November, and it sort of 
            peaks on Kartik Purnima — the Kartik full moon — around 23 to 24 November. That’s when hundreds 
            of thousands of pilgrims bathe in Pushkar Lake at dawn, in what’s widely seen as one of the most 
            powerful group rituals in India. Since the exact dates follow the lunar calendar, it’s smart to 
            double check the latest schedule for this year near your travel dates, and to lock in accommodation 
            months ahead . In fair season Pushkar has limited room inventory, and those spaces go quickly.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787115135/A__Camel_Pushkar_fair_vbzeq0.jpg"
              alt="Camels and traders gathered at the annual Pushkar Camel Fair in Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>
    </section>
  );
}