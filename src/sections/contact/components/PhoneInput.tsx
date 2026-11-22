"use client";

// ============================================================
// IMPORTS
// ============================================================
import PhoneInputWithCountry from "react-phone-number-input";
import "react-phone-number-input/style.css";

// ============================================================
// TYPES
// ============================================================
interface PhoneInputProps {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
}

// ============================================================
// COMPONENT
// ============================================================
export function PhoneInput({
  phoneNumber,
  setPhoneNumber,
}: PhoneInputProps) {
  return (
    <div className="w-full bg-transparent border-b border-white/30 focus-within:border-[#AF956C] transition-all duration-300">
      
      <PhoneInputWithCountry
        international
        defaultCountry="IN"
        value={phoneNumber}
        onChange={(value) => setPhoneNumber(value || "")}
        placeholder="Phone Number *"
        className="contact-form-phone-input"
        countrySelectProps={{
          "aria-label": "Select country",
        }}
      />  
    </div>
  );
}