"use client";

import {
  Clock3,
  Footprints,
  Droplets,
  UserRound,
  Ticket,
  Landmark,
} from "lucide-react";

const travelTips = [
  {
    icon: Clock3,
    title: "Arrive Early in the Morning",
    description:
      "Most forts in Rajasthan open around 9:00 AM, and the first couple of hours offer a far more peaceful experience before larger tour groups arrive. Early mornings also provide cooler temperatures and the best lighting for photography.",
  },
  {
    icon: Footprints,
    title: "Wear Comfortable Footwear",
    description:
      "Expect uneven stone pathways, steep staircases, long walks, and cobbled courtyards throughout Rajasthan's forts and palaces. Comfortable walking shoes will make exploring these historic sites much easier than sandals or casual footwear.",
  },
  {
    icon: Droplets,
    title: "Carry Water with You",
    description:
      "Many forts sit on exposed hilltops where shade is limited, especially during the warmer months. Carry your own water bottle before entering, as prices inside popular monuments are often significantly higher.",
  },
  {
    icon: UserRound,
    title: "Hire a Local Guide",
    description:
      "At landmarks such as Mehrangarh Fort and Chittorgarh Fort, an experienced local guide transforms your visit by bringing centuries of history, royal legends, architecture, and battles to life in a way information boards simply cannot.",
  },
  {
    icon: Ticket,
    title: "Book Tickets in Advance",
    description:
      "Popular attractions like Amber Fort and Mehrangarh Fort can become busy during the peak travel season. Whenever online booking is available, reserve your tickets beforehand to avoid long queues.",
  },
  {
    icon: Landmark,
    title: "Respect Heritage & Sacred Spaces",
    description:
      "Many forts continue to house active temples, shrines, museums, and even local communities. Follow photography rules, avoid restricted areas, and respect the cultural significance of these remarkable heritage sites.",
  },
];

export default function TravelTipsSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="max-w-4xl mb-10">

          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#2c2c2c] leading-tight mb-5">
            Advice for Travelling to Rajasthan's Forts & Palaces
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-8 text-gray-700 font-light text-justify">
            After visiting many of Rajasthan's magnificent forts and palaces,
            these are the practical tips that make the biggest difference.
            A little preparation goes a long way towards making your heritage
            journey more comfortable, enjoyable, and rewarding.
          </p>

        </div>

        {/* Tips */}

        <div className="space-y-8">

          {travelTips.map((tip, index) => {

            const Icon = tip.icon;

            return (

              <div
                key={index}
                className={`flex gap-5 ${
                  index !== travelTips.length - 1
                    ? "pb-8 border-b border-[#ece7de]"
                    : ""
                }`}
              >

                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#faf7f3] border border-[#ece7de] flex items-center justify-center">

                  <Icon
                    size={20}
                    className="text-[#AF956C]"
                  />

                </div>

                <div>

                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-3">
                    {tip.title}
                  </h3>

                  <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-8 text-gray-700 font-light text-justify">
                    {tip.description}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom Note */}

        <div className="mt-10 border border-[#e7dfd4] bg-[#faf7f3] rounded-sm p-6">

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-8 text-gray-700 font-light text-justify">
            Rajasthan's forts are far more than impressive monuments-they are
            living pieces of history. Taking your time, arriving prepared, and
            understanding the stories behind these remarkable structures will
            transform a simple sightseeing trip into an unforgettable cultural
            experience.
          </p>

        </div>

      </div>

    </section>
  );
}