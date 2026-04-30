"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import JourneysMegaMenu from "./nav/JourneysMegaMenu";
import LanguageSwitcher from "./nav/LanguageSwitcher";
import { journeysData, journeyCategories } from "./nav/data/journeysData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  //////////////////////////////////////
  // SCROLL EFFECT
  //////////////////////////////////////
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //////////////////////////////////////
  // ESC KEY CLOSE
  //////////////////////////////////////
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

  //////////////////////////////////////
  // BODY SCROLL LOCK
  //////////////////////////////////////
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  //////////////////////////////////////
  // SCROLL HANDLER (FOR CURATED)
  //////////////////////////////////////
  const handleScroll = (sectionId: string) => {
    if (!sectionId) return;

    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 80;
        const top =
          el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  //////////////////////////////////////
  // NAV LINKS
  //////////////////////////////////////
  const navLinks = [
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Rent-A-Car", href: "/rent-car" },
  ];

  //////////////////////////////////////
  // RENDER
  //////////////////////////////////////
  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#C2A985]/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-b from-black/20 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px] md:h-[80px] lg:h-[90px]">

            {/* LOGO */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logos/logo-white.png"
                alt="Logo"
                width={160}
                height={40}
                className="w-[110px] sm:w-[130px] md:w-[150px] lg:w-[160px]"
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-4">
              <JourneysMegaMenu />

              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      px-4 py-2 rounded-full text-[13px] font-[300] tracking-[0.14em]
                      transition-all duration-300
                      ${scrolled
                        ? "text-gray-800 hover:bg-black/5"
                        : "text-white hover:bg-white/10"
                      }
                      ${isActive ? "bg-white/20" : ""}
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                className={`px-5 py-2.5 rounded-xl text-[12px] ${
                  scrolled
                    ? "bg-black text-white"
                    : "bg-white text-[#C2A985]"
                }`}
              >
                Customize Journey
              </button>

              <LanguageSwitcher scrolled={scrolled} />
            </div>

            {/* MOBILE */}
            <div className="flex lg:hidden items-center gap-3">
              <LanguageSwitcher scrolled={scrolled} />

              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 overflow-y-auto"
            >
              <div className="p-6 space-y-6">

                {/* JOURNEYS */}
                <div>
                  <button
                    onClick={() => setJourneyOpen(!journeyOpen)}
                    className="flex justify-between w-full text-lg"
                  >
                    Journeys
                    <ChevronDown />
                  </button>

                  {journeyOpen && (
                    <div className="mt-4 space-y-4">
                      {journeyCategories.map((cat) => {
                        const items =
                          journeysData[
                            cat.id as keyof typeof journeysData
                          ];

                        return (
                          <div key={cat.id}>
                            <p className="text-[#C2A985]">
                              {cat.title}
                            </p>

                            <div className="ml-3 space-y-2">
                              {items.map((item, idx) => {

                                // ✅ CURATED → SCROLL (FIXED)
                                if (cat.id === "curated") {
                                  return (
                                    <button
                                      key={idx}
                                      onClick={() => {
                                        if ("sectionId" in item) {
                                          handleScroll(item.sectionId);
                                        }
                                        setIsOpen(false);
                                      }}
                                      className="block text-sm text-gray-600"
                                    >
                                      {item.name}
                                    </button>
                                  );
                                }

                                // ✅ FESTIVALS + HEALTH → LINK
                                return (
                                  <Link
                                    key={idx}
                                    href={item.link}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-sm text-gray-600"
                                  >
                                    {item.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* LINKS */}
                <div>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}