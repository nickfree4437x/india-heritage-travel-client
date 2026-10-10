"use client";

import Image from "next/image";

export default function NearbyAttractionsSection() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
          Nearby Attractions in Agra
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-6">
          It would be incorrect to focus exclusively on the Taj Mahal when preparing your itinerary for 
          Agra. Apart from the Taj Mahal, there is one more World Heritage Site located in Agra. It is 
          located 2.5 kilometers from the Taj Mahal and is known as Red Sandstone Fort. It used to be 
          the capital of Mughal Empire until Shah Jahan built the Taj Mahal. You should definitely not 
          miss the opportunity to visit Khas Mahal and Musamman Burj, where Shah Jahan resided being kept 
          in custody by his son, admiring his masterpiece.
        </p>

        {/* Agra Fort */}

        <div className="mb-4 md:mb-6">

          <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-2">
            Agra Fort
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
            Located just 2.5 kilometres from the Taj Mahal, Agra Fort is
            another UNESCO World Heritage Site and one of the most important
            Mughal monuments in India. Constructed primarily from red
            sandstone, the fort served as the imperial residence of Mughal
            emperors before Shah Jahan shifted his attention toward the
            construction of the Taj Mahal.
          </p>

          <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783058958/pexels-laura-barragan-247861147-12446384_yn2uod.jpg"
              alt="Agra Fort's red sandstone ramparts overlooking the Yamuna River"
              fill
              sizes="100vw"
              className="object-cover"
            />

          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            Image via unsplash
          </p>

        </div>

        {/* Other Attractions */}

        <div className="mb-4 md:mb-6">

          <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-2">
            Baby Taj & Mehtab Bagh
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
            The Tomb of Itimad-ud-Daulah, often called the
            <strong> "Baby Taj"</strong>, is widely considered a precursor
            to the Taj Mahal. Built entirely in white marble, it introduced
            many of the decorative techniques and intricate inlay details
            that would later reach perfection at the Taj Mahal itself.
          </p>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify mb-6">
            Across the Yamuna River lies
            <strong> Mehtab Bagh</strong>, also known as the Moonlight
            Garden. This peaceful riverside garden offers one of the finest
            panoramic views of the Taj Mahal and is particularly popular at
            sunset when the monument glows beneath the changing colours of
            the evening sky.
          </p>

          <div className="relative h-[280px] sm:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783070130/pexels-axp-photography-500641970-16738840_g8ajkq.jpg"
              alt="Intricate white marble carving on Itimad-ud-Daulah's Tomb known as the Baby Taj"
              fill
              sizes="100vw"
              className="object-cover"
            />

          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            Image via pexels
          </p>

        </div>
      </div>

    </section>
  );
}