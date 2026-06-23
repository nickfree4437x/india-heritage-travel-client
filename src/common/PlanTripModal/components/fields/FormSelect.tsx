"use client";

import { ChevronDown } from "lucide-react";

interface FormSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}

export default function FormSelect({
  value,
  onChange,
  options,
  required = true,
}: FormSelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="
          appearance-none
          w-full
          border border-[#ddd2c2]
          bg-white
          rounded-lg
          px-5 py-2.5 sm:py-2.5
          text-[12px] sm:text-[13px] text-[#5b5348]
          placeholder:text-[#9a8f81] placeholder:font-light
          font-light tracking-[0.2px]
          focus:outline-none focus:border-[#9A7A58]
          transition
        "
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] pointer-events-none"
      />
    </div>
  );
}