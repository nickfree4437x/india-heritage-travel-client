"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import JourneysMegaMenu from "./nav/JourneysMegaMenu";
import LanguageSwitcher from "./nav/LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  const navItemClass =
    "text-[0.8rem] font-light tracking-wide text-white hover:underline transition";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // 🔥 ultra smooth easing
      }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#CBB299] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[80px]">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo-white.png"
                alt="India Heritage"
                width={170}
                height={45}
                priority
                className="object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 font-sans">

            <div className="group relative">
              <JourneysMegaMenu />
            </div>

            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15, // 🔥 slower stagger
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link href={link.href} className="group relative">
                    <span
                      className={`${navItemClass} ${
                        isActive
                          ? "opacity-100"
                          : "opacity-90 group-hover:opacity-100"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Right Section */}
          <motion.div
            className="hidden md:flex items-center gap-4 font-sans"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="bg-transparent text-white text-[0.8rem] font-light tracking-wide px-5 py-2 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            >
              Customize Journey
            </motion.button>

            <LanguageSwitcher />
          </motion.div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="flex flex-col items-center gap-6 py-10 font-sans">

              <Link
                href="/journeys"
                onClick={() => setIsOpen(false)}
                className="text-[0.9rem] font-light text-gray-700 hover:text-[#A07008] transition"
              >
                Journeys
              </Link>

              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-[0.9rem] font-light transition ${
                      isActive
                        ? "text-[#A07008]"
                        : "text-gray-700 hover:text-[#A07008]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <button className="bg-white text-gray-700 text-[0.8rem] px-5 py-2 rounded-full hover:opacity-90 transition">
                Customize Journey
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}