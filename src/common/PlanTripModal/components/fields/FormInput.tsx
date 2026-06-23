"use client";

interface FormInputProps {
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export default function FormInput({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
  error,
}: FormInputProps) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`
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
          ${error ? 'border-red-500 border-1' : 'border-[#ddd2c2]'}
        `}
      />

    </div>
  );
}