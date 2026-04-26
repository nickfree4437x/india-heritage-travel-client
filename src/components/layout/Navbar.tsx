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
  const [isOpen, setIsOpen] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Reviews", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    { name: "Rent-A-Car", href: "/rent-car" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#C2A985]/90 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[70px] md:h-[80px]">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logos/logo-white.png"
              alt="logo"
              width={160}
              height={40}
              className="w-[130px] sm:w-[150px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-4 text-[13px] font-[300] tracking-[0.14em]"
            style={{ fontFamily: "var(--font-inter)" }}
          >

            {/* Journeys (Active Default + Scroll Change) */}
            <div
              className={`px-4 py-2.5 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-white text-black [&_*]:text-black hover:bg-white [&_*:hover]:text-black"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              <JourneysMegaMenu />
            </div>

            {/* Other Links */}
            {navLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className={`px-4 py-2.5 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-black hover:bg-white/20"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

            <button
              style={{ fontFamily: "var(--font-inter)" }}
              className={`px-6 py-2.5 rounded-2xl text-[12px] font-[300] tracking-[0.08em]
              border transition-all duration-300 ease-out ${
                scrolled
                  ? "bg-white text-black border-white hover:bg-white/90"
                  : "bg-transparent text-white border-white/20 hover:bg-white hover:text-black"
              }`}
            >
              Customize Journey
            </button>

            {/* ✅ FIX */}
            <LanguageSwitcher scrolled={scrolled} />
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            {/* ✅ FIX */}
            <LanguageSwitcher scrolled={scrolled} />

            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? "text-black" : "text-white"}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white px-6 py-6 space-y-4"
          >

            {/* Journeys */}
            <div>
              <button
                onClick={() => setJourneyOpen(!journeyOpen)}
                className="flex justify-between w-full"
              >
                Journeys <ChevronDown />
              </button>

              {journeyOpen && (
                <div className="mt-3 space-y-4">
                  {journeyCategories.map((cat) => {
                    const items =
                      journeysData[cat.id as keyof typeof journeysData] || [];

                    return (
                      <div key={cat.id}>
                        <p className="font-medium">{cat.title}</p>

                        {items.map((item, i) => (
                          <Link
                            key={i}
                            href={item.link}
                            className="block text-sm text-gray-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Links */}
            {navLinks.map((l) => (
              <Link key={l.name} href={l.href} className="block font-medium">
                {l.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}