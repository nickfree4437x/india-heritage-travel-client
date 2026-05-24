"use client";

export default function WorkSection() {
  return (
    <section id="work" className="flex justify-center">

      <div className="max-w-4xl text-center space-y-8">

        {/* Heading */}
        <h2 className="text-[22px] sm:text-[26px] md:text-[28px]
              font-semibold
              text-[#8b6a3d]
              tracking-wide
              mb-4">
          How India Heritage Travel work?
        </h2>

        {/* Paragraphs */}
        <div className="text-[#5f5f5f] mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">

          <p>
            Our team comprises individuals who were born in India and are well-versed in the intricacies 
            of history, art, architecture, philosophy, religion, and gastronomy, bringing their unique 
            backgrounds to enrich your trip and turn it into a truly personal adventure.
          </p>

          <p className="mt-6">
            We specialize in a variety of travel experiences, including trips for Friends & Family, Solo 
            Female travellers, and those seeking an educational adventure, corporate getaways, Tailor-Made 
            Journeys. Additionally, we offer the convenience of renting a car with a personal driver, 
            ensuring safe and worry-free travel throughout India.
          </p>

          <p className="mt-6">
            Our team is a harmonious blend of multilingual tour guides, art historians, skilled drivers, 
            and western travel cultural curators. From the moment you contact us, our friendly, respectful, 
            and supportive staff is at your service, ensuring your every need is met. Hospitality and open
             heartedness define our approach.
          </p>

          <p className="mt-6">
            We’re not just a travel company; we’re your gateway to an unforgettable Indian experience.
          </p>

        </div>

      </div>

    </section>
  );
}