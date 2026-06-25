"use client";

const travelerTypes = [
  {
    title: "Luxury Travelers",
    months: "November – February | April – June",
    description:
      "Winter showcases palace hotels, heritage properties, rooftop dining, and garden breakfasts at their finest. Summer offers exceptional hotel bargains, luxury upgrades, and premium experiences at significantly lower prices.",
  },
  {
    title: "Couples",
    months: "October – March",
    description:
      "Comfortable temperatures, sunset views at Amber Fort, romantic walks through Jaipur's historic streets, and candlelit dinners at heritage havelis make this the ideal season for couples.",
  },
  {
    title: "Honeymooners",
    months: "November – February",
    description:
      "Winter's festive atmosphere, luxury accommodations, pleasant weather, and iconic experiences create the perfect setting for a memorable honeymoon journey.",
  },
  {
    title: "Solo Female Travelers",
    months: "October – March",
    description:
      "Cooler weather allows for full days of exploration, while bustling city streets and well-planned private tours provide a comfortable and enjoyable travel experience.",
  },
  {
    title: "Families",
    months: "November – February",
    description:
      "Children and multi-generational family groups benefit from comfortable temperatures, making sightseeing at forts, palaces, and monuments much more enjoyable.",
  },
  {
    title: "Photographers",
    months: "November – February | July – September",
    description:
      "Winter offers classic golden-hour light and clear skies, while monsoon delivers dramatic clouds, rain-washed architecture, reflections, and lush landscapes.",
  },
];

export default function TravelerTypes() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}

        <div className="mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Best Time for Different Types of Travelers
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light max-w-4xl">
            The ideal season depends not only on the weather but also on the
            kind of experience you're seeking. Whether you're planning a luxury
            escape, a family vacation, a honeymoon, or a photography-focused
            journey, different seasons offer different advantages.
          </p>

        </div>

        {/* TRAVELER CARDS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-5">

          {travelerTypes.map((traveler) => (
            <div
              key={traveler.title}
              className="group border borer-gray-200 bg-white rounded-md p-5 hover:border-[#AF956C]/40 hover:shadow-sm transition-all duration-300"
            >

              <div className="mb-4">

                <h3 className="text-[15px] font-semibold text-[#2c2c2c] mb-3">
                  {traveler.title}
                </h3>

                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#AF956C]/10 text-[#AF956C] text-[11px]">
                  {traveler.months}
                </span>

              </div>

              <p className="text-[12px] sm:text-[13px] text-gray-700 leading-relaxed font-light">
                {traveler.description}
              </p>

            </div>
          ))}

        </div>

        {/* EXPERT RECOMMENDATION */}

        <div className="bg-white border borer-gray-200 rounded-sm p-5 ">

          <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#2c2c2c] mb-2">
            Expert Recommendation
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
            There is no single perfect season for every traveler. Winter
            remains the strongest all-around recommendation, but photographers,
            luxury travelers seeking exceptional value, and repeat visitors
            often discover unique advantages during monsoon and summer months.
            The best time ultimately depends on the experiences you value most.
          </p>

        </div>

      </div>

    </section>
  );
}