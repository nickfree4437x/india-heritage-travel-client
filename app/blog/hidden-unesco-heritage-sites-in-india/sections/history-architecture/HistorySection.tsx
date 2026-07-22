"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History: Four Millennia in the Shadows of the Famous Monuments
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784724074/Tomb_at_Champaner_Gujarat_India_AD_1500_azhs9c.jpg"
              alt="Ancient hidden heritage in India - millennia of overlooked monuments"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            The story of India's hidden UNESCO heritage spans nearly the entire sweep of Indian civilization. It begins at 
            Bhimbetka's rock shelters, where prehistoric art stretches continuously from Paleolithic times onward. 
            Then it moves through medieval dynasties - the Solankis of Gujarat, who built the ornate Rani ki Vav 
            stepwell, and the Hoysalas of Karnataka, whose 12th–13th century craftsmen covered temple walls in 
            intricate relief carving. The work feels like it never paused.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            The Sultanate period adds Champaner - a capital designed and built by Sultan Mahmud Begada in 
            the late 1400s, then abandoned within fifty years after the Mughal conquest, frozen mid-narrative. 
            In the far northeast, the Ahom dynasty built Moidams - earthen royal burial mounds, their version 
            of a pyramid tradition, used for nearly six centuries. Together, these stories show India's heritage 
            was never limited to one dynasty, one region, or one religion - and that's why this hidden UNESCO trail rewards those who follow it.
          </p>
        </div>
      </div>
    </section>
  );
}