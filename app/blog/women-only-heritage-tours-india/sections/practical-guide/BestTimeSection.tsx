"use client";

export default function BudgetAndSeasonSection() {
  return (
    <section className="w-full bg-white py-4 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Best Time To Visit */}
        <div>
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Best Time to Visit
          </h2>

          <div className="space-y-4">
            {/* October –  March*/}
            <div className="border border-gray rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                October to March 
              </h3>

              <p className="text-[12px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                cool, dry weather (15–27°C) across Delhi, Agra, Jaipur, and Rajasthan. Perfect for fort and palace walks. 
              </p>
            </div>

            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                April to June
              </h3>

              <p className="text-[12px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                often exceeds 40°C. Not recommended for long outdoor heritage walks
              </p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
               July to September
              </h3>

              <p className="text-[12px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                high humidity and occasional flooding. Avoid unless you're prepared for rain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}