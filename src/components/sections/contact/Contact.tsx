"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// ✅ TYPE DEFINE
type CountryAPI = {
  name?: {
    common?: string;
  };
  flags?: {
    png?: string;
  };
};

type Country = {
  name: string;
  flag: string;
};

export default function ContactSection() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  // 🔥 FETCH COUNTRIES
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags"
        );
        const data: CountryAPI[] = await res.json();

        const cleaned: Country[] = data
          .filter((c) => c?.name?.common && c?.flags?.png)
          .map((c) => ({
            name: c.name!.common!,
            flag: c.flags!.png!,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(cleaned);
      } catch (err) {
        console.error("Country fetch error:", err);
      }
    };

    fetchCountries();
  }, []);

  // 🔥 FILTER
  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative mt-16 min-h-[100vh] py-10 px-6 text-white overflow-hidden">

      {/* Background Wrapper */}
      <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
  <Image
    src="/contact/contact1.jpeg"
    alt="Contact Background"
    fill
    priority
    className="
      object-cover
      object-[65%_center] 
      sm:object-[center_30%]
      scale-100
    "
  />
</div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide text-white mb-2 leading-snug md:whitespace-nowrap">
            Contact
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[13px] font-light leading-relaxed text-white/90 tracking-wide max-w-[580px] mx-auto">
            <span className="text-white">Be our guest!</span> Let us
            know about your dream journey and we’ll craft something unforgettable.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-8"
        >

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border-b border-white/30 py-1 text-xs outline-none placeholder-gray-400 focus:border-[#AF956C] transition-all duration-300"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-white/30 py-1 text-xs outline-none placeholder-gray-400 focus:border-[#AF956C] transition-all duration-300"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-transparent border-b border-white/30 py-1 text-xs outline-none placeholder-gray-400 focus:border-[#AF956C] transition-all duration-300"
          />

          {/* Country */}
          <div className="relative">

            <input
              type="text"
              placeholder="Select your Country"
              value={selectedCountry || search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearch(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              className="w-full bg-transparent border-b border-white/30 py-1 text-xs outline-none placeholder-gray-400 focus:border-[#AF956C] transition-all duration-300"
            />

            {open && (
              <div className="absolute left-0 w-full max-h-60 overflow-y-auto mt-2 rounded-md z-50
              bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">

                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedCountry(country.name);
                        setSearch("");
                        setOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-2 text-sm cursor-pointer hover:bg-white/20 transition"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-5 h-4 rounded-sm"
                      />
                      {country.name}
                    </div>
                  ))
                ) : (
                  <p className="px-4 py-2 text-sm text-gray-300">
                    No country found
                  </p>
                )}

              </div>
            )}

          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full bg-transparent border-b border-white/30 py-1 text-xs outline-none placeholder-gray-400 focus:border-[#AF956C] transition-all duration-300"
            ></textarea>
          </div>

        </motion.form>

        {/* BUTTON */}
        <motion.div className="text-center mt-14">
          <button className="border border-[#AF956C] px-7 py-3 rounded-full text-white text-xs tracking-wide 
          hover:bg-[#AF956C] transition duration-300">
            Send Message
          </button>
        </motion.div>

      </div>
    </section>
  );
}