"use client";

import { ShieldCheck, Compass, Headphones, Route } from "lucide-react";

export default function Difference() {
  const items = [
    {
      icon: <ShieldCheck size={34} />,
      text: "Women-first safety & comfort in every journey",
    },
    {
      icon: <Compass size={34} />,
      text: "100+ handpicked destinations across India & beyond",
    },
    {
      icon: <Headphones size={34} />,
      text: "24×7 support for a smooth & worry-free experience",
    },
    {
      icon: <Route size={34} />,
      text: "Carefully curated itineraries for seamless travel",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-60px] left-[-60px] w-60 sm:w-72 h-60 sm:h-72 bg-[#c9a45c]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-60 sm:w-72 h-60 sm:h-72 bg-[#c9a45c]/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-[#A38664]">
            How We Make a Difference
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-500 max-w-lg mx-auto text-[13px] sm:text-sm md:text-base leading-relaxed">
            We design travel experiences that are safe, seamless, and truly memorable.
          </p>
        </div>

        {/* Items */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
                gap-y-10 sm:gap-y-12 md:gap-y-16 
                gap-x-10 md:gap-x-14 lg:gap-x-20 text-center">

          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center px-2"
            >

              {/* Icon */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 
                              flex items-center justify-center 
                              rounded-full bg-[#c9a45c]/10 text-[#A38664] 
                              mb-4 sm:mb-5 transition duration-300">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-[13px] sm:text-sm md:text-base 
                            leading-relaxed max-w-[220px]">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}