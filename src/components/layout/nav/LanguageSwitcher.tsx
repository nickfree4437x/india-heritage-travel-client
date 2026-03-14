"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

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

  const changeLanguage = (lang:any) => {

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

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-full hover:border-orange-400"
      >

        <Image
          src={selectedLang.flag}
          alt="language"
          width={22}
          height={22}
          className="rounded-full"
        />

        <ChevronDown size={16} />

      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 flex flex-col gap-2">

          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className="hover:bg-gray-100 p-2 rounded-md"
            >
              <Image
                src={lang.flag}
                alt="language"
                width={24}
                height={24}
                className="rounded-full"
              />
            </button>
          ))}

        </div>
      )}

      <div id="google_translate_element" className="hidden"></div>

    </div>
  );
}