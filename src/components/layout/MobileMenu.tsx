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
  handleScrollToSection: (sectionId: string) => void;
}

export default function MobileMenu({ isOpen, onClose, scrolled, handleScrollToSection }: MobileMenuProps) {
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
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            style={{ zIndex: 45 }}
          />

          {/* Sidebar Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
            style={{ zIndex: 50 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close Menu"
              >
                <X size={20} className="text-gray-700" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5">
              <div className="space-y-6">
                {/* Journeys Mobile Accordion */}
                <div>
                  <button
                    onClick={() => setJourneyOpen(!journeyOpen)}
                    className="flex justify-between items-center w-full text-base font-semibold text-gray-800 py-2 hover:text-[#C2A985] transition-colors"
                  >
                    Journeys
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        journeyOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {journeyOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 space-y-4 overflow-hidden"
                      >
                        {journeyCategories.map((cat) => {
                          const items = journeysData[cat.id as keyof typeof journeysData];

                          return (
                            <div key={cat.id}>
                              <p className="text-[#C2A985] text-xs font-semibold uppercase tracking-wider mb-2">
                                {cat.title}
                              </p>
                              <div className="ml-2 space-y-1.5">
                                {items.map((item, idx) => {
                                  if (cat.id === "curated") {
                                    return (
                                      <button
                                        key={idx}
                                        onClick={() => {
                                          if ("sectionId" in item) {
                                            handleScrollToSection(item.sectionId);
                                          }
                                          onClose();
                                          setJourneyOpen(false);
                                        }}
                                        className="block w-full text-left text-sm text-gray-600 hover:text-[#C2A985] transition-colors py-1"
                                      >
                                        {item.name}
                                      </button>
                                    );
                                  }

                                  return (
                                    <Link
                                      key={idx}
                                      href={item.link}
                                      onClick={() => {
                                        onClose();
                                        setJourneyOpen(false);
                                      }}
                                      className="block text-sm text-gray-600 hover:text-[#C2A985] transition-colors py-1"
                                    >
                                      {item.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Regular Nav Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={onClose}
                        className={`block py-2.5 text-base transition-colors ${
                          isActive
                            ? "text-[#C2A985] font-semibold"
                            : "text-gray-700 hover:text-[#C2A985]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="w-full bg-[#C2A985] text-white py-3 rounded-xl font-semibold hover:bg-[#b0906a] transition-all duration-300 active:scale-95"
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