"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Why Mandawa Belongs on Your Rajasthan Itinerary
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Travelers who visit Rajasthan always come seeking the three big destinations – Jaipur, Udaipur, 
            Jodhpur – without discovering the existence of another small town which is located between them 
            called Mandawa. Located in the Jhunjhunu district of the Shekhawati region, Mandawa has never 
            been a royal capital. It was a merchant town that was formed by the family of merchants that had 
            made their wealth from the opium, spices, textiles, and the silk route of Central Asia to Indian 
            Sub-continent.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The heritage left behind by those merchants is not found anywhere else in the country. The 
            town of Mandawa is full of the havelis of the merchants which are painted on all walls, doors, 
            and ceiling of those houses in the fresco style. Peacocks are depicted along with steam trains, 
            Hindu gods are shown beside British officers in the pith helmet. Alongside the Ragamala paintings, 
            gramophone and the automobiles are also depicted in those paintings. This is a painted history of 
            the transitional era which survives till date.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788954129/pexels-hemant-singh-chauhan-639506990-35266936_l3kxu1.jpg"
              alt="Mandawa overview - why it belongs on your Rajasthan itinerary with painted havelis"
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