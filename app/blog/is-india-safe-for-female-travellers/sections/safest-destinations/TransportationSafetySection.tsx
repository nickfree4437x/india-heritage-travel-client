"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-4 md:py-7">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Transportation Safety for Women in India
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            More avoidable incidents happen in transit than anywhere else - which is exactly why transport needs to be set up, not improvised on the spot.
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Book app-based cabs (Uber, Ola) or a private, vetted driver instead of hailing unmarked vehicles on the street.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> On Indian Railways, use women-only coaches available on many long-distance and suburban trains - they're there for a reason.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> For intercity travel, choose daytime journeys or overnight trains in reserved, well-reviewed classes instead of long night drives on unfamiliar highways.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> A private chauffeur, arranged ahead and kept for the full trip, removes nearly all uncertainty - which is why it's the standard on every India Heritage Travel itinerary.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}