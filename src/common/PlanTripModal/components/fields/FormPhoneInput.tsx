"use client";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface FormPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
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
          border rounded-lg bg-white transition
          ${
            error
              ? "border-red-500"
              : "border-[#ddd2c2] focus-within:border-[#9A7A58]"
          }
        `}
      >
        <PhoneInput
          international
          defaultCountry="IN"
          countryCallingCodeEditable={false}
          value={value}
          onChange={(value) => onChange(value || "")}
          placeholder="Phone No."
          className="custom-phone-input"
        />
      </div>
    </div>
  );
}