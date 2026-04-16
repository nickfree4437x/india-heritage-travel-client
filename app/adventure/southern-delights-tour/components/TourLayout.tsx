import BookingCard from "./BookingCard";
import HighlightsInclusions from "./HighlightsInclusions";
import ItinerarySection from "./ItinerarySection";
import TourSection from "./TourSection";

export default function TourLayout() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      {/* LEFT SIDE */}
      <div className="lg:col-span-2 space-y-12">

        {/* Existing ones (Cochin, Alleppey, Thekkady...) */}

        <TourSection
          title="Munnar – South India’s Alpine Haven"
          description={`Munnar is a mesmerizing hill station in the Western Ghats, known for rolling tea plantations, cool climate and scenic valleys.

Often called the Kashmir of South India, it offers breathtaking views, tea museums and rich biodiversity.`}
          image="/adventure/delights/munnar.jpg"
        />

        <TourSection
          title="Madurai – Where Culture Means Commerce"
          description={`Madurai is one of India's oldest cities and a major cultural hub, famous for the Meenakshi Amman Temple.

It is known for its vibrant traditions, festivals, and deep-rooted heritage.`}
          image="/adventure/delights/madurai.jpg"
        />

        <TourSection
          title="Thanjavur – Where History Meets Culture"
          description={`Thanjavur is rich in South Indian heritage, known for classical arts, architecture, and the Brihadeeswarar Temple.

It is also famous for traditional paintings and cultural legacy.`}
          image="/adventure/delights/thanjavur.jpg"
        />

        <TourSection
          title="Pondicherry – Coastal City Of South India"
          description={`Pondicherry is known for its French colonial charm, peaceful beaches and vibrant streets.

Places like Auroville and Promenade Beach make it a unique travel experience.`}
          image="/adventure/delights/pondicherry.jpg"
        />

        <TourSection
          title="Mahabalipuram – Historic Town Of Tamil Nadu"
          description={`Mahabalipuram is a UNESCO World Heritage site famous for rock-cut temples and ancient architecture.

It also offers beautiful beaches and intricate stone carvings.`}
          image="/adventure/delights/mahabalipuram.jpg"
        />

        <TourSection
          title="Mumbai – A City Of Dreams"
          description={`Mumbai is India's financial capital, known for its fast-paced life, culture and iconic landmarks like Gateway of India and Marine Drive.

It blends history, modern life and endless experiences.`}
          image="/adventure/delights/mumbai.jpg"
        />
       <HighlightsInclusions />
       <ItinerarySection />
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-1">
        <BookingCard />
      </div>

    </section>
  );
}