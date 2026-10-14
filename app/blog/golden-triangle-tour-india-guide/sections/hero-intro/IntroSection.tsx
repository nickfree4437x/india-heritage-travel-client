"use client";

import { Building2, Landmark, Crown, MapPin, Clock, Globe, Calendar } from "lucide-react";
import Link from "next/link";

export default function IntroSection() {
  // City data
  const cities = [
    {
      name: "Delhi",
      icon: Building2,
      description: "India's capital city, home to Mughal monuments, colonial architecture, and modern dynamism.",
      color: "from-emerald-50 to-emerald-100/30",
      border: "border-emerald-200/50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
      link: "/tours/the-royal-heritage-trail-tour",
    },
    {
      name: "Agra",
      icon: Landmark,
      description: "Birthplace of the Taj Mahal and two more UNESCO World Heritage sites.",
      color: "from-amber-50 to-amber-100/30",
      border: "border-amber-200/50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      link: "/tours/heritage-odyssey-tour",
    },
    {
      name: "Jaipur",
      icon: Crown,
      description: "Rajasthan's 'pink city,' known for its palaces, forts, and colorful markets.",
      color: "from-rose-50 to-rose-100/30",
      border: "border-rose-200/50",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-700",
      link: "/tours/majestic-golden-triangle-tour",
    },
  ];

  // Stats data
  const stats = [
    { icon: Globe, label: "World Heritage Sites", value: "3+" },
    { icon: Calendar, label: "Years of History", value: "800+" },
    { icon: MapPin, label: "Cities Covered", value: "3" },
    { icon: Clock, label: "Recommended Days", value: "5-7" },
  ];

  return (
    <section className="w-full bg-white py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* ===== HERO / INTRO SECTION ===== */}
        <div className="mb-6 sm:mb-8 lg:mb-8">
          {/* Header with badge */}
          <div className="flex flex-col items-start gap-3 mb-2">
            <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-bold tracking-wide text-[#2c2c2c] mb-2">
              Welcome to the Golden Triangle
            </h2>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <Icon size={18} className="text-[#c9a45c] mx-auto mb-1" />
                  <div className="text-[16px] sm:text-[18px] font-bold text-[#2c2c2c]">{stat.value}</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-500 font-light">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Intro paragraphs */}
          <div className="space-y-4">
            <div className="relative border-[#c9a45c]/30 hover:border-[#c9a45c] transition-colors duration-300">
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                There exists a certain type of silence that descends upon tourists when they reach the end of the red 
                sandstone gate and catch a glimpse of the Taj Mahal for the first time. The guides I worked with over 
                the past fifteen years have said that regardless of all pictures, no one gets prepared for that special 
                moment when the marble starts glowing somehow from within and changing colors depending on the light, 
                and travelers who saw the pyramids and colosseums usually find themselves speechless at that point.
              </p>
            </div>
          </div>
        </div>

        {/* ===== WHAT IS GOLDEN TRIANGLE ===== */}
        <div className="mb-6 md:mb-8">
        {/* Section Header - Simple */}
        <div className="mb-2">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] text-[#2c2c2c] tracking-wide font-bold">
            What Is the Golden Triangle Tour in India?
          </h2>
        </div>

        {/* Description - Clean */}
        <p className="text-gray-600 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light mb-6">
          The Golden Triangle tour includes travel between three cities in northern India -{' '}
          <Link href="/tours/the-royal-heritage-trail-tour" className="text-[#c9a45c] hover:underline transition-colors duration-200">
            Delhi
          </Link>
          ,{' '}
          <Link href="/tours/heritage-odyssey-tour" className="text-[#c9a45c] hover:underline transition-colors duration-200">
            Agra
          </Link>
          , and{' '}
          <Link href="/tours/majestic-golden-triangle-tour" className="text-[#c9a45c] hover:underline transition-colors duration-200">
            Jaipur
          </Link>
          - collectively highlighting Mughal and Rajput royalty in one compact tour package.
        </p>

        {/* Cities Grid - Simple Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cities.map((city, idx) => {
            const Icon = city.icon;
            return (
              <Link
                key={idx}
                href={city.link}
                className="group block bg-white p-5 rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-full ${city.iconBg} flex items-center justify-center`}>
                    <Icon size={16} className={city.iconColor} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-medium text-[#2c2c2c] transition-colors duration-200">
                      {city.name}
                    </h3>
                    <p className="text-gray-500 text-[11px] sm:text-[12px] leading-relaxed font-light">
                      {city.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
         </div>
        </div>
      </div>
    </section>
  );
}