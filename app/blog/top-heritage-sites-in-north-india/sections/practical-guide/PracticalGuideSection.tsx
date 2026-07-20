"use client";

export default function BudgetAndSeasonSection() {
  return (
    <section className="w-full bg-white py-1 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Best Time To Visit */}
        <div>
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Best Time to Visit North India's Heritage Sites
          </h2>

          <div className="space-y-4">
            {/* October –  March*/}
            <div className="border border-gray rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                October – March
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Best time - pleasant days, ideal for long walks and sightseeing
              </p>
            </div>

            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                April – June
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Intense heat (40°C+) - harsh in Rajasthan's desert towns
              </p>
            </div>

            {/* summer */}
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                July – September
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Monsoon - cools things down but heavy rain in Delhi/Agra can disrupt plans
              </p>
            </div>
          </div>
        </div>

        {/* Budget Estimates */}
        <div className=" mt-5 md:mt-7">
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
                ₹2,500–4,000
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                per day (trains, guesthouses, street food, entry tickets).
              </p>
            </div>

            {/* Mid Range */}
            <div className="border border-gray-200 rounded-md p-4">
              <div className="mb-1">
                <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#AF956C]">
                  Mid-Range
                </span>
              </div>

              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                ₹6,000–10,000 
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                 per person (private car, boutique hotels, sit-down dining).
              </p>
            </div>

            {/* Luxury */}
            <div className="border border-gray-200 rounded-md p-4">
              <div className="mb-1">
                <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#AF956C]">
                  Luxury
                </span>
              </div>

              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                ₹18,000+ per day 
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                chauffeur-driven vehicle, five-star and heritage-palace stays, private historian guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}