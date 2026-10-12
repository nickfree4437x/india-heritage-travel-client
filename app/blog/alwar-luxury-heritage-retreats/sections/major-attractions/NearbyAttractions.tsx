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
            Alwar sits within easy reach of several remarkable sites. Abhaneri's Chand Baori, one of 
            India's most striking stepwells, lies about 50 km from Sariska, while Jaipur (150 km south) 
            and Delhi (150 km north) make natural extensions of a Rajasthan itinerary. Bhangarh Fort, 30 
            km from Sariska, offers 17th-century ruins and intriguing legends, and the 15th-century 
            Neemrana Fort-Palace - on the Delhi–Jaipur route - provides a luxurious lunch or overnight 
            stop.
          </p>
        </div>
      </div>
    </section>
  );
}