"use client";

import { ShieldCheck, Compass, Headphones, Route } from "lucide-react";

export default function Difference() {
  const items = [
    {
      icon: <ShieldCheck size={60} />,
      text: "Safe And Secure Women Travel",
    },
    {
      icon: <Compass size={60} />,
      text: "100+ Diverse Destinations",
    },
    {
      icon: <Headphones size={60} />,
      text: "24×7 Round The Clock Support",
    },
    {
      icon: <Route size={60} />,
      text: "Traveler Friendly Curated Itineraries",
    },
  ];

  return (
    <section className="relative py-16 sm:py-6 px-4 sm:px-6 bg-[#f8f6f2] overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-10">
          <h2 className="font-heading text-[22px] sm:text-[26px] md:text-[24px] font-semibold text-[#8F6E4B]">
            How We Make a Difference
          </h2>
        </div>

        {/* Items */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
                gap-y-14 sm:gap-y-16 md:gap-y-20 
                gap-x-16 md:gap-x-24 lg:gap-x-32 text-center md:mb-6">

          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center px-4"
            >

              {/* Icon */}
              <div className="text-[#8F6E4B] mb-4 transition duration-300">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-gray-800 text-[14px] sm:text-[14px] md:text-[14px] leading-relaxed tracking-wide 
                             whitespace-nowrap">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}