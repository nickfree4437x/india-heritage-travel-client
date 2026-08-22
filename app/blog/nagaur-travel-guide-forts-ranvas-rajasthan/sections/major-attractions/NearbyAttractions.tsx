"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
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
              <span className="font-light">•</span> Khimsar - a desert fort-turned-hotel roughly 90 km away, on the edge of the Thar Desert's sand dunes
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Kuchaman Fort - a dramatic hilltop fort within the wider Nagaur district, historically used to mint gold and silver coin
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Jodhpur - around 135–140 km southwest, home to Mehrangarh Fort and the Blue City
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Bikaner - roughly 110–120 km northwest, known for Junagarh Fort and its own distinct desert culture
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}