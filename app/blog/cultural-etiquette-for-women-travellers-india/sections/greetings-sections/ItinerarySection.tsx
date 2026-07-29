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
          A One-Day Etiquette-Aware Itinerary: Jaipur
        </h2>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Morning
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Go to the City Palace in a proper full coverage outfit, take off your shoes where it’s needed and ask permission first before you photograph the staff in traditional dress , just in case.
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Midday
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Walk around the Old City bazaars with a guide, doing some light friendly haggling ,and trying a thali with your right hand, the way your host does. 
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Afternoon 
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Head to a temple with your dupatta ready for a head covering and keep a quiet mood near the prayer area, you know, no sudden talking or stuff.
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            1 Day Before
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Photocopy your documents, split your cash and cards, and pack your daypack with essentials.
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 md:mb-1">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Evening
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Try to catch a cultural performance or a festival event if the timing fits, dress modestly and ask before photographing the performers, even for quick shots.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}