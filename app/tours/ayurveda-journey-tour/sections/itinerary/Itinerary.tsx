"use client";

import Image from "next/image";

export default function Itinerary() {
  return (
    <section className="">

      {/* 🔥 SAME WIDTH AS CITY SECTION */}
      <div className="max-w-5xl mx-auto">

        {/* 🔹 Heading */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[24px]
            font-semibold
            text-center
            mb-2 sm:mb-2
            text-[#2c2c2c]
            tracking-wide">
          Detailed Itinerary
        </h2>

        <div className="space-y-12">

          {/* ================= Day 1-3: Mumbai ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 1-3: Mumbai
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Immerse yourself in the vibrant pulse of this dynamic metropolis and explore the mesmerizing Elephanta Caves.
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546106/i1_csej7w.webp"
                    alt="Mumbai sightseeing during Ayurveda wellness tour in India featuring Elephanta Caves and local culture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Journey through the heart of Mumbai to discover Dharavi, a locale that has served as the backdrop for iconic Bollywood movies, including the Oscar-winning masterpiece, “Slumdog Millionaire“.
                </p>
                <p className="mt-2">
                  Join us for an unforgettable experience as we unlock the essence of this incredible city, blending tradition and modernity in a way that’s truly captivating.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold">Next stop: Cochin</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 2-hour flight from Mumbai</p>
            </div>
          </div>

          {/* ================= Day 3-5: Cochin ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 3-5: Cochin
            </h3>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546152/i2_bsfcvl.webp"
                    alt="Cochin Kerala arrival experience during Ayurveda wellness tour in India"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p> 
                 Upon arrival at Cochin Airport, our team will warmly welcome you with a personalized sign, ensuring a smooth transition to your journey.
                </p>
                <p>
                  For those with early arrivals, the option to explore Cochin awaits, tailored to your preferences and schedule. We’ll curate your visit to match your interests, making the most of your time.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Kumarakom</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a 45 mins drive, covering 48 km</p>
            </div>
          </div>

          {/* ================= Day 5-11: Kumarakom ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 5-11: Kumarakom
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Days 5 to 11 are dedicated to rejuvenating your mind, body, and soul through Ayurveda practices. A resident doctor will personalize your program, therapies, and meals during your stay.
              </p>
              <p className="mt-2">
                Your diet will consist of vegetarian food only, with no alcohol or tobacco permitted.  
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546211/i3_giaror.webp"
                  alt="Ayurvedic healing retreat in Kumarakom Kerala with wellness therapies and yoga sessions"
                  fill
                  className="object-cover"
                />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  You’ll experience herbal body massages, yoga, meditation sessions, and nutritious yogic meals. Enjoy rejuvenating activities like steam baths and beauty treatments. If desired, you can consult with the resident doctor.
                </p>
                <p className="mt-2">
                 These 7 days will leave you completely refreshed, and you’ll have free time to read Ayurveda books. We’ll guide you to a suitable location for this Ayurveda experience.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Alleppey</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a scenic 1-hour and 20-minute drive, covering 55 km</p>
            </div>

          </div>

          {/* ================= Day 12-13: Alleppey ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 12-13: Alleppey
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Embark on a captivating boat ride along Vembanad Lake, providing an intimate glimpse into the enchanting life of Kerala’s Backwaters.
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546261/i4_bg2g5n.webp"
                    alt="Houseboat cruise in Alleppey backwaters during Ayurveda wellness tour in Kerala"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  As you traverse this narrow strip of land, you’ll witness the livelihoods of fishing communities, children gleefully swimming, and women immersed in their daily routines.
                </p>
                <p className="mt-2">
                  Feel free to explore any intriguing spot you encounter along the way, immersing yourself in the genuine magic of these surroundings.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Thekkady</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a scenic 3-hour and 30-minute drive, spanning 140 kilometers, leading you to the pristine allure of Thekkady.</p>
            </div>

          </div>

          {/* ================= Day 13-14: Thekkady ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 13-14: Thekkady
            </h3>
            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Embark on a thrilling boat expedition on Lake Periyar, where you’ll have the chance to witness captivating wildlife and explore one of India’s exceptional animal sanctuaries.
              </p>
            </div>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546304/i5_mlnm1x.webp"
                    alt="Periyar wildlife sanctuary and spice plantation experience in Thekkady Kerala"
                  fill
                  className="object-cover"
                />
              </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Immerse yourself in the untamed beauty of this unique destination. Venture into the fragrant spice plantations, where cardamom, cinnamon, pepper, and coffee thrive. 
                </p>
                <p className="mt-2">
                  Don’t forget to savor the flavors of the tea estates that abound in the region. For a taste of Kerala to take home, explore the local market and discover an array of natural seasonings.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Munnar</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a scenic 3-hour drive, covering 90 kilometers.</p>
            </div>
          </div>

          {/* ================= Day 14-16: Munnar ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 14-16: Munnar
            </h3>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779546347/i6_leyqnx.webp"
                    alt="Tea plantations and scenic mountain landscapes in Munnar Kerala India"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  Explore one of the world’s highest tea-growing regions as you immerse yourself in the charm of Munnar.
                </p>
                <p className="mt-2">
                  Discover the wonders of Eravikulam National Park, where the endangered Nilgiri Thar (Ibex) roams freely. Visit the iconic Mattupetty Dam, the Indo Swiss Dairy farm, and the serene Kundala Lake.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Mumbai</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A quick 2-hour flight to the bustling metropolis of Mumbai.</p>
            </div>

          </div>

          {/* ================= Day 16-17: Mumbai ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 16-17: Mumbai
            </h3>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Immerse yourself in the boundless energy of Mumbai, an impressive metropolis that never sleeps. Explore the awe-inspiring Elephanta Caves, where history whispers through the intricate rock-cut temples. Venture into Dharavi, an area famed for its role in Bollywood movies, including the Oscar-winning “Slumdog Millionaire.” 
                 Here, you’ll witness the heart and soul of Mumbai’s vibrant cinematic culture.
                </p>
              </div>
            </div>

          {/* ================= Day 14: Departure  ================= */}
            <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

              <h3 className="text-[17px] md:text-lg font-medium text-red-500">
                Day 18: Departure
              </h3>
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p className="mt-2">
                You have the choice to unwind at your hotel, preparing for your departure the next day. Alternatively, if you’re feeling energetic and wish to explore, Delhi offers a variety of markets to visit: 
                </p>
              </div>
              <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">
                <div className="w-full flex justify-center">
                  <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                    <Image
                      src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779545200/i8_q5i2zr.jpg"
                      alt="Traditional Indian market and cultural shopping experience before departure from India"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                  <p>
                  Chandni Chowk Market, the vibrant Kinari Bazaar (Wedding Market), the bustling Textile Market (Wholesale Market), the Book Market, and the fascinating Spice Market, known for both ground and whole spices.
                  </p>
                  <p>
                    If your interests lean towards art and architecture, you might consider visiting the Fateh Puri Mosque, Sis Ganj Gurudwara, Jain Temple, and the Shiva Temple. The choice is yours, tailored to your pace and preferences.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}