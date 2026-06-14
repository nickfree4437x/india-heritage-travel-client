"use client";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { CountryOption } from "../types/types";

type Props = {
  countries: CountryOption[];

  selectedCountry: CountryOption | null;

  setSelectedCountry: (
    country: CountryOption | null
  ) => void;

  value?: string;

  onPhoneChange?: (value: string) => void;

  required?: boolean;
};

export default function PhoneField({
  selectedCountry,
  value,
  onPhoneChange,
}: Props) {
  return (
    <div
      className="
        w-full
        border border-[#ddd2c2]
        bg-white
        rounded-lg
        px-4
        focus-within:border-[#9A7A58]
        transition
      "
    >
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry={
          selectedCountry?.isoCode as any
        }
        value={value}
        onChange={(phone) =>
          onPhoneChange?.(phone || "")
        }
        placeholder="Mobile Number"
        className="phone-input"
      />
    </div>
  );
}