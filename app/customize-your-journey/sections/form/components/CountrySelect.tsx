"use client";

import { useEffect, useState } from "react";

import Select, {
  SingleValue,
} from "react-select";

export type CountryOption = {
  value: string;
  label: string;
  flag: string;
  phoneCode: string;
};

type Props = {
  selectedCountry: CountryOption | null;

  setSelectedCountry: (
    country: CountryOption | null
  ) => void;

  name?: string;
};

type RestCountry = {
  name: {
    common: string;
  };

  flags?: {
    svg?: string;
  };

  idd?: {
    root?: string;
    suffixes?: string[];
  };
};

export default function CountrySelect({
  selectedCountry,
  setSelectedCountry,
  name,
}: Props) {

  const [countries, setCountries] = useState<
    CountryOption[]
  >([]);

  // FETCH COUNTRIES
  useEffect(() => {

    const fetchCountries = async () => {

      try {

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd"
        );

        const data: RestCountry[] =
          await res.json();

        const formattedCountries =
          data
            .map((country) => ({

              value: country.name.common,

              label: country.name.common,

              flag:
                country.flags?.svg || "",

              phoneCode:
                country.idd?.root &&
                country.idd?.suffixes?.length
                  ? `${country.idd.root}${country.idd.suffixes[0]}`
                  : "",

            }))

            .sort((a, b) =>
              a.label.localeCompare(b.label)
            );

        setCountries(formattedCountries);

      } catch (error) {

        console.error(
          "Failed to fetch countries:",
          error
        );

      }

    };

    fetchCountries();

  }, []);

  return (

    <div className="w-full">

      {/* HIDDEN INPUT FOR WEB3FORMS */}
      <input
        type="hidden"
        name={name}
        value={selectedCountry?.label || ""}
      />

      <Select<CountryOption, false>

        options={countries}

        value={selectedCountry}

        onChange={(
          value: SingleValue<CountryOption>
        ) =>
          setSelectedCountry(value)
        }

        placeholder="Select Country *"

        instanceId="country-select"

        formatOptionLabel={(country) => (

          <div className="flex items-center gap-3">

            <img
              src={country.flag}
              alt={country.label}
              className="
                w-5
                h-4
                object-cover
                rounded-[2px]
              "
            />

            <span
              className="
                text-[13px]
                font-[300]
                text-[#5b5348]
              "
            >
              {country.label}
            </span>

          </div>

        )}

        styles={{

          control: (base, state) => ({
            ...base,

            width: "100%",

            minHeight: "40px",

            height: "40px",

            border: state.isFocused
              ? "1px solid #9A7A58"
              : "1px solid #ddd2c2",

            backgroundColor: "#f9f7f3",

            borderRadius: "8px",

            paddingLeft: "8px",

            paddingRight: "8px",

            fontSize: "13px",

            fontWeight: 300,

            color: "#5b5348",

            boxShadow: "none",

            transition:
              "all 0.3s ease",

            "&:hover": {
              border:
                "1px solid #9A7A58",
            },
          }),

          valueContainer: (base) => ({
            ...base,

            paddingLeft: "8px",

            paddingRight: "8px",
          }),

          placeholder: (base) => ({
            ...base,

            color: "#9a8f81",

            fontSize: "13px",

            fontWeight: 300,
          }),

          singleValue: (base) => ({
            ...base,

            color: "#5b5348",

            fontSize: "13px",

            fontWeight: 300,
          }),

          menu: (base) => ({
            ...base,

            borderRadius: "12px",

            overflow: "hidden",

            border:
              "1px solid #e7dfd3",

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.06)",

            zIndex: 9999,
          }),

          option: (base, state) => ({
            ...base,

            fontSize: "13px",

            backgroundColor:
              state.isFocused
                ? "#f4eee7"
                : "#fff",

            color: "#5b5348",

            fontWeight: 300,

            cursor: "pointer",

            paddingTop: "10px",

            paddingBottom: "10px",
          }),

          indicatorSeparator: () => ({
            display: "none",
          }),

          dropdownIndicator: (base) => ({
            ...base,

            color: "#9a8f81",

            "&:hover": {
              color: "#9A7A58",
            },
          }),
        }}
      />

    </div>

  );

}