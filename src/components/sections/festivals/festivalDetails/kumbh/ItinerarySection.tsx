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
    <section className="py-16 bg-[#f4f0ea]" id="itinerary">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">
          Detailed Itinerary
        </h2>

        <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            {/* DAY 1 */}
            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(0)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 1-3: Delhi</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 0 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      You land in Delhi — we’ll be there with your name on a sign, ready to get you to your hotel. You can rest or head out right away — no pressure either way.
                    </li>
                    <li>
                      When you’re ready, we’ll explore. Delhi’s a layered city — some parts calm and green, others buzzing and full of life. You’ll see India Gate, Parliament, and the President’s residence — the official face of the city.
                    </li>
                    <li>
                      Then there’s Gandhi’s memorial, and Qutub Minar — tall, striking, and older than most countries.
                    </li>
                    <li>
                      Old Delhi is the opposite of quiet. It’s all noise, colour, spices, and street food. A rickshaw ride through here is unforgettable — passing Jama Masjid, the Red Fort, and Raj Ghat where Gandhi was cremated.
                    </li>
                    <li>
                     For something softer, we’ll visit Bangla Sahib Gurudwara — peaceful, with volunteers cooking for hundreds every day. Nizamuddin Dargah is also special — if you’re lucky, there’s live qawwali at sunset.
                    </li>
                    <li>
                      We’ll also take time for Humayun’s Tomb, the surreal Lotus Temple, and the intricate carvings of Akshardham. If you like markets, Chandni Chowk will keep you busy (and possibly lost — in the best way).
                    </li>
                    <li>
                      Your time here is yours. We’ll plan around you. No tight schedules, no rush.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop:</span> Jaipur — the Pink City. Around five hours’ drive from here.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DAY 2 */}
            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(1)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 3–5: Jaipur</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 1 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      Welcome to Jaipur — the Pink City. It’s got that old-world charm but doesn’t feel stuck in the past. You’ll see palaces and forts, but also scooters zipping past in narrow lanes and colourful markets spilling onto the street.
                    </li>
                    <li>
                      We’ll check out the City Palace first — still home to royalty — and then head to Hawa Mahal, that honeycomb-looking building that’s all over postcards. It’s even better in real life.
                    </li>
                    <li>
                     Amber Fort is a bit outside the city, but totally worth the drive — huge courtyards, mirror-covered walls, and hilltop views. On the way back, we might stop at Jal Mahal — a palace floating in the middle of a lake. Peaceful spot.
                    </li>
                    <li>
                      Wander the old city if you’re up for it — pink buildings, buzzing shops. And if shopping’s your thing, Johri Bazaar and Choti Chaupar have jewellery, textiles, and stuff you won’t find in a mall.
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
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 5–6: Agra</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 2 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      Agra is all about the Taj — and honestly, it’s just as dreamy as people say. We’ll try to catch the sunset from across the river first — soft light, fewer crowds, and that golden glow on the marble.
                    </li>
                    <li>
                      Sunrise? Even better. If you’re up for an early start, we’ll get there before the gates open. The quiet, the cool air, the first rays hitting the dome — it’s unforgettable.
                    </li>
                    <li>
                      If there’s time, the Agra Fort is just a few minutes away and full of stories. And if you want more, there’s Fatehpur Sikri, Akbar’s tomb, the “Baby Taj” (Itimad-ud-Daula), and a giant mosque right nearby.
                    </li>
                    <li>
                      Oh, and quick heads-up: the Taj is closed on Fridays, so we’ll plan around that.
                    </li>
                    <li>
                      After soaking in the Mughal magic, we’re off to Haridwar — about 6.5 hours from here.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(3)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 6–9: Prayagraj</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 3 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     This stretch of the trip slows everything down — in a good way.
                    </li>
                    <li>
                     Prayagraj is where three holy rivers meet: Ganga, Yamuna, and the mythical Saraswati. It’s a powerful place. People have been coming here for centuries to pray, to wash away sins, to just be.
                    </li>
                    <li>
                     You’ll see rituals at sunrise, lines of people heading into the water, quiet chants floating in the air. It’s not a performance — it’s deep, real devotion.
                    </li>
                    <li>
                     If we time it right, you might see a big gathering at the riverbank — saffron robes, glowing lamps, and the kind of silence that isn’t really silent.
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
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 10: Delhi</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 4 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 4 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      You’ve got two ways to go today — totally your call.
                    </li>
                    <li>
                     If you just want to relax, hang out at the hotel, maybe catch up on rest or go through your photos — go for it. You’ve earned it.
                    </li>
                    <li>
                     But if you’re up for one last wander, we can hit the markets — Chandni Chowk’s a maze of colours, snacks, spices, and surprises. Or, if you’re leaning toward something quieter, we can stop by the Fatehpuri Mosque or the nearby Jain Temple — both tucked into the old city’s corners.
                    </li>
                    <li>
                      No pressure either way. We’ll plan the day around how you’re feeling.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(5)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 11: Departure</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 5 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 5 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      Time to head home.
                    </li>
                    <li>
                     Your driver will be ready and make sure you get to the airport on time — no last-minute stress. Hopefully, you’re leaving with full memory cards, a few stories, and something in your heart you didn’t have when you came.
                    </li>
                    <li>
                      Safe journey. And who knows — maybe you’ll be back someday..
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FIXED IMAGE */}
          <div className="relative h-full">

            <div className="sticky top-24">
              <div className="rounded-md overflow-hidden shadow-sm">

                <Image
                  src="/festivals/kumbh/map.jpg"
                  alt="Route Map"
                  width={600}
                  height={700}
                  priority
                  className="w-[55vh] h-[60vh] object-cover"
                />

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}