"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
         Suggested Two-Day Festival Itinerary
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1, morning: We’ll do a guided walk through Jaipur’s Old City, and we’ll pass by nearby markets as they get busy with diyas, sweets, and rangoli supplies for the festival.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1, evening: There’s a private rooftop dinner with views over the illuminated City Palace, after that you can wander through lantern lit bazaars, slowly, like no rush.      
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2, morning: Head out to a local artisan workshop to try learning rangoli basics and the diya-painting techniques in a traditional way.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2, evening: Enjoy the Diwali celebration hosted with a local family or from a heritage haveli, you’ll get a home-style feast and then fireworks watching from a private terrace.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}