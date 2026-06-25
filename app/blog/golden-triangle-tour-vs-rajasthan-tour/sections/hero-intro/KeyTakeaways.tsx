"use client";

const takeaways = [
  "The Golden Triangle Tour (Delhi - Agra - Jaipur) is India's best itinerary for first-time visitors, short trips of 5–7 days, and travellers who want iconic Mughal heritage in a compact circuit.",

  "A Rajasthan Tour (Jaipur - Jodhpur - Jaisalmer - Udaipur) offers palace stays, desert landscapes, wildlife, and royal heritage, making it ideal for journeys of 7–10 days or longer.",

  "Both routes include Jaipur, making them easy to combine into a seamless 10–14 day luxury itinerary.",

  "The Golden Triangle is perfect for first-time visitors, shorter holidays, and travellers interested in Mughal history and India's iconic landmarks.",

  "Rajasthan is ideal for honeymooners, luxury travellers, wildlife enthusiasts, heritage hotel lovers, and those seeking authentic royal experiences.",

  "October to March is considered the best season for both itineraries thanks to pleasant weather and excellent sightseeing conditions.",

  "India Heritage Travel creates fully customized private Golden Triangle tours, Rajasthan tours, and combined itineraries tailored around your travel style.",
];

export default function KeyTakeaways() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}

        <div className="mb-6">

          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#2c2c2c]">
            Key Takeaways
          </h2>

        </div>

        {/* Cards */}

        <div className="space-y-4">

          {takeaways.map((item, index) => (

            <div
              key={index}
              className="
                flex
                items-start
                gap-5
                rounded-lg
                p-4
                transition-all
                duration-300
                border border-gray-100
              "
            >

              <div className="flex-shrink-0">

                <div className="w-8 h-8 rounded-full bg-[#AF956C] text-white flex items-center justify-center text-[12px] md:text-[13px]">
                  {index + 1}
                </div>

              </div>

              <p className="text-[12px] sm:text-[14px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}