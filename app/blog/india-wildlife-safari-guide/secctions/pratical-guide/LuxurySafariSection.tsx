"use client";

export default function ChooseParkSection() {
  return (
    <section className="py-4 md:py-2 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-6xl mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            How to Choose the Right National Park for Your Safari
          </h2>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            With so many incredible national parks across India, choosing the right
            safari destination can feel overwhelming. The best park for you depends
            on the wildlife you want to see, the type of safari experience you're
            looking for, and the season of your visit.
          </p>
        </div>

        {/* Table/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 0">
          {/* Tiger */}
          <div className=" p-1 md:p-2  transition-shadow">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[12px] md:text-[14px] font-semibold text-[#2c2c2c]">Royal Bengal Tigers</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Best Parks:</span> Ranthambore, Bandhavgarh, Tadoba
            </p>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Why Visit:</span> Excellent tiger sightings and thrilling jeep safaris.
            </p>
          </div>

          {/* Lion */}
          <div className=" p-1 md:p-2  transition-shadow">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[12px] md:text-[14px] font-semibold text-[#2c2c2c]">Asiatic Lions</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Best Park:</span> Gir National Park
            </p>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Why Visit:</span> The only place in the world to see wild Asiatic lions.
            </p>
          </div>

          {/* Elephant */}
          <div className=" p-1 md:p-2  transition-shadow">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[12px] md:text-[14px] font-semibold text-[#2c2c2c]">Indian Elephants</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Best Parks:</span> Jim Corbett, Nagarhole
            </p>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Why Visit:</span> Great elephant sightings in beautiful forest landscapes.
            </p>
          </div>

          {/* Photography */}
          <div className=" p-1 md:p-2  transition-shadow">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[12px] md:text-[14px] font-semibold text-[#2c2c2c]">Wildlife Photography</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Best Parks:</span> Ranthambore, Kanha
            </p>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Why Visit:</span> Open landscapes and frequent wildlife sightings.
            </p>
          </div>

          {/* Family Safari */}
          <div className=" p-1 md:p-2  transition-shadow">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[12px] md:text-[14px] font-semibold text-[#2c2c2c]">Family Safari</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Best Parks:</span> Jim Corbett, Kanha
            </p>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Why Visit:</span> Scenic, accessible, and suitable for first-time visitors.
            </p>
          </div>

          {/* Luxury Safari */}
          <div className=" p-1 md:p-2  transition-shadow">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[12px] md:text-[14px] font-semibold text-[#2c2c2c]">Luxury Safari Experience</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Best Parks:</span> Ranthambore, Kanha
            </p>
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
              <span className="font-medium">Why Visit:</span> Premium jungle lodges and world-class safari experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}