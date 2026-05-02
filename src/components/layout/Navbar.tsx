"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import JourneysMegaMenu from "./nav/JourneysMegaMenu";
import LanguageSwitcher from "./nav/LanguageSwitcher";
import { journeysData, journeyCategories } from "./nav/data/journeysData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [journeyOpen, setJourneyOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const pathname = usePathname();

  // SCROLL EFFECT - HEIGHT CHANGE
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC KEY CLOSE
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setJourneyOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // BODY SCROLL LOCK
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // SCROLL HANDLER
  const handleScrollToSection = (sectionId: string) => {
    if (!sectionId) return;

    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = scrolled ? 60 : 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  // NAV LINKS
  const navLinks = [
    { name: "Solo Trip", href: "/solo-trip" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Rent-A-Car", href: "/rent-car" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[#C2A985]/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-b from-black/30 to-transparent"
        }`}
        style={{ zIndex: 40 }} // Header ka z-index 40
      >
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="w-full">
            {/* DYNAMIC HEIGHT */}
            <div 
              className={`
                flex items-center justify-between 
                transition-all duration-500 ease-out
                ${scrolled 
                  ? "h-[60px] md:h-[65px] lg:h-[70px]"
                  : "h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px]"
                }
              `}
            >
              
              {/* LEFT - LOGO */}
              <div className="flex-shrink-0">
                <Link href="/" className="block">
                  <Image
                    src="/logos/logo-white.png"
                    alt="Logo"
                    width={160}
                    height={40}
                    className={`
                      h-auto object-contain transition-all duration-500 ease-out
                      ${scrolled 
                        ? "w-[90px] sm:w-[110px] md:w-[120px]"
                        : "w-[110px] sm:w-[130px] md:w-[150px] lg:w-[160px]"
                      }
                    `}
                    priority
                  />
                </Link>
              </div>

              {/* CENTER - DESKTOP NAVIGATION */}
              {/* IMPORTANT: Isme overflow-hidden mat dalna! */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 ml-6 xl:ml-10">
                {/* Journeys Mega Menu wrapper - isko overflow visible rakhna hai */}
                <div 
                  className="px-3 py-1.5 backdrop-blur-md rounded-full text-white bg-white/10 hover:bg-white/20 transition-all duration-300"
                  style={{ overflow: "visible", position: "relative", zIndex: 9999 }}
                >
                  <JourneysMegaMenu />
                </div>

                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`
                        px-3 xl:px-4 rounded-full font-[400] tracking-[0.1em] whitespace-nowrap
                        transition-all duration-300
                        ${
                          scrolled 
                            ? "py-1 xl:py-1.5 text-[11px] xl:text-[11px] text-gray-800 hover:bg-black/10" 
                            : "py-1.5 xl:py-2 text-[11px] xl:text-[12px] text-white hover:bg-white/15"
                        }
                        ${isActive ? "bg-white/20" : ""}
                      `}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* RIGHT - BUTTONS */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
                <button
                  className={`
                    rounded-xl font-semibold whitespace-nowrap transition-all duration-300
                    ${scrolled 
                      ? "px-4 xl:px-5 py-1.5 xl:py-2 text-[11px] xl:text-[11px] bg-black text-white hover:bg-black/80" 
                      : "px-4 xl:px-6 py-2 xl:py-2.5 text-[11px] xl:text-[12px] bg-white text-[#C2A985] hover:bg-white/90 hover:scale-105"
                    }
                  `}
                >
                  Customize Your Journey
                </button>
                <LanguageSwitcher scrolled={scrolled} />
              </div>

              {/* MOBILE CONTROLS */}
              <div className="flex lg:hidden items-center gap-3 flex-shrink-0">
                <LanguageSwitcher scrolled={scrolled} />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-1.5 rounded-lg transition-all duration-300 ${
                    scrolled 
                      ? "text-gray-800 hover:bg-gray-200/50" 
                      : "text-white hover:bg-white/20"
                  }`}
                  aria-label="Toggle Menu"
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              style={{ zIndex: 45 }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
              style={{ zIndex: 50 }}
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={20} className="text-gray-700" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                <div className="space-y-6">
                  
                  <div>
                    <button
                      onClick={() => setJourneyOpen(!journeyOpen)}
                      className="flex justify-between items-center w-full text-base font-semibold text-gray-800 py-2 hover:text-[#C2A985] transition-colors"
                    >
                      Journeys
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          journeyOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {journeyOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-3 space-y-4 overflow-hidden"
                        >
                          {journeyCategories.map((cat) => {
                            const items =
                              journeysData[
                                cat.id as keyof typeof journeysData
                              ];

                            return (
                              <div key={cat.id}>
                                <p className="text-[#C2A985] text-xs font-semibold uppercase tracking-wider mb-2">
                                  {cat.title}
                                </p>
                                <div className="ml-2 space-y-1.5">
                                  {items.map((item, idx) => {
                                    if (cat.id === "curated") {
                                      return (
                                        <button
                                          key={idx}
                                          onClick={() => {
                                            if ("sectionId" in item) {
                                              handleScrollToSection(item.sectionId);
                                            }
                                            setIsOpen(false);
                                          }}
                                          className="block text-sm text-gray-600 hover:text-[#C2A985] transition-colors py-1"
                                        >
                                          {item.name}
                                        </button>
                                      );
                                    }

                                    return (
                                      <Link
                                        key={idx}
                                        href={item.link}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-sm text-gray-600 hover:text-[#C2A985] transition-colors py-1"
                                      >
                                        {item.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-1">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2.5 text-base transition-colors ${
                            isActive 
                              ? "text-[#C2A985] font-semibold" 
                              : "text-gray-700 hover:text-[#C2A985]"
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-[#C2A985] text-white py-3 rounded-xl font-semibold hover:bg-[#b0906a] transition-all duration-300 active:scale-95"
                    >
                      Customize Your Journey
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}