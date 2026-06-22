"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Sparkles, ChevronRight } from "lucide-react";

// Destinations data with images
const destinations = [
  {
    city: "Delhi",
    bestTime: "October – March",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782140861/brijender-dua-pRmAcSOP8Y0-unsplash_waws2b.jpg",
    highlights: [
      "Old Delhi Exploration",
      "Humayun's Tomb",
      "India Gate",
      "Winter Festivals",
    ],
    description:
      "The best time to visit Delhi is from October through March, when temperatures are comfortable for walking tours and sightseeing. November and December offer pleasant weather and festive celebrations, while January mornings can occasionally be affected by fog.",
  },
  {
    city: "Agra",
    bestTime: "November – February",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782141012/shreshth-gupta-7-RDFPniALI-unsplash_o9quwj.jpg",
    highlights: [
      "Taj Mahal Sunrise",
      "Agra Fort",
      "Cool Mornings",
      "Clear Photography Conditions",
    ],
    description:
      "Agra is at its most magical during winter, when cool mornings make sunrise visits to the Taj Mahal truly unforgettable. The city's most iconic photography opportunities are best experienced during this period.",
  },
  {
    city: "Jaipur",
    bestTime: "October – March",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782141079/barun-ghosh-e_bXQldK-4E-unsplash_paaw90.jpg",
    highlights: [
      "Amber Fort",
      "Nahargarh Fort",
      "Jaigarh Fort",
      "Rooftop Dining",
    ],
    description:
      "Jaipur thrives during the cooler months, when visitors can comfortably explore its hilltop forts, bustling markets, and royal palaces. Evenings are particularly enjoyable for rooftop dining and cultural experiences.",
  },
];

export default function DestinationWeather() {
  return (
    <section className="w-full bg-white py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header - Better styled */}
        <div className="text-center mb-14 sm:mb-16">

          <h2 className="
            text-[18px] sm:text-[22px] md:text-[24px]
            font-semibold
            text-[#2c2c2c]
            mb-4
            tracking-tight
          ">
            Best Time to Visit Each City
          </h2>

          <p className="
            text-gray-600
            text-[12px] sm:text-[13px] md:text-[14.5px]
            font-light
            leading-relaxed
            max-w-3xl
            mx-auto
          ">
            Although the Golden Triangle is often discussed as a single journey,
            each city has its own seasonal personality. Understanding these
            differences can help you plan a smoother and more rewarding trip.
          </p>
        </div>

        {/* Destination Cards - Alternate Layout */}
        <div className="space-y-8 sm:space-y-10">
          {destinations.map((destination, index) => {
            // Alternate layout: Left image on even, Right image on odd
            const isEven = index % 2 === 0;

            return (
              <div
                key={destination.city}
                className="
                  bg-white
                  rounded-md
                  overflow-hidden
                  border border-[#f0e8dd]
                  hover:shadow-sm
                  transition-all duration-500
                  group
                "
              >
                <div className="grid md:grid-cols-2">
                  {/* Image Section */}
                  <div className={`
                    relative h-[280px] md:h-full min-h-[300px] 
                    overflow-hidden
                    ${isEven ? 'md:order-1' : 'md:order-2'}
                  `}>
                    <Image
                      src={destination.image}
                      alt={`${destination.city} city view - best time to visit`}
                      fill
                      className="
                        object-cover 
                        transition-transform duration-700 
                        group-hover:scale-105
                      "
                      priority={index === 0}
                    />
                    
                    {/* Gradient Overlay for better text readability on mobile */}
                    <div className="
                      absolute inset-0 
                      bg-gradient-to-t 
                      from-black/30 
                      via-transparent 
                      to-transparent 
                      md:hidden
                    " />
                  
                  </div>

                  {/* Content Section */}
                  <div className={`
                    p-6 sm:p-8 md:p-10
                    flex flex-col justify-center
                    ${isEven ? 'md:order-2' : 'md:order-1'}
                  `}>
                    {/* City Name with Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="
                        text-[18px] sm:text-[22px] md:text-[24px]
                        font-semibold
                        text-[#2c2c2c]
                      ">
                        {destination.city}
                      </h3>
                    </div>

                    {/* Best Time - Highlighted */}
                    <div className="
                      flex items-center gap-3 
                      bg-[#AF956C]/5
                      border border-[#AF956C]/20
                      rounded-lg
                      px-4 py-2.5
                      mb-5
                    ">
                      <Calendar className="w-4 h-4 text-[#AF956C] flex-shrink-0" />
                      <span className="text-[13px] text-[#2c2c2c]">
                        Best Time: <span className="text-[#AF956C]">{destination.bestTime}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="
                      text-[14px] sm:text-[15px]
                      text-gray-600
                      leading-relaxed
                      font-light
                      mb-6
                    ">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h4 className="
                        text-[12px]
                        font-semibold
                        text-[#2c2c2c]
                        uppercase tracking-wider
                        mb-3
                        flex items-center gap-2
                      ">
                        Highlights
                      </h4>

                      <div className="grid grid-cols-2 gap-2">
                        {destination.highlights.map((item) => (
                          <div
                            key={item}
                            className="
                              flex items-center gap-2
                              text-[13px] text-gray-700
                              font-light
                              bg-[#faf8f5]
                              px-3 py-2
                              rounded-sm
                              hover:bg-[#f0e8dd]
                              transition-colors
                              group/item
                            "
                          >
                            <ChevronRight className="
                              w-3 h-3 
                              text-[#AF956C] 
                              flex-shrink-0
                              transition-transform
                              group-hover/item:translate-x-0.5
                            " />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Simple and Clean */}
        <div className="
          mt-12
          text-center
          bg-gradient-to-r from-[#2c2c2c] to-[#1a1a1a]
          rounded-sm
          p-8 sm:p-10
          border border-[#3a3a3a]
        ">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-white mb-1">
                Ready to Plan Your Golden Triangle Trip?
              </h3>
              <p className="text-gray-400 text-[14px] font-light">
                Get personalized recommendations based on your travel dates
              </p>
            </div>
            
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                px-8 py-3.5
                bg-[#AF956C]
                text-white
                text-[12px] md:text-[13px]
                rounded-full
                transition-all duration-300
                hover:bg-[#8f7654]
                hover:shadow-sm
                whitespace-nowrap
                group/btn
              "
            >
              Talk to an Expert
              <ChevronRight className="
                w-4 h-4 
                transition-transform 
                group-hover/btn:translate-x-1
              " />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}