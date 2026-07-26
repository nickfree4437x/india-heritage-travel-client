"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Is India Safe for Female Travellers?
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Every year, new clients ask India Heritage Travel the same question - usually late at night, a 
            little nervous: "Is India safe for female travellers, or am I being naive to go alone?" It's a 
            fair question, and it deserves a straight answer - not a slogan, not a scare story. So, the honest 
            answer is yes. In 2026, India is safe for female travellers, including solo women, as long as you 
            treat it like any huge, varied, fast-moving place - with preparation, the right local help, and a 
            plan for transport, stays, and evenings. Millions of women do this every year - backpackers, 
            honeymooners, solo retirees - and many return saying it was one of the most meaningful journeys of 
            their lives. The difference between a smooth trip and a stressful one often has less to do with luck 
            and more to do with logistics handled well in advance.
          </p>
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            This guide is written kind of the way we brief our own clients at India Heritage Travel: candidly, 
            with real destinations, real precautions and not that sweet false reassurance. We’ll walk you 
            through what the official safety data actually says, which regions are genuinely some of the 
            easiest for women, plus how to dress and move through public spaces with confidence, not just 
            “vibes”. And then we’ll show you where a private, women-friendly luxury itinerary removes the 
            guesswork entirely, so you can plan with less stress, more clarity .
          </p>
        </div>
      </div>
    </section>
  );
}