"use client";

import { MapPin, Clock, Shield, Gem, Star, Car, Compass } from "lucide-react";
import Link from "next/link";

export default function IntroSection() {
  // Itinerary data
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival in Delhi",
      description:
        "Arrive at Indira Gandhi International Airport, transfer to your hotel, and rest. In the evening, an easy orientation walk or a relaxed dinner introduces you to the city without overloading a jet-lagged first day.",
      icon: MapPin,
    },
    {
      day: "Day 2",
      title: "Delhi Sightseeing",
      description:
        "Morning visit to the Qutub Minar and Humayun's Tomb, followed by a drive past India Gate and the government quarter of New Delhi. Afternoon spent exploring Old Delhi - the Red Fort, Jama Masjid, and a rickshaw ride through Chandni Chowk's lanes.",
      icon: MapPin,
    },
    {
      day: "Day 3",
      title: "Delhi to Agra",
      description:
        "Depart by private car or the Gatimaan Express for Agra. Afternoon visit to Agra Fort, with time to settle in before an early start the following morning.",
      icon: MapPin,
    },
    {
      day: "Day 4",
      title: "Taj Mahal Sunrise & Onward to Jaipur",
      description:
        "Sunrise visit to the Taj Mahal - nonnegotiable for both light quality and crowd levels. After breakfast, depart for Jaipur (roughly 5-6 hours by road, with an optional stop at Fatehpur Sikri, Akbar's abandoned red sandstone capital, en route).",
      icon: MapPin,
    },
    {
      day: "Day 5",
      title: "Jaipur Sightseeing",
      description:
        "Early morning at Amber Fort before crowds build, followed by Jantar Mantar, City Palace, and a drive past Hawa Mahal. Evening free for bazaar shopping in Johari or Bapu Bazaar, or a traditional Rajasthani dinner with folk performance.",
      icon: MapPin,
    },
    {
      day: "Day 6",
      title: "Jaipur to Delhi Departure",
      description:
        "Morning at leisure or a visit to Nahargarh Fort for final views over the city, then transfer back to Delhi for international departure - or extend the trip toward Ranthambore, Udaipur, or Varanasi if time allows.",
      icon: MapPin,
    },
  ];

  const reasons = [
    {
      icon: Compass,
      title: "Custom Tours",
      description: (
        <>
          Each of our tours is developed on the basis of an individual discussion of your traveling preferences rather than a pre-designed schedule.{" "}
          <Link 
            href="/customize-your-journey" 
            className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200"
          >
            Build your custom tour
          </Link>
        </>
      ),
    },
    {
      icon: Car,
      title: "Private Chauffeurs",
      description: (
        <>
          Each of our Golden Triangle tours features a private driver and air-conditioned car along all the way of your route.{" "}
          <Link 
            href="/car-rental-india" 
            className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200"
          >
            Explore private chauffeur services
          </Link>
        </>
      ),
    },
    {
      icon: Star,
      title: "Expert Guides",
      description: (
        <>
          Our guides specialize in Mughal and Rajput history which allows you to discover landmarks much more deeply and interestingly.{" "}
          <Link 
            href="/contact" 
            className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200"
          >
            Meet our expert guides
          </Link>
        </>
      ),
    },
    {
      icon: Gem,
      title: "Luxury Hotels",
      description: (
        <>
          We cooperate only with heritage palace hotels and top-class 5-star hotels in Delhi, Agra, and Jaipur.{" "}
          <Link 
            href="/blog/top-heritage-hotel-in-india" 
            className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200"
          >
            View our luxury hotel collection
          </Link>
        </>
      ),
    },
    {
      icon: Shield,
      title: "Women-Oriented Tours",
      description: (
        <>
          Women-only departures and female guides can be arranged for lone female travelers requiring additional peace of mind.{" "}
          <Link 
            href="/solo-women-travel" 
            className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200"
          >
            Learn more about solo women travel
          </Link>
        </>
      ),
    },
    {
      icon: Clock,
      title: "24×7 Availability",
      description: (
        <>
          You have a dedicated individual who can assist you any time during your travel for any sort of change or emergency.{" "}
          <Link 
            href="/contact" 
            className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200"
          >
            Learn about our 24/7 support
          </Link>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* ===== ITINERARY SECTION ===== */}
        <div className="mb-16">
          {/* Header with decorative line */}
          <div className="flex items-center gap-4 mb-12">
            <div>
              <h2 className="text-[18px] sm:text-[22px] md:text-[26px] tracking-wide text-[#2c2c2c] font-semibold">
                Suggested 6-Day Itinerary
              </h2>
              <p className="text-[12px] text-gray-500 font-light mt-0.5">
                A carefully crafted journey through India's Golden Triangle
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[15px] sm:left-[20px] top-0 bottom-0 w-px bg-[#c9a45c]/30 to-transparent" />

            <div className="space-y-6">
              {itinerary.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="relative flex gap-4 sm:gap-6 group">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#c9a45c] to-[#a8843a] flex items-center justify-center shadow-sm shadow-[#c9a45c]/20">
                        <span className="text-white text-[10px] sm:text-[11px] font-bold">
                          {idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-white rounded-xl p-4 sm:p-5 shadow-sm transition-shadow duration-300 border border-gray-200/50 hover:border-[#c9a45c]/20">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[#c9a45c] font-semibold text-[13px] sm:text-[14px]">
                          {item.day}
                        </span>
                        <span className="w-px h-4 bg-gray-300" />
                        <h3 className="text-[14px] sm:text-[15px] font-medium text-[#2c2c2c]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 p-4 sm:p-5 bg-gradient-to-r from-[#c9a45c]/5 to-transparent rounded-xl border border-[#c9a45c]/10">
            <p className="text-gray-600 text-[12px] sm:text-[13px] font-light italic flex items-start gap-2">
              This itinerary can be compressed to 5 days or extended to 8-10 days depending on pace preference, and we customize the sequence and pacing for every client based on travel style, mobility, and interests.
            </p>
          </div>
        </div>

        {/* ===== WHY BOOK SECTION ===== */}
        <div>
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div>
              <h2 className="text-[18px] sm:text-[22px] md:text-[26px] tracking-wide text-[#2c2c2c] font-semibold">
                Why Book With India Heritage Travel
              </h2>
              <p className="text-[12px] text-gray-500 font-light mt-0.5">
                What makes us different from the rest
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-light mb-8 bg-gray-50 p-5 rounded-xl border border-gray-100">
            There are a dozen ways to arrange a Golden Triangle tour – budget tour operators, generic OTA, or an independent arrangement. However, the deciding factor that determines whether your trip will turn out memorable or otherwise is usually the person responsible for its arrangement.
          </p>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:border-[#c9a45c]/30 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#c9a45c]/10 to-[#a8843a]/10 flex items-center justify-center transition-all duration-300">
                      <Icon size={18} className="text-[#c9a45c] transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#2c2c2c] mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-gray-500 text-[12px] sm:text-[13px] leading-relaxed font-light">
                        {reason.description}
                      </p>
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