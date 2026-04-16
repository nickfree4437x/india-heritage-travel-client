"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Accordion({ items, open, toggle, section }: any) {
  return (
    <div className="space-y-4">
      {items.map((item: any, i: number) => (
        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">

          <button
            onClick={() => toggle(section, i)}
            className="w-full flex justify-between items-center px-5 py-4 text-left font-medium hover:bg-gray-50 transition"
          >
            {item.title}
            <ChevronDown
              className={`transition-transform duration-300 ${
                open[section] === i ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {open[section] === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="px-5 pb-5"
              >
                {item.link ? (
                  <Link href={item.link}>
                    <div className="relative h-[200px] rounded-lg overflow-hidden mb-3 cursor-pointer">
                      
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition duration-300"
                      />

                      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold pointer-events-none">
                        {item.days}
                      </div>

                      <div className="absolute bottom-3 right-4 text-white underline text-sm pointer-events-none">
                        See Itinerary
                      </div>

                    </div>
                  </Link>
                ) : (
                  <div className="relative h-[200px] rounded-lg overflow-hidden mb-3">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center text-white font-semibold pointer-events-none">
                      {item.days}
                    </div>

                    <div className="absolute bottom-3 right-4 text-white underline text-sm pointer-events-none">
                      See Itinerary
                    </div>
                  </div>
                )}

                <p className="text-sm text-gray-700">{item.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      ))}
    </div>
  );
}