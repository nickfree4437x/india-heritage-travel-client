"use client";

export default function NearbyAttractions() {
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
          Nearby Attractions Worth Adding
        </h2>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Neemrana is well-placed for exploring nearby Rajasthan. Alwar (66 km) offers the City Palace, Bala Quila Fort, and historic lakes, while Sariska Tiger Reserve is a rewarding wildlife add-on, best visited in winter. Jaipur (155 km) is the natural next stop, and village or craft experiences can be arranged through a local guide.
          </p>
        </div>
      </div>
    </section>
  );
}