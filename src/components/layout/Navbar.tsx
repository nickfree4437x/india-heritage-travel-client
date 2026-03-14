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
      if (window.scrollY > 50) setScrolled(true);
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
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link href="/">
            <Image
              src="/logo.png"
              alt="India Heritage"
              width={150}
              height={40}
              priority
            />
          </Link>


          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-8">

            <JourneysMegaMenu scrolled={scrolled} />

            <DestinationsMegaMenu scrolled={scrolled} />

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white hover:text-orange-400"
                }`}
              >
                {link.name}
              </Link>
            ))}

          </nav>


          {/* Right Section */}

          <div className="hidden md:flex items-center gap-4">

            <button className="bg-orange-500 text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition">
              Customize Your Journey
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
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}

      {isOpen && (

        <div className="md:hidden bg-white shadow-lg">

          <div className="flex flex-col items-center gap-6 py-8">

            <Link href="/journeys">Journeys</Link>
            <Link href="/destinations">Destinations</Link>

            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}

            <button className="bg-orange-500 text-white px-6 py-2 rounded-full">
              Customize Your Journey
            </button>

          </div>

        </div>

      )}

    </header>
  );
}