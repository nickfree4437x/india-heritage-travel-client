"use client";

import {
  Hotel,
  Car,
  Utensils,
  CreditCard,
  Wifi,
  ChefHat,
  Plane,
  Bus,
} from "lucide-react";

import ExcludedServices from "../../common/ExcludedServices";

export default function AboutSection() {

  const inclusions = [
    { icon: <Hotel size={28} />, text: "15 nights, chosen hotels" },
    { icon: <Car size={28} />, text: "Local driver, guide" },
    { icon: <Utensils size={28} />, text: "Daily breakfast" },
    { icon: <CreditCard size={28} />, text: "All costs covered" },
    { icon: <Wifi size={28} />, text: "In Car Wi-fi" },
    { icon: <ChefHat size={28} />, text: "Cooking classes, dinner" },
    { icon: <Plane size={28} />, text: "Airport transfer" },
    { icon: <Bus size={28} />, text: "Delhi rickshaw" },
  ];

  return (
    <section className="bg-[#f4f0ea] pb-10 px-6" id="about">

      <div className="max-w-6xl mx-auto">

        {/* 🔹 TOP GRID */}
        <div className="grid md:grid-cols-2 gap-2 md:gap-12 items-start">

          {/* LEFT - ABOUT */}
          <div>

            <h2 className="text-[16px] sm:text-[20px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              A Spiritual Journey Like No Other
            </h2>

            <div className="space-y-5 font-light text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] text-justify">

              <p>
                It’s hard to explain what Kumbh Mela really feels like —
                it’s not just an event. It’s a pull, a calling.
              </p>

              <p>
                Every twelve years, millions gather at the banks of sacred rivers
                like the Ganges and Yamuna. Not for the crowd. Not for photos.
                They come for something deeper — faith.
              </p>

              <p>
                One dip in the holy river is believed to cleanse lifetimes of sins.
                It’s not just a ritual — it’s a moment of transformation.
              </p>

              <p>
                You’ll see sadhus covered in ash, pilgrims walking barefoot for days,
                and rituals that feel ancient yet alive. Some take devotion to
                extremes — all in the name of faith.
              </p>

              <p>
                It’s loud, chaotic, emotional, and deeply spiritual.
                You don’t just see Kumbh Mela — you feel it.
              </p>

            </div>

          </div>

          {/* RIGHT - INCLUSIONS */}
          <div className="bg-white rounded-md p-6" id="inclusions">

            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#2c2c2c] text-center mb-8 tracking-wide">
              Inclusions
            </h3>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4">

              {inclusions.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex flex-col items-center
                    text-center
                    gap-2
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      text-[#9A7A58]
                      scale-[0.85]
                    "
                  >
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      text-[11px]
                      sm:text-[12px]
                      font-[400]
                      text-[#3a3a3a]
                      leading-[1.5]
                    "
                  >
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* 🔹 EXCLUSIONS */}
        <div id="excluded-services">
          <ExcludedServices />
        </div>
      </div>

    </section>
  );
}