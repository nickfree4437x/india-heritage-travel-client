
"use client";

export default function BestTimeToVisitSection() {
  return (
    <section className="w-full bg-white py-4">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}

        <div className="mb-10">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Best Time to Travel to Rawla Narlai
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Rawla Narlai offers a unique experience throughout the year, but
            the atmosphere, weather conditions, and outdoor activities vary
            considerably by season. Choosing the right time to visit can make
            your stay even more memorable.
          </p>

        </div>

        {/* SEASONS */}

        <div className="space-y-5 mb-10">

          {/* WINTER */}

          <div className="border border-[#e7dfd4] bg-[#faf7f3] rounded-sm p-6">

            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c]">
                October – March
              </h3>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#AF956C]">
                Peak Season
              </span>
            </div>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
              This is widely considered the best time to visit Rawla Narlai.
              Temperatures generally range between 10°C and 28°C, creating
              ideal conditions for outdoor experiences such as leopard safaris,
              Elephant Hill expeditions, village explorations, and cultural
              activities. The season also coincides with some of Rajasthan's
              most celebrated festivals including Diwali and the Pushkar Camel
              Fair.
            </p>

          </div>

          {/* SUMMER */}

          <div className="border border-[#e7dfd4] bg-white rounded-sm p-6">

            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c]">
                April – June
              </h3>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#AF956C]">
                Low Season
              </span>
            </div>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
              Summer brings significantly warmer temperatures, often exceeding
              35°C during May and June. However, this period offers a quieter
              and more private atmosphere with fewer visitors. Travelers who
              value exclusivity and peaceful surroundings may appreciate this
              season despite the warmer weather.
            </p>

          </div>

          {/* MONSOON */}

          <div className="border border-[#e7dfd4] bg-white rounded-sm p-6">

            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c]">
                July – September
              </h3>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#AF956C]">
                Monsoon Season
              </span>
            </div>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
              During the monsoon months, the Aravalli landscape transforms into
              a lush green paradise. The landscape undergoes a stunning transformation 
              compared to the arid winter period, drawing in nature enthusiasts and 
              photographers alike.
              While occasional rainfall may limit some outdoor activities such
              as safaris and hill treks, the surrounding countryside becomes
              exceptionally beautiful.
            </p>

          </div>

        </div>

        {/* RECOMMENDATION BOX */}

        <div className=" bg-[#faf7f3] p-5">

          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
            Our Recommendation
          </span>

          <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-3">
            November – February Offers the Best Overall Experience
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
            For most travelers - particularly honeymooners, wildlife
            enthusiasts, families, and first-time visitors-the months from
            November to February provide the perfect balance of pleasant
            weather, comfortable sightseeing conditions, and full access to
            Rawla Narlai's signature experiences. During this period, guests
            can comfortably enjoy leopard safaris, cultural performances,
            heritage walks, outdoor dining, and Elephant Hill expeditions
            without the challenges of extreme temperatures.
          </p>

        </div>

      </div>

    </section>
  );
}