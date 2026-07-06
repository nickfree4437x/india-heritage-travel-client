"use client";

import Image from "next/image";

export default function RajasthanTourSection() {
  return (
    <section className="w-full bg-white py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-2">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c]">
            What Is a Rajasthan Tour?
          </h2>
        </div>

        {/* Intro */}
        <div className="space-y-4 mb-4">
          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
            While the Golden Triangle introduces you to India through three
            iconic cities, a <strong>Rajasthan Tour</strong> takes you much
            deeper into the country's royal heritage. Known as the
            <strong> "Land of Kings,"</strong> Rajasthan is India's largest
            state and is home to magnificent forts, grand palaces, desert
            landscapes, vibrant cities, colourful markets, and centuries of
            Rajput history. Unlike the relatively compact Golden Triangle,
            Rajasthan rewards travellers who have more time to explore its
            diverse regions.
          </p>
        </div>

        {/* Image */}
        <div className="mb-6">
          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782371790/pexels-himanshu817-16910734_isxid9.jpg"
              alt="Mehrangarh Fort overlooking the Blue City of Jodhpur"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            via pexels
          </p>
        </div>

        {/* Destinations */}
        <div className="mb-4">
          <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-3">
            What You'll Experience on a Rajasthan Tour
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-[13px] md:text-[14px] font-semibold text-gray-700 mb-2">
                Jaipur - The Gateway to Rajasthan
              </h4>

              <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
                Begin your journey in Rajasthan's vibrant capital with visits
                to Amber Fort, City Palace, Jantar Mantar, Hawa Mahal, bustling
                bazaars, and colourful artisan workshops. Jaipur serves as both
                the final destination of the Golden Triangle and the perfect
                starting point for exploring Rajasthan.
              </p>
            </div>

            <div>
              <h4 className="text-[13px] md:text-[14px] font-semibold text-gray-700 mb-2">
                Jodhpur - The Blue City
              </h4>

              <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
                Dominated by the mighty Mehrangarh Fort, Jodhpur combines
                medieval architecture with vibrant blue-painted streets,
                Jaswant Thada, Umaid Bhawan Palace, lively markets, and some of
                Rajasthan's most celebrated local cuisine.
              </p>
            </div>

            <div>
              <h4 className="text-[13px] md:text-[14px] font-semibold text-gray-700 mb-2">
                Jaisalmer - The Golden City
              </h4>

              <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
                Located in the heart of the Thar Desert, Jaisalmer is famous
                for its UNESCO-listed living fort, intricately carved havelis,
                Gadisar Lake, camel safaris across the Sam Sand Dunes, and
                unforgettable nights beneath star-filled desert skies.
              </p>
            </div>

            <div>
              <h4 className="text-[13px] md:text-[14px] font-semibold text-gray-700 mb-2">
                Udaipur - The City of Lakes
              </h4>

              <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
                End your journey in India's most romantic city, where Lake
                Pichola, the magnificent City Palace, Jagdish Temple,
                Saheliyon Ki Bari, and the iconic Lake Palace create one of the
                country's most elegant travel experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}