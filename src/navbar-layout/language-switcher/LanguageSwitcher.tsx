"use client";

import {
  useState,
  useEffect,
  useRef,
} from "react";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  DEFAULT_LANGUAGE,
  ANIMATION_CONFIGS,
} from "./config/constants";

import {
  Language,
  LanguageSwitcherProps,
} from "./config/types";

import {
  getButtonClassName,
  getLanguageTextClassName,
} from "./helpers/utils";

import ChevronIcon from "./ui/ChevronIcon";
import Dropdown from "./ui/Dropdown";
import DropdownHeader from "./ui/DropdownHeader";
import LanguageOptions from "./sections/LanguageOptions";

export default function LanguageSwitcher({
  scrolled,
}: LanguageSwitcherProps) {

  const [open, setOpen] =
    useState<boolean>(false);

  const [selectedLang, setSelectedLang] =
    useState<Language>(DEFAULT_LANGUAGE);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  // ==========================================================================
  // EFFECTS
  // ==========================================================================

  useEffect(() => {

    const handleClickOutside = (
      event: MouseEvent
    ) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  useEffect(() => {

    const handleEscape = (
      event: KeyboardEvent
    ) => {

      if (
        event.key === "Escape" &&
        open
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      document.removeEventListener(
        "keydown",
        handleEscape
      );

  }, [open]);

  // ==========================================================================
  // HANDLERS
  // ==========================================================================

  const changeLanguage = (
    lang: Language
  ) => {

    setSelectedLang(lang);

    setOpen(false);

    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (select) {
      select.value = lang.code;

      select.dispatchEvent(
        new Event("change")
      );
    }
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  // ==========================================================================
  // RENDER
  // ==========================================================================

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >

      {/* Button */}
      <motion.button
        onClick={toggleDropdown}
        whileTap={{ scale: 0.97 }}
        className={getButtonClassName(
          scrolled
        )}
      >
        {/* Flag */}
        <div className="relative">
          <div
            className="
              absolute inset-0 rounded-full
              bg-current opacity-0
              group-hover:opacity-10
              transition-opacity duration-300
            "
          />

          <Image
            src={selectedLang.flag}
            alt={selectedLang.name}
            width={22}
            height={22}
            className="
              rounded-full ring-2
              ring-white/10 object-cover
            "
            priority
          />
        </div>

        {/* Text */}
        <span
          className={getLanguageTextClassName(
            scrolled
          )}
        >
          {selectedLang.code.toUpperCase()}
        </span>

        {/* Chevron */}
        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={
            ANIMATION_CONFIGS.CHEVRON
          }
        >
          <ChevronIcon
            scrolled={scrolled}
          />
        </motion.div>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={closeDropdown}
            />

            <Dropdown scrolled={scrolled}>
              <DropdownHeader
                scrolled={scrolled}
              />

              <LanguageOptions
                selectedLang={selectedLang}
                changeLanguage={changeLanguage}
                scrolled={scrolled}
              />
            </Dropdown>
          </>
        )}
      </AnimatePresence>

      {/* Hidden Google Translate */}
      <div
        id="google_translate_element"
        className="hidden"
      />
    </div>
  );
}