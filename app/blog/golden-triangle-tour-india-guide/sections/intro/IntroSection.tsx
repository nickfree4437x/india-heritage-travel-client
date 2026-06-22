"use client";

import { Building2, Landmark, Quote, Crown, MapPin, Clock, Globe, Calendar } from "lucide-react";
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
    <section className="w-full bg-white py-3 sm:py-8 lg:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* ===== HERO / INTRO SECTION ===== */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          {/* Header with badge */}
          <div className="flex flex-col items-start gap-3 mb-6">
            <h1 className="text-[18px] leading-[1.2] sm:text-[22px] md:text-[24px] font-bold tracking-wide text-[#2c2c2c]">
              Welcome to the Golden Triangle
            </h1>
            <p className="text-gray-500 text-[13px] sm:text-[14px] font-light max-w-2xl">
              Discover the heart of India through its most iconic cities - Delhi, Agra, and Jaipur
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <Icon size={18} className="text-[#c9a45c] mx-auto mb-1" />
                  <div className="text-[18px] sm:text-[20px] font-bold text-[#2c2c2c]">{stat.value}</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-500 font-light">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Intro paragraphs */}
          <div className="space-y-4">
            <div className="relative border-[#c9a45c]/30 hover:border-[#c9a45c] transition-colors duration-300">
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                There exists a certain type of silence that descends upon tourists when they reach the end of the red sandstone gate and catch a glimpse of the Taj Mahal for the first time. The guides I worked with over the past fifteen years have said that regardless of all pictures, no one gets prepared for that special moment when the marble starts glowing somehow from within and changing colors depending on the light, and travelers who saw the pyramids and colosseums usually find themselves speechless at that point.
              </p>
            </div>
            
            <div className="relative border-[#c9a45c]/20 hover:border-[#c9a45c]/40 transition-colors duration-300">
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                This exact moment serves as an emotional highlight of what is called the Golden Triangle tour India, which represents a classical travel route from Delhi, to Agra and then to Jaipur. This triangle contains more World Heritage Sites per square kilometer than almost any other region in the whole country and contains 800 years of history of the Mughal and Rajput rulers.
              </p>
            </div>
            
            <div className="relative pl-4 sm:pl-6 border-l-2 border-[#c9a45c]/10 bg-gradient-to-r from-[#c9a45c]/5 to-transparent p-4 sm:p-5 rounded-r-xl">
              <Quote size={16} className="text-[#c9a45c]/20 absolute top-3 right-3" />
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">
                It will strip away all the haze that clouds your planning process. You will learn everything there is to know about the history of these three amazing cities that will make your visit so worthwhile, attraction-by-attraction tips along with practical information, daily itinerary, budgeting, and the detailed information regarding logistics, safety, and etiquette issues that only come from the experience of organizing such tours.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-[#c9a45c] to-transparent" />
                <p className="text-[#a8843a] text-[12px] sm:text-[13px]">
                  The single Golden Triangle guide you need - whether you travel alone, with family, or as a couple.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== WHAT IS GOLDEN TRIANGLE ===== */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
        {/* Section Header - Simple */}
        <div className="mb-6">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] text-[#2c2c2c] font-semibold">
            What Is Golden Triangle Tour?
          </h2>
          <p className="text-[13px] text-gray-500 font-light mt-1">
            Three cities, one unforgettable journey
          </p>
        </div>

        {/* Description - Clean */}
        <p className="text-gray-600 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light mb-6">
          The Golden Triangle tour includes travel between three cities in northern India -{' '}
          <Link href="/tours/the-royal-heritage-trail-tour" className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200">
            Delhi
          </Link>
          ,{' '}
          <Link href="/tours/heritage-odyssey-tour" className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200">
            Agra
          </Link>
          , and{' '}
          <Link href="/tours/majestic-golden-triangle-tour" className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200">
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
                className="group block bg-white p-5 rounded-lg border border-gray-100 hover:border-[#c9a45c]/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-full ${city.iconBg} flex items-center justify-center`}>
                    <Icon size={16} className={city.iconColor} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-medium text-[#2c2c2c] group-hover:text-[#c9a45c] transition-colors duration-200">
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

        {/* Additional info - Clean */}
        <p className="text-gray-400 text-[12px] sm:text-[13px] font-light mt-4 text-center">
          🕐 Usually takes <span className="text-gray-600 font-medium">5 to 7 days</span>, expandable to 10+ days with Ranthambore or Varanasi.
        </p>
        </div>
        {/* ===== WHY GOLDEN TRIANGLE MATTERS ===== */}
        <div>
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-[18px] sm:text-[22px] md:text-[24px] tracking-wide text-[#2c2c2c] font-semibold">
                Why the Golden Triangle Matters
              </h2>
              <p className="text-[12px] text-gray-500 font-light mt-0.5">
                800 years of history in three iconic cities
              </p>
            </div>
          </div>

          {/* Cards with icons */}
          <div className="space-y-4">
            {[
              {
                icon: Building2,
                title: "Delhi - A Millennium of Power",
                description: "Delhi is one of the few cities that has acted as a political capital for nearly a millennium. Under and beside the modern Delhi lie seven historical capitals, and an architectural chronology could be found from the 12th century Indo-Islamic architecture of the Qutub Minar all the way to the British imperial New Delhi. No other capital city allows you to cover so much historical depth in just one afternoon.",
                link: "/tours/the-royal-heritage-trail-tour",
              },
              {
                icon: Landmark,
                title: "Agra - The Taj & Mughal Grandeur",
                description: "Agra was the capital of the Mughal Empire in its Golden Age, and the Taj Mahal - built in 1653 as the tomb of Mumtaz Mahal - stands as the epitome of Mughal architectural grandeur. The symmetry, the inlay work and the way the building changes at dawn, noon and sunset has been possible only because of the efforts of about <span className='font-medium text-[#2c2c2c]'>20,000 artisans</span> over <span className='font-medium text-[#2c2c2c]'>10 years</span>.",
                link: "/tours/heritage-odyssey-tour",
              },
              {
                icon: Crown,
                title: "Jaipur - The Pink City's Royal Legacy",
                description: "Jaipur, which was established in 1727 by Maharaja Sawai Jai Singh II, is a planned capital city of the Rajput kingdom that was built in accordance with the principles of the Vastu Shastra. The architecture of the city's forts and palaces reflects the political negotiations, battles, and matrimonial relations that the rulers of Rajasthan had with the Mughals and created a unique architectural style.",
                link: "/tours/majestic-golden-triangle-tour",
                extra: (
                  <p className="text-gray-500 text-[12px] sm:text-[13px] font-light mt-2">
                    To visit more places outside of Jaipur, check out{' '}
                    <Link href="/tours/rajasthani-heritage-retreat-tour" className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200">
                      Luxury Rajasthan tour packages
                    </Link>
                    .
                  </p>
                ),
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#c9a45c]/10 to-[#a8843a]/10 flex items-center justify-center transition-all duration-300">
                      <Icon size={18} className="text-[#c9a45c] transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={item.link} className="text-[15px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-1 hover:text-[#c9a45c] transition-colors duration-200 inline-block">
                        {item.title}
                      </Link>
                      <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] font-light" dangerouslySetInnerHTML={{ __html: item.description }} />
                      {item.extra}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}