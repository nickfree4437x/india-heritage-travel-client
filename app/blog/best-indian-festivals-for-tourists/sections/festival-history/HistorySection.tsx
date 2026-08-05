"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A Living Heritage: The History Behind Indian Festivals
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Many of India’s most photographed festivals are now well known way beyond its borders, and honestly 
            a lot of folks don’t really clock how deep those roots go. Take Durga Puja in Kolkata, it’s a ten 
            day honoring of Goddess Durga, centered on hand sculpted clay figurines and those fancy neighborhood 
            pavilions, it was placed on UNESCO’s Representative List of the Intangible Cultural Heritage of 
            Humanity in 2021- the first festival from Asia to get that level of recognition. Then there’s 
            the Kumbh Mela, UNESCO calls it the largest peaceful gathering of pilgrims on Earth and it was 
            inscribed in 2017. Gujarat’s Garba, that circular prayer dance performed across the nine nights 
            of Navratri, got included in 2023, and even Diwali was later added in 2025.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            And no, these aren’t just marketing labels, because they point to centuries of oral tradition, 
            real craftsmanship, and everyday community practice that has kept going, mostly without getting 
            rewritten, even if the world around it changed. When you understand that background, standing 
            in a pandal in Kolkata feels different, and joining a Garba circle in Ahmedabad does too, you’re 
            not only watching a spectacle… you’re experiencing a kind of living heritage that international 
            scholars have acknowledged, in a formal way, as globally significant.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785905625/pexels-study-with-aanchal-singh-1469334113-26833726_espdny.jpg"
              alt="Living heritage and history behind Indian festivals - cultural traditions and celebrations"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}