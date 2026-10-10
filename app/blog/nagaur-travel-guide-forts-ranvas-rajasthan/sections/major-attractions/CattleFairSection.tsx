"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Nagaur Cattle Fair
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Once a year , Nagaur kind of transforms into something else. The Nagaur Cattle Fair - which 
            locals, yeah, also call the Ramdeoji Fair, is considered India’s second-largest livestock fair 
            after Pushkar. It pulls in more than 70,000 camels, bullocks, horses and oxen, along with lots 
            of farmers and traders from Rajasthan, Punjab, Haryana, and even Gujarat. It shows up every year 
            in the Hindu month of Magha, so it usually lands somewhere in that late January  to  February 
            window, but the exact dates keep shifting around , thanks to the lunar calendar.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Honestly, it’s not only a place to trade. The animals get decorated in a careful way, with 
            beads, painted horns, and colorful ornaments before they are paraded in front of buyers; the 
            fairgrounds then fill up with folk music, camel and horse races, turban-tying contests, and 
            traditional performances, that happen beside the trading itself. If you are a traveler looking 
            for rural Rajasthan tourism and something genuinely cultural, not those kind of staged shows, 
            then the Nagaur Cattle Fair is about as close as it gets , it’s a working agricultural tradition, 
            and it is spectacular to witness.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787372379/nagaur-cattle-fair_cwosho.jpg"
              alt="Nagaur Cattle Fair - Rajasthan's vibrant livestock fair and cultural gathering"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via topindianholidays.com
          </p>
        </div>
      </div>
    </section>
  );
}