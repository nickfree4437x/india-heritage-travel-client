"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ItinerarySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white scroll-mt-16 md:scroll-mt-20" id="itinerary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-[20px]
          sm:text-[24px]
          md:text-[26px]
          font-semibold
          text-center
          mb-4 sm:mb-4
          text-[#2c2c2c]
          tracking-wide">
          Detailed Itinerary
        </h2>

        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-8 md:gap-6 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-4 md:space-y-5">

            {/* DAY 1 */}
            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(0)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 1-2: Delhi</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 0 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 0 ? "max-h-[700px] sm:max-h-[550px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      You land in Delhi. We&apos;ll be there waiting, sign in hand. No stress.
                    </li>
                    <li>
                      Once you&apos;re at the hotel, you can chill for a bit or start exploring right away - totally your call.
                    </li>
                    <li>
                      If you&apos;re up for it, we&apos;ll take you around. Big sights like India Gate, Parliament, and the President&apos;s place. Qutub Minar&apos;s pretty massive in real life. We&apos;ll stop by Gandhi&apos;s memorial too.
                    </li>
                    <li>
                      Old Delhi? It&apos;s chaotic but amazing - rickshaws, markets, street snacks, all packed into tiny lanes. Chandni Chowk is a trip on its own.
                    </li>
                    <li>
                      If you like spiritual spots, we&apos;ll take you to the Gurudwara - peaceful vibes, plus the community kitchen is something to see. There&apos;s also Humayun&apos;s Tomb, Lotus Temple, and a Sufi shrine with live music if we time it right.
                    </li>
                    <li>
                      No rigid plans. We move at your pace and with your interests.
                    </li>
                    <li>
                      Next, we drive to Mandawa - about 5.5 hours.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DAY 2 */}
            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(1)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 2-5: Mandawa</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 1 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 1 ? "max-h-[500px] sm:max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      Mandawa&apos;s got this old-world charm. Small town, not fancy, but full of stories. You walk around and it&apos;s like an open-air museum - walls covered in old paintings, havelis from the Silk Route days just sitting there like no big deal.
                    </li>
                    <li>
                     We&apos;ll take a heritage walk and stop by a few of those old mansions. Some are crumbling, while others still stand. All of them have a vibe.
                    </li>
                    <li>
                      Next, we head to Pushkar-around 4 hours by road.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DAY 3 */}
            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(2)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 4–6: Pushkar</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 2 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 2 ? "max-h-[550px] sm:max-h-[450px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     Pushkar&apos;s different. Quieter, more spiritual. One of those places that feels old - like really old. Pilgrims come here all the time.
                    </li>
                    <li>
                      We&apos;ll visit the Brahma Temple - it&apos;s the only one in the world. There&apos;s also this peaceful lake in the middle of town, lots of legends around it.
                    </li>
                    <li>
                      The market&apos;s small but fun. You&apos;ll find random gems - spices, bangles, clothes you didn&apos;t know you needed. It&apos;s an easy place just to wander.
                    </li>
                    <li>
                      Next stop: Udaipur. It&apos;s a bit of a longer drive - around 5 hours.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(3)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 6–8: Udaipur</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 3 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 3 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     Udaipur is the postcard city. Lakes everywhere, palaces, hills in the background. It&apos;s peaceful but also kind of magical.
                    </li>
                    <li>
                     We&apos;ll visit the City Palace - it&apos;s huge and filled with little stories. Also, Jagdish Temple, the Princess Garden, and Shilp Gram, if you&apos;re into crafts.
                    </li>
                    <li>
                     One of the highlights? Boat ride on Lake Pichola. The views are unreal, especially around sunset. You&apos;ll see Jag Mandir - that little island palace floating in the lake.
                    </li>
                    <li>
                      After Udaipur, we drive to Jodhpur-about 4 hours.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(4)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 8–10: Jodhpur</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 4 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 4 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     You&apos;ll know you&apos;ve reached Jodhpur when the houses turn blue - it&apos;s not a filter, that&apos;s just how it is here. They call it the Blue City for a reason.
                    </li>
                    <li>
                     The fort? Massive. Just sitting up there on the hill, watching over everything. We&apos;ll wander the narrow streets near the Clock Tower too - old buildings, busy markets, the smell of spices everywhere.
                    </li>
                    <li>
                     If there&apos;s time (and you&apos;re up for it), we can check out the Bishnoi Village or swing by Umaid Bhawan Palace, Jaswant Thada, or even the gardens at Mandore.
                    </li>
                    <li>
                      Next, we hit the road to Jaipur - about 6 hours.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(5)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 10–13: Jaipur</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 5 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 5 ? "max-h-[650px] sm:max-h-[550px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      Jaipur&apos;s all pink sandstone and old-world charm. The vibe here is a mix of royal and chaotic, in a way that&apos;s good.
                    </li>
                    <li>
                     We&apos;ll visit the City Palace, Hawa Mahal (that honeycomb-looking building you&apos;ve probably seen in photos), and Jantar Mantar - the observatory with giant stone instruments that somehow still work.
                    </li>
                    <li>
                     Amber Fort is a must. It&apos;s enormous and has that kind of faded glory that makes you imagine what it was like centuries ago.
                    </li>
                    <li>
                      Markets? Oh yes. Johri Bazaar and Choti Chaupar are packed with jewellery, clothes, and random treasures. In the evening, the walled city lights up - perfect for just walking and soaking it all in.
                    </li>
                    <li>
                      Next, we head to Agra - around 4.5 hours away.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(6)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 13–15: Agra</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 6 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 6 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     Agra is all about the Taj. You&apos;ve seen the photos - now you&apos;ll see it in real life, and it hits different.
                    </li>
                    <li>
                     We&apos;ll try to catch a sunset view from across the Yamuna River. It&apos;s peaceful and less crowded. If you&apos;re up for an early morning, sunrise at the Taj is worth waking up for.
                    </li>
                    <li>
                     Got extra time? The Agra Fort is close by and packed with history.
                    </li>
                    <li>
                      Quick note: the Taj Mahal is closed on Fridays, so we&apos;ll plan around that.
                    </li>
                    <li>
                      Once you&apos;re done soaking it all in, we&apos;ll drive you back to Delhi - about 4 hours.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(7)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 15: Delhi</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 7 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 7 ? "max-h-[550px] sm:max-h-[450px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     Last full day. If you just want to relax at the hotel, that&apos;s totally fine.
                    </li>
                    <li>
                     Or, if you feel like heading out again, there&apos;s plenty to explore - local markets like Chandni Chowk, the spice bazaar, Kinari Bazaar (great for wedding stuff), or the old textile area. If you&apos;re into temples, there&apos;s a whole stretch with mosques, gurudwaras, Jain temples, and shrines all side-by-side.
                    </li>
                    <li>
                      We&apos;ll go at your pace. No rush.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(8)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 16: Departure</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 8 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 8 ? "max-h-[350px] sm:max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                   Time to head home. Your driver will be ready and ensure you arrive at the airport with time to spare.
                    </li>
                    <li>
                    We hope you&apos;re heading back with stories, photos, and a bit of India still buzzing in your heart.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - STICKY IMAGE */}
          <div className="hidden lg:block relative mt-8 lg:mt-0" id="map">
            <div className="sticky top-24">
              <div className="rounded-md overflow-hidden shadow-sm">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779550319/map_zdvjlu.webp"
                  alt="Route Map"
                  width={600}
                  height={700}
                  priority
                  className="w-full h-auto max-h-[60vh] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile view image */}
          <div className="lg:hidden mt-8">
            <div className="rounded-md overflow-hidden shadow-sm max-w-md mx-auto">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779550319/map_zdvjlu.webp"
                alt="Route Map"
                width={600}
                height={700}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}