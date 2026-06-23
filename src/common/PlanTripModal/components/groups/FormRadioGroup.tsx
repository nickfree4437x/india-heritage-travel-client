"use client";

import { Star } from "lucide-react";

interface FormRadioGroupProps {
  label?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{
    value: string;
    label: string;
    stars?: number;
  }>;
  error?: string;
}

export default function FormRadioGroup({
  label,
  name,
  value,
  onChange,
  options,
  error,
}: FormRadioGroupProps) {
  return (
    <div className="mt-6">
      {/* Label */}
      {label && (
        <h4 className="text-[13px] sm:text-[14px] font-light text-[#3d352c] mb-3 tracking-[0.2px]">
          {label} <span className="text-red-500">*</span>
        </h4>
      )}

      {/* Radio Options */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="w-4 h-4 sm:w-5 sm:h-5 accent-[#a68657] cursor-pointer"
            />

            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[12px] sm:text-[13px] font-[300] text-[#5b5348] group-hover:text-[#a68657] transition-colors">
                {opt.label}
              </span>

              {opt.stars && (
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {Array(opt.stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        fill="#c9a15f"
                        stroke="#c9a15f"
                        size={14}
                        className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
                      />
                    ))}
                </div>
              )}
            </div>
          </label>
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-[10px] sm:text-[11px] md:text-[12px] font-light mt-2">
          {error}
        </p>
      )}
    </div>
  );
}