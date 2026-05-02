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

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
    setActive("curated");
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node;
    
    // Check if moving to dropdown menu
    if (menuRef.current && menuRef.current.contains(relatedTarget)) {
      return;
    }
    
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      setActive(null);
    }, 200);
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMenuMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node;
    
    // Check if moving back to trigger
    if (triggerRef.current && triggerRef.current.contains(relatedTarget)) {
      return;
    }
    
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      setActive(null);
    }, 200);
  };

  const handleScroll = (sectionId: string) => {
    if (!sectionId) return;

    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div 
      ref={triggerRef}
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: 99999 }} // SUPER HIGH Z-INDEX
    >
      {/* Trigger Button */}
      <button className="group flex items-center gap-1.5 px-3 py-1.5 text-[11px] xl:text-[12px] font-[400] tracking-[0.1em] text-white/90 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10">
        Journeys
        <ChevronDown
          size={14}
          className={`transition-all duration-300 ${
            open ? "rotate-180 opacity-100" : "opacity-60 group-hover:opacity-100"
          }`}
        />
      </button>

      {/* Dropdown Menu - FIXED VISIBILITY */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
            style={{
              position: "absolute",
              left: 0,
              top: "100%",
              marginTop: "8px",
              backgroundColor: "#A38664",
              minWidth: "420px",
              borderRadius: "12px",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              zIndex: 999999, // HIGHEST Z-INDEX
              overflow: "visible", // Ensure no clipping
            }}
          >
            <div className="flex" style={{ overflow: "visible" }}>
              
              {/* LEFT PANEL */}
              <div 
                className="border-r border-white/15" 
                style={{ minWidth: "140px", overflow: "visible" }}
              >
                <div className="py-2">
                  {journeyCategories.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setActive(item.id as keyof MenuData)}
                        className="relative cursor-pointer"
                        style={{ overflow: "visible" }}
                      >
                        <div
                          className={`
                            px-5 py-2.5 transition-all duration-300
                            ${isActive ? "bg-black/30" : "hover:bg-black/20"}
                          `}
                        >
                          <span
                            className={`text-[12px] font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                              isActive ? "text-white" : "text-white/80 hover:text-white"
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
              <div style={{ minWidth: "220px", overflow: "visible" }}>
                <div className="py-2">
                  <AnimatePresence mode="wait">
                    {active && (
                      <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        style={{ overflow: "visible" }}
                      >
                        {journeysData[active].map((item, idx) => {
                          if (active === "curated") {
                            return (
                              <motion.button
                                key={idx}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.02, duration: 0.15 }}
                                onClick={() => {
                                  if ("sectionId" in item) {
                                    handleScroll(item.sectionId);
                                  }
                                }}
                                className="group w-full text-left transition-all duration-300 hover:bg-black/20"
                                style={{ overflow: "visible" }}
                              >
                                <div className="px-5 py-2">
                                  <span className="text-[12px] font-normal tracking-wide whitespace-nowrap text-white/80 group-hover:text-white transition-all duration-300">
                                    {item.name}
                                  </span>
                                </div>
                              </motion.button>
                            );
                          }
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.02, duration: 0.15 }}
                              style={{ overflow: "visible" }}
                            >
                              <Link
                                href={item.link}
                                onClick={() => setOpen(false)}
                                className="group block transition-all duration-300 hover:bg-black/20"
                              >
                                <div className="px-5 py-2">
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