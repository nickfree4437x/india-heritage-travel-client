"use client";

import CitySection from "./CitySection";
import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";

export default function DelhiSection() {
  return (
    <section>

     <WhyChooseSection/>

      <div className="space-y-12">

        <CitySection
          id="delhi"
          title="Delhi - A blend of history & royalty"
          description="Discover Delhi, which is the mixture of history and modernity with vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations."
          image="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779524607/delhi_sqy38u.jpg"
          alt="Delhi sightseeing tour featuring India Gate Red Fort Qutub Minar and historic landmarks"
        />

        <CitySection
          id="agra"
          title="Agra - Where history rules supreme"
          description="A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence."
          image="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779524723/agra_qqj0nn.jpg"
          alt="Agra Taj Mahal tour showcasing Mughal architecture and historic landmarks in India"
        />

        <CitySection
          id="jaipur"
          title="Jaipur - The Pink City & Heart of Rajasthan"
          description="One of the most visited & loved city of Rajasthan is Jaipur. It is considered as a UNESCO World Heritage city & the heart of Rajasthan. The beautiful Pink city famous for its Grand forts & palaces, touristic spot & the best shopping site for traditional & rajasthani aesthetics."
          image="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779524759/jaipur_atv1ee.jpg"
          alt="Jaipur Pink City tour featuring Amber Fort Hawa Mahal and Rajasthan heritage attractions"
        />

      </div>

    </section>
  );
}