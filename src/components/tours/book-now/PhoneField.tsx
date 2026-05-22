"use client";

import Select from "react-select";

import { CountryOption } from "./types";

type Props = {
  countries: CountryOption[];

  selectedCountry: CountryOption | null;

  setSelectedCountry: (
    country: CountryOption | null
  ) => void;

  name?: string;

  value?: string;

  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;

  required?: boolean;
};

export default function PhoneField({
  countries,
  selectedCountry,
  setSelectedCountry,
  name,
  value,
  onChange,
  required,
}: Props) {

  return (

    <div
      className="
        flex items-center
        w-full
        border border-[#ddd2c2]
        bg-[#f9f7f3]
        rounded-lg
        overflow-hidden
        focus-within:border-[#9A7A58]
        transition
      "
    >

      {/* Country Code Select */}
      <div className="w-[120px] border-r border-[#ddd2c2]">

        <Select
          options={countries}
          value={selectedCountry}
          onChange={(value) =>
            setSelectedCountry(value as CountryOption)
          }
          instanceId="country-code-select"
          styles={{
            control: (base) => ({
              ...base,

              minHeight: "45px",
              height: "45px",

              border: "none",

              backgroundColor: "transparent",

              boxShadow: "none",

              borderRadius: "0",
            }),

            valueContainer: (base) => ({
              ...base,

              paddingLeft: "10px",
              paddingRight: "4px",
            }),

            singleValue: (base) => ({
              ...base,

              color: "#5b5348",

              fontSize: "13px",

              fontWeight: 300,
            }),

            option: (base, state) => ({
              ...base,

              fontSize: "13px",

              backgroundColor: state.isFocused
                ? "#f4eee7"
                : "#fff",

              color: "#5b5348",

              fontWeight: 300,

              cursor: "pointer",
            }),

            menu: (base) => ({
              ...base,

              borderRadius: "10px",

              overflow: "hidden",

              border: "1px solid #e7dfd3",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.06)",
            }),

            indicatorSeparator: () => ({
              display: "none",
            }),

            dropdownIndicator: (base) => ({
              ...base,

              padding: "6px",

              color: "#9a8f81",
            }),
          }}
          formatOptionLabel={(country: any) => (
            <div className="flex items-center gap-2">

              <img
                src={country.flag}
                alt={country.name}
                className="w-5 h-4 object-cover rounded-sm"
              />

              <span className="text-[13px] font-light text-[#5b5348]">
                {country.code}
              </span>

            </div>
          )}
        />

      </div>

      {/* Mobile Number */}
      <input
        type="tel"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder="Mobile Number"
        className="
          flex-1
          h-[45px]
          bg-transparent
          px-4
          text-[12px]
          sm:text-[13px]
          text-[#5b5348]
          placeholder:text-[#9a8f81]
          placeholder:font-light
          font-light
          tracking-[0.2px]
          focus:outline-none
        "
      />

    </div>
  );
}