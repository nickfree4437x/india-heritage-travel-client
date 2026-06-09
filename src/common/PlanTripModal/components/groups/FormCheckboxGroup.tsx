"use client";

interface FormCheckboxGroupProps {
  label?: string;  // ADDED - optional label
  items: string[];
  selectedItems: string[];
  onChange: (item: string, checked: boolean) => void;
  columns?: number;
  error?: string;
}

export default function FormCheckboxGroup({
  label,
  items,
  selectedItems,
  onChange,
  columns = 3,
  error,
}: FormCheckboxGroupProps) {
  return (
    <div className="mt-6">
      {/* LABEL SECTION - ADDED */}
      {label && (
        <h4 className="text-[13px] sm:text-[14px] font-light text-[#3d352c] mb-3 tracking-[0.2px]">
          {label} <span className="text-red-500">*</span>
        </h4>
      )}

      {/* CHECKBOX OPTIONS */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-4 sm:gap-5 md:gap-6`}>
        {items.map((item) => (
          <label key={item} className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={(e) => onChange(item, e.target.checked)}
              className="w-4 h-4 sm:w-5 sm:h-5 accent-[#a68657] cursor-pointer rounded"
            />
            <span className="text-[12px] sm:text-[13px] font-[300] text-[#5b5348] group-hover:text-[#a68657] transition-colors">
              {item}
            </span>
          </label>
        ))}
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <p className="text-red-500 text-[10px] sm:text-[11px] md:text-[12px] font-light mt-2">
          {error}
        </p>
      )}
    </div>
  );
}