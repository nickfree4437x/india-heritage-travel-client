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
                ₹1,200 – ₹2,500
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Guesthouse accommodation, local restaurants, bicycle rental,
                public transport, and monument entry fees.
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
                ₹4,000 – ₹9,000
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Comfortable hotels, private transport, a licensed guide,
                and quality dining experiences.
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
                ₹15,000 – ₹40,000+
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Luxury resorts, expert private guides, chauffeured
                transportation, curated experiences, and airport transfers.
              </p>
            </div>
          </div>
        </div>

        {/* Best Time To Visit */}
        <div className="py-4 md:py-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Best Time to Visit
          </h2>

          <p className="max-w-6xl text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Khajuraho can technically be visited throughout the year, but
            weather conditions have a major impact on comfort, photography,
            and overall enjoyment. For most travellers, the cooler months
            provide a far better experience.
          </p>

          <div className="space-y-4">
            {/* Oct-Mar */}
            <div className="border border-gray rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                October – March
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                The prime travel season. Pleasant temperatures, clear skies,
                comfortable sightseeing conditions, and the famous
                Khajuraho Dance Festival in February make this the most
                recommended period to visit.
              </p>
            </div>

            {/* Nov Dec */}
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                November & December
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Widely regarded as the best months for photography thanks
                to cool temperatures, clear skies, and beautiful golden
                winter light across the sandstone temples.
              </p>
            </div>

            {/* Summer */}
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                April – June
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Temperatures frequently exceed 40°C. Exploring the temple
                complexes during midday becomes challenging, making early
                morning visits essential.
              </p>
            </div>

            {/* Monsoon */}
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                July – September
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Monsoon transforms the surrounding countryside into a lush
                green landscape. While visually beautiful, frequent rain
                showers can disrupt sightseeing and outdoor photography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}