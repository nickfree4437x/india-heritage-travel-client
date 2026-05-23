"use client";

export default function YogaIntro() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[24px]
            font-semibold
            text-center
            mb-2 sm:mb-4
            text-[#2c2c2c]
            tracking-wide">
          Discover Peace Through Yoga Practice!
        </h2>

        {/* Content */}
        <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">

          <p>
           Yoga is an ancient and intricate practice deeply rooted in Indian philosophy. 
           It originally served as a spiritual discipline but has evolved into a popular 
           approach for enhancing physical and mental well-being. It combines physical postures, 
           breath control, meditation, and ethical principles to enhance flexibility, strength, 
           and mental clarity. It is renowned for its stress-reduction benefits, promoting 
           relaxation and mindfulness.
          </p>

          <p className="mt-4">
            Beyond the physical, yoga serves as a spiritual path, facilitating self-discovery and 
            self-realization. Moreover, it acts as a cultural bridge between Eastern and Western traditions. 
            The word “yoga” first appears in the Rig Veda, originating from the Sanskrit “yuj,” 
            meaning “union” or “to join.” The roots of yoga trace back to ancient India, with a history 
            spanning over 5,000 years. The “Yoga Sutras,” penned by Sage Patanjali around 200 CE, offer a 
            foundational exposition of yoga’s principles, and it has evolved into diverse schools and 
            practices over time.
          </p>

          <p className="mt-4">
           Yoga predominantly focuses on physical postures (asanas), breathing techniques (pranayama), 
           and meditation (dhyana), even though classical yoga encompasses more components.
          </p>

          <p className="mt-4">
            Yoga comes in various forms, catering to diverse needs, some of them are mentioned here which 
            will help you to understand yoga.
          </p>

        </div>

        {/* Yoga Types Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">

          {[
            { title: "Hatha Yoga", desc: "Basic postures and breathing exercises." },
            { title: "Vinyasa Yoga", desc: "Fluid, dynamic movements with breath." },
            { title: "Bikram Yoga", desc: "Intense yoga practiced in a heated room." },
            { title: "Ashtanga Yoga", desc: "Fast-paced, set sequence of postures." },
            { title: "Iyengar Yoga", desc: "Precise alignment with props for support." },
            { title: "Kundalini Yoga", desc: "Focuses on awakening inner energy." },
            { title: "Yin Yoga", desc: "Deep stretches held for longer periods." },
            { title: "Restorative Yoga", desc: "Gentle poses with props for relaxation." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#f8f6f2] rounded-lg p-4 
                         transition-all duration-300 
                         shadow-sm"
            >
              <h3 className="text-[14px] md:text-[15px] font-medium text-[#9A7A58] mb-1">
                {item.title}
              </h3>
              <p className="leading-relaxed text-[12px] font-[300] md:text-[13px]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}