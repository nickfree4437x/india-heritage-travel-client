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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 1-2: Delhi</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 0 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      You land in Delhi. We’ll be there waiting, sign in hand. No stress.
                    </li>
                    <li>
                      Once you’re at the hotel, you can chill for a bit or start exploring right away — totally your call.
                    </li>
                    <li>
                      If you’re up for it, we’ll take you around. Big sights like India Gate, Parliament, and the President’s place. Qutub Minar’s pretty massive in real life. We’ll stop by Gandhi’s memorial too.
                    </li>
                    <li>
                      Old Delhi? It’s chaotic but amazing — rickshaws, markets, street snacks, all packed into tiny lanes. Chandni Chowk is a trip on its own.
                    </li>
                    <li>
                      If you like spiritual spots, we’ll take you to the Gurudwara — peaceful vibes, plus the community kitchen is something to see. There’s also Humayun’s Tomb, Lotus Temple, and a Sufi shrine with live music if we time it right.
                    </li>
                    <li>
                      No rigid plans. We move at your pace and with your interests.
                    </li>
                    <li>
                      Next, we drive to Mandawa — about 5.5 hours.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 2-5: Mandawa</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 1 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      Mandawa’s got this old-world charm. Small town, not fancy, but full of stories. You walk around and it’s like an open-air museum — walls covered in old paintings, havelis from the Silk Route days just sitting there like no big deal.
                    </li>
                    <li>
                     We’ll take a heritage walk and stop by a few of those old mansions. Some are crumbling, while others still stand. All of them have a vibe.
                    </li>
                    <li>
                      Next, we head to Pushkar—around 4 hours by road.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 4–6: Pushkar</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 2 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     Pushkar’s different. Quieter, more spiritual. One of those places that feels old — like really old. Pilgrims come here all the time.
                    </li>
                    <li>
                      We’ll visit the Brahma Temple — it’s the only one in the world. There’s also this peaceful lake in the middle of town, lots of legends around it.
                    </li>
                    <li>
                      The market’s small but fun. You’ll find random gems — spices, bangles, clothes you didn’t know you needed. It’s an easy place just to wander.
                    </li>
                    <li>
                      Next stop: Udaipur. It’s a bit of a longer drive — around 5 hours.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 6–8: Udaipur</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 3 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     Udaipur is the postcard city. Lakes everywhere, palaces, hills in the background. It’s peaceful but also kind of magical.
                    </li>
                    <li>
                     We’ll visit the City Palace — it’s huge and filled with little stories. Also, Jagdish Temple, the Princess Garden, and Shilp Gram, if you’re into crafts.
                    </li>
                    <li>
                     One of the highlights? Boat ride on Lake Pichola. The views are unreal, especially around sunset. You’ll see Jag Mandir — that little island palace floating in the lake.
                    </li>
                    <li>
                      After Udaipur, we drive to Jodhpur—about 4 hours.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 8–10: Jodhpur</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 4 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 4 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     You’ll know you’ve reached Jodhpur when the houses turn blue — it’s not a filter, that’s just how it is here. They call it the Blue City for a reason.
                    </li>
                    <li>
                     The fort? Massive. Just sitting up there on the hill, watching over everything. We’ll wander the narrow streets near the Clock Tower too — old buildings, busy markets, the smell of spices everywhere.
                    </li>
                    <li>
                     If there’s time (and you’re up for it), we can check out the Bishnoi Village or swing by Umaid Bhawan Palace, Jaswant Thada, or even the gardens at Mandore.
                    </li>
                    <li>
                      Next, we hit the road to Jaipur — about 6 hours.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 10–13: Jaipur</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 5 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 5 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      Jaipur’s all pink sandstone and old-world charm. The vibe here is a mix of royal and chaotic, in a way that’s good.
                    </li>
                    <li>
                     We’ll visit the City Palace, Hawa Mahal (that honeycomb-looking building you’ve probably seen in photos), and Jantar Mantar — the observatory with giant stone instruments that somehow still work.
                    </li>
                    <li>
                     Amber Fort is a must. It’s enormous and has that kind of faded glory that makes you imagine what it was like centuries ago.
                    </li>
                    <li>
                      Markets? Oh yes. Johri Bazaar and Choti Chaupar are packed with jewellery, clothes, and random treasures. In the evening, the walled city lights up — perfect for just walking and soaking it all in.
                    </li>
                    <li>
                      Next, we head to Agra — around 4.5 hours away.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(6)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 13–15: Agra</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 6 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 6 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     Agra is all about the Taj. You’ve seen the photos — now you’ll see it in real life, and it hits different.
                    </li>
                    <li>
                     We’ll try to catch a sunset view from across the Yamuna River. It’s peaceful and less crowded. If you’re up for an early morning, sunrise at the Taj is worth waking up for.
                    </li>
                    <li>
                     Got extra time? The Agra Fort is close by and packed with history.
                    </li>
                    <li>
                      Quick note: the Taj Mahal is closed on Fridays, so we’ll plan around that.
                    </li>
                    <li>
                      Once you’re done soaking it all in, we’ll drive you back to Delhi — about 4 hours.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(7)}
                className="flex justify-between items-center px-4 py-2 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 15: Delhi</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 7 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 7 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     Last full day. If you just want to relax at the hotel, that’s totally fine.
                    </li>
                    <li>
                     Or, if you feel like heading out again, there’s plenty to explore — local markets like Chandni Chowk, the spice bazaar, Kinari Bazaar (great for wedding stuff), or the old textile area. If you’re into temples, there’s a whole stretch with mosques, gurudwaras, Jain temples, and shrines all side-by-side.
                    </li>
                    <li>
                      We’ll go at your pace. No rush.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(8)}
                className="flex justify-between items-center px-4 py-2 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 16: Departure</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 8 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 8 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                   Time to head home. Your driver will be ready and ensure you arrive at the airport with time to spare.
                    </li>
                    <li>
                    We hope you’re heading back with stories, photos, and a bit of India still buzzing in your heart.
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
                  src="/festivals/pushkar/map.jpg"
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