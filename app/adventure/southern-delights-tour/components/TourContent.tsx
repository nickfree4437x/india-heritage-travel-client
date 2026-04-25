"use client";

import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";
import HighlightsInclusions from "./HighlightsInclusions";
import ItinerarySection from "./ItinerarySection";
import TourSection from "./TourSection";

export default function TourContent() {
  return (
    <div className="space-y-20 w-full">

      <TourSection
        title="Cochin – Where History Meets Commerce"
        description={`Cochin, is former name of Kochi, popularly known as the Queen of the Arabian Sea, is a busy commercial hub rich in spice trading. It is the centre of world spice trade for many centuries. It is emerging cosmopolitan city with busy life on streets, on the other hand it is also financial, commercial & industrial capital of Kerela. Its great to see that Kochi is the only city ot have underwater metro system which is world’s largest electric boat metro transportation infrastructure.
        While you travel to Fort Kochi, you’ll feel a different time period. The fort is settled into history & culture through ages. Kochi is a place with beautiful monuments & variety of linguistic & ethenic community such as Arabian, Dutch, Phoenician, Portuguese, Chinese, and British influences.`}
        image="/adventure/delights/cochin.jpg"
      />

      <TourSection
        title="Alleppey – World Of Coastal Delights"
        description={`Alleppey, officially known as Alappuzha, famous among the travellers is also known as “Venice of East”. The is an immensely beautiful town, embraced by Arabian Sea in the west & many lakes, lagoons & freshwater rivers. Alleppey offers a unique experience with lush paddy fields, traditional houseboats in serene water & coconut groves.
        This town is also famous for its Nehru Trophy Boat Race where tourists come across the globe. This town has rich cultural heritage & natural beauty, which makes it a must visit destination for travellers which assures peace of mind amidst nature’s beauty.`}
        image="/adventure/delights/alleppey.jpg"
      />

      <TourSection
        title="Thekkady – Where Nature Rules"
        description={`Located in the Idukki district of Kerela, Thekkady is a beautiful hill station adorned with lush greenery, amazing landscapes & diverse wildlife. Here is the famous Periyar National Park, which is a sanctuary that has variety of animals which are even exotic in their natural habitat. The beautiful Periyar lake which is located within the park have the facilities of boat cruises which offers travellers unique experience to watch wildlife along the water edges.
        The spice plantation of Thekkady is another famous spot where one can explore & learn more about cultivation of spices such as pepper, vanilla & cardamom. Along with these it has variety of outdoor activity too like trekking, nature walks, bamboo rafting. Thekaddy is a heaven for adventure enthusiast as well as nature lover.`}
        image="/adventure/delights/thekkady.jpg"
      />

      <TourSection
        title="Munnar – South India’s Alpine Haven"
        description={`Munnar, the mesmerising hill-station in the Western Ghats of Kerala, is famous for its amazing rolling hills, cool climate, beautiful valleys & tea plantation. Also referred to as the “Kashmir of South India”, it’s a place of natural beauty. Located along the banks of three beautiful rivers – Madupetti, Nallathanni, and Periavaru, Munnar also have vast tea plantations & natural bird sanctuaries. Here you can also explore the tea museums & factories to learn more about the process of tea production. It have a rich biodiversity & breath-taking scenery, makes it a perfect gataway dor trekkers & nature lovers.`}
        image="/adventure/delights/munnar.jpg"
      />

      <TourSection
        title="Madurai – Where Culture Means Commerce"
        description={`During the Sangam Period Madurai was a major cultural & commercial centre & also India’s most iconic pilgrimage destination. It is famous for rich culture & vibrant festivals majorly the Meenakshi Thirukalyanam.
        This city is also famous for fragment flowers which include sambac jasmine which fills Nandan Market with hundred of strings. Another importants places include Meenakshi Amma Temple known for it amazing Dravadian architecture.
        culture, pilgrimage.`}
        image="/adventure/delights/madurai.jpg"
      />

      <TourSection
        title="Thanjavur – Where History Meets Culture"
        description={`A historic city in Tamil Nadu, Thanjavor is known for its rich cultural heritage. It played an important role in development of South Indian art, architecture & literature. Thanjavor is also famous for its traditional dance Bharatnatyam, classical Tanjore paintings & Carnatic music. It also have a UNESCO world heritage site Brihadeswarar Temple which is famous for its grand architecture. Often called as “Rice Bowl of Tamil Nadu” Thanjavor have extensive rice cultivation & also known for traditional handicrafts like Tanjore dolls & intricate bronze work.`}
        image="/adventure/delights/thanjavur.jpg"
      />

      <TourSection
        title="Pondicherry – Coastal City Of South India"
        description={`Pondicherry officially known as Puducherry is a coastal city in South India. It is famous for its French colonial heritage & Indian culture. Major sites to visit include French Quarter, Auroville (an experimental township), the Promenade Beach, and the Sri Aurobindo Ashram.`}
        image="/adventure/delights/pondicherry.jpg"
      />

      <TourSection
        title="Mahabalipuram – Historic Town Of Tamil Nadu"
        description={`It is a historic coastal town in Tamil Nadu famous for its amazing rock-cut temples & monuments which are of 7th & 8th centuries. It is also considered as World Heritage Site for its ancient architecture, beautiful beaches & intricate stone craving.`}
        image="/adventure/delights/mahabalipuram.jpg"
      />

      <TourSection
        title="Mumbai – A City Of Dreams"
        description={`Mumbai, the “City of Dreams”, is a bustling financial capital of India & also the largest city in the country. The location of it along the Arabian Sea makes it a beautiful city with diverse culture, fast-paced life & historic landmark.
        The most famous iconic landmark Gateway of India, & Chhatrapati Shivaji Maharaj Terminus,is also a UNESCO World Heritage site & architectural marvel. The most famous Marine Drive also called as “Queen’s Necklace” due to due to its twinkling night lights & another charm of Mumbai is Juhu beach provides an endless experience.`}
        image="/adventure/delights/mumbai.jpg"
      />

      <HighlightsInclusions />
      <ItinerarySection />
      <ExcludedServices/>

    </div>
  );
}