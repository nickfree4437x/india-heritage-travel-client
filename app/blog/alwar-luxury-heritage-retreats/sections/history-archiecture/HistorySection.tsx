"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A Short History of Alwar's Royal Heritage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            This place is old indeed. It belongs to the Matsya kingdom and has been ruled by various Rajput 
            clans, such as Nikumbhs and Yaduvanshis. The Nikumbh Rajputs have built a massive hill fort, 
            located above the city. The legend holds that it has once welcomed the Mughal emperors Babur 
            and Jahangir.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The city of Alwar is relatively new. The princely state was founded in 1770 when Pratap Singh 
            Naruka, beginning as a jagirdar, took control of the hill fort in 1775. His successor, Bakhtawar 
            Singh, lost a battle against neighbouring Jaipur and signed a treaty - brokered by the East India 
            Company - making Alwar one of the first Rajput states to enter the British alliance.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            In the late 19th century, Maharaja Vinay Singh's reign saw the creation of Siliserh Lake, 
            formed by damming a stream in 1845. Maharaja Jai Singh, who ruled into the early 20th century, 
            commissioned palaces and lakes including Vijai Mandir Palace (1918), Jai Samand Lake (1910), and 
            a hunting lodge in Sariska. Alwar later became part of independent India.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791787090/pexels-shantanu09-7036815_z8anip.jpg"
              alt="Alwar princely state history - Siliserh Lake and Vijai Mandir Palace"
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