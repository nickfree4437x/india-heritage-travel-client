import { Language } from "./types";

export const LANGUAGES: Language[] = [
  {
    code: "en",
    flag: "/flags/uk.png",
    name: "English",
    nativeName: "English",
  },

  {
    code: "es",
    flag: "/flags/spain.png",
    name: "Spanish",
    nativeName: "Español",
  },

  {
    code: "it",
    flag: "/flags/italy.png",
    name: "Italian",
    nativeName: "Italiano",
  },

  {
    code: "pt",
    flag: "/flags/portugal.png",
    name: "Portuguese",
    nativeName: "Português",
  },
];

export const DEFAULT_LANGUAGE: Language = {
  code: "en",
  flag: "/flags/uk.png",
  name: "English",
  nativeName: "English",
};

export const ANIMATION_CONFIGS = {
  SPRING: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  },

  CHECKMARK: {
    type: "spring" as const,
    stiffness: 500,
    damping: 30,
  },

  CHEVRON: {
    duration: 0.2,
    ease: "easeInOut" as const,
  },

  DROPDOWN_ITEM_DELAY: 0.03,
};