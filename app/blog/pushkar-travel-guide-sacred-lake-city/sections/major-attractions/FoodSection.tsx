"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food & Cuisine: What to Eat in Pushkar
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Since the whole town is considered sacred , Pushkar stays strict vegetarian, and alcohol plus 
            even eggs are barred inside the municipal limits - somehow this rule has helped spark one of 
            India’s most inventive veg food scenes. Rooftop cafés gazing over the lake dish out everything 
            from the usual Rajasthani thalis (dal baati churma is the local favorite) to those traveler-crowd 
            Israeli, Italian, and Mediterranean menus that appeared over the years, largely for decades of 
            steady backpackers.  
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Don't miss malpua - sweet syrup-soaked pancakes from stalls near the ghats - or a glass of 
            bhang lassi from a licensed shop if you're curious. For a more refined experience, Pushkar's 
            heritage hotels offer curated vegetarian tasting menus reimagining Rajasthani classics for 
            luxury travellers. 
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Pushkar Bazaar & Local Shopping
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The lanes linking the ghats to the Brahma Temple become Pushkar Bazaar - one of Rajasthan's 
            most rewarding spots for unhurried shopping. You'll find chunky silver jewellery priced by 
            weight, Bandhani tie-dye textiles in saturated reds and yellows, hand-block printed fabrics, 
            leather juttis, semi-precious stones, and brassware.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Bargaining is expected and part of the experience - start at around half the quoted price and 
            settle somewhere in the middle.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787115973/Boho-Decor-scaled_p2bjsg.webp"
              alt="Pushkar Bazaar - Rajasthani textiles jewellery and shopping"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via somanytraveltales.com
          </p>
        </div>
      </div>
    </section>
  );
}