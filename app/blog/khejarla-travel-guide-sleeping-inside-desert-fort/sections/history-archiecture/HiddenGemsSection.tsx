"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Hidden Gems Around Khejarla
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> The fort has a craft bazaar, but it is smaller and not as commercial as the places you see in Jodhpur. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Past the fort walls, there are calm village lanes. Day to day life goes on, with little fuss from visitors. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> In the early morning, you can hear and spot birds near the pond edges and the fields. It feels nice for people who birdwatch now and then. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Along the outer ramparts, there are spots to look out. They are not marked and work well for photos away from the main areas where guests gather.  
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}