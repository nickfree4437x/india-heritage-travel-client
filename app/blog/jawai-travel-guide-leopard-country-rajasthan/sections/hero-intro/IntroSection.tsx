"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Jawai Travel Guide: Where Luxury Meets Leopard Country
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Somewhere between Udaipur’s lakes and Jodhpur’s blue-washed lanes , Rajasthan keeps a hush it 
            is not really in a hurry to share. It is that long ribbon of billion-year old granite hills 
            where leopards stroll past goat herds like it’s the most ordinary thing in the world, no pause 
            no drama, and where shepherds do the same, almost as if the cats are just part of the landscape. 
            They call this Jawai, and for a lot of first time visitors it is still kinda unfamiliar , a 
            name that doesn’t ring right away. Yet photographers, safari veterans , and luxury travelers 
            speak it with quiet reverence, especially the ones who got to see a leopard silhouette against 
            a Rajasthani sunset.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This Jawai travel guide is made for exactly those kind of travelers-someone who actually wants 
            the real story of Jawai, told with the depth of a proper field guide, but still with the warm 
            tone of someone who’s been there and noticed the small details. So whether you’re planning a 
            tight, two-night leopard safari, or you’re weaving Jawai into a longer, private Rajasthan plan, 
            here’s the stuff that matters most before you go.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787456012/761cbb5d-21c0-4329-b563-006bf6fe526b_dmsbxd.avif"
              alt="Jawai leopard safari - luxury wildlife camp and leopard sightings in Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via jawaisafaris.com
          </p>
        </div>
      </div>
    </section>
  );
}