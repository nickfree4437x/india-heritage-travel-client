export default function AyurvedaOverview() {
  return (
    <section className="bg-[#f9f7f3]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[24px]
            font-semibold
            text-center
            mb-2 sm:mb-4
            text-[#2c2c2c]
            tracking-wide">
          Discover Wellness Through Ayurveda
        </h2>

        {/* Content */}
        <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
          
          <p>
            Ayurveda, a natural health system, originated more than 3,000 years ago in India. 
            The term “Ayurveda” combines “ayur” (life) and “veda” (knowledge), meaning 
            “knowledge of life.” It believes that disease results from imbalances in one’s 
            consciousness, emphasizing lifestyle changes and natural therapies to restore 
            harmony between body, mind, spirit, and the environment.
          </p>

          <p className="mt-6">
            Ayurvedic treatment begins with internal cleansing, followed by tailored diets, 
            herbal remedies, massages, yoga, and meditation.
          </p>

          <p className="mt-6">
            Central to Ayurveda are the ideas of interconnectedness, individual body constitution 
            (prakriti), and life forces (doshas). Treatment goals include eliminating impurities, 
            reducing symptoms, enhancing disease resistance, reducing stress, and promoting life balance. 
            Ayurvedic remedies extensively use herbs, oils, and spices.
          </p>

          <p className="mt-6">
            In India, Ayurveda is a recognized medical practice, on par with Western, Chinese, 
            naturopathic, and homeopathic medicine. Indian Ayurvedic practitioners undergo formal, 
            state-recognized training. In the United States, Ayurvedic practitioners lack national 
            licensing, and standards vary. However, some states have approved Ayurvedic schools as 
            educational institutions.
          </p>

          <p className="text-gray-700 mt-6 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify">
            Join us in this journey to discover more about Ayurveda!
          </p>

        </div>
      </div>
    </section>
  );
}