"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Booking Safe Accommodation
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Accommodation is usually worth spending a bit more on , overall. Do your best to locate places 
            with a 24 hour front desk and then go through verified recent feedback from solo women guests , 
            not only the star score. 
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Before you book, skim the reviews from solo female travellers, and dont trust the overall rating alone.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> When you arrive, request a room that is at a sensible distance from ground floor windows and, if possible, away from stairwells as well. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Use the in-room safe for passports and valuables. Boutique and luxury hotels provide stronger security and staff accustomed to solo female guests. 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}