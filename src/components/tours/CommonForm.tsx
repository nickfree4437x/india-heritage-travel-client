"use client";

import { useEffect, useState } from "react";
import React from "react";

import BookNowHeader from "./book-now/BookNowHeader";
import BookNowForm from "./book-now/BookNowForm";

import { CountryOption } from "./book-now/types";

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
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd"
        );

        const data = await res.json();

        const formattedCountries = data
          .map((country: any) => {
            const root = country.idd?.root || "";

            const suffix =
              country.idd?.suffixes?.[0] || "";

            return {
              value: country.name.common,
              name: country.name.common,
              code: `${root}${suffix}`,
              flag: country.flags.svg,

              label: (
                <div className="flex items-center gap-3">
                  <img
                    src={country.flags.svg}
                    alt={country.name.common}
                    className="w-5 h-4 object-cover rounded-sm shadow-sm"
                  />

                  <span className="text-[13px] font-normal text-gray-700">
                    {country.name.common}
                  </span>
                </div>
              ),
            };
          })

          .sort((a: any, b: any) =>
            a.name.localeCompare(b.name)
          );

        setCountries(formattedCountries);

        const india = formattedCountries.find(
          (c: CountryOption) => c.name === "India"
        );

        setSelectedCountry(india);

      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
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