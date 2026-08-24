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
          Nearby Attractions Worth the Detour
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Devgarh sits inside Rajsamand district, so a handful of major Mewar places feel like a very comfortable day trip, more or less.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Like, Kumbhalgarh Fort  it’s UNESCO-listed, part of the “Hill Forts of Rajasthan” World Heritage label, and it’s known for that big perimeter wall, about 36 kilometres around
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Then there are Ranakpur Jain Temples, a marble temple complex with delicate carvings, and it’s often seen as among the best examples of Jain design in India. Next up is Rajsamand Lake , a large 17th-century man made lake with marble embankments (the “Nauchoki Pal”), which is a fairly short drive away from Devgarh.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> If you keep going, Nathdwara is there too, and it’s where the revered Shrinathji temple is located , one of the region’s most important Krishna pilgrimage spots.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> And after Devgarh, Udaipur , the “City of Lakes” works really well as an easy end point, you can fold it neatly into a wider Mewar circuit without too much hassle. 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}