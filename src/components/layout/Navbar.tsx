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
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    { name: "Rent a Car", href: "/rent-car" },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition ${
      scrolled ? "bg-[#C2A985] shadow-md" : "bg-transparent"
    }`}>
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

          {/* Desktop */}
          <nav className="hidden md:flex gap-8 text-white text-sm">
            <JourneysMegaMenu />
            {navLinks.map((l) => (
              <Link key={l.name} href={l.href}>
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <button className="border px-4 py-1 rounded-full text-white text-xs">
              Customize Journey
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="md:hidden bg-white px-6 py-6 space-y-4">

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
                    
                    // ✅ FIX: safe typing
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

            {/* Other links */}
            {navLinks.map((l) => (
              <Link key={l.name} href={l.href}>
                {l.name}
              </Link>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}