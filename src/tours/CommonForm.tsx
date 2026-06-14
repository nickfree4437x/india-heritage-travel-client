"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Country } from "country-state-city";

import BookNowHeader from "./book-now/form/BookNowHeader";
import BookNowForm from "./book-now/form/BookNowForm";

import { CountryOption } from "./book-now/form/types/types";

type Props = {
  tourName: string;
};

export default function BookNowSection({
  tourName,
}: Props) {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] =
    useState<CountryOption | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    try {
      const formattedCountries = Country.getAllCountries()
        .map((country) => ({
          value: country.name,
          name: country.name,
          code: country.phonecode
            ? `+${country.phonecode}`
            : "",
          isoCode: country.isoCode,
          flag: `https://flagcdn.com/${country.isoCode.toLowerCase()}.svg`,

          label: (
            <div className="flex items-center gap-3">
              <Image
                src={`https://flagcdn.com/${country.isoCode.toLowerCase()}.svg`}
                alt={country.name}
                width={20}
                height={16}
                className="w-5 h-4 object-cover rounded-sm shadow-sm"
              />

              <span className="text-[13px] font-normal text-gray-700">
                {country.name}
              </span>
            </div>
          ),
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      setCountries(formattedCountries);

      const india = formattedCountries.find(
        (c) => c.isoCode === "IN"
      );

      setSelectedCountry(india || null);
    } catch (error) {
      console.error("Failed to load countries:", error);
    }
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="w-full bg-white py-6 md:py-6 lg:py-6 scroll-mt-20 md:scroll-mt-24"
      id="booking-form"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookNowHeader />

        <div className="border border-[#ddd2c2] rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            <BookNowForm
              countries={countries}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              tourName={tourName}
            />
          </div>
        </div>
      </div>
    </section>
  );
}