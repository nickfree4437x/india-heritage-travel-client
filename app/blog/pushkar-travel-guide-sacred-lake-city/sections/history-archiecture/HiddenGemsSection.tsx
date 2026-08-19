"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-1 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Hidden Gems Away from the Crowds
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Apteshwar Mahadev Temple - a small, sort of atmospheric cave style Shiva shrine near the ghats, the kind a lot of tour groups just… miss entirely.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Old Rangji Temple viewpoint - it’s this kind of calm lane behind the main temple, so you get an uncrowded photo angle of the gopuram, if you go at the right time, like really early or later.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Pushkar hills sunset point - a short climb west of town, away from the Savitri ropeway throng, it’s favored by photographers chasing that golden hour look.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> The camel breeding villages on Pushkar’s desert edge - arranged via a private guide, these basically show you a more genuine scene of the Raika herding community that supports the annual camel fair.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Man Mahal Palace - a modest 16th century royal guesthouse that became a heritage hotel, it sits above the lake, and honestly it’s worth your time even if you’re not sleeping there.  
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}