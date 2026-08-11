"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Flights to India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
             There is usually a card-processing surcharge, about 2.5–3% , that sits above the base fee, so 
             it can feel a bit add-on-ish. Also if you want a professional visa-assistance service, you 
             should plan an extra $15–50 for document checking and day-to-day support, because that part 
             is often separate. Make sure you submit through the official Indian government e-Visa portal, 
             or use a verified partner, don’t just pay anywhere. Before you pay, double-check the exact fee 
             for your nationality, since the numbers get updated periodically, sometimes quietly.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786421449/pexels-ethan-sarkar-2060961318-36912971_f6kt4o.jpg"
              alt="Flights to India - international airports Delhi Mumbai and connections guide 2026"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}