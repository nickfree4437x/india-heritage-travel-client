"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Nearby Attractions
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Kota (35–40 km): Walk along the Chambal River, visit Garadia Mahadev Temple, and explore Kota Palace Museum. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Chittorgarh (120 km west): Home to Chittorgarh Fort - one of India's largest and most famous hill forts. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Ranthambore National Park: A wildlife safari destination, ideal for adding to a nature-focused Rajasthan itinerary. 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}