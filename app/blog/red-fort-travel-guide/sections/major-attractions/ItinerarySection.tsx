"use client";

export default function ItinerarySection() {
  return (
    <section className="w-full bg-white py-0 -mt-2 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-4 md:mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide font-semibold text-[#2c2c2c]">
            Suggested Red Fort Itineraries
          </h2>

          <p className="mt-1 text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light max-w-6xl">
            Whether you have a few hours or several days in Delhi,
            these carefully planned itineraries help you experience
            the Red Fort alongside the city's most important
            heritage, cultural, and culinary highlights.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Half Day */}

          <div className="bg-white border border-gray-200 rounded-md p-6">

            <div className="mb-2">

              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mt-1">
                Half-Day Itinerary
              </h3>
            </div>

            <div className="space-y-5">

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  9:30 AM
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Arrive at opening time and explore the Red Fort's
                  palaces, courtyards, and museums.
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  11:30 AM
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Walk to Jama Masjid and admire one of India's
                  most impressive Mughal mosques.
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  12:15 PM
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Enjoy lunch at Chandni Chowk or the iconic
                  Karim's restaurant.
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  Early Afternoon
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Return to your hotel or continue with your
                  Delhi sightseeing plans.
                </p>
              </div>

            </div>

          </div>

          {/* One Day */}

          <div className="bg-white border border-gray-200 rounded-md p-6">

            <div className="mb-2">

              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mt-1">
                One-Day Old Delhi
              </h3>
            </div>

            <div className="space-y-5">

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  Morning
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Explore the Red Fort at opening time followed by
                  shopping at Chhatta Chowk.
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  Midday
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Visit Jama Masjid and enjoy a guided food and
                  spice market walk through Chandni Chowk.
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  Afternoon
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Take a traditional rickshaw ride through Old
                  Delhi and visit Raj Ghat.
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  Evening
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Return for the Red Fort Sound & Light Show
                  before dinner.
                </p>
              </div>

            </div>

          </div>

          {/* Two Day */}

          <div className="bg-white border border-gray-200 rounded-md p-6">

            <div className="mb-2">

              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mt-1">
                Two-Day Delhi Heritage
              </h3>
            </div>

            <div className="space-y-5">

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  Day 1
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Red Fort, Jama Masjid, Chandni Chowk food walk,
                  and the evening Sound & Light Show.
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  Day 2 Morning
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Explore Humayun's Tomb and Qutub Minar,
                  Delhi's most important UNESCO sites.
                </p>
              </div>

              <div>
                <p className="text-[13px] md:text-[14px] text-[#2c2c2c]">
                  Day 2 Afternoon
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-700 font-light mt-1">
                  Drive past India Gate and Rashtrapati Bhavan,
                  then enjoy a rooftop dining experience
                  overlooking Delhi.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}