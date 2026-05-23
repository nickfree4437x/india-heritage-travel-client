export const getHeaderClassName = (scrolled: boolean) => {
  const baseClasses =
    "fixed top-0 left-0 right-0 transition-all duration-500 ease-out";

  const backgroundClass = scrolled
    ? "bg-[#C2A985]/95 backdrop-blur-md shadow-sm"
    : "bg-gradient-to-b from-black/30 to-transparent";

  return `${baseClasses} ${backgroundClass}`;
};

export const getLogoSizeClass = (scrolled: boolean) => {
  return scrolled
    ? "w-[90px] sm:w-[110px] md:w-[120px]"
    : "w-[110px] sm:w-[130px] md:w-[150px] lg:w-[160px]";
};

export const getNavLinkClasses = (
  scrolled: boolean,
  isActive: boolean
) => {
  const baseClasses = `
    px-3 xl:px-4 rounded-full font-[300] tracking-[0.1em] whitespace-nowrap
    transition-all duration-300
  `;

  const sizeClasses = scrolled
    ? "py-1 xl:py-2.5 text-[12px] xl:text-[11px] text-white hover:bg-black/10"
    : "py-1.5 xl:py-2 text-[11px] xl:text-[12px] text-white hover:bg-white/15";

  const activeClass = isActive
    ? "bg-white/20 backdrop-blur-md"
    : "";

  return `${baseClasses} ${sizeClasses} ${activeClass}`;
};

export const getJourneysMegaMenuClasses = (
  pathname: string
) => {
  return `
    relative px-3 py-1.5 text-white rounded-full transition-all duration-300
    ${pathname === "/" ? "bg-white/10 backdrop-blur-md" : "bg-transparent"}
    hover:bg-white/20 hover:backdrop-blur-md
  `;
};

export const getCustomizeButtonClasses = (
  scrolled: boolean
) => {
  if (scrolled) {
    return "px-4 xl:px-5 py-2 xl:py-2.5 text-[10px] xl:text-[11px] bg-white text-black hover:bg-white/90";
  }

  return "px-4 xl:px-6 py-2 xl:py-3 text-[10px] xl:text-[11px] bg-transparent text-white hover:bg-white/10 backdrop-blur-md";
};

export const getContainerHeightClass = (
  scrolled: boolean
) => {
  return scrolled
    ? "h-[60px] md:h-[65px] lg:h-[70px]"
    : "h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px]";
};