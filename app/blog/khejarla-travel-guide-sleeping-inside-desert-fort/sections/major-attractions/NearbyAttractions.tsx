"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Nearby Attractions Around Khejarla
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Jodhpur, known as the Blue City, takes an hour-and-a-half to two hours to reach via road. One can visit places like Mehrangarh Fort and Umaid Bhawan Palace in Jodhpur.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Next is Osian, a small desert settlement. It has old Jain and Hindu temples. Many people add camel safaris when they visit.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Then go to Guda Bishnoiyan and Kakani. These are Bishnoi villages closer to Jodhpur. They are linked with wildlife. Guda Lake draws migratory demoiselle cranes from September to March. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> You can also do a quiet loop on the farmland roads around Khejarla. It works well for cycling. A slow walk in the morning also feels nice.  
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}