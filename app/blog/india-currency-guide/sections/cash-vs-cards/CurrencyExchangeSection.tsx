"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Currency Exchange: Airports, Banks & Authorized Dealers
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Airport currency exchange counters are super handy but, honestly, not that competitive-so, 
            expect a larger spread between what they pay you (buy) and what they charge you (sell) than 
            you’d see elsewhere. If you want better value, exchange only the amount you really need to 
            reach the city from the airport, then go with RBI-authorized money changers, bank branches, 
            or even hotel exchange desks (which are often close to market rates for their guests) to swap 
            the rest.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Also, always request a receipt for any exchange above a smallish sum. It’s basically evidence 
            of a proper conversion, and it can really help if you later want to reconvert unused rupees 
            before you leave. Stick only with RBI-authorized dealers, banks, or airport counters. Anything 
            unlicensed, like street changers, is both illegal to deal with and a usual path to counterfeit 
            notes.
          </p>
        </div>

        {/* Image */}
        <div className="mt-2 md:mt-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785810664/pexels-defrinomaasy-38429810_zflmwu.jpg"
              alt="Currency Exchange: Airports, Banks & Authorized Dealers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        {/* Heading */}
        <div className="mb-1 mt-2">
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Currency Exchange: Airports, Banks & Authorized Dealers
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Foreign tourists may bring in unlimited foreign currency, but if you are carrying more than USD 
            5,000 in cash, or more than USD 10,000 combined with travelers' cheques, it must be declared on 
            a Currency Declaration Form at customs on arrival. Foreign visitors are generally not permitted 
            to bring Indian Rupees into the country and should exchange for INR only after landing.
          </p>
      </div>
    </section>
  );
}