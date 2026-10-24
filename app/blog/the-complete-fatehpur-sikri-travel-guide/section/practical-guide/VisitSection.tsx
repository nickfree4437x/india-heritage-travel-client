"use client";

export default function BudgetAndSeasonSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Budget Estimates */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-1">
            Budget Estimates
          </h2>
          <p className="max-w-6xl text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Fatehpur Sikri is one of the most affordable UNESCO World
            Heritage Sites in India to visit. Whether you're travelling
            independently, as part of a Golden Triangle itinerary, or on a
            luxury private tour, there are options available for every
            budget level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Budget */}
            <div className="border border-gray-200 rounded-md p-4">
              <div className="mb-1">
                <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#AF956C]">
                  Budget
                </span>
              </div>

              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
                ₹600 – ₹1,200
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Suitable for independent travellers using shared transport,
                purchasing entry tickets directly, and eating at local cafés
                or street-food stalls.
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
                ₹2,500 – ₹5,000
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Includes a private taxi, licensed guide, monument entry,
                and lunch in Agra. Ideal for travellers seeking comfort
                without moving into luxury territory.
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
                ₹8,000 – ₹25,000+
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Typically includes a chauffeur-driven vehicle, expert
                heritage guide, curated experiences, premium dining,
                and seamless integration into a luxury heritage itinerary.
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
            Fatehpur Sikri is an outdoor destination, and weather plays a
            significant role in shaping the experience. The quality of
            light, walking conditions, and crowd levels vary considerably
            throughout the year.
          </p>

          <div className="space-y-4">
            {/* Oct-Mar */}
            <div className="border border-gray rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                October – March
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                The golden season for visiting Fatehpur Sikri. Temperatures
                generally range between 10°C and 25°C, offering pleasant
                conditions for extended exploration, architectural study,
                and photography.
              </p>
            </div>

            {/* Nov Dec */}
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                November & December
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Widely considered the finest months of the year. Clear
                skies, dry weather, and exceptional winter light make
                these months particularly attractive for photographers.
              </p>
            </div>

            {/* Summer */}
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                April – June
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                Temperatures frequently reach between 35°C and 45°C.
                Visits remain possible but are best limited to the early
                morning hours before the heat becomes overwhelming.
              </p>
            </div>

            {/* Monsoon */}
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                July – September
              </h3>

              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                The monsoon season brings intermittent rain and humidity.
                While the site remains open, this period is generally less
                favourable for long walks and photography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}