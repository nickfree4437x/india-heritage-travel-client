"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Where Is Devgarh and Why Visit
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Devgarh sits about 120 kilometres northeast of Udaipur, tucked into some fold of the Aravalli 
            range where Mewar, Marwar, and Merwara kinda historically met. It’s not like just one monument, 
            no, it’s a working town really: tight lanes, a hilltop palace, farmland, small water tanks lakes, 
            and villages that still run on agriculture, weaving and pottery rather than the usual tourism 
            rhythm. Most Rajasthan itineraries zip along-city palace, fort, bazaar, then on to the next city- 
            but Devgarh sort of insists you slow down, for a night or two, and just be there in rural Rajasthan.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            What makes it feel different is the contrast. You sleep inside a real Rajput palace, with carved 
            stone jharokhas and mirrored rooms, then the next morning you’re on a jeep trail between mustard 
            fields, or on horseback past a village well. Not many places in India let you switch between these 
            kinds of mornings so easily, and even fewer let you do it without seeing another tour bus somewhere, 
            just sitting, idling.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787541403/794597_64b2e783f1b34ac2bb9f355f13b0e6f8_mv2_nkjahp.avif"
              alt="Devgarh location and why visit - Deogarh Mahal in rural Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via deogarhmahal.com
          </p>
        </div>
      </div>
    </section>
  );
}