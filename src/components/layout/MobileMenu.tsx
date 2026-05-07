"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { journeysData, journeyCategories } from "./nav/data/journeysData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrolled: boolean;
  handleScroll: (sectionId: string) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  scrolled,
  handleScroll,
}: MobileMenuProps) {

  const [journeyOpen, setJourneyOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const navLinks = [
    { name: "Solo Trip", href: "/solo-trip" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Rent-A-Car", href: "/rent-car" },
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            style={{ zIndex: 9998 }}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed right-0 top-0 bottom-0
              w-full sm:w-[400px]

              bg-[#fcfaf7]

              shadow-[0_10px_60px_rgba(0,0,0,0.18)]

              flex flex-col
            "
            style={{ zIndex: 9999 }}
          >

            {/* Header */}
            <div className="px-7 py-5 border-b border-[#eee7dc]">

              <div className="flex items-center justify-between">

                <div>
                  <h2
                    className="
                      text-[20px]
                      font-light
                      tracking-[0.08em]
                      text-[#2d2d2d]
                    "
                  >
                    Menu
                  </h2>

                  <p
                    className="
                      text-[10px]
                      text-[#9f978c]
                      tracking-[0.16em]
                      mt-1
                      uppercase
                    "
                  >
                    Discover your journey
                  </p>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close Menu"
                  className="
                    w-10 h-10
                    flex items-center justify-center

                    rounded-full

                    bg-white
                    border border-[#ece5da]

                    hover:bg-[#f7f2ea]

                    transition-all duration-300
                  "
                >
                  <X size={17} className="text-[#7c7468]" />
                </button>

              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-7 py-8">

              <div className="space-y-4">

                {/* Journeys */}
                <div className="space-y-4">

                  <button
                    onClick={() => setJourneyOpen(!journeyOpen)}
                    className="
                      flex justify-between items-center
                      w-full
                      group
                    "
                  >

                    <span
                      className="
                        text-[11px]
                        font-light
                        tracking-[0.14em]
                        text-[#2f2f2f]

                        group-hover:text-[#a88b63]

                        transition-all duration-300
                      "
                    >
                      Journeys
                    </span>

                    <motion.div
                      animate={{ rotate: journeyOpen ? 180 : 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <ChevronDown
                        className="
                          w-4 h-4
                          text-[#9d9487]

                          group-hover:text-[#a88b63]

                          transition-all duration-300
                        "
                      />
                    </motion.div>

                  </button>

                  <AnimatePresence>

                    {journeyOpen && (

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >

                        <div
                          className="
                            mt-2
                            space-y-4

                            border-l border-[#ece4d8]

                            pl-2
                          "
                        >

                          {journeyCategories.map((cat) => {

                            const items =
                              journeysData[
                                cat.id as keyof typeof journeysData
                              ];

                            return (

                              <div key={cat.id} className="space-y-4">

                                {/* Category Title */}
                                <p
                                  className="
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.28em]

                                    text-[#b89a74]

                                    pl-4
                                  "
                                >
                                  {cat.title}
                                </p>

                                {/* Items */}
                                <div className="space-y-1">

                                  {items.map((item, idx) => {

                                    // Curated Sections
                                    if (cat.id === "curated") {

                                      return (
                                        <button
                                          key={idx}
                                          onClick={() => {

                                            if ("sectionId" in item) {

                                              // close menu first
                                              onClose();
                                              setJourneyOpen(false);

                                              // then smooth scroll
                                              setTimeout(() => {
                                                handleScroll(item.sectionId);
                                              }, 350);
                                            }
                                          }}
                                          className="
                                            group
                                            relative

                                            w-full

                                            flex items-center justify-between

                                            px-4 py-2

                                            rounded-xl

                                            text-[10px]
                                            font-extralight
                                            tracking-[0.14em]

                                            text-[#6f6a63]

                                            hover:text-[#a88b63]
                                            hover:bg-[#f8f3eb]

                                            transition-all duration-500
                                          "
                                        >

                                          <span>{item.name}</span>

                                          <span
                                            className="
                                              opacity-0
                                              translate-x-[-6px]

                                              group-hover:opacity-100
                                              group-hover:translate-x-0

                                              text-[#a88b63]

                                              transition-all duration-300
                                            "
                                          >
                                            →
                                          </span>

                                        </button>
                                      );
                                    }

                                    // Other Links
                                    return (
                                      <Link
                                        key={idx}
                                        href={item.link}
                                        onClick={() => {

                                          setTimeout(() => {
                                            onClose();
                                            setJourneyOpen(false);
                                          }, 120);
                                        }}
                                        className="
                                          group
                                          relative

                                          flex items-center justify-between

                                          px-4 py-2

                                          rounded-xl

                                          text-[10px]
                                          font-extralight
                                          tracking-[0.14em]

                                          text-[#6f6a63]

                                          hover:text-[#a88b63]
                                          hover:bg-[#f8f3eb]

                                          transition-all duration-500
                                        "
                                      >

                                        <span>{item.name}</span>

                                        <span
                                          className="
                                            opacity-0
                                            translate-x-[-6px]

                                            group-hover:opacity-100
                                            group-hover:translate-x-0

                                            text-[#a88b63]

                                            transition-all duration-300
                                          "
                                        >
                                          →
                                        </span>

                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Regular Nav Links */}
                <div className="space-y-4">

                  {navLinks.map((link) => {

                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => {
                          setTimeout(() => onClose(), 120);
                        }}
                        className={`
                          block

                          text-[11px]
                          font-extralight
                          tracking-[0.14em]
                          transition-all duration-300

                          ${
                            isActive
                              ? "text-[#a88b63]"
                              : "text-[#5e5a54] hover:text-[#a88b63]"
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="pt-4">

                  <button
                    onClick={() => {
                      setTimeout(() => onClose(), 120);
                    }}
                    className="
                      w-full

                      rounded-xl

                      border border-[#d9c3a4]

                      bg-gradient-to-r
                      from-[#c4a57d]
                      to-[#a88b63]

                      py-4

                      text-[11px]
                      font-extralight
                      tracking-[0.22em]

                      text-white

                      hover:shadow-[0_10px_30px_rgba(168,139,99,0.28)]

                      transition-all duration-500
                    "
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
  );
}