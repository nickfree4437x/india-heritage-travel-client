"use client";

export default function BudgetAndSeasonSection() {
  return (
    <section className="w-full bg-white py-2 md:py-6">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* Heading */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
          Best Time to Visit Ajanta and Ellora
        </h2>

        {/* Grid - 2 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">

          {/* October – November */}
          <div className="border border-gray-200 rounded-md p-4 sm:p-5">
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-1.5">
              October–November
            </h3>
            <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
              Post-monsoon clarity; landscape still green; excellent photography light
            </p>
          </div>

          {/* December – February */}
          <div className="border border-gray-200 rounded-md p-4 sm:p-5">
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-1.5">
              December–February
            </h3>
            <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
              Peak season; ideal temperatures; manageable crowds on weekdays
            </p>
          </div>

          {/* March */}
          <div className="border border-gray-200 rounded-md p-4 sm:p-5">
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-1.5">
              March
            </h3>
            <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
              Heat beginning to build; still comfortable; last viable month
            </p>
          </div>

          {/* April – June */}
          <div className="border border-gray-200 rounded-md p-4 sm:p-5">
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-1.5">
              April–June
            </h3>
            <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
              Extreme Deccan heat (40°C+); not recommended
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}