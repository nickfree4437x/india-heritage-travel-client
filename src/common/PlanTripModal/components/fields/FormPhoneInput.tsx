"use client";

import { ChevronDown } from "lucide-react";

interface FormPhoneInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function FormPhoneInput({
  value,
  onChange,
  error,
}: FormPhoneInputProps) {
  return (
    <div>
      <div
        className={`
          flex items-center overflow-hidden transition-colors
          ${error ? 'border-red-500 border rounded-lg' : 'border-[#ddd2c2]'}
        `}
      >

        <input
          type="tel"
          value={value}
          onChange={onChange}
          placeholder="Phone No."
          className="w-full

        border border-[#ddd2c2]

        bg-white

        rounded-lg

        px-5
        py-2.5 sm:py-2.5

        text-[12px] sm:text-[13px]
        text-[#5b5348]

        placeholder:text-[#9a8f81]
        placeholder:font-light

        font-light
        tracking-[0.2px]

        focus:outline-none
        focus:border-[#9A7A58]

        transition"
        />
      </div>

      {/* {error && (
        <p className="text-red-500 text-[14px] mt-2">{error}</p>
      )} */}
    </div>
  );
}