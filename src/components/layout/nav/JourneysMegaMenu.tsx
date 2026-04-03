"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type MenuItem = {
  name: string;
  link: string;
};

type MenuData = {
  curated: MenuItem[];
  festivals: MenuItem[];
  health: MenuItem[];
};

export default function JourneysMegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<keyof MenuData | null>(null);

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

  const categories = [
    { id: "curated", title: "Curated Journeys" },
    { id: "festivals", title: "Festivals" },
    { id: "health", title: "Health Based" }
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setActive(null);
      }}
    >
      {/* Button */}
      <button className="flex items-center text-[0.8rem] text-white/90 hover:text-white transition">
        Journeys
        <ChevronDown size={14} className="ml-1 opacity-60" />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 mt-3 bg-[#A38664]/80 backdrop-blur-sm rounded-md"
          >
            <div className="flex text-[0.8rem] text-white">

              {/* LEFT - Categories */}
              <div className="flex flex-col py-5 px-6 space-y-2 min-w-[180px]">
                {categories.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActive(item.id as keyof MenuData)}
                    className={`cursor-pointer transition ${
                      active === item.id
                        ? "opacity-100"
                        : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    {item.title}
                  </div>
                ))}
              </div>

              {/* RIGHT - ONLY WHEN ACTIVE */}
              <AnimatePresence>
                {active && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="py-5 pr-6 pl-2 space-y-2 min-w-[220px]"
                  >
                    {data[active].map((item, i) => (
                      <Link
                        key={i}
                        href={item.link}
                        className="block transition hover:opacity-80"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}