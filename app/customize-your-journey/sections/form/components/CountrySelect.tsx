
"use client";

import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import ReactCountryFlag from "react-country-flag";
import { Country } from "country-state-city";

// Types
export type CountryOption = {
  value: string;
  label: string;
  countryCode: string;
};

type Props = {
  selectedCountry: CountryOption | null;
  setSelectedCountry: (country: CountryOption | null) => void;
  name?: string;
};

export default function CountrySelect({
  selectedCountry,
  setSelectedCountry,
  name,
}: Props) {
  const [countries, setCountries] = useState<CountryOption[]>([]);

  // Load countries on mount
  useEffect(() => {
    const countryOptions = Country.getAllCountries()
      .map((country) => ({
        value: country.name,
        label: country.name,
        countryCode: country.isoCode,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));

    setCountries(countryOptions);
  }, []);

  return (
    <div className="w-full">
      {/* Hidden input for form submission */}
      <input
        type="hidden"
        name={name}
        value={selectedCountry?.label || ""}
      />

      <Select<CountryOption, false>
        options={countries}
        value={selectedCountry}
        onChange={(value: SingleValue<CountryOption>) =>
          setSelectedCountry(value)
        }
        placeholder="Select Country *"
        instanceId="country-select"
        inputId="country-select-input"
        aria-label="Select country"
        formatOptionLabel={(country) => (
          <div className="flex items-center gap-3">
            <ReactCountryFlag
              countryCode={country.countryCode}
              svg
              style={{ width: "20px", height: "16px" }}
            />
            <span className="text-[13px] font-[300] text-[#5b5348]">
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
            transition: "all 0.3s ease",
            "&:hover": {
              border: "1px solid #9A7A58",
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
            border: "1px solid #e7dfd3",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            zIndex: 9999,
          }),
          option: (base, state) => ({
            ...base,
            fontSize: "13px",
            backgroundColor: state.isFocused ? "#f4eee7" : "#fff",
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
