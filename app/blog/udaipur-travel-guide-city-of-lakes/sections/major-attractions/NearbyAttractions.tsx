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
          Nearby Attractions Worth a Day Trip
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Kumbhalgarh Fort ( around 2.5 hours ) - a UNESCO listed hill fort, with one of the longest continuous ramparts in the world, basically only the Great Wall of China is longer.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Ranakpur Jain Temples ( around 2.5 hours ) - well known for more than 1,400 delicately carved marble pillars ,and none of them are exactly the same.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Chittorgarh Fort ( around 2.5–3 hours ) - the old Mewar capital and also one of India’s biggest fortress complexes, full of stories about courage and sacrifice.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Eklingji Temple ( around 45 minutes ) - the historic tutelary temple of the Mewar Maharanas, still a living pilgrimage place, people go there today. 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}