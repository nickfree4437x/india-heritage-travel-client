"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
         Best Time to Visit India for Festivals
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> India’s festival season sort of feels like it runs almost year-round, but really there are three big windows that matter most for tourists planning a trip around them, seriously.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> October to November: this is when Navratri, Durga Puja, Diwali, and also the Pushkar Camel Fair end up crowding together into one long golden stretch, across parts of North and East India. It’s a lot, but in a good way.      
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> December through February, the weather kind of turns cool, and stays dry, so generally it feels the most comfortable stretch. This also matches up nicely with the Hornbill Festival, then the Jaisalmer Desert Festival, and Pongal, sort of all in one long run of months, like you get several things back to back.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> March: Holi shows up with the first real hint of spring, most often early to mid March, and it’s best felt in Mathura, Vrindavan, or Rajasthan’s heritage towns, where the atmosphere just carries differently.      
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Now, the exact dates can shift year to year, because many festivals follow the lunar Hindu calendar. So yeah, it’s smart to confirm the current year’s dates with a specialist before you book flights, just to be safe.    
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}