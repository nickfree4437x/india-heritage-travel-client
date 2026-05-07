"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import JourneysMegaMenu from "./nav/JourneysMegaMenu";
import LanguageSwitcher from "./nav/LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  // SCROLL EFFECT
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
  const handleScroll = (sectionId: string) => {
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
      {/* HEADER with overflow-visible */}
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[#C2A985]/95 backdrop-blur-md shadow-sm"
            : "bg-gradient-to-b from-black/30 to-transparent"
        }`}
        style={{ zIndex: 9999, overflow: "visible" }}
      >
        <div className="w-full px-4 sm:px-6 md:px-8" style={{ overflow: "visible" }}>
          <div className="w-full" style={{ overflow: "visible" }}>
            <div
              className={`
                flex items-center justify-between 
                transition-all duration-500 ease-out
                ${
                  scrolled
                    ? "h-[60px] md:h-[65px] lg:h-[70px]"
                    : "h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px]"
                }
              `}
              style={{ overflow: "visible" }}
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
                      ${
                        scrolled
                          ? "w-[90px] sm:w-[110px] md:w-[120px]"
                          : "w-[110px] sm:w-[130px] md:w-[150px] lg:w-[160px]"
                      }
                    `}
                    priority
                  />
                </Link>
              </div>

              {/* CENTER - DESKTOP NAVIGATION */}
              <nav 
                className="hidden lg:flex items-center gap-1 xl:gap-2 ml-6 xl:ml-10"
                style={{ overflow: "visible" }}
              >
                {/* Journeys Mega Menu wrapper */}
                <div
                  className="relative px-3 py-1.5 backdrop-blur-md text-white bg-white/10 hover:bg-white/20 transition-all duration-300"
                  style={{
                    borderRadius: "9999px",
                    overflow: "visible",
                    zIndex: 99999
                  }}
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
                        px-3 xl:px-4 rounded-full font-[300] tracking-[0.1em] whitespace-nowrap
                        transition-all duration-300
                        ${
                          scrolled
                            ? "py-1 xl:py-2.5 text-[12px] xl:text-[11px] text-white hover:bg-black/10"
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
                    rounded-lg whitespace-nowrap border border-white/20
                    font-extralight tracking-[0.15em]
                    transition-all duration-300
                    ${
                      scrolled
                        ? "px-4 xl:px-5 py-2 xl:py-2.5 text-[10px] xl:text-[11px] bg-white text-black hover:bg-white/90"
                        : "px-4 xl:px-6 py-2 xl:py-3 text-[10px] xl:text-[11px] bg-transparent text-white hover:bg-white/10 backdrop-blur-md"
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

      {/* MOBILE MENU COMPONENT */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        scrolled={scrolled}
        handleScroll={handleScroll}
      />
    </>
  );
}