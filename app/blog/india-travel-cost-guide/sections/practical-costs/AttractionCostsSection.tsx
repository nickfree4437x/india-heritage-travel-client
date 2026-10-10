"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Attraction Entry Fees & Tour Costs
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            India has this nationality tiered pricing basically on near every ticketed monument, with foreign 
            visitors paying a lot more than Indian nationals, it’s a setup put in place by the Archaeological 
            Survey of India (ASI) and rolled out pretty uniformly. At the Taj Mahal , the standout example, 
            overseas tourists are looking at something like ₹1,100–1,300 (around $13–16) just for base entry , 
            and then there’s a separate ₹200 add on to get into the inner mausoleum chamber; kids under 15 get 
            in free. For the other big sites - Amber Fort, Fatehpur Sikri, Humayun's Tomb, Qutub Minar - foreign 
            visitors usually end up paying roughly ₹300–600 per site.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Then if you go for a licensed private guide , it tends to run about ₹1,500–2,500 ($18–30) for a 
            half-day at one monument. It’s commonly billed per group not per person, which makes it pretty 
            solid value for couples and families. Multi day guided touring packages that bundle a driver, a 
            guide, and a set of curated experiences often tack on about $40–80 per day on top of self directed 
            travel, and for many first time visitors that extra cost feels worth it, because of the context, 
            and the convenience it buys.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786423912/benjamin-sharpe-nZU5FEgdmY0-unsplash_xpaci0.jpg"
              alt="Attraction entry fees and tour costs in India - monument prices and guided tour rates"
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