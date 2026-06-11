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
    <section className="py-12 bg-white scroll-mt-16 md:scroll-mt-16" id="itinerary">
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
          <div className="space-y-3 sm:space-y-4 md:space-y-5">

            {/* DAY 1 */}
            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(0)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 1-3: Delhi</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 0 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 0 ? "max-h-[800px] sm:max-h-[650px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      You land in Delhi — we&apos;ll be there with your name on a sign, ready to get you to your hotel. You can rest or head out right away — no pressure either way.
                    </li>
                    <li>
                      When you&apos;re ready, we&apos;ll explore. Delhi&apos;s a layered city — some parts calm and green, others buzzing and full of life. You&apos;ll see India Gate, Parliament, and the President&apos;s residence — the official face of the city.
                    </li>
                    <li>
                      Then there&apos;s Gandhi&apos;s memorial, and Qutub Minar — tall, striking, and older than most countries.
                    </li>
                    <li>
                      Old Delhi is the opposite of quiet. It&apos;s all noise, colour, spices, and street food. A rickshaw ride through here is unforgettable — passing Jama Masjid, the Red Fort, and Raj Ghat where Gandhi was cremated.
                    </li>
                    <li>
                     For something softer, we&apos;ll visit Bangla Sahib Gurudwara — peaceful, with volunteers cooking for hundreds every day. Nizamuddin Dargah is also special — if you&apos;re lucky, there&apos;s live qawwali at sunset.
                    </li>
                    <li>
                      We&apos;ll also take time for Humayun&apos;s Tomb, the surreal Lotus Temple, and the intricate carvings of Akshardham. If you like markets, Chandni Chowk will keep you busy (and possibly lost — in the best way).
                    </li>
                    <li>
                      Your time here is yours. We&apos;ll plan around you. No tight schedules, no rush.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop:</span> Jaipur — the Pink City. Around five hours&apos; drive from here.
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 3–5: Jaipur</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 1 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 1 ? "max-h-[700px] sm:max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      Welcome to Jaipur — the Pink City. It&apos;s got that old-world charm but doesn&apos;t feel stuck in the past. You&apos;ll see palaces and forts, but also scooters zipping past in narrow lanes and colourful markets spilling onto the street.
                    </li>
                    <li>
                      We&apos;ll check out the City Palace first — still home to royalty — and then head to Hawa Mahal, that honeycomb-looking building that&apos;s all over postcards. It&apos;s even better in real life.
                    </li>
                    <li>
                     Amber Fort is a bit outside the city, but totally worth the drive — huge courtyards, mirror-covered walls, and hilltop views. On the way back, we might stop at Jal Mahal — a palace floating in the middle of a lake. Peaceful spot.
                    </li>
                    <li>
                      Wander the old city if you&apos;re up for it — pink buildings, buzzing shops. And if shopping&apos;s your thing, Johri Bazaar and Choti Chaupar have jewellery, textiles, and stuff you won&apos;t find in a mall.
                    </li>
                    <li>
                      We go at your pace. No rush, no fixed script.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop:</span>  Agra — about 4.5 hours on the road.
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 5–6: Agra</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 2 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 2 ? "max-h-[700px] sm:max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      Agra is all about the Taj — and honestly, it&apos;s just as dreamy as people say. We&apos;ll try to catch the sunset from across the river first — soft light, fewer crowds, and that golden glow on the marble.
                    </li>
                    <li>
                      Sunrise? Even better. If you&apos;re up for an early start, we&apos;ll get there before the gates open. The quiet, the cool air, the first rays hitting the dome — it&apos;s unforgettable.
                    </li>
                    <li>
                      If there&apos;s time, the Agra Fort is just a few minutes away and full of stories. And if you want more, there&apos;s Fatehpur Sikri, Akbar&apos;s tomb, the &quot;Baby Taj&quot; (Itimad-ud-Daula), and a giant mosque right nearby.
                    </li>
                    <li>
                      Oh, and quick heads-up: the Taj is closed on Fridays, so we&apos;ll plan around that.
                    </li>
                    <li>
                      After soaking in the Mughal magic, we&apos;re off to Haridwar — about 6.5 hours from here.
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 6–9: Prayagraj</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 3 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 3 ? "max-h-[650px] sm:max-h-[550px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     This stretch of the trip slows everything down — in a good way.
                    </li>
                    <li>
                     Prayagraj is where three holy rivers meet: Ganga, Yamuna, and the mythical Saraswati. It&apos;s a powerful place. People have been coming here for centuries to pray, to wash away sins, to just be.
                    </li>
                    <li>
                     You&apos;ll see rituals at sunrise, lines of people heading into the water, quiet chants floating in the air. It&apos;s not a performance — it&apos;s deep, real devotion.
                    </li>
                    <li>
                     If we time it right, you might see a big gathering at the riverbank — saffron robes, glowing lamps, and the kind of silence that isn&apos;t really silent.
                    </li>
                    <li>
                     No set route here. Just space to take it all in.
                    </li>
                    <li>
                      Next up: Delhi — about a 5-hour drive.
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 10: Delhi</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 4 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 4 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      You&apos;ve got two ways to go today — totally your call.
                    </li>
                    <li>
                     If you just want to relax, hang out at the hotel, maybe catch up on rest or go through your photos — go for it. You&apos;ve earned it.
                    </li>
                    <li>
                     But if you&apos;re up for one last wander, we can hit the markets — Chandni Chowk&apos;s a maze of colours, snacks, spices, and surprises. Or, if you&apos;re leaning toward something quieter, we can stop by the Fatehpuri Mosque or the nearby Jain Temple — both tucked into the old city&apos;s corners.
                    </li>
                    <li>
                      No pressure either way. We&apos;ll plan the day around how you&apos;re feeling.
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 11: Departure</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 5 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 5 ? "max-h-[400px] sm:max-h-[350px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      Time to head home.
                    </li>
                    <li>
                     Your driver will be ready and make sure you get to the airport on time — no last-minute stress. Hopefully, you&apos;re leaving with full memory cards, a few stories, and something in your heart you didn&apos;t have when you came.
                    </li>
                    <li>
                      Safe journey. And who knows — maybe you&apos;ll be back someday..
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
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779550527/map_qcsu6o.webp"
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
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779550527/map_qcsu6o.webp"
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