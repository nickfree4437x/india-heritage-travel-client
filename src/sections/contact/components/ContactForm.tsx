"use client";

// ============================================================
// IMPORTS
// ============================================================
import { motion } from "framer-motion";
import Select, { SingleValue } from "react-select";
import ReactCountryFlag from "react-country-flag";
import { PhoneInput } from "./PhoneInput";
import { ContactButton } from "./ContactButton";
import type { CountryOption } from "../types/types";

// ============================================================
// TYPES
// ============================================================
interface ContactFormProps {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  message: string;
  setMessage: (value: string) => void;
  selectedCountry: CountryOption | null;
  setSelectedCountry: (value: CountryOption | null) => void;
  countryOptions: CountryOption[];
  loading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

// ============================================================
// COMPONENT
// ============================================================
export function ContactForm({
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  message,
  setMessage,
  selectedCountry,
  setSelectedCountry,
  countryOptions,
  loading,
  handleSubmit,
}: ContactFormProps) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-8"
    >
      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-transparent border-b border-white/30 py-3 text-sm outline-none placeholder:text-white/50 focus:border-[#AF956C] transition-all duration-300"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full bg-transparent border-b border-white/30 py-3 text-sm outline-none placeholder:text-white/50 focus:border-[#AF956C] transition-all duration-300"
      />

      {/* Phone */}
      <PhoneInput
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />

      {/* Country Select */}
      <div>
        <Select<CountryOption, false>
          options={countryOptions}
          value={selectedCountry}
          onChange={(value: SingleValue<CountryOption>) =>
            setSelectedCountry(value)
          }
          placeholder="Select your Country *"
          instanceId="country-select"
          isSearchable
          formatOptionLabel={(option) => (
            <div className="flex items-center gap-3">
              <ReactCountryFlag
                countryCode={option.countryCode}
                svg
                style={{ width: "20px", height: "16px" }}
              />
              <span className="text-[13px] font-light">
                {option.label}
              </span>
            </div>
          )}
          styles={{
            control: (base, state) => ({
              ...base,
              backgroundColor: "transparent",
              borderColor: state.isFocused
                ? "#AF956C"
                : "rgba(255,255,255,0.3)",
              borderWidth: "0 0 1px 0",
              borderRadius: "0",
              boxShadow: "none",
              minHeight: "42px",
              cursor: "pointer",
              "&:hover": {
                borderColor: "#AF956C",
              },
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px",
              marginTop: "4px",
              zIndex: 9999,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused
                ? "rgba(175,149,108,0.2)"
                : "transparent",
              color: "white",
              fontSize: "13px",
              fontWeight: 300,
              cursor: "pointer",
              padding: "10px 12px",
              "&:active": {
                backgroundColor: "rgba(175,149,108,0.3)",
              },
            }),
            singleValue: (base) => ({
              ...base,
              color: "white",
              fontSize: "13px",
              fontWeight: 300,
            }),
            input: (base) => ({
              ...base,
              color: "white",
              fontSize: "13px",
            }),
            placeholder: (base) => ({
              ...base,
              color: "rgba(255,255,255,0.5)",
              fontSize: "13px",
              fontWeight: 300,
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: "rgba(255,255,255,0.6)",
              "&:hover": {
                color: "#AF956C",
              },
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            valueContainer: (base) => ({
              ...base,
              padding: "0 8px",
            }),
          }}
        />
      </div>

      {/* Message */}
      <div className="md:col-span-2">
        <textarea
          rows={4}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-transparent border-b border-white/30 py-3 text-sm outline-none placeholder:text-white/50 focus:border-[#AF956C] transition-all duration-300 resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 text-center mt-6">
        <ContactButton loading={loading} />
      </div>
    </motion.form>
  );
}