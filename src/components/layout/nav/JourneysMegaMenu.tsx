"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { createPortal } from "react-dom";

import { journeysData, journeyCategories } from "./data/journeysData";

type MenuData = typeof journeysData;

export default function JourneysMegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<keyof MenuData | null>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 12,
        left: Math.max(16, rect.left - 20),
      });
    }
  };

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }
    
    // SLOW OPEN - 200ms delay before opening
    enterTimeoutRef.current = setTimeout(() => {
      updatePosition();
      setOpen(true);
      setActive("curated");
      enterTimeoutRef.current = null;
    }, 200);
  };

  const handleMouseLeave = () => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
    
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    
    // SLOW CLOSE - 600ms delay before closing
    leaveTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setActive(null);
      leaveTimeoutRef.current = null;
    }, 600);
  };

  const handleMenuMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const handleMenuMouseLeave = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    
    // SLOW CLOSE from menu - 600ms delay
    leaveTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setActive(null);
      leaveTimeoutRef.current = null;
    }, 600);
  };

  const handleScroll = (sectionId: string) => {
    if (!sectionId) return;

    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }

    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      updatePosition();
      window.addEventListener("scroll", updatePosition, { passive: true });
      window.addEventListener("resize", updatePosition, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  const dropdownContent = (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          transition={{ 
            duration: 0.6,        // SLOWER - 600ms for open/close
            delay: 0.05,          // Small delay before animation starts
            ease: [0.22, 1, 0.36, 1],  // Smooth cubic-bezier
            scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
          style={{
            position: "fixed",
            top: dropdownPos.top,
            left: dropdownPos.left,
            zIndex: 9999999,
          }}
        >
          <div className="flex bg-[#C2A985]/95 backdrop-blur-sm rounded-sm shadow-md overflow-hidden">
            
            {/* LEFT PANEL */}
            <div className="w-48 flex-shrink-0 py-3">
              <div className="space-y-1 px-2">
                {journeyCategories.map((item) => {
                  const isActive = active === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onMouseEnter={() => setActive(item.id as keyof MenuData)}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`
                        relative w-full cursor-pointer rounded-lg transition-all duration-300 ease-out
                        ${isActive 
                          ? "bg-white/20 shadow-sm" 
                          : "hover:bg-white/10"
                        }
                      `}
                    >
                      <div className="px-4 py-2">
                        <span
                          className={`text-[11px] xl:text-[11px] font-[300] tracking-[0.1em] whitespace-nowrap  transition-all duration-300 ease-out ${
                            isActive ? "text-white" : "text-white/80"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-56 flex-shrink-0 bg-black/10 py-3">
              <AnimatePresence mode="wait">
                {active && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ 
                      duration: 0.5,      // SLOWER content transition
                      delay: 0.08,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="px-3 space-y-1"
                  >
                    <div className="px-4 pb-3 mb-2 border-b border-white/15">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                        {journeyCategories.find(c => c.id === active)?.title}
                      </p>
                    </div>

                    {journeysData[active].map((item, idx) => {
                      const content = (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.1 + idx * 0.08,  // 80ms between each item
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className="group rounded-lg transition-all duration-300 ease-out hover:bg-white/10"
                        >
                          <div className="px-4 py-2 cursor-pointer">
                            <span className="text-[11px] xl:text-[11px] text-white font-[300] tracking-[0.1em] whitespace-nowrap  transition-all duration-300 ease-out">
                              {item.name}
                            </span>
                          </div>
                        </motion.div>
                      );

                      if (active === "curated") {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              if ("sectionId" in item) handleScroll(item.sectionId);
                            }}
                            className="w-full text-left"
                          >
                            {content}
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={idx}
                          href={item.link}
                          onClick={() => setOpen(false)}
                          className="block"
                        >
                          {content}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button className="
        group flex items-center gap-1.5
        text-[11px] tracking-[0.1em]
        text-white/90 hover:text-white
        transition-all duration-300 ease-out
      ">
        <span>Journeys</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown size={13} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </button>

      {isMounted && createPortal(dropdownContent, document.body)}
    </div>
  );
}