"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture and Cultural Significance
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784724268/Champaner__Lila_Gumbaj_Ki_Masjid__9840188055_fqtgcj.jpg"
              alt="Hidden UNESCO architecture - stepwells rock shelters and temple carvings in India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            What separates these offbeat heritage sites from random ruins is the craftsmanship still visible 
            on site - stand there long enough and you can almost hear the tools. Rani ki Vav, an inverted 
            temple, descends seven levels with over 500 sculptural panels in the Maru-Gurjara style. The 
            Hoysala temples at Belur, Halebidu, and Somanathapura feature star-shaped layouts with friezes 
            of elephants, warriors, and mythology - poetry carved into stone.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3">
            Champaner-Pavagadh mixes two traditions on one hillside: a living Hindu-Jain pilgrimage cluster 
            up on Pavagadh Hill, with the Kalika Mata Temple still active, while below sits the unexcavated 
            Islamic capital of Champaner. Layers stack - devotion above, city remnants below. It's often called 
            the only complete, unaltered pre-Mughal Islamic city surviving in India - a claim that fits.
          </p>
        </div>
      </div>
    </section>
  );
}