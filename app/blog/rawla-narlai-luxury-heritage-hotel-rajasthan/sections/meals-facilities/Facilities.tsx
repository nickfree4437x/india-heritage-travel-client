
"use client";
import Image from "next/image";

export default function AmenitiesSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* EXPERIENCES HEADER */}

        <div className="mb-4 md:mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Uniquely Special Experiences at Rawla Narlai
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            This is where Rawla Narlai rises far beyond the traditional
            heritage hotel experience. Guests are invited to immerse
            themselves in unforgettable adventures, authentic cultural
            encounters, and remarkable moments found nowhere else in
            Rajasthan.
          </p>

        </div>

        {/* LEOPARD SAFARI */}

        <div>

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-2">
            Leopard Safari – Into the Jawai Wilds
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify mb-4">
            The Jawai Leopard Reserve near Rawla Narlai has become one of
            India's most remarkable wildlife destinations. Unlike traditional
            forest safaris, Jawai's dramatic landscape of granite outcrops and
            open scrublands offers exceptional opportunities to observe Indian
            leopards in their natural habitat, often seen resting atop rocky
            formations during the early morning hours.
          </p>
        </div>
        <div className="relative mt-6 w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
  
          <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782299348/9_Rawla_Narlai_f5h7ih.jpg"
              alt="Luxury Dining Experience at Rawla Narlai Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
          />
          </div>
          <p className="mt-2 text-[12px] md:text-[13px] text-gray-600 font-light">
            Image via Rawla Narlai
          </p>

      </div>

    </section>
  );
}