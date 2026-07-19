"use client";

export default function BudgetAndSeasonSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Budget Estimates */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Budget Estimates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Budget */}
            <div className="border border-gray-200 rounded-md p-4">
              <div className="mb-1">
                <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#AF956C]">
                  Budget
                </span>
              </div>

              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
                ₹1,000 – ₹1,500
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Guesthouse in Hampi/Virupapura Gadde, local restaurants, cycle hire, entry fees
              </p>
            </div>

            {/* Mid Range */}
            <div className="border border-gray-200 rounded-md p-4">
              <div className="mb-1">
                <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#AF956C]">
                  Mid-Range
                </span>
              </div>

              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-3">
                ₹3,000 – ₹5,000
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Hotel in Hosapete, restaurant meals, auto/taxi transport
              </p>
            </div>

            {/* Luxury */}
            <div className="border border-gray-200 rounded-md p-4">
              <div className="mb-1">
                <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#AF956C]">
                  Luxury
                </span>
              </div>

              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-3">
                ₹12,000 – ₹25,000+
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Heritage hotel stay, private guide, private vehicle, premium dining
              </p>
            </div>
          </div>
        </div>

        {/* Best Time To Visit */}
        <div className="py-2 md:py-2">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Best Time to Visit
          </h2>

          <div className="space-y-4">
            {/* October – February */}
            <div className="border border-gray rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                October – February 
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Best time: October to March with cool weather (18 - 28°C). December January are coolest; Hampi Utsav in November - book in advance.
              </p>
            </div>

            {/* March – April */}
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                March – April 
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Warming temperatures but manageable in the early morning and evening. Fewer crowds 
                than peak season. Budget accommodation is easier to find.
              </p>
            </div>

            {/* Summer */}
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                May – June 
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Extreme heat - temperatures regularly exceed 38-42°C. The site is effectively inhospitable for outdoor sightseeing between 10 AM and 4 PM
              </p>
            </div>

            {/* Monsoon */}
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                July – September 
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                The Tungabhadra floods; some ruins become inaccessible. The landscape 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}