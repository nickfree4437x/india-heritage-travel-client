"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-3">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          md:mb-2
        ">
          Suggested Ranakpur Itinerary
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Half-Day Itinerary (from Udaipur)
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Depart from Udaipur between 9-9:30am. This will allow enough time to cover the 2-2.5hour ride on route towards the temples of Ranakpur.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> You will reach there around midday when they open up. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> You can then explore their famed chaumukha temple as well as the sun temple for about 1.5-2hours. Have lunch at a local heritage restaurant in the area before heading back to udaipur in the evenings.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          One-Day Itinerary (Ranakpur + Kumbhalgarh)
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> You will depart from Udaipur between 7:30-8:00AM going towards Kumbhalgarh fort for the morning.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Then you will drive around 50km further heading towards Ranakpur arriving just on time as mid day opening of temples are done.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Explore all around the temple & sun temple here, then take your time enjoying your regional lunch.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Return back to udaipur at an early evening, you can also take further journey towards jodhpur as per your onward journey.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Two-Day Itinerary (Deeper Aravalli Immersion)
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1 : Drive From udaipur ,Explore kumbhalgarh fort in deep then check in to heritage resourt nigh at ranakpur. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2 : Morning Temple visit at ranakpur, Afternoon Leopard safari/nature walk in aravali forest Belt and village visit before departure	
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}