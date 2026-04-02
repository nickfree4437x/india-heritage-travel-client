"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  name: string;
  link: string;
};

type MenuData = {
  curated: MenuItem[];
  festivals: MenuItem[];
  health: MenuItem[];
};

export default function JourneysMegaMenu({ scrolled }: { scrolled: boolean }) {

  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<keyof MenuData>("curated");

  const data: MenuData = {
    curated: [
      { name: "The Royal Rajasthan", link: "/journeys/curated-tours/royal-rajasthan-tour" },
      { name: "Golden Triangle Splendor", link: "/journeys/curated-tours/golden-triangle-tour" },
      { name: "South India Getaways", link: "/journeys/curated-tours/south-indian-gateways" },
      { name: "East India Adventure", link: "/journeys/curated-tours/east-india-adventure" },
      { name: "West India Escapes", link: "/journeys/curated-tours/west-india-escapes" }
    ],
    festivals: [
      { name: "Holi Festival Tour", link: "/journeys/festivals/holi-festival-tour" },
      { name: "Diwali Festival Tour", link: "/journeys/festivals/diwali-festival-tour" },
      { name: "Pushkar Fair Tour", link: "/journeys/festivals/pushkar-fair-tour" },
      { name: "Kumbh Mela Tour", link: "/journeys/festivals/kumbh-mela-tour" }
    ],
    health: [
      { name: "Yoga Escapes", link: "/journeys/health-based/yoga-escapes" },
      { name: "Ayurveda Journey", link: "/journeys/health-based/ayurveda-journey" }
    ]
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >

      {/* Button */}
      <button
        className={`relative font-medium transition ${
          scrolled
            ? "text-gray-700 hover:text-[#A07008]"
            : "text-white hover:text-[#e6c27a]"
        }`}
      >
        Journeys
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 mt-6 w-[780px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
          >

            <div className="grid grid-cols-2">

              {/* Sidebar */}
              <div className="p-6 border-r bg-gray-50">

                {[
                  { id: "curated", title: "Curated Tours" },
                  { id: "festivals", title: "Festivals" },
                  { id: "health", title: "Health Based" }
                ].map((item) => (

                  <div
                    key={item.id}
                    onMouseEnter={() => setActive(item.id as keyof MenuData)}
                    className={`mb-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      active === item.id
                        ? "bg-[#A07008] text-white shadow-md"
                        : "text-gray-600 hover:bg-[#A07008]/10 hover:text-[#A07008]"
                    }`}
                  >
                    <h4 className="text-sm font-medium tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs opacity-70">
                      Explore journeys
                    </p>
                  </div>

                ))}

              </div>

              {/* Content */}
              <div className="p-6">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >

                    {data[active].map((item, i) => (
                      <Link
                        key={i}
                        href={item.link}
                        className="group flex items-center justify-between px-3 py-2 rounded-md text-sm text-gray-700 transition-all duration-200 hover:bg-[#A07008] hover:text-white"
                      >
                        <span className="transition group-hover:translate-x-1">
                          {item.name}
                        </span>

                        <span className="opacity-0 group-hover:opacity-100 transition">
                          →
                        </span>
                      </Link>
                    ))}

                  </motion.div>
                </AnimatePresence>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}