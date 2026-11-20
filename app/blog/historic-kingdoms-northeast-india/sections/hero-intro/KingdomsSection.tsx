"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           The kingdoms and their cultural landscapes
          </h2>
        </div>
        
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           1. The Ahom Kingdom of Assam: six centuries of statecraft
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The invasion of King Sukaphaa to the Brahmaputra valley in the 13th century is considered as 
            the inception of the dynasty that ruled for about six centuries. The first political capital 
            of the Ahoms, Charaideo, also consisted of the tombs of Ahom kings while the other two 
            political capitals were Garhgaon and Rangpur in the Sivasagar district. Some of the characteristics 
            of the Ahom era were governance, military, diplomacy, rivers and architecture.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The starting point of Sivasagar is quite logical in terms of learning the history of the Ahoms. 
            The Rang Ghar can be viewed as an amphitheater or royal pavilion related to court performances. 
            Talatal Ghar is a palace that is at the same time a military construction, whereas Kareng Ghar in 
            Garhgaon is related to the royal residence. The large Sivasagar pond and Siva Dol temple complex 
            show how far the process of royal patronage and urbanization went.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The significant site is the Charaideo Moidams, the burial ground of Tai-Ahom. The Charaideo 
            Moidams is the UNESCO World Heritage Site inscribed in July 2024. This landscape shows the 
            royal mounds of burial, called the moidams, which is a typical feature of Ahom burial rites 
            and the connection between sacred architecture, forest, water, and landscape. Note the memorial 
            role of the site: do not go.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1795175615/Deopahar-head_veo7m7.jpg"
              alt="The Ahom Kingdom of Assam – six centuries of statecraft, governance and heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">        
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           2. The Kachari and Dimasa kingdoms: memory in the Barak Valley
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The history of both the Kachari and the Dimasa people is very much associated with the hilly 
            and valley landscapes of Assam and its neighboring states. At different times, the Kachari 
            kings had their political capitals in different places like Dimapur and Maibong before the 
            last capital at Khaspur in Silchar towards the later stages of the kingdom. Khaspur makes 
            for an interesting trip because of its gateways, temples, and ruins of the palaces.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Tourists cannot expect anything grand about the palaces, but they have to realize that the 
            history of the place can be viewed through the eyes of archaeology. It is possible with a 
            little bit of assistance from the locals that visitors can distinguish oral history from 
            physical ruins.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1795175982/images_1_awz28p.jpg"
              alt="Kachari and Dimasa kingdoms of the Barak Valley – historic memory and cultural heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">        
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           3. Manipur: the Meitei kingdom and Kangla
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Manipur valley constituted an ancient Meitei kingdom, which had its own legal system, religion, and literature. The Kangla of Imphal Valley constitutes an ancient seat of power and one of the most important seats of the heritage of Manipur. The Kangla itself conveys to the tourist the feel of the royalty, the religion and politics of the valley through its premises.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Take your time to visit the Kangla Fort along with the spaces around it rather than merely taking photographs at these places. Other places like Ima Keithel market (market known for women traders) give you the economic aspect of the heritage of the valley. The Manipuri classical dance, the handlooms of the valley, and the cuisine of the valley constitute part of the heritage of the valley.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1795176148/Manipuri_Dance_gbw3q8.jpg"
              alt="Manipur's Meitei kingdom and Kangla – historic royal heritage of Northeast India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">        
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           4. Tripura: the Manikya dynasty and royal residences
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
             The rulers of Tripura have also left their mark in the state’s temples, palaces and culture. In Agartala, the Ujjayanta Palace is a symbol of the past state and presently houses the Tripura State Museum. The domes, halls and gardens of this building give the visitor an introduction to the courtly life of the past and to the variety of people in this region.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Away from the capital, one finds the palace of Neermahal that is built over the Rudrasagar Lake and was constructed to be used by the ruling princes as a summer palace. Unakoti, an archaeological and sculptural place of great antiquity with huge rock carvings is another attraction for those visiting Tripura. Pilak is another archaeological place that would interest tourists.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1795176307/images_2_inkdbr.jpg"
              alt="Tripura's Manikya dynasty and royal residences – historic royal heritage of Northeast India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">        
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           5. Khasi, Jaintia and Garo heritage in Meghalaya
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            However, the history of Meghalaya cannot be reduced to only the history of kings and kingship. The political system in the Khasi and Jaintia regions was chieftainship and customary laws. The Nartiang region in the Jaintia hills region is said to be the capital of the Jaintia kingdom of olden times. This is the place where you can find the historical Durga temple and monoliths giving an interesting cultural backdrop to the Khasi history.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Garos in the Garo Hills region have their own customs within the society built around the customs and traditions of the society. The Wangala festival and Garo music and dances are some of the instances where you can explore the history of the Garos if you can plan your visit through the local people. Remember to take permissions before taking pictures of rituals, homes, and people.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1795176530/images_3_jjwitu.jpg"
              alt="Khasi, Jaintia and Garo heritage in Meghalaya"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">        
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           6. Sikkim: the Namgyal dynasty and Himalayan Buddhist heritage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The state of Sikkim was a Himalayan Buddhist kingdom that ruled during the period of Namgyal dynasty. This dynasty had Chogyals who were considered the rulers of this kingdom. Yuksom, a place associated with the kingdom’s history and the coronation practice, is a good point to start with. Rabdentse, which consists of remnants of the capital, will provide visitors with foundations, walls and views from forest-covered hills. Another source of history of Sikkim is the monastery of Pemayangtse Monastery.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The heritage of Sikkim is not restricted by its royalty alone. Monasteries, sacred mountains, the architecture of villages and the culture of Lepcha, Bhutia and Nepali tribes make up the Himalayan landscape of Sikkim. It is required to wear appropriate attire in the religious places.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1795176711/debarghya-meikap-Ywo4F7eWDOI-unsplash_rgizjz.jpg"
              alt="Sikkim: the Namgyal dynasty and Himalayan Buddhist heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">        
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           7. Arunachal Pradesh, Nagaland and Mizoram: heritage beyond palace walls
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            In Arunachal Pradesh, the history of the place can be better appreciated by taking into consideration the monasteries, village groups, culture, and historical routes, but not through the presence of grand royal palaces. Some of the important monuments in the area include the Tawang Monastery, which is a learning place for Tibetan Buddhism, and Ita Fort, which is located in Itanagar. In Nagaland, morungs in the villages, the customs, wood carvings, and Hornbill Festival represent the history of the people.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The culture here is very much alive and is not an open air museum. You should travel with a responsible local guide who has your permission to travel and who will not use any outdated languages or use any props for their ceremonies. The best way to learn about the culture is when the locals decide on what they want to show you.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1795176931/naman-pandey-y3nWJ-QznP4-unsplash_fr2m98.jpg"
              alt="Arunachal Pradesh: heritage beyond palace walls"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>
    </section>
  );
}