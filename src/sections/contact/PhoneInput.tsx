"use client";

interface PhoneInputProps {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
}

export function PhoneInput({
  phoneNumber,
  setPhoneNumber,
}: PhoneInputProps) {
  return (
    <input
      type="tel"
      placeholder="Phone Number *"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      required
      className="w-full bg-transparent border-b border-white/30 py-3 text-sm outline-none placeholder:text-white/50 focus:border-[#AF956C] transition-all duration-300"
    />
  );
}