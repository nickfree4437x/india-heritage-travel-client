"use client";

import CitySection from "./CitySection";

export default function DelhiSection() {
  return (
    <section >

      <div className="space-y-16">

        <CitySection
          id="delhi"
          title="Delhi - A blend of history & royalty"
          description="Discover Delhi, which is the mixture of history and modernity with vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations."
          image="/destination/golden-triangle/delhi1.jpg"
        />

        <CitySection
          id="agra"
          title="Agra - Where history rules supreme"
          description="A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence."
          image="/destination/golden-triangle/agra.jpg"
        />

        <CitySection
          id="jaipur"
          title="Jaipur - The Pink City & Heart of Rajasthan"
          description="One of the most visited & loved city of Rajasthan is Jaipur. It is considered as a UNESCO World Heritage city & the heart of Rajasthan. The beautiful Pink city famous for its Grand forts & palaces, touristic spot & the best shopping site for traditional & rajasthani aesthetics."
          image="/destination/golden-triangle/jaipur.jpg"
        />

      </div>

    </section>
  );
}