"use client";

export default function BestTimeSection() {
  return (
    <section className="py-1 md:py-1 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-6xl mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide mb-1">
            Best Time to Go on a Wildlife Safari in India
          </h2>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            The best time for a wildlife safari in India largely depends on the
            national park you plan to visit and the type of wildlife you hope to
            see. In general, the dry season from October to June offers the best
            safari experience, as animals gather around water sources and
            vegetation is less dense, making wildlife easier to spot.
          </p>
        </div>

        {/* Season Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Winter */}
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c]">Winter</h3>
            </div>
            <div className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
              <p><span className="font-medium">Months:</span> October – February</p>
              <p><span className="font-medium">Expect:</span> Pleasant weather, lush landscapes, excellent wildlife viewing</p>
              <p><span className="font-medium">Best For:</span> Families, birdwatching, first-time visitors</p>
            </div>
          </div>

          {/* Summer */}
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c]">Summer</h3>
            </div>
            <div className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
              <p><span className="font-medium">Months:</span> March – June</p>
              <p><span className="font-medium">Expect:</span> Hot temperatures but highest chances of spotting tigers near waterholes</p>
              <p><span className="font-medium">Best For:</span> Tiger safaris, wildlife photography</p>
            </div>
          </div>

          {/* Monsoon */}
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c]">Monsoon</h3>
            </div>
            <div className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
              <p><span className="font-medium">Months:</span> July – September</p>
              <p><span className="font-medium">Expect:</span> Many parks closed or limited access due to heavy rainfall</p>
              <p><span className="font-medium">Best For:</span> Nature lovers, buffer zone visits, green landscapes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}