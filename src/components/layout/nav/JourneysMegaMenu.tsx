"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Map, Heart, Users, Calendar } from "lucide-react";
import { createPortal } from "react-dom";

import { journeysData, journeyCategories } from "./data/journeysData";

type MenuData = typeof journeysData;

const categoryIcons: Record<string, any> = {
  curated: Sparkles,
  destinations: Map,
  themes: Heart,
  groups: Users,
  seasons: Calendar,
};

export default function JourneysMegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<keyof MenuData | null>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    updatePosition();
    setOpen(true);
    setActive("curated");
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node;
    if (menuRef.current?.contains(relatedTarget)) return;

    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      setActive(null);
    }, 200);
  };

  const handleMenuMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node;
    if (triggerRef.current?.contains(relatedTarget)) return;

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
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const dropdownContent = (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          onMouseLeave={handleMenuMouseLeave}
          style={{
            position: "fixed",
            top: dropdownPos.top,
            left: dropdownPos.left,
            zIndex: 9999999,
          }}
        >
          <div className="flex bg-[#A38664] border border-white/20 rounded-xl shadow-2xl overflow-hidden">
            
            {/* LEFT PANEL */}
            <div className="w-44 flex-shrink-0 py-3">
              <div className="space-y-0.5 px-2">
                {journeyCategories.map((item) => {
                  const isActive = active === item.id;
                  const IconComponent = categoryIcons[item.id] || Map;
                  
                  return (
                    <motion.div
                      key={item.id}
                      onMouseEnter={() => setActive(item.id as keyof MenuData)}
                      className={`
                        relative cursor-pointer rounded-lg transition-all duration-300
                        ${isActive 
                          ? "bg-white/15" 
                          : "hover:bg-white/8"
                        }
                      `}
                    >
                      <div className="flex items-center gap-2.5 px-3 py-2.5">
                        <IconComponent 
                          size={14} 
                          strokeWidth={1.5}
                          className={`transition-colors duration-300 flex-shrink-0 ${
                            isActive ? "text-white" : "text-white/60"
                          }`}
                        />
                        <span className={`text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors duration-300 ${
                          isActive ? "text-white" : "text-white/80"
                        }`}>
                          {item.title}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-60 flex-shrink-0 bg-black/10 py-3">
              <AnimatePresence mode="wait">
                {active && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ 
                      duration: 0.35, 
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="px-3 space-y-0.5"
                  >
                    <div className="px-2 pb-3 mb-2 border-b border-white/15">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
                        {journeyCategories.find(c => c.id === active)?.title}
                      </p>
                    </div>

                    {journeysData[active].map((item, idx) => {
                      const content = (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: idx * 0.04,
                            duration: 0.3,
                            ease: [0.25, 0.1, 0.25, 1]
                          }}
                          className="group/item rounded-lg transition-all duration-300 hover:bg-white/10"
                        >
                          <div className="flex items-center gap-2.5 px-2 py-2 cursor-pointer">
                            <span className="w-1 h-1 rounded-full bg-white/40 group-hover/item:bg-white/90 transition-all duration-300 flex-shrink-0"/>
                            <span className="text-[11px] tracking-wide whitespace-nowrap text-white/70 group-hover/item:text-white transition-all duration-300">
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
        transition-all duration-300
      ">
        <span>Journeys</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </button>

      {isMounted && createPortal(dropdownContent, document.body)}
    </div>
  );
}