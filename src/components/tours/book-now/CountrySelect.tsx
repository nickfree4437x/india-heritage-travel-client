"use client";

import Select from "react-select";
import { CountryOption } from "./types";

type Props = {
  countries: CountryOption[];
  selectedCountry: CountryOption | null;
  setSelectedCountry: (country: CountryOption | null) => void;
};

export default function CountrySelect({
  countries,
  selectedCountry,
  setSelectedCountry,
}: Props) {
  return (
    <div className="w-full">

      <Select
        options={countries}
        value={selectedCountry}
        onChange={(value) =>
          setSelectedCountry(value as CountryOption)
        }
        placeholder="Select Country"
        instanceId="country-select"
        styles={{
          control: (base, state) => ({
            ...base,

            width: "100%",

            minHeight: "45px",
            height: "45px",

            border: state.isFocused
              ? "1px solid #9A7A58"
              : "1px solid #ddd2c2",

            backgroundColor: "#f9f7f3",

            borderRadius: "8px",

            paddingLeft: "8px",
            paddingRight: "8px",

            fontSize: "13px",
            fontWeight: 300,
            letterSpacing: "0.2px",

            color: "#5b5348",

            boxShadow: "none",

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

            borderRadius: "10px",

            overflow: "hidden",

            border: "1px solid #e7dfd3",

            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
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