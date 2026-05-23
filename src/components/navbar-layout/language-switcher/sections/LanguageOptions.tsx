"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  ANIMATION_CONFIGS,
  LANGUAGES,
} from "../config/constants";

import { Language } from "../config/types";

import {
  getHoverBackground,
  getLanguageButtonClassName,
  getLanguageNameClassName,
} from "../helpers/utils";

import CheckmarkIcon from "../ui/CheckmarkIcon";

type Props = {
  selectedLang: Language;
  changeLanguage: (lang: Language) => void;
  scrolled?: boolean;
};

export default function LanguageOptions({
  selectedLang,
  changeLanguage,
  scrolled,
}: Props) {
  return (
    <div className="py-1">
      {LANGUAGES.map((lang, index) => {

        const isSelected =
          selectedLang.code === lang.code;

        return (
          <motion.button
            key={lang.code}
            onClick={() => changeLanguage(lang)}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay:
                index *
                ANIMATION_CONFIGS.DROPDOWN_ITEM_DELAY,
              duration: 0.2,
            }}
            whileHover={{
              backgroundColor:
                getHoverBackground(scrolled),
              x: 5,
            }}
            whileTap={{ scale: 0.98 }}
            className={getLanguageButtonClassName(
              isSelected
            )}
          >
            {/* Flag */}
            <div className="relative">
              <Image
                src={lang.flag}
                alt={lang.name}
                width={28}
                height={28}
                className="
                  rounded-full ring-2 ring-white/20
                  object-cover
                "
              />

              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="
                    absolute -top-1 right-1
                    w-2 h-2 bg-green-500
                    rounded-full ring-2 ring-white
                  "
                />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 text-left">
              <div
                className={`
                  text-sm
                  ${getLanguageNameClassName(scrolled)}
                `}
              >
                {lang.name}
              </div>

              <div className="text-xs text-gray-400">
                {lang.nativeName}
              </div>
            </div>

            {/* Checkmark */}
            {isSelected && (
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -180,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={
                  ANIMATION_CONFIGS.CHECKMARK
                }
              >
                <CheckmarkIcon />
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}