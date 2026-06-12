"use client";

type Props = {
  name?: string;

  value?: string;

  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export default function MessageField({
  name,
  value,
  onChange,
}: Props) {

  return (

    <div>

      <textarea
        rows={4}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Tell us about your travel preferences, special requests, or anything else you'd like us to know..."
        aria-label="Travel Preferences and Special Requests"
        autoComplete="off"
        className="
          w-full
          border border-[#ddd2c2]
          bg-white
          rounded-xl
          px-5
          py-4
          text-[12px]
          sm:text-[13px]
          text-[#5b5348]
          placeholder:text-[#9a8f81]
          placeholder:font-light
          font-light
          tracking-[0.2px]
          focus:outline-none
          focus:border-[#9A7A58]
          resize-none
          transition
        "
      />

    </div>
  );
}