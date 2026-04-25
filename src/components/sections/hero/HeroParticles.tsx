"use client";

import { motion } from "framer-motion";

const particles = [
  { size: 180, startX: -10, endX: 110, top: "20%", delay: 0 },
  { size: 140, startX: -20, endX: 120, top: "50%", delay: 2 },
  { size: 200, startX: -15, endX: 115, top: "70%", delay: 4 },
  { size: 120, startX: -5, endX: 105, top: "35%", delay: 1 },
];

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-[40] pointer-events-none overflow-hidden">

      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,

            // 🔥 Clean soft circle glow
            background:
              "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)",

            filter: "blur(20px)",
          }}
          initial={{ x: `${p.startX}%`, opacity: 0 }}
          animate={{
            x: `${p.endX}%`,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

    </div>
  );
}