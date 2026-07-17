"use client";

export default function BudgetAndSeasonSection() {
  return (
    <section className="w-full bg-white py-6 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Best Time To Visit */}
        <div>
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Best Time to Visit the Red Fort
          </h2>

          <div className="space-y-4">
            {/* October –  March*/}
            <div className="border border-gray rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                October to March 
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                tends to feel the most comfortable season, it has cooler day time temperatures that 
                fit walking around the open courtyards and along the ramparts. 
              </p>
            </div>

            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                April to June
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Pare insanely hot, usually they get past 40°C, so it really makes sense to do early morning visits. Weekday mornings, especially Tuesday and Wednesday, are much quieter, kind of noticeable, compared to weekends or public holidays.
              </p>
            </div>
          </div>
        </div>

        {/* Budget Estimates */}
        <div className=" mt-6 md:mt-7">
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
                per day, mostly metro and local transport, street food, and those entry tickets, too.
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
                 per day. With private car, a boutique style hotel, and maybe even a proper seated meal, not only quick bites.
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