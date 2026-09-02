"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Nearby Attractions Worth Combining
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> The Ranakpur Jain Temple is close. Just 45 minutes. It has many white stone sticks, 1,444 of them. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Haldighati is far, about 40 km. People say a big fight happened here. Maharana Pratap fought the Mughals. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> On the way to Udaipur, you see Rajsamand Lake and Kankroli. There are hill temples too.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Udaipur is not too near, about 85 km. It is the city with many lakes. 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}