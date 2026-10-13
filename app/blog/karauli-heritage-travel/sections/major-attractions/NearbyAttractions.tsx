"use client";

export default function NearbyAttractions() {
  return (
    <section className="w-full bg-white py-1 md:py-1">
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

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Karauli sits within easy reach of several major destinations. Ranthambore National Park (about 100 km) 
            is ideal for wildlife enthusiasts, while Jaipur (160–180 km) can be combined with Dausa and Abhaneri. 
            Agra and Fatehpur Sikri (around 180 km) connect Karauli to the Taj circuit, Bharatpur's Keoladeo 
            National Park (110 km) is perfect for birdwatching, and Gwalior (140 km) offers more Rajput and Maratha 
            forts.
          </p>
        </div>
      </div>
    </section>
  );
}