"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          The Claims Process, Simplified
        </h2>

        {/* Content */}
        <div className="space-y-2 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            A claim is usually far less stressful than travellers expect, provided you keep good records 
            from the outset. In an emergency, head to the nearest reputable hospital first - deal with 
            admin later. Cashless network hospitals will speak directly with your insurer. Keep every 
            original receipt, medical report, and prescription. Contact your insurer's assistance line 
            as soon as possible - most policies require notification within 24–48 hours of hospitalisation, 
            or they may treat it as late.
          </p>
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            For luggage troubles or flight delays, get a written report before leaving the airport - a 
            Property Irregularity Report for baggage or official delay confirmation from the airline. 
            Submit the claim via the insurer's app or portal. Most comprehensive plans process ordinary 
            claims in about two to four weeks, depending on the details.
          </p>
        </div>
      </div>
    </section>
  );
}