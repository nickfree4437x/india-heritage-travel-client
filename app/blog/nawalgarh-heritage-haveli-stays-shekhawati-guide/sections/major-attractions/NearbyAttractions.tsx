"use client";

export default function NearbyAttractions() {
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
          Nearby Attractions
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Mandawa – located approximately 30 km away and often referred to as the most photogenic fresco town in Shekhawati, Mandawa itself boasts a few haveli hotels.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Dundlod Fort – located around 7 km from Nawalgarh and built in the 18th century, it is a Rajput fort that includes a museum and some courtyard architecture.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Fatehpur – an intact fresco town located an hour away that houses the Nadine Le Prince Cultural Centre.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Jhunjhunu – located 40 km away and being the headquarters of the district, it too possesses several havelis and temples.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Mahansar – a less-known, quieter fresco town with the Sone Chandi Ki Haveli.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}