"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import JourneysMegaMenu from "./nav/JourneysMegaMenu";
import LanguageSwitcher from "./nav/LanguageSwitcher";

type NavLink = {
  name: string;
  href: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Rent a Car", href: "/rent-car" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[80px]">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={scrolled ? "/logo-dark.png" : "/logos/logo-white.png"}
              alt="India Heritage"
              width={170}
              height={45}
              priority
              className="object-contain transition duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">

            <JourneysMegaMenu scrolled={scrolled} />

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[15px] font-medium transition ${
                  scrolled
                    ? "text-gray-800"
                    : "text-white"
                }`}
              >
                <span className="hover:text-[#A07008] transition">
                  {link.name}
                </span>

                {/* underline hover effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A07008] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">

            <button className="bg-[#A07008] text-white px-6 py-2.5 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition duration-300">
              Customize Journey
            </button>

            <LanguageSwitcher />

          </div>

          {/* Mobile Button */}
          <button
            className={`md:hidden transition ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        } bg-white`}
      >
        <div className="flex flex-col items-center gap-6 py-8">

          <Link href="/journeys" onClick={() => setIsOpen(false)}>
            Journeys
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-[#A07008] transition"
            >
              {link.name}
            </Link>
          ))}

          <button className="bg-[#A07008] text-white px-6 py-2 rounded-lg hover:bg-[#8a5f06] transition">
            Customize Journey
          </button>

        </div>
      </div>
    </header>
  );
}