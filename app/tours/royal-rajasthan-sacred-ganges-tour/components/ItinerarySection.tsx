"use client";

import Image from "next/image";

export default function Itinerary() {
  return (
    <section className="py-4">

      {/* 🔥 SAME WIDTH AS CITY SECTION */}
      <div className="max-w-5xl mx-auto">

        {/* 🔹 Heading */}
        <h2 className=" text-[16px] sm:text-[20px] md:text-[24px]
            font-semibold
            text-center
            mb-2 sm:mb-2
            text-[#2c2c2c]
            tracking-wide">
          Detailed Itinerary
        </h2>

        <div className="space-y-12">

          {/* ================= Day 1-3 Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 1–3: Delhi
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p className="mt-2">
             Reach at the Delhi Airport, where we’ll welcome you with a sign board and take you to your well-prepared hotel for a comfortable stay.
            </p>

            <p className="mt-2">
             If you prefer to wake up early, you can explore more into Delhi’s rich history, politics, and spirituality. Explore everything from iconic landmarks such as India Gate, the President’s House, and Parliament House to the city’s major role in the Freedom Struggle.
            </p>

            <p className="mt-2">
             Dive yourself in history at Gandhi Smriti and the unique Qutub Minar. Experience the charm of Old Delhi through a rickshaw ride, uncovering treasures such as Jama Masjid, Red Fort, and Raj Ghat. Don’t forget to explore Gurudwara Bangla Sahib and the serene Nizamuddin Sufi Saint Mosque. Enrich your senses at Akshardham Temple, Humayun’s Tomb and Lotus Temple, and, and don’t miss the lively Chandni Chowk market for the perfect shopping.
            </p>
          </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531926/delhi_muhygz.jpg"
                  alt="Old Delhi heritage landmarks in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

              {/* TEXT */}
              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 We’ll manage your journey based on your schedule and preferences, inviting you to discover Delhi’s perfect mixture of history and modern vibrancy.
                </p>
                <p className="mt-6">
                 Some places will be explored as per your convenience and based on your personal preferences and schedule.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <p className="font-semibold text-[14px]">Next stop: Mandawa</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">A mere 5.5-hour drive (260 km) from Delhi.</p>
            </div>

          </div>

          {/* ================= Day 3-5: Mandawa ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 3-5: Mandawa
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531962/mandawa_xptybe.jpg"
                  alt="Mandawa heritage havelis in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

              <div className="space-y-3 text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  An authentic Rajasthan town that immerses you in its traditional & rural life. It’s an open-art gallery where each step uncovers unique architecture and vibrant mural paintings.
                </p>
                <p>
                  Don’t miss the Heritage Walk, where you’ll see the Silk Route-era mansions known as Havelis.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Bikaner</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Just 3.5 hours’ drive (200 km) from Mandawa</p>
            </div>

          </div>

          {/* ================= Day 5-6: Bikaner ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 5-6: Bikaner
            </h3>

            <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              <p>
               Bikaner, also known as Camel Country, was once an important stop on ancient caravan routes, and its Old Town is still surrounded by massive walls. Bikaner’s Fort is unique in Rajasthan & experienced the influence of Rajput, Mughal, and British eras.
              </p>
              <p>
               Visit Junagarh Fort that holds the distinction of having never been captured. Visit the famous Rampuria Haveli built of red sandstone. After it visit National Research Center on Camel which is 8km from the city & is only one of its kind in Asia.
              </p>
            </div>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center"> 
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531996/bikaner_glgyle.jpg"
                  alt="Bikaner heritage forts in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 The main attraction is the Karni Mata Mandir, popularly known as the Rat Temple, this temple is the most called upon tourist attractions in Bikaner.
                </p>
                <p className="mt-4">
                  The temple is dedicated to Karni Mata, who the locals believe is an incarnation of Goddess Durga, the protective Mother Goddess in Hindu religion. Don’t miss strolling through the old heritage buildings in Kote Gate Market.
                </p>
              </div>

            </div>

            <div>
              <p className="font-semibold text-[14px]">Next stop: Jaisalmer</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">It’s a 5-hour drive (covering 220 km) from Bikaner to the golden city of Jaisalmer.</p>
            </div>

          </div>

          {/* ================= Day 6-8: Jaisalmer ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 6-8: Jaisalmer
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              Known as Golden city due to its golden sand dunes & forts made of golden honey sandstone. Jaisalmer Fort is a must-see, offering a glimpse into vibrant local life within its ancient walls.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532034/jaisalmer_zbptft.png"
                  alt="Jaisalmer golden sand dunes in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Visit the Bara Bagh Cenotaphs, Gadisar Lake, and explore the Patwo ki Haveli. As the sun sets, dive into the Thar Desert for a magical camel ride among the sand dunes.
                </p>
                <p className="mt-4">
                 Experience the starry night sky while enjoying a bonfire, traditional Marwari music, and folk dance performances at an outdoor camp. It’s a night you won’t forget.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Jodhpur</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Embark on a 4.5-hour journey (covering 285 km) from Jaisalmer to the captivating city of Jodhpur.</p>
            </div>

          </div>

          {/* ================= Day 8-9: Jodhpur ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 8-9: Jodhpur
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              Jodhpur, known as The Blue City & The Sun City of Rajasthan, is famous of its magnificent Mehrangarh Fort, vivid blue houses & sweets. Settled majestically atop a hill, Jodhpur’s Fort is a massive and awe-inspiring sight.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532068/jodhpur_fqs6pg.jpg"
                  alt="Jodhpur blue houses in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Start with a guided walk tour of the heritage Blue streets of the city. Wander near the Clock Tower, where you can admire old buildings and taste the fragrant spices in the market.
                </p>
                <p className="mt-4">
                 Depending on your schedule and interests, explore the Bishnoi Village, Ummaid Bhawan Palace, Jaswant Thada, or Mandore Garden.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: :Udaipur</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Set off on a 5-hour journey (covering 250 km) from Jodhpur to the enchanting city of Udaipur.</p>
            </div>

          </div>

          {/* ================= Day 9-11: Udaipur ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 9-11: Udaipur
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532117/udaipur_vdouwe.png"
                  alt="Udaipur lakes in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Udaipur famous as City of Lakes, stands as one of India’s most stunning and romantic destinations.
                </p>
                <p className="mt-4">
                 During your Udaipur visit, don’t miss a scenic boat ride on Lake Pichola, offering beautiful views of the city and the Jag Mandir, known as the “Lake Garden Palace”, gracefully settled on an island. Discover the serene and distinctive Princess Garden, Shilp Gram, and the Jagdish Temple.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Pushkar</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Set off on a 5-hour journey (covering 250 km) from Jodhpur to the enchanting city of Udaipur.</p>
            </div>
          </div>

          {/* ================= Day 11-12: Pushkar ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 11-12: Pushkar
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              Pushkar is one of the popular tourist destinations in India. Connected to several stories and legends, this place is also among the most sacred pilgrim sites. The most famous tourist attraction is the Brahma temple, which attracts thousands of devotees and tourists. 
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532177/pushkar_ocaweh.png"
                  alt="Pushkar lakes in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
               </div>
             </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 The Pushkar Lake is another must-see place in Pushkar. You can also trek to the top of a hill to reach the Saraswati temple and enjoy the panoramic view of the Pushkar Lake.
                </p>
                <p className="mt-4">
                 The Gandi Ghat in the town is a significant place as the ashes of Mahatma Gandhi were sprinkled at the ghat. Here is a list of places to visit in Pushkar.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Jaipur</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">set out on a 3-hour journey (covering 150 km) from Pushkar to the vibrant city of Jaipur.</p>
            </div>

          </div>

          {/* ================= Day 12-14: Jaipur ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 12-14: Jaipur
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              Jaipur is known as the Pink City and the capital of Rajasthan. Explore the the iconic Hawa Mahal (Wind Palace), beautiful City Palace, the serene Jal Mahal  
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532217/jaipur_r8eymf.png"
                  alt="Jaipur heritage landmarks in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Experience the majestic Amber Fort, steeped in countless tales, and the exquisite Birla Temple.
                </p>
                <p className="mt-4">
                 Take a walk through the vibrant markets of Johri/Bapu Bazar and Choti Chopper, known for their unique jewellery.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Agra</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Embark on a 4.5-hour journey (covering 240 km) from Jaipur to the historic city of Agra.</p>
            </div>

          </div>

          {/* ================= Day 14-15: Agra ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 14-15: Agra
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              A visit to Agra is like walking into the most romantic story ever told.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532273/agra_deoidu.png"
                  alt="Agra heritage landmarks in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Take in the stunning sunset view of the Taj Mahal from the banks of the Yamuna River. If time allows, you can explore the majestic Red Fort on the same day. Alternatively, consider an early morning visit the next day to witness the beautiful sunrise at the Taj Mahal.
                </p>
                <p className="mt-4">
                 Please note that many attractions, including the Taj Mahal, are closed on Fridays.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Orchha</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Embark on a 4-5-hour journey (covering 253 km)</p>
            </div>

          </div>

          {/* ================= Day 15-16: Orchha ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 15-16: Orchha
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              Orchha, a historic and one-of-a-kind town frozen in time. Explore the enchanting Jahangir mahal, Raja Mahal, Laxmi Narayan Temple , Shri Raja Ram temple and wander through royal graveyards which are fifteen cenotaphs honouring the Bundela kings and other members of their family on the right bank of the Betwa River in the south..
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532314/orchha_mavmyj.jpg"
                  alt="Orchha heritage landmarks in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Don’t forget to have Betwa river rafting which rafting starts from the beautiful Kanchan Ghat and ends at Shiva Ghat.
                </p>
                <p className="mt-4">
                 You can get to see the line of Chhatris while rafting which would give you a thrilling experience of rafting while seeing such historical grandeur.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Khajuraho</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a 4.5-hour drive, covering 200 kilometers, to the mesmerizing destination of Khajuraho.</p>
            </div>

          </div>

          {/* ================= Day 16-17: Khajuraho ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 16-17: Khajuraho
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              Khajuraho, the place known for it rich historical charm & divine artistry. It is known for the most ancient temples which contain group of Hindu, Jain & Buddhist temples. 
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532345/khajuraho_sepbtl.jpg"
                  alt="Khajuraho heritage temples in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 The temples are famous for its famous Nagara-style architecture & erotic sculptures. The most popular khajuraho things to do in evening are the Light & Sound show held by western group of temples.
                </p>
                <p className="mt-4">
                 The show brings life into the tale of how these temples came into existence & various historical & religious facts of ancient times.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Varanasi</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a quick 1-hour flight, transporting you to the mystical city of Varanasi.</p>
            </div>

          </div>

          {/* ================= Day 17-19: Varanasi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 17-19: Varanasi
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
              Varanasi, the land is ultimate spot of pilgrimage. It is also known as the oldest living cities in the world. Also Varansi cannot be missed without a visit to Ganga Ghats.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532383/varanasi_fs6c1e.png"
                  alt="Varanasi riverside in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                 Start your day early with a boat ride along the Ganges Ghats, where you’ll see the morning rituals of bathing and prayer. In the evening, another boat ride will let you to experience the Ghats and the beautiful world famous Ganga Aarti and rituals.
                </p>
                <p className="mt-4">
                 Varanasi throughout the ages, held historial significance. Also it has been centre of learning, spirituality, experiencing inner divine, culture, pilgrimage
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Next stop: Delhi</p>
              <p className="text-[12px] sm:text-[13px] font-[300] text-gray-700">Your journey continues with a quick 1.6-hour flight to Delhi, where you can explore the vibrant capital city before concluding your unforgettable adventure.</p>
            </div>

          </div>

          {/* ================= Day 19: Delhi ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 19: Delhi
            </h3>

            <p className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
             Reaching delhi you’ve two options, you can either relax ay your hotel for preparation of the departure of the next day. Alternatively, if you’re feeling energetic and wish to explore more, Delhi also offers a variety of markets to visit: Chandni Chowk Market, the bustling Textile Market (Wholesale Market), the Book Market, and the attracting Spice Market.
            </p>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532426/delhi2_daljj6.jpg"
                  alt="Delhi cultural landmarks in Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  If your interests also lean towards art and architecture, you can consider visiting the Fateh Puri Mosque, Sis Ganj Gurudwara, Jain Temple, and the Shiva Temple, Gurudwara Bangla Sigh Saheb.
                </p>
                <p className="mt-4">
                  The choice is yours, made as your pace and preferences.
                </p>
              </div>
            </div>
          </div>

          {/* ================= Day 20 ================= */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 space-y-5">

            <h3 className="text-[17px] md:text-lg font-medium text-red-500">
              Day 20: Farewell And Departure
            </h3>

            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-6 items-start">

              <div className="w-full flex justify-center">
                <div className="relative h-[240px] w-full md:w-full rounded-md overflow-hidden shadow-sm bg-[#f8f5f0]">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779526015/farewal_quhndt.jpg"
                  alt="Farewell departure after Royal Rajasthan and Sacred Ganges Tour in India"
                  fill
                  className="object-cover"
                />
               </div>
              </div>

              <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
                <p>
                  With a sense of relaxation and readiness to journey back home, your dedicated driver will ensure you reach the airport promptly, in accordance with your flight schedule.
                  Safe travels!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}