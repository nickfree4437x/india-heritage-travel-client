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
          Hotel and Accommodation Safety
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Accommodation choice matters as much as the destination. Stick to reputable hotels with 24-hour 
            front desks, in-house security, and verified guest reviews - even if the cheapest room looks 
            tempting, safety is the point.
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Before you book, take a look at the most recent reviews, and specifically filter for solo female travellers , not only the overall ratings. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> When you check in, ask for a room that is not near ground-floor windows or stairwells, even if it feels like a small thing. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Use the room safe for passports, cash and valuables, instead of carrying everything around all the time, it gets exhausting. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Heritage boutique hotels and luxury properties, which is basically the benchmark for India Heritage Travel guests , usually provide stronger protection plus a calmer, more discrete kind of personalised welcome for women travelling alone.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}