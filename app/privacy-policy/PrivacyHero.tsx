"use client";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Solid Background Color */}
      <div className="absolute inset-0 bg-[#A67E5B]" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">
        <h1 className="
          max-w-[700px]
          text-3xl md:text-4xl
          font-[600]
          leading-[1.1]
          tracking-[0.04em]
          mb-4
          opacity-0 translate-y-10
          animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
        ">
          Privacy policy
        </h1>
        <p className="
          text-white
          text-[12px] sm:text-[13px] md:text-[14.5px]
          font-light
          leading-relaxed
          mb-6
        ">
          Your privacy is important to us. Learn how we collect, use, and protect your information.
        </p>
      </div>
    </section>
  );
}