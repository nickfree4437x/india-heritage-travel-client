"use client";

import {
  CameraOff,
  Hand,
  UserRound,
  Droplets,
  Footprints,
  Ticket,
} from "lucide-react";

const travelTips = [
  {
    icon: CameraOff,
    title: "Respect Preservation Rules",
    description:
      "Photography restrictions and protected areas exist to preserve fragile artwork, carvings, murals, and historical surfaces. These rules help safeguard UNESCO sites for future generations.",
  },
  {
    icon: Hand,
    title: "Avoid Touching Carvings and Murals",
    description:
      "Even small amounts of moisture and oils from human skin can gradually damage ancient stone carvings, paintings, and decorative surfaces that have survived for centuries.",
  },
  {
    icon: UserRound,
    title: "Hire a Licensed Local Guide",
    description:
      "A knowledgeable guide can transform a visit from simple sightseeing into a deeper understanding of the site's history, architecture, legends, and cultural significance.",
  },
  {
    icon: Droplets,
    title: "Carry Water and Light Snacks",
    description:
      "Large UNESCO sites such as Hampi and Konark often involve considerable walking distances. Staying hydrated and carrying a few snacks can make exploration far more comfortable.",
  },
  {
    icon: Footprints,
    title: "Wear Comfortable Walking Shoes",
    description:
      "Ancient pathways, stone steps, uneven surfaces, and archaeological ruins are common across many UNESCO sites, making sturdy footwear essential.",
  },
  {
    icon: Ticket,
    title: "Book Tickets Online When Available",
    description:
      "Popular monuments such as the Taj Mahal, Red Fort, and several major heritage attractions offer online ticketing, helping visitors avoid queues and save valuable sightseeing time.",
  },
];

export default function TravelTipsSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-4">
            Practical Tips for Visiting UNESCO World Heritage Sites in India
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light max-w-6xl">
            A little preparation can greatly improve your experience when
            exploring India's UNESCO World Heritage Sites. These simple tips
            will help you travel responsibly while making the most of your
            visit.
          </p>

        </div>

        {/* Tips Grid */}

        <div className="grid md:grid-cols-3 gap-5">

          {travelTips.map((tip, index) => {

            const Icon = tip.icon;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-md p-6"
              >

                <div className="w-10 h-10 rounded-full bg-white border border-[#e7dfd4] flex items-center justify-center mb-4">

                  <Icon
                    size={16}
                    className="text-[#AF956C]"
                  />

                </div>

                <h3 className="text-[14px] md:text-[14px] font-semibold text-[#2c2c2c] mb-2">
                  {tip.title}
                </h3>

                <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
                  {tip.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}