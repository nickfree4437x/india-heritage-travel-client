"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import MobileMenu from "../mobile-menu/MobileMenu";

import Logo from "./shared/Logo";
import DesktopNav from "./desktop/DesktopNav";
import DesktopActions from "./desktop/DesktopActions";
import MobileControls from "./mobile/MobileControls";

import {
  SCROLL_THRESHOLD,
  SCROLL_OFFSET_DEFAULT,
  SCROLL_OFFSET_SCROLLED,
} from "./config/constants";

import {
  getHeaderClassName,
  getLogoSizeClass,
  getNavLinkClasses,
  getJourneysMegaMenuClasses,
  getCustomizeButtonClasses,
  getContainerHeightClass,
} from "./config/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const pathname = usePathname();

  // ==========================================================================
  // EFFECTS
  // ==========================================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () =>
      window.removeEventListener("keydown", handleEscape);
  }, []);

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

  // ==========================================================================
  // HANDLERS
  // ==========================================================================

  const handleScroll = (sectionId: string) => {
    if (!sectionId) return;

    if (pathname === "/") {
      const element = document.getElementById(sectionId);

      if (element) {
        const offset = scrolled
          ? SCROLL_OFFSET_SCROLLED
          : SCROLL_OFFSET_DEFAULT;

        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  // ==========================================================================
  // RENDER
  // ==========================================================================

  return (
    <>
      <header
        className={getHeaderClassName(scrolled)}
        style={{ zIndex: 9999, overflow: "visible" }}
      >
        <div
          className="w-full px-4 sm:px-6 md:px-8"
          style={{ overflow: "visible" }}
        >
          <div
            className="w-full"
            style={{ overflow: "visible" }}
          >
            <div
              className={`
                flex items-center justify-between
                transition-all duration-500 ease-out
                ${getContainerHeightClass(scrolled)}
              `}
              style={{ overflow: "visible" }}
            >
              <Logo
                scrolled={scrolled}
                getLogoSizeClass={getLogoSizeClass}
              />

              <DesktopNav
                pathname={pathname}
                scrolled={scrolled}
                getNavLinkClasses={getNavLinkClasses}
                getJourneysMegaMenuClasses={
                  getJourneysMegaMenuClasses
                }
              />

              <DesktopActions
                scrolled={scrolled}
                getCustomizeButtonClasses={
                  getCustomizeButtonClasses
                }
              />

              <MobileControls
                scrolled={scrolled}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        scrolled={scrolled}
        handleScroll={handleScroll}
      />
    </>
  );
}