"use client";

type Props = {
  type: string;

  placeholder: string;

  name?: string;

  value?: string | number;

  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;

  required?: boolean;

  max?: number;
};

export default function FormInput({
  type,
  placeholder,
  name,
  value,
  onChange,
  required,
  max,
}: Props) {

  return (

    <div>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        max={max}
        placeholder={placeholder}
        className="
          w-full
          border border-[#ddd2c2]
          bg-white
          rounded-lg
          px-5
          py-2.5 sm:py-2.5
          text-[12px]
          sm:text-[13px]
          text-[#5b5348]
          placeholder:text-[#9a8f81]
          placeholder:font-light
          font-light
          tracking-[0.2px]
          focus:outline-none
          focus:border-[#9A7A58]
          transition
        "
      />

    </div>
  );
}