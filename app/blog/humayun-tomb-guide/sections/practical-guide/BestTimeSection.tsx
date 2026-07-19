"use client";

export default function BudgetAndSeasonSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Best Time To Visit */}
        <div>
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Best Time to Visit Humayun's Tomb
          </h2>

          <div className="space-y-4">
            {/* October –  March*/}
            <div className="border border-gray rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                November – February
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Best for photography and unhurried strolls; ideal season
              </p>
            </div>

            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                March – June
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Severe heat (40°C+) - visit very early or late afternoon; carry water
              </p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                July – September
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Monsoon - high humidity; fewer crowds but slippery paths
              </p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                October
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Pleasant post-monsoon weather - good alternative to peak season
              </p>
            </div>
          </div>
        </div>

        {/* Budget Estimates */}
        <div className=" mt-6 md:mt-7 mb-2">
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
                ₹2,000 – ₹3,500
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                per day (metro/local transport, street food, entry tickets).
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
                ₹5,000–₹9,000 
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                per day (private car, boutique hotel, sit-down dining).
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
                ₹15,000+ per day
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Usually that’s a chauffeur driven vehicle, a five star Delhi stay, a private historian 
                guide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}