"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { journeysData, journeyCategories } from "./data/journeysData";

type MenuData = typeof journeysData;

export default function JourneysMegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<keyof MenuData | null>(null);

  // ✅ TSX SAFE REF
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  //////////////////////////////////////
  // MOUSE HANDLERS
  //////////////////////////////////////
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
    setActive("curated");
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      setActive(null);
    }, 200);
  };

  //////////////////////////////////////
  // SCROLL HANDLER (ONLY FOR CURATED)
  //////////////////////////////////////
  const handleScroll = (sectionId: string) => {
    if (!sectionId) return;

    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      router.push(`/#${sectionId}`);
    }

    setOpen(false);
  };

  //////////////////////////////////////
  // CLEANUP
  //////////////////////////////////////
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  //////////////////////////////////////
  // RENDER
  //////////////////////////////////////
  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button className="group flex items-center gap-1.5 px-2 py-1 text-sm font-[300] tracking-[0.14em] text-white/80 hover:text-white transition-all duration-300">
        Journeys
        <ChevronDown
          size={14}
          className={`transition-all duration-300 ${
            open
              ? "rotate-180 opacity-100"
              : "opacity-60 group-hover:opacity-100"
          }`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.3,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="absolute left-0 mt-3 rounded-sm shadow-xl border border-white/15 overflow-hidden"
            style={{
              backgroundColor: "#A38664",
            }}
          >
            <div className="flex">
              
              {/* LEFT PANEL */}
              <div className="border-r border-white/15">
                <div className="py-1">
                  {journeyCategories.map((item) => {
                    const isActive = active === item.id;

                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() =>
                          setActive(item.id as keyof MenuData)
                        }
                        className="relative cursor-pointer"
                      >
                        <div
                          className={`
                            px-4 py-1.5 transition-all duration-300
                            ${
                              isActive
                                ? "bg-black/30"
                                : "hover:bg-black/20"
                            }
                          `}
                        >
                          <span
                            className={`text-[12px] font-normal tracking-wide whitespace-nowrap transition-all duration-300 ${
                              isActive
                                ? "text-white"
                                : "text-white/80 hover:text-white"
                            }`}
                          >
                            {item.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="min-w-[200px]">
                <div className="py-1">
                  <AnimatePresence mode="wait">
                    {active && (
                      <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {journeysData[active].map((item, idx) => {

                          //////////////////////////////////////
                          // ✅ ONLY CURATED → SCROLL
                          //////////////////////////////////////
                          if (active === "curated") {
                            return (
                              <motion.button
                                key={idx}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: idx * 0.02,
                                  duration: 0.2,
                                }}
                                onClick={() => {
                                  if ("sectionId" in item) {
                                    handleScroll(item.sectionId);
                                  }
                                }}
                                className="group w-full text-left transition-all duration-300 hover:bg-black/20"
                              >
                                <div className="px-4 py-1.5">
                                  <span className="text-[12px] font-normal tracking-wide whitespace-nowrap text-white/80 group-hover:text-white transition-all duration-300">
                                    {item.name}
                                  </span>
                                </div>
                              </motion.button>
                            );
                          }

                          //////////////////////////////////////
                          // ✅ FESTIVALS + HEALTH → LINK
                          //////////////////////////////////////
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: idx * 0.02,
                                duration: 0.2,
                              }}
                            >
                              <Link
                                href={item.link}
                                className="group block transition-all duration-300 hover:bg-black/20"
                              >
                                <div className="px-4 py-1.5">
                                  <span className="text-[12px] font-normal tracking-wide whitespace-nowrap text-white/80 group-hover:text-white transition-all duration-300">
                                    {item.name}
                                  </span>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}