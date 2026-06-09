export const getButtonClassName = (
  scrolled?: boolean
) => {

  const baseClasses = `
    group relative flex items-center gap-2.5 px-4 rounded-xl
    transition-all duration-300 ease-out
  `;

  const scrolledClasses = scrolled
    ? "py-2 bg-white/90 border border-gray-200/80 shadow-sm"
    : "py-2.5 bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/10";

  return `${baseClasses} ${scrolledClasses}`;
};

export const getLanguageTextClassName = (
  scrolled?: boolean
) => {

  const baseClasses =
    "hidden sm:inline text-xs tracking-wide transition-colors duration-300";

  const colorClass = scrolled
    ? "text-gray-700"
    : "text-white";

  return `${baseClasses} ${colorClass}`;
};

export const getChevronClassName = (
  scrolled?: boolean
) => {

  const colorClass = scrolled
    ? "text-gray-500"
    : "text-white/80";

  return `transition-colors duration-300 ${colorClass}`;
};

export const getDropdownClassName = (
  scrolled?: boolean
) => {

  const baseClasses = `
    absolute right-0 mt-2 z-50 min-w-[200px] sm:min-w-[240px]
    rounded-xl overflow-hidden shadow-md backdrop-blur-xl
  `;

  const scrolledClasses = scrolled
    ? "bg-white/95 border border-gray-200/50"
    : "bg-white/10 border border-white/10";

  return `${baseClasses} ${scrolledClasses}`;
};

export const getDropdownHeaderClassName = (
  scrolled?: boolean
) => {

  const baseClasses =
    "px-4 py-3 border-b text-xs tracking-wider uppercase";

  const borderColorClass = scrolled
    ? "border-gray-100 text-gray-600"
    : "border-white/10 text-gray-200";

  return `${baseClasses} ${borderColorClass}`;
};

export const getLanguageButtonClassName = (
  isSelected: boolean
) => {

  const baseClasses = `
    w-full flex items-center gap-3 px-4 py-3
    transition-all duration-200
  `;

  const selectedClass = isSelected
    ? "bg-blue-500/10"
    : "";

  return `${baseClasses} ${selectedClass}`;
};

export const getLanguageNameClassName = (
  scrolled?: boolean
) => {

  return scrolled
    ? "text-gray-800"
    : "text-white";
};

export const getHoverBackground = (
  scrolled?: boolean
) => {

  return scrolled
    ? "rgba(0,0,0,0.05)"
    : "rgba(255,255,255,0.1)";
};