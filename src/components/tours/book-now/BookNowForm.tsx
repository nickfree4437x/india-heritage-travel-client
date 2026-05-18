"use client";

import { Mail, User, Users } from "lucide-react";

import FormInput from "./FormInput";
import CountrySelect from "./CountrySelect";
import PhoneField from "./PhoneField";
import DateField from "./DateField";
import MessageField from "./MessageField";

import { CountryOption } from "./types";

type Props = {
  countries: CountryOption[];
  selectedCountry: CountryOption | null;
  setSelectedCountry: (country: CountryOption | null) => void;
};

export default function BookNowForm({
  countries,
  selectedCountry,
  setSelectedCountry,
}: Props) {
  return (
    <form className="space-y-5 sm:space-y-6">

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

        <FormInput
          type="text"
          placeholder="Full Name"
        />

        <FormInput
          type="email"
          placeholder="Email Address"
        />

      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

        <FormInput
          type="number"
          placeholder="Number of Guests"
        />

        <CountrySelect
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />

      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

        <PhoneField
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />

        <DateField />

      </div>

      {/* Message */}
      <MessageField />

      {/* Submit */}
      <div className="flex justify-center">

        <button
          type="submit"
          className="group relative w-full sm:w-auto px-8 sm:px-8 h-10 sm:h-[45px] rounded-xl bg-[#AF956C] hover:bg-[#8f7654] text-white font-[300] text-[12px] sm:text-[13px] tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
        >
          Submit Inquiry
        </button>

      </div>

    </form>
  );
}