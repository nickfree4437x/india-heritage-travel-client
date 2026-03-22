"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import JourneysMegaMenu from "./nav/JourneysMegaMenu";
import DestinationsMegaMenu from "./nav/DestinationsMegaMenu";
import LanguageSwitcher from "./nav/LanguageSwitcher";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Rent a Car", href: "/rent-car" },
  ];

  return (

    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-[75px] leading-none">

          {/* Logo */}

          <Link href="/" className="flex items-center">

            <Image
              src={scrolled ? "/logo-dark.png" : "/logos/logo-white.png"}
              alt="India Heritage"
              width={170}
              height={45}
              priority
              className="transition-all duration-300 object-contain"
            />

          </Link>


          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-10">

            <JourneysMegaMenu scrolled={scrolled} />

            <DestinationsMegaMenu scrolled={scrolled} />

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition ${
                  scrolled
                    ? "text-gray-800 hover:text-orange-500"
                    : "text-white hover:text-orange-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

          </nav>


          {/* Right Section */}

          <div className="hidden md:flex items-center gap-4">

            <button className="bg-orange-500 text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition shadow-md hover:scale-105">
              Customize Journey
            </button>

            <LanguageSwitcher />

          </div>


          {/* Mobile Menu Button */}

          <button
            className={`md:hidden ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}

      {isOpen && (

        <div className="md:hidden bg-white shadow-lg">

          <div className="flex flex-col items-center gap-6 py-8">

            <Link href="/journeys" onClick={() => setIsOpen(false)}>
              Journeys
            </Link>

            <Link href="/destinations" onClick={() => setIsOpen(false)}>
              Destinations
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
              Customize Journey
            </button>

          </div>

        </div>

      )}

    </header>

  );
}