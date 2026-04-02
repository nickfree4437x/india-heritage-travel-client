"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState({
    code: "en",
    flag: "/flags/uk.png",
  });

  const languages = [
    { code: "en", flag: "/flags/uk.png" },
    { code: "es", flag: "/flags/spain.png" },
    { code: "it", flag: "/flags/italy.png" },
    { code: "pt", flag: "/flags/portugal.png" },
  ];

  const changeLanguage = (lang: any) => {
    setSelectedLang(lang);
    setOpen(false);

    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;

    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="relative">

      {/* 🔥 BUTTON (FULL TRANSPARENT) */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/30 bg-transparent hover:border-white/60 transition-all duration-300"
      >
        <Image
          src={selectedLang.flag}
          alt="language"
          width={22}
          height={22}
          className="rounded-full"
        />

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={16} className="text-white/80" />
        </motion.div>
      </button>

      {/* 🔥 DROPDOWN (GLASS WITHOUT WHITE BG) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 mt-3 p-2 rounded-xl backdrop-blur-md border border-white/20 shadow-md flex flex-col gap-2"
          >

            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                onClick={() => changeLanguage(lang)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg transition"
              >
                <Image
                  src={lang.flag}
                  alt="language"
                  width={26}
                  height={26}
                  className="rounded-full"
                />
              </motion.button>
            ))}

          </motion.div>
        )}
      </AnimatePresence>

      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
}