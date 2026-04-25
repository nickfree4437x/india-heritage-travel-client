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
                      Namaste and welcome!
                    </li>
                    <li>
                      We’ll meet you at the airport, holding a sign with your name. No confusion.
                    </li>
                    <li>
                      From there, you’ll head to your hotel and relax — or explore a bit, depending on how you’re feeling.
                    </li>
                    <li>
                      Delhi is two cities in one. New Delhi has the big stuff — India Gate, Parliament, the wide boulevards. But Old Delhi? That’s where the energy lives.
                    </li>
                    <li>
                      Ride a rickshaw through Chandni Chowk, grab a jalebi from a street vendor, and feel the pulse of a city that never sits still.
                    </li>
                    <li>
                      Temples more your thing? We’ve got you covered: Lotus Temple, Akshardham, Humayun’s Tomb — each one a different kind of peace.
                    </li>
                    <li>
                      No rush here. We’ll go at your pace.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop:</span> Mandawa — about 5.5 hours away (260 km).
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
                      Welcome to Mandawa, where Holi kicks off in true Rajasthani style.
                    </li>
                    <li>
                      <span className="font-semibold">Pre-Holi Celebrations</span> 
                      You’ll settle into your hotel, have a relaxed dinner, and then join a pre-Holi gathering.
                    </li>
                    <li>
                      Locals come together for music, dance, and a sense of community. You’ll hear the beat of dhol drums, see the Giddha dance, and maybe even join in.
                    </li>
                    <li>
                      <span className="font-semibold">Colourful Morning of Fun and Festivities</span>
                      The next morning, wear white — it won’t stay that way for long. Holi here is full of colour, music, and laughter.
                    </li>
                    <li>
                      We’ll celebrate in the courtyard of Mandawa Kothi, with traditional songs and sweet treats like gujiya and thandai.
                    </li>
                    <li>
                      Later, head out into town for the “Julus” — a joyful street procession where music and dancing take over the roads. It’s not just fun, it’s electric.
                    </li>
                    <li>
                      On your last day in Mandawa, enjoy one final festive breakfast, then say goodbye to this vibrant town.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop:</span> Bikaner — around 3 hours (192 km).
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 5-6: Bikaner</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 2 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      The ride from Mandawa to Bikaner takes you through a drier, dustier stretch of Rajasthan — but the colours start showing up again as you roll into the city.
                    </li>
                    <li>Bikaner has this unpolished charm. Less crowded, less touristy, but full of surprises. You’ll visit Junagarh Fort — unlike most forts in Rajasthan, this one wasn’t built on a hill, but it’s just as grand. Its walls hold centuries of stories.</li>
                    <li>
                      If you’re curious (and a little brave), there’s the Karni Mata Temple just outside town — yes, the one where rats run freely. Locals believe they’re sacred. It’s definitely a “you have to see it to believe it” kind of place.
                    </li>
                    <li>
                      Before leaving, wander through Kote Gate Market — all old stone buildings, loud vendors, and the smell of fried snacks and spices hanging in the air.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Jaisalmer — about 5 hours away.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 6-8: Jaisalmer</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 3 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     You’ll know you’re close to Jaisalmer when the desert starts glowing gold. They call it the Golden City for a reason — the whole place looks like it’s been carved from sunshine.
                    </li>
                    <li>
                     At its heart is Jaisalmer Fort, and this one’s still alive. Families live inside, kids run through narrow lanes, and shops spill out into the alleys.
                    </li>
                    <li>
                     You’re not just visiting a monument — you’re stepping into someone’s everyday life.
                    </li>
                    <li>
                     The Patwa and Salim Singh Havelis show off the kind of craftsmanship that makes you stop and stare. And Gadisar Lake? Quiet, reflective, and a nice break from the heat.
                    </li>
                    <li>
                     But the real magic happens out in the desert. Ride a camel into the dunes, watch the sky turn pink, and spend your night under a sky full of stars — with music, dance, and the kind of silence that stays with you.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Jodhpur — around 4.5 hours by road.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 8-9: Jodhpur</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 4 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 4 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      The road to Jodhpur brings a shift — more bustle, more colour, and then suddenly, a sweep of blue houses tucked under a massive fort. That’s your first glimpse of the Blue City.
                    </li>
                    <li>
                     Mehrangarh Fort is impossible to miss. It rises out of a rocky cliff like it owns the land — and in many ways, it did. Inside, it’s all grand halls, sharp echoes, and views that stretch far beyond the city’s edge. Every corner tells a story — if you pause long enough to listen.
                    </li>
                    <li>
                     Down in the old town, it’s all about rhythm — narrow lanes, clattering chai cups, the hum of life near the Clock Tower market. If you’re into spices or local snacks, this is your place.
                    </li>
                    <li>
                     Got a little more time or curiosity? We can show you the quieter sides — maybe Jaswant Thada, the white marble memorial, or a visit to a Bishnoi village just outside town.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Udaipur — about five hours away.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 9-11: Udaipur</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 5 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 5 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                      Udaipur feels like a breath of fresh air. After the dry desert landscapes, the lakes here feel like magic. The city’s stitched together with old bridges, winding alleys, and gentle views — it’s got a softer soul.
                    </li>
                    <li>
                     City Palace is the crown jewel. Walk through its courtyards, peek into royal rooms, and watch how the light dances off the lake below. From there, wander into the Jagdish Temple or the artsy corners of Shilpgram.
                    </li>
                    <li>
                     One evening, take a boat ride across Lake Pichola — the kind where time slows down and the city glows quietly around you. As the sun sets behind the Aravallis, you’ll understand why so many people fall for this city.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Pushkar — around five hours away.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 11-12: Pushkar</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 6 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 6 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     Pushkar has an entirely different vibe. It’s smaller, calmer — a mix of spirituality, art, and slow mornings.
                    </li>
                    <li>
                     You’ll visit the only temple in the world dedicated to Lord Brahma — it’s humble, not flashy, but steeped in reverence. The sacred lake it overlooks is surrounded by ghats, where pilgrims come to pray, wash, or simply sit with their thoughts.                    
                    </li>
                    <li>
                     The market here feels personal. Fewer crowds, but full of handcrafted things — from patchwork textiles to scented oils. Even if you’re not looking to buy, it’s fun to wander and watch.
                    </li>
                    <li>
                     Evenings in Pushkar are quiet, a good time to just breathe and soak it all in.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Jaipur — a short 3-hour drive.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 12-14: Jaipur</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 7 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 7 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     Jaipur hits different. It’s busy, yes — but charming. Pink buildings line the streets, rickshaws weave through traffic, and every turn feels like a peek into something grander.
                    </li>
                    <li>
                     Start with the Amber Fort. It’s perched on a hill, built from pale yellow and pink sandstone. Walk through its courtyards and mirrored halls. The views from the top? Worth every step.
                    </li>
                    <li>
                     Back in the city, Hawa Mahal looks like a honeycomb frozen in stone — you can’t miss it. Then there’s Jantar Mantar, the old astronomical observatory that still baffles people. City Palace offers quiet corners, perfect for a slow walk.
                    </li>
                    <li>
                     And don’t forget the markets. Johri Bazaar is loud and colourful — full of jewellery, fabrics, spices, and sounds you’ll carry home with you. The old city, especially near Choti Chaupar, is a place to wander without a map.
                    </li>
                    <li>
                      Want something slower? We can take you to Birla Temple or just find a rooftop café and let the city buzz below while you sip chai.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Agra — about 4.5 hours by road.
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
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 14-15: Agra</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 8 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 8 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     Agra is all about timing. If we reach by evening, you’ll catch the Taj Mahal at its quietest — from across the Yamuna, where the sunset hits its white marble just right.
                    </li>
                    <li>
                     But if you’re up for it, the real moment is sunrise. We’ll get there early, before the crowds. It’s quiet, soft, and somehow personal. Seeing the Taj glow in the first light is something you don’t forget.
                    </li>
                    <li>
                     Later, maybe visit Agra Fort — it’s not just grand, but full of hidden spots and stories. And if you like gardens, Mehtab Bagh offers a great view back at the Taj without the noise.
                    </li>
                    <li>
                      Fridays? The Taj is closed, but we’ll make sure your plan works around that.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Delhi — final stretch, about 4 hours.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(9)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 15: Delhi</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 9 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 9 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px] text-justify">
                    <li>
                     You’re back where it all began. It’s a good day to relax, repack, and maybe pick up a few last-minute things.
                    </li>
                    <li>
                     If you’ve still got energy, we’ll take you through Chandni Chowk. Ride a rickshaw, grab some jalebi, and explore tiny alleys full of stories. Or check out Kinari Bazaar if you want textiles, or the spice market if you’re hunting for flavour-packed souvenirs.
                    </li>
                    <li>
                     Want something calmer? Head to Lodhi Garden, or visit an art gallery or café in a quieter part of town.
                    </li>
                    <li>
                      It’s your call. This is your wind-down day.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(10)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-md">Day 16: Departure</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === 10 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 10 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-6 py-5">
                  <ul className="space-y-4 text-gray-700 text-[15px]">
                    <li>
                     Time to say goodbye. Your driver will be there on time, make sure you’re comfortable, and get you to the airport without any stress.
                    </li>
                    <li>
                     We hope you leave with a heart full of stories, and maybe some colour still lingering in your hair from Holi.
                    </li>
                    <li>
                      See you next time.
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
                  src="/festivals/holi/map.jpg"
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