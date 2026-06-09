import { Language } from "./types";

export const LANGUAGES: Language[] = [
  {
    code: "en",
    flag: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779551042/uk_qt8urt.png",
    name: "English",
    nativeName: "English",
  },

  {
    code: "es",
    flag: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779551105/spain_zfb2ki.png",
    name: "Spanish",
    nativeName: "Español",
  },

  {
    code: "it",
    flag: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779551147/italy_xgm2xj.png",
    name: "Italian",
    nativeName: "Italiano",
  },

  {
    code: "pt",
    flag: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779551193/portugal_rxp1b5.png",
    name: "Portuguese",
    nativeName: "Português",
  },
];

export const DEFAULT_LANGUAGE: Language = {
  code: "en",
  flag: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779551042/uk_qt8urt.png",
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