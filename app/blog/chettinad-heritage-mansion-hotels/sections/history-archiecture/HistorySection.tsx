"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History - The Rise and Fall of the Nattukottai Chettiars
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Traditionally known as the Nagarathars, the Chettiars were salt, spice, and gem traders who 
            hailed from a place close to the coastal village of Poompuhar. It is believed that a great 
            flood drove them to settle elsewhere during the medieval period, and the Pandya king, Sundara 
            Pandiyan, granted them permission to inhabit this arid stretch of land in return for 
            developing the economy of the region.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            It was the British colonial trade that made these people famous. As traders and financiers, 
            the Nattukottai Chettiars developed extensive networks in places like Burma, Malaya, Ceylon, 
            and Vietnam, extended credit to farmers as well as rulers, and accumulated massive amounts of 
            wealth. During the period between around 1850 and the beginning of the Second World War, that 
            wealth was used in the construction of houses – each family competing with each other in size, 
            materials, and decorations.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789119572/760d61_8168c2ae3ef742538d385b0e52d67366_mv2_j8g1uz.jpg"
              alt="Nattukottai Chettiars history - rise and fall of Chettinad merchant bankers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via static.wixstatic
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          During the Second World War, the trading networks of the Chettinad came to a grinding halt, 
          businesses went bust, families started leaving the place for cities and overseas destinations, 
          and houses were abandoned – some of them inhabited by caretakers, others deserted and boarded up. 
          Ironically enough, it is this decline that helped preserve Chettinad; 	
        </p>
      </div>
    </section>
  );
}