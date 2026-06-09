export const getNavLinkClass = (isActive: boolean) => {
  const baseClasses = `
    block text-[11px] font-extralight tracking-[0.14em] transition-all duration-300
  `;

  const activeClass = isActive
    ? "text-[#a88b63]"
    : "text-[#5e5a54] hover:text-[#a88b63]";

  return `${baseClasses} ${activeClass}`;
};

export const getChevronClassName = () => {
  return `
    w-4 h-4 text-[#9d9487] group-hover:text-[#a88b63] transition-all duration-300
  `;
};

export const getJourneysButtonClassName = () => {
  return `
    flex justify-between items-center w-full group
  `;
};

export const getJourneysTextClassName = () => {
  return `
    text-[11px] font-light tracking-[0.14em] text-[#2f2f2f]
    group-hover:text-[#a88b63] transition-all duration-300
  `;
};

export const getCategoryTitleClassName = () => {
  return `
    text-[9px] font-semibold uppercase tracking-[0.28em] text-[#b89a74] pl-4
  `;
};

export const getMenuItemClassName = () => {
  return `
    group relative w-full flex items-center justify-between
    px-4 py-2 rounded-xl
    text-[10px] font-extralight tracking-[0.14em]
    text-[#6f6a63] hover:text-[#a88b63] hover:bg-[#f8f3eb]
    transition-all duration-500
  `;
};

export const getArrowClassName = () => {
  return `
    opacity-0 translate-x-[-6px]
    group-hover:opacity-100 group-hover:translate-x-0
    text-[#a88b63] transition-all duration-300
  `;
};

export const getCtaButtonClassName = () => {
  return `
    w-full rounded-xl border border-[#d9c3a4]
    bg-gradient-to-r from-[#c4a57d] to-[#a88b63]
    py-4 text-[11px] font-extralight tracking-[0.22em] text-white
    hover:shadow-[0_10px_30px_rgba(168,139,99,0.28)]
    transition-all duration-500
  `;
};