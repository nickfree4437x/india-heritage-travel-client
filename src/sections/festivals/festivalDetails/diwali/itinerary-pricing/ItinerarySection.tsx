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
    <section className="py-10 bg-white scroll-mt-16 md:scroll-mt-24" id="itinerary">
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 1-3: Delhi</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 0 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 0 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      We&apos;ll meet you at the airport, help you settle in, and if you&apos;re up for it, show you a bit of the city.
                    </li>
                    <li>
                      New Delhi&apos;s got the big landmarks - India Gate, the President&apos;s house, and wide leafy roads. Gandhi Smriti is worth a visit, too - it&apos;s quiet, moving.
                    </li>
                    <li>
                      Then there&apos;s Old Delhi. It&apos;s chaotic, loud, a little overwhelming… but unforgettable. Hop on a rickshaw, ride through Chandni Chowk, and try something sweet from a street vendor. You&apos;ll remember it.
                    </li>
                    <li>
                      If temples interest you, we&apos;ll take you to Lotus Temple, Akshardham, and Humayun&apos;s Tomb - all stunning, all different.
                    </li>
                    <li>
                      We&apos;ll move at your pace. No rush.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop:</span> Mandawa - a five and a half hour drive with plenty to see along the way.
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 3-5: Mandawa</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 1 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 1 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      Mandawa&apos;s one of those places that feels like it&apos;s been left untouched in the best way. Small town, quiet vibe, but every wall tells a story - literally.
                    </li>
                    <li>
                      The old havelis here are covered in murals… some faded, some still bright, all of them full of character. You&apos;ll walk around and feel like you&apos;ve stepped into an open-air art gallery.
                    </li>
                    <li>
                      We&apos;ll take you on a heritage walk - not the kind that drags on, but one where you&apos;ll actually notice things… like a chipped fresco or a doorframe that&apos;s been standing longer than most countries have existed. It&apos;s not touristy. It&apos;s real.
                    </li>
                    <li>
                      There&apos;s not much to rush in Mandawa. It&apos;s more about taking it slow, soaking it in, and maybe chatting with a local or two who&apos;ll definitely have stories if you&apos;re willing to listen.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop:</span> Bikaner - around 3.5 hours&apos; drive from here (about 200 km).
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 5-6: Bikaner</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 2 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 2 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      The ride from Mandawa to Bikaner takes you through a drier, dustier stretch of Rajasthan - but the colours start showing up again as you roll into the city.
                    </li>
                    <li>Bikaner has this unpolished charm. Less crowded, less touristy, but full of surprises. You&apos;ll visit Junagarh Fort - unlike most forts in Rajasthan, this one wasn&apos;t built on a hill, but it&apos;s just as grand. Its walls hold centuries of stories.</li>
                    <li>
                      If you&apos;re curious (and a little brave), there&apos;s the Karni Mata Temple just outside town - yes, the one where rats run freely. Locals believe they&apos;re sacred. It&apos;s definitely a &quot;you have to see it to believe it&quot; kind of place.
                    </li>
                    <li>
                      Before leaving, wander through Kote Gate Market - all old stone buildings, loud vendors, and the smell of fried snacks and spices hanging in the air.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Jaisalmer - about 5 hours away.
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 6-8: Jaisalmer</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 3 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 3 ? "max-h-[700px] sm:max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     Rolling into Jaisalmer feels like arriving on the edge of a golden dream. Everything here glows - the buildings, the sand, even the light feels warmer.
                    </li>
                    <li>
                     The old Jaisalmer Fort rises straight out of the desert and the fantastic part? People still live inside it. Shops, homes, temples - all tucked into its winding paths.
                    </li>
                    <li>
                     We&apos;ll take you through Patwa Haveli and Salim Singh Haveli - each one a maze of tiny balconies, latticework windows, and stories etched into stone.
                    </li>
                    <li>
                     Gadisar Lake is peaceful in a way only desert lakes can be. You might just want to sit by the edge for a bit and do nothing. And when the sun starts dipping low, it&apos;s camel time.
                    </li>
                    <li>
                     You&apos;ll head out into the dunes for a desert sunset that turns everything gold and orange. At night, you&apos;ll be under a sky full of stars, with folk music, dance, and maybe a bonfire dinner to wrap it all up. It&apos;s not just sightseeing here - it&apos;s something you&apos;ll feel.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Jodhpur - around 4.5 hours from here (roughly 285 km).
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 8-9: Jodhpur</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 4 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 4 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     You&apos;ll notice the blue first. Everywhere - the homes, the walls, even the air feels a little cooler.
                    </li>
                    <li>
                     We&apos;ll take you up to Mehrangarh Fort. It&apos;s massive. From the top, the whole city stretches out like a sea of rooftops. Inside, there&apos;s history, silence, and those kinds of views that make you pause.
                    </li>
                    <li>
                     Down below, you can poke around the Clock Tower market. It&apos;s noisy, colourful, and smells like spices. If you want something quieter, we can swing by Mandore Garden or even Umaid Bhawan-it&apos;s part-palace, part-museum, part-hotel.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Udaipur - about 5 hours away.
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 9-11: Udaipur</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 5 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 5 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                      It&apos;s all water and hills and white buildings here. Very different pace. Very still.
                    </li>
                    <li>
                     We&apos;ll start at City Palace-because you can&apos;t not. Then just take it easy. Walk a bit, stop for chai, see Jagdish Temple or Princess Garden if you feel like it.
                    </li>
                    <li>
                     The boat ride on Lake Pichola? That&apos;s the moment. When the sun drops, the lake turns gold and the palaces glow. Feels unreal.
                    </li>
                    <li>
                      In the evening, grab dinner on a rooftop somewhere. There are plenty. Some with music, some without. We&apos;ll help you find your mood.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Bundi - around 4 hours away. 
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 11-12: Bundi</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 6 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 6 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     Small town. Blue houses. Fewer people. It&apos;s got that lived-in, real kind of feel. The palace here-Bundi Palace-is a bit wild. Not overly restored, which is kind of the charm. You&apos;ll find old murals, empty rooms, monkeys. The views are good too.
                    </li>
                    <li>
                     There&apos;s a stepwell-Rani Ji ki Baori. Deep, symmetrical, almost hypnotic. You can walk around the lake in the evening as locals do. The light&apos;s soft, the mood&apos;s calm. Maybe visit Sukh Mahal, if it&apos;s open. 
                    </li>
                    <li>
                     The market here feels personal. Fewer crowds, but full of handcrafted things - from patchwork textiles to scented oils. Even if you&apos;re not looking to buy, it&apos;s fun to wander and watch.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Jaipur - about 3.5 hours.
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 12-14: Jaipur</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 7 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 7 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     You&apos;ll feel the buzz as soon as you enter. It&apos;s loud, busy, full of colour-and around Diwali, everything&apos;s lit up. Literally.
                    </li>
                    <li>
                     We&apos;ll start at Amer Fort. Big, bold, and sitting high on the hill. Inside, the mirrors and courtyards are something else. Then it&apos;s into the city-City Palace, Hawa Mahal. You&apos;ve probably seen pictures, but they&apos;re better in real life.
                    </li>
                    <li>
                     Evenings here? That&apos;s when Jaipur shines. Markets glow with lights and people, sweets, clothes, and fireworks. If you want a quiet moment, we&apos;ll take you to Nahargarh Fort for the view.
                    </li>
                    <li>
                     The next morning, you can join in some Diwali rituals if you&apos;re up for it. Light a lamp. Eat too much. Just soak it all in.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Agra - around 4.5 hours.
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
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 14-15: Agra</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 8 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 8 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     You know why we&apos;re here. The Taj.
                    </li>
                    <li>
                     We&apos;ll get you there early-sunrise or sunset, your call. It&apos;s quieter then. Feels softer. Even if you&apos;ve seen it in pictures all your life, seeing it in person… hits different. Please note that numerous attractions, such as the Taj Mahal, remain closed on Fridays. 
                    </li>
                    <li>
                     There&apos;s more to Agra, though. Agra Fort is solid and red and full of stories. And if there&apos;s time, we can show you Mehtab Bagh for another view of the Taj-this one across the river, no crowds.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Orchha - about 5 hours. Not touristy. That&apos;s the best part.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(9)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 15-16: Orchha</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 9 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 9 ? "max-h-[500px] sm:max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     Orchha is still. Like it&apos;s been left alone on purpose. The fort complex is huge but not crowded.
                    </li>
                    <li>
                     You can wander without bumping into groups or signs telling you where to go. Chaturbhuj Temple&apos;s got a strange energy-peaceful but big.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Khajuraho - about 4.5 hours.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(10)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 16–17: Khajuraho</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 10 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 10 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     Yes, these are the Kama Sutra temples, a UNESCO World Heritage Site. But they&apos;re more than the carvings everyone talks about.
                    </li>
                    <li>
                     The craftsmanship is wild-every detail perfect, every figure alive. We&apos;ll visit the main groups-Western, Eastern, Southern-each with their own vibe. Not rushed.
                    </li>
                    <li>
                      In the evening, you can catch a classical dance performance or the light and sound show. Or just walk around the temple complex as the sun drops-your call.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span>Varanasi - short flight. Different world.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(11)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 17–19: Varanasi</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 11 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 11 ? "max-h-[600px] sm:max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     We&apos;ll start early. Boat ride on the Ganges before the city wakes up. The light&apos;s gold, the ghats are quiet, and the chants echo. It&apos;s something.
                    </li>
                    <li>
                     During the day, there&apos;s Bharat Mata Temple, Sarnath ruins, and the massive Banaras Hindu University. There&apos;s a lot to see, but we won&apos;t overload it.
                    </li>
                    <li>
                     Evening Aarti on the ghats is a must. Bells, lamps, chanting-it&apos;s beautiful, intense, maybe even overwhelming. But unforgettable.
                    </li>
                    <li>
                      <span className="font-semibold">Next stop: </span> Back to Delhi - train or flight, whatever works best.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(12)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 19: Delhi</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 12 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 12 ? "max-h-[500px] sm:max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     One last day. Do nothing or do everything-it&apos;s yours.
                    </li>
                    <li>
                     You could revisit Old Delhi, walk through spice lanes, and grab a final bite. Or just relax at the hotel, go for a massage, maybe buy that one thing you said you wouldn&apos;t.
                    </li>
                    <li>
                     Wrap it how you want.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-sm">
              <div
                onClick={() => toggle(13)}
                className="flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer bg-[#e9e2d8] text-[#9b7a50]"
              >
                <h3 className="font-semibold text-[#9b7a50] text-xs sm:text-sm tracking-[0.10em]">Day 20: Departure</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === 13 ? "rotate-180" : ""}`} />
              </div>

              <div className={`transition-all duration-500 overflow-hidden ${openIndex === 13 ? "max-h-[350px] sm:max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                  <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] font-light md:text-[13px] text-justify">
                    <li>
                     Time to say goodbye. Your driver will be there on time, make sure you&apos;re comfortable, and get you to the airport without any stress.
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

          {/* RIGHT SIDE - STICKY IMAGE */}
          <div className="hidden lg:block relative mt-8 lg:mt-0" id="map">
            <div className="sticky top-24">
              <div className="rounded-md overflow-hidden shadow-sm">
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779549023/Mystical-North-India-Discovery.b4-1_glawag.png"
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
          <div className="lg:hidden mt-2">
            <div className="rounded-md overflow-hidden shadow-sm max-w-md mx-auto">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779549023/Mystical-North-India-Discovery.b4-1_glawag.png"
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