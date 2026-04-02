"use client";

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden z-5">

      {/* Particle 1 */}
      <div className="absolute w-40 h-40 bg-[#A07008]/30 blur-3xl rounded-full top-[20%] left-[10%] animate-pulse"></div>

      {/* Particle 2 */}
      <div className="absolute w-32 h-32 bg-white/20 blur-2xl rounded-full bottom-[20%] right-[15%] animate-pulse"></div>

      {/* Particle 3 */}
      <div className="absolute w-24 h-24 bg-[#A07008]/20 blur-2xl rounded-full top-[50%] right-[30%] animate-pulse"></div>

    </div>
  );
}