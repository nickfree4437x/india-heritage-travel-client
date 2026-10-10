"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Amber Fort, Jaipur",
    description:
      "Amber was built in 1592 by Raja Man Singh, located on a hilltop near Maota Lake, 11 kilometers away from Jaipur. Amber Fort is famous for its Sheesh Mahal – mirrors that cover the entire ceiling, creating an illusion of a starlit sky out of just one candle. Go there early in the morning; by 9 am there will be many jeep caravans turning this peaceful place into a theme park.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782466089/pexels-roman-saienko-1867764487-29624131_esq2sr.jpg",
  },
  {
    name: "City Palace, Jaipur",
    description:
      "Part of City Palace is still used by the current rulers of Jaipur; the rest can be visited by tourists. Spend at least half a day in the palace. The Mubarak Mahal Museum exhibits a collection of fabrics, including the robes of a maharaja whose physical appearance was unusually imposing – you will get a very peculiar impression looking at those robes.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782466206/pexels-ansh-yati-875278361-34669532_uhwstp.jpg",
  },
  {
    name: "Mehrangarh Fort, Jodhpur",
    description:
      "Elevated 122 meters above Jodhpur, with scars of cannonballs embedded into its walls from a siege carried out in 1808. With such a golden roof in the Phool Mahal, it would be easy to forget that you had another appointment twenty minutes back. Don't be an idiot and avail yourself of the audio guide at this place – it is told by the present-day Maharaja, and it is one of the best heritage audio guides in India.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782466402/pexels-mehul-soni-413073677-32807816_j8e5ge.jpg",
  },
  {
    name: "Umaid Bhawan Palace, Jodhpur",
    description:
      "Built way later than the previous two, in 1943. Not medieval in the sense, but definitely worth seeing. It is one of the largest private buildings on Earth, and its interior design style is Art Deco, which appears surrealistically odd in this desolate environment. There is a section that serves as a Taj hotel. Even if you are not a guest there, you can visit the museum part and the garden area.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782466554/Umaid_Bhawan_wcxid1.png",
  },
  {
    name: "Jaisalmer Fort",
    description:
      "It was established in 1156 by Rawal Jaisal. It still holds almost 3,000 residents within its boundaries. One thing that comes true about the sandstone is that its color turns to a deep amber at dusk, in a manner which might seem cliché until experienced personally. Make sure to spend at least one night within the fort, rather than being close to it. Some of the restaurants located atop the fort have beautiful views of the setting sun, making it all worth the trouble.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782466770/pexels-navlakha-33689321_lz6pnn.jpg",
  },
  {
    name: "Junagarh Fort, Bikaner",
    description:
      "The City of Lakes is romance personified for Rajasthan, with the City Palace towering along the lakeshore and the Lake Palace Hotel floating in the middle of the lake.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782467014/pexels-axp-photography-500641970-19160106_xxvier.jpg",
  },
  {
    name: "Chittorgarh Fort",
    description:
      "The biggest fort in Rajasthan and the heaviest in emotion. Three jauhars (self-immolation by Rajput women to avoid dishonor) have taken place here. This fort carries an aura unlike any other forts in the country. The Vijay Stambha, a 15th century tower made of carved figures that celebrate a victory, is definitely worth your while. ",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782475070/pexels-shineychaudhary-35907573_i9ke5y.jpg",
  },
  {
    name: "Kumbhalgarh Fort",
    description:
      "The walls here stretch to 36 km, making them only next to the Great Wall of China. Until you walk a portion of it yourself and see the ridge stretching on infinitely in both directions, you don’t realise how long it is. This is the place Maharana Pratap grew up in, having been brought here when he was an infant, from Chittorgarh. The light and sound shows are quite good on weekends – ignore the cynics.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782479249/pexels-neel-upadhyay-433316527-15400129_i0a9df.jpg",
  },
  {
    name: "City Palace, Udaipur",
    description:
      "Over a span of 400 years, 14 different rulers have added sections to this palace and this makes the feeling of visiting the palace like walking around multiple buildings that happen to be interconnected. In particular, the Crystal Gallery – an English crystal set brought in 1877 but unpacked only after the Maharana’s death – is one of those rooms that you wouldn’t have expected to remember but cannot forget. ",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782475433/pexels-aman2905-35931138_g3otfo.jpg",
  },
  {
    name: "Nahargarh Fort, Jaipur",
    description:
      "Constructed in 1734 as a defence fort, Nahargarh is the place to visit when you wish to admire the city of Jaipur without being in the middle of it. For example, the view from the fort during sunset, when the pink city lights up, is worth the ride to it in itself. ",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782475682/pexels-lakshmirj39-36730248_uzr0zm.jpg",
  },
  {
    name: "Jaigarh Fort, Jaipur",
    description:
      "Jaigarh was the actual cannon foundry of the royal house of Jaipur. The cannon named Jaivana, created in 1720 at this foundry and the biggest wheeled cannon ever built, has been fired only once throughout its existence. Whatever you can conclude from that! It is joined with Amber through an underground passage, and your Amber Fort ticket allows you entry here as well. Fewer tourists take the additional effort here, which gives you an opportunity to enjoy the fort alone. ",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782475937/pexels-roman-saienko-1867764487-29624144_bshdpk.jpg",
  },
  {
    name: "Hawa Mahal, Jaipur",
    description:
      "953 lattice windows spread across five stories of pink sandstone. Maharaja Sawai Pratap Singh ordered its construction in 1799 so that the ladies from the royal family could see street processions without anyone seeing them. Most tourists take a picture of this palace while standing on the road. Enter the palace. The view of the city of Jaipur from the screened windows is one perspective that the tourists miss out on.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782476160/pexels-wanderingpickle-11632385_wptec1.jpg",
  },
  {
    name: "Jal Mahal, Jaipur",
    description:
      "Four of its five floors are under water. This palace stands in the middle of Man Sagar Lake and was used by the maharajas for duck shooting - it seems like a rather exclusive use for a palace. Access inside this palace is not possible at present, but the lakeshore walk during dawn is really enchanting. For birdwatchers, the birds found in the lake itself can be reason enough to make a visit.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782476330/pexels-axp-photography-500641970-19149583_sydea4.jpg",
  },
  {
    name: "Neemrana Fort Palace",
    description:
      "A fort dating back to the 15th century located on the Delhi–Jaipur highway and renovated as a heritage hotel. One of the oldest and among the best of its kind in India. It has several tiers of terraces built around a rocky hillside looking out onto the arid Aravalli landscape. Staying there overnight is not necessary. ",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782476417/pexels-pramodtiwari-33797771_xmlo6x.jpg",
  },
  {
    name: "Taragarh Fort, Bundi",
    description:
      "Everyone passes up Bundi. It is a shame that is becoming rarer, yet still frequent enough that visiting the fort seems an accidental discovery. 14th century battlements are half engulfed by the forest. The reservoirs are full. The summit will most likely be all yours. Visit it along with Bundi’s stepped wells and painted houses and make it your overnight halt - it’s worth doing so.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782476590/Taragarh_Fort___Bundi_Fort_Rajasthan_2026_dlswwp.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-2 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c]">
           Top 15 Forts and Palaces in Rajasthan
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cityData.map((city) => (
            <div
              key={city.name}
              className="group overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] sm:h-[260px] bg-[#faf7f3] overflow-hidden">
                {city.image ? (
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
                    Image via pexels
                  </p>
                )}

                {/* City Name Overlay (Mobile) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
                  <h3 className="text-white text-[16px] font-semibold flex items-center gap-2">
                    {city.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2">
                <p className="text-[10px] sm:text-[11px] text-gray-600 font-light">
                    Image via unsplash
                  </p>
                {/* City Name (Desktop) */}
                <h3 className="hidden mt-3 md:flex text-[14px] md:text-[16px] font-bold text-[#2c2c2c] mb-2 items-center gap-2">
                  {city.name}
                </h3>

                {/* Description */}
                <p className="text-[12px] mt-2 md:mt-0 sm:text-[13px] leading-relaxed text-gray-600 font-light line-clamp-3 md:line-clamp-4">
                  {city.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}