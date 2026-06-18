"use client";

// ============================================================
// IMPORTS
// ============================================================
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// COMPONENT
// ============================================================
export default function Accordion({ items, open, toggle, section }: any) {
  return (
    <div className="space-y-5">
      {items.map((item: any, i: number) => {
        const isOpen = open[section] === i;

        return (
          <div
            key={i}
            className="bg-white/90 backdrop-blur-sm rounded-xl 
                       shadow-sm transition-all duration-300"
          >
            {/* ===== ACCORDION HEADER ===== */}
            <button
              onClick={() => toggle(section, i)}
              className="w-full flex justify-between items-center px-4 py-2.5 text-left"
            >
              <span className="font-medium text-[13px] text-gray-700">
                {item.title}
              </span>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* ===== ACCORDION CONTENT ===== */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="px-5 pb-5"
                >
                  {/* Image with Link (if link exists) */}
                  {item.link ? (
                    <Link href={item.link}>
                      <div className="relative h-[220px] rounded-lg overflow-hidden mb-8 cursor-pointer group">
                        <Image
                          src={item.img}
                          alt={`${item.title} | India Heritage Travel`}
                          fill
                          className="object-cover object-center 
                                     transition-transform duration-1000 
                                     group-hover:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

                        {/* Days Label */}
                        <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
                          {item.days}
                        </div>

                        {/* CTA */}
                        <div className="absolute bottom-3 right-4 text-white text-xs underline">
                          See Itinerary
                        </div>
                      </div>
                    </Link>
                  ) : (
                    // Image without Link (fallback)
                    <div className="relative h-[210px] rounded-lg overflow-hidden mb-4 group">
                      <Image
                        src={item.img}
                        alt={`${item.title} | India Heritage Travel`}
                        fill
                        className="object-cover object-center 
                                   transition-transform duration-1000 
                                   group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
                        {item.days}
                      </div>
                      <div className="absolute bottom-3 right-4 text-white text-xs underline">
                        See Itinerary
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}