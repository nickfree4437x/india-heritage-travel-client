"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { journeysData, journeyCategories } from "./data/journeysData";

type MenuData = typeof journeysData;

export default function JourneysMegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<keyof MenuData | null>(null);

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
            className="absolute left-0 mt-3 bg-[#A38664]/90 backdrop-blur-md rounded-md shadow-lg"
          >
            <div className="flex text-[0.8rem] text-white">

              {/* LEFT */}
              <div className="flex flex-col py-5 px-6 space-y-2 min-w-[180px]">
                {journeyCategories.map((item) => (
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

              {/* RIGHT */}
              <AnimatePresence>
                {active && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="py-5 pr-6 pl-2 space-y-2 min-w-[220px]"
                  >
                    {journeysData[active].map((item, i) => (
                      <Link key={i} href={item.link} className="block hover:opacity-80">
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