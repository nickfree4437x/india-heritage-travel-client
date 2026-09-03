"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural and Spiritual Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
             The town of Ranakpur serves as a daily worship site which draws Jain devotees for their 
             religious pilgrimage to the temple. The town serves as a vital spiritual hub because Jains 
             recognize it as one of their five sacred pilgrimage destinations.<br/>
             The Temple sees both devoted worshippers (typically in mornings) and tourists throughout the 
             day (non-jain visitors tend to arrive from mid-day onwards). An important festival which 
             takes places annually during the Mahavir Jayanti - birthday of the last Tirthankara Mahavira
            celebrates this event with much ceremony involving rituals & music.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The Temple has a very strict Dress Code where all visitors should cover their Shoulder, Arms 
            & Legs and also Leather Items are Not Permitted Respectfully Inside And Photography Of Inner 
            Sanctums Is Usually Restricted.
          </p>
        </div>
      </div>
    </section>
  );
}