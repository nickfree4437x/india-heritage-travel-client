"use client";


export default function BestTimeSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#2c2c2c]">
            Best Time to Visit: Golden Triangle vs Rajasthan
          </h2>
          <p className="text-[13px] sm:text-[14px] text-gray-500 mt-2 font-light">
            The good news: the best time to travel will be almost identical for both routes.
          </p>
        </div>

        {/* Timeline Style Season Guide */}
        <div className="relative mb-10 sm:mb-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            
            {/* Season 1 - Best */}
            <div className="relative">
              <div className="flex items-start gap-4 md:block">
                {/* Number Circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#b8860b] text-white flex items-center justify-center text-sm font-bold md:mx-auto md:mb-4 relative z-10">
                  1
                </div>
                
                <div className="md:text-center">
                  <div className="flex items-center gap-2 md:justify-center">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1a1a1a]">
                      Oct – Mar
                    </h3>
                  </div>
                  
                  <span className="inline-block bg-[#b8860b]/10 text-[#b8860b] text-[9px] sm:text-[10px] px-3 py-0.5 rounded-full mt-1 md:mt-2">
                    Best Season
                  </span>
                  
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-600 font-light mt-2 md:mt-3">
                    Cool, dry weather. Crystal-clear skies. Perfect for sightseeing and dining alfresco.
                  </p>
                  
                  <div className="mt-2 md:mt-3 text-[11px] sm:text-[12px] text-gray-500 bg-[#faf7f3] px-3 py-1.5 rounded-lg inline-block">
                    Book 2–3 months ahead
                  </div>
                </div>
              </div>
            </div>

            {/* Season 2 - Shoulder */}
            <div className="relative">
              <div className="flex items-start gap-4 md:block">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e8d5b7] text-[#8b6914] flex items-center justify-center text-sm font-bold md:mx-auto md:mb-4 relative z-10">
                  2
                </div>
                
                <div className="md:text-center">
                  <div className="flex items-center gap-2 md:justify-center">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1a1a1a]">
                      Sep & Apr
                    </h3>
                  </div>
                  
                  <span className="inline-block bg-[#f5efe6] text-[#8b6914] text-[10px] sm:text-[11px] px-3 py-0.5 rounded-full mt-1 md:mt-2">
                    Shoulder Season
                  </span>
                  
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-600 font-light mt-2 md:mt-3">
                    Fewer crowds. Lush greenery (Sep) or pleasant mornings/evenings (Apr).
                  </p>
                  
                  <div className="mt-2 md:mt-3 text-[11px] sm:text-[12px] text-gray-500 bg-[#faf7f3] px-3 py-1.5 rounded-lg inline-block">
                    Avoid afternoon heat in Apr
                  </div>
                </div>
              </div>
            </div>

            {/* Season 3 - Not Recommended */}
            <div className="relative">
              <div className="flex items-start gap-4 md:block">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f0e6e6] text-red-500 flex items-center justify-center text-sm font-bold md:mx-auto md:mb-4 relative z-10">
                  3
                </div>
                
                <div className="md:text-center">
                  <div className="flex items-center gap-2 md:justify-center">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1a1a1a]">
                      May – Aug
                    </h3>
                  </div>
                  
                  <span className="inline-block bg-red-50 text-red-500 text-[10px] sm:text-[11px] px-3 py-0.5 rounded-full mt-1 md:mt-2">
                    Not Recommended
                  </span>
                  
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-600 font-light mt-2 md:mt-3">
                    Extreme heat (45°C+) or monsoon rains. Travel disruptions common.
                  </p>
                  
                  <div className="mt-2 md:mt-3 text-[11px] sm:text-[12px] text-gray-500 bg-[#faf7f3] px-3 py-1.5 rounded-lg inline-block">
                    Udaipur has unique monsoon charm
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Official Note - Minimal */}
        <div className="flex items-center gap-3 border border-gray-200 px-5 py-3 rounded-lg mb-10 sm:mb-12">
          <p className="text-[13px] sm:text-[13.5px] text-gray-600 font-light">
            <span className="text-[#2c2c2c]">Ministry of Tourism India</span> notes Oct–Mar as peak season for both circuits.
          </p>
        </div>

        {/* Combined Tour Section - Minimal */}
        <div className="border-t border-[#ece7de] pt-4 sm:pt-6">
        
        <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-bold text-[#1a1a1a]">
            Can You Combine Both?
            </h3>
            <span className="text-[12px] sm:text-[13.5px] text-[#b8860b] bg-[#faf7f3] px-4 py-1.5 rounded-full whitespace-nowrap border border-[#ece7de]">
            Yes! - and It's Fantastic
            </span>
        </div>

        {/* Simple Description */}
        <p className="text-[14px] sm:text-[15px] text-gray-600 font-light leading-relaxed">
            The two circuits connect naturally at{' '}
            <span className=" text-[#2c2c2c]">Jaipur</span>, making a combined tour of{' '}
            <span className="text-[#b8860b]">10–14 days</span> one of the best India experiences.
        </p>

        </div>

        {/* Itinerary Section */}

        <div className="border-t border-[#ece7de] pt-10 mt-4 md:mt-4">

          <div className="mb-8">

            <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-3">
              The Classic Combined Itinerary (12–14 Days)
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light max-w-6xl">
              Starting in Delhi and finishing in Udaipur, this journey combines the
              iconic highlights of the Golden Triangle with Rajasthan's royal cities,
              desert landscapes, heritage hotels, and unforgettable cultural
              experiences.
            </p>

          </div>

          <div className="space-y-6">

            {[
              {
                days: "Days 1–2",
                city: "Delhi",
                desc: "Old Delhi, Humayun's Tomb, Chandni Chowk, India Gate & Qutub Minar.",
              },
              {
                days: "Days 3–4",
                city: "Agra",
                desc: "Taj Mahal at sunrise, Agra Fort and Fatehpur Sikri before continuing to Jaipur.",
              },
              {
                days: "Days 5–6",
                city: "Jaipur",
                desc: "Amber Fort, City Palace, Jantar Mantar and shopping through the Pink City's famous bazaars.",
              },
              {
                days: "Day 7",
                city: "Pushkar",
                desc: "Visit the sacred lake, Brahma Temple and experience Rajasthan's spiritual side.",
              },
              {
                days: "Days 8-9",
                city: "Udaipur",
                desc: "Travel via Ranakpur, enjoy Lake Pichola, City Palace and heritage dining experiences.",
              },
              {
                days: "Days 10–11",
                city: "Jodhpur",
                desc: "Mehrangarh Fort, Umaid Bhawan Palace and the historic Blue City.",
              },
              {
                days: "Days 12–13",
                city: "Jaisalmer",
                desc: "Living Fort, desert camp, camel safari and sunset over the Sam Sand Dunes.",
              },
              {
                days: "Day 14",
                city: "Departure",
                desc: "Transfer to Jaisalmer Airport for your onward journey.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="grid md:grid-cols-[140px_1fr] gap-6"
              >

                <div>

                  <span className="text0[11px] md:text-[12px] uppercase tracking-wide text-[#AF956C]">
                    {item.days}
                  </span>

                </div>

                <div className="relative pl-8 border-l border-[#e7dfd4]">

                  <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#AF956C]" />

                  <h4 className="text-[16px] font-semibold text-[#2c2c2c] mb-2">
                    {item.city}
                  </h4>

                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-10 border rounded-md p-5">

            <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light">
              This itinerary brings together India's most celebrated monuments,
              Rajasthan's royal heritage, desert adventures, luxury palace hotels,
              wildlife, and cultural experiences into one seamless journey. At
              <span className="font-medium text-[#2c2c2c]">
                {" "}<a href="https://www.indiaheritagetravel.com" className="hover:underline">India Heritage Travel</a>
              </span>
              , every itinerary is fully customized around your interests, travel
              style, and preferred pace to create a truly memorable holiday.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}