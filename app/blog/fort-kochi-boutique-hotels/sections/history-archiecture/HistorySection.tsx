"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Colonial History of Fort Kochi
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The identity of Fort Kochi cannot be separated from the three different colonial forces that 
            remade the institution and built the infrastructure of the town before transferring control 
            of it to the succeeding power.
          </p>

          <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            The Portuguese Era (1503–1663)
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Portuguese arrived at the port in 1500, under the leadership of Pedro Alvares Cabral. The fort constructed by them in 1503 after acquiring permission from the Raja of Kochi was named Fort Manuel, and hence the name of the city.
            There used to be a wooden church inside the fort which later in 1516 became known as St. Francis Church. I believe this is the first church which the Europeans built in the Indian sub-continent. This is the striking part.
          </p>

          <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            The Dutch Era (1663–1795)
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            In the year 1663, Fort Kochi was captured from the Portuguese by the Dutch East India Company. Many Catholic societies were thus razed to the ground by the Dutch. In 1664, the first municipality of the Indian subcontinent was formed by the Dutch here. They also refurbished the Portuguese Royal palace constructed here and called it Dutch Palace or Mattancherry Palace. The time period of their reign was 112 years.
          </p>

          <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            The British Era (1795–1947)
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The British conquered the fort of Kochi from the Dutch in 1795, and by the beginning of the nineteenth century, large sections of the fort were reduced to ruins. During the period of their control, Fort Kochi emerged as a colonial trading station famous for its export of spices and tea, and there were a large number of structures constructed in the British era, including bungalows and other public buildings which have been converted into boutique hotels in modern times. The foreign domination of the fort was put to an end with Indian independence in 1947.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789728143/vishnu-vs-UKhlMlkrhDA-unsplash_max0qz.jpg"
              alt="Fort Kochi colonial history - Portuguese Dutch and British rule in Kerala"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}