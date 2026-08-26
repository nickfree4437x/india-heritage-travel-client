"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture & Design of the Palace
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Rohet Garh’s architecture sort of shows a long working life, more than one single big design 
            moment, you know. The central courtyard was carefully restored, with marble flooring, a 
            traditional arched veranda, and this small marble fountain tucked in and framed by bougainvillea 
            - it feels calmer, almost more domestic. Like a quieter echo of the grand durbar halls you 
            might see in Jodhpur’s city palaces, but scaled down in mood. 
          </p>
        </div>

        {/* Image */}
        <div className="mb-2">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787744830/mihir_resized_bxfxqh.jpg"
              alt="Rohet Garh architecture - Rajput palace design with sandstone and courtyards"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via houseofrohet.com
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          The palace features cream-coloured cupolas, painted mosaics, and colonial-era murals layered 
          over Rajput architecture. Guest rooms are individually themed with hand-painted frescoes, 
          carved ceilings, antique furniture, and traditional bedcovers - no two alike. Outside, a 
          pavilion-lined pool, manicured lawns, and a lake-view terrace make it feel like a lived-in 
          family home, not just a hotel. 
        </p>
      </div>
    </section>
  );
}