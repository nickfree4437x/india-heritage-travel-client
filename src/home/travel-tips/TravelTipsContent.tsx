"use client";

import Image from "next/image";

const tips = [
  {
    title: "VISA",
    text: `India is a very busy, overwhelming, and occasionally confusing country. You’ll need some time to get used to the hectic energy of this confusing place and figure out how to keep yourself safe, healthy, and sane. India is among the most rewarding destinations to visit, despite not being the easiest. It provides some genuinely incredible views that are unmatched by anything else in the entire globe. It also has mouthwatering cuisine, breathtaking scenery, friendly and endearing locals, and a rich cultural history that is fascinating to discover.
    So, before you travel to India, here are some shrewd tips and tricks to help you make the most of your experience there.`,
    image: "/travel-tips/visa.png",
  },
  {
    title: "INSURANCE",
    text: `Travel insurance (It is recommended that you insure yourself against medical claims, theft, loss, and emergencies).`,
    image: "/travel-tips/insurance.png",
  },
  {
    title: "CLOTHES",
    text: `Travel insurance (It is recommended that you insure yourself against medical claims, theft, loss, and emergencies).`,
    image: "/travel-tips/clothes.png",
  },
  {
    title: "HEALTH",
    text: `Bring your own prescription drugs. There’s no need to take any extra medication when it’s not monsoon season. All the necessary resources are available on site, in case you require a physician or pharmacist.`,
    image: "/travel-tips/health.png",
  },
  {
    title: "MONEY",
    text: `You can exchange cash with your driver or guide, who will get you the best rate, or withdraw money from ATMs. Naturally, avoid doing this around strangers. You’ll require a large number of tiny notes for small purchases, tips, toilets, etc.`,
    image: "/travel-tips/money.png",
  },
  {
    title: "FOOD",
    text: `Food tastes good and is unique. When starting a trip, use caution when handling meat and dairy products. Fruit is safe to eat if you peel it yourself, and you can even get peeled fruit in hotels. Papayas taste great when paired with a small squeeze of lime. If your dish isn’t spicy, ask to have the chillies removed. Request less salt overall and less sugar in your chai. Try everything, even if just a little bit. There are many crowded, spotless areas where street food is served. You shouldn’t miss this aspect of Indian culture.Reduce your intake and consume boiled rice, bananas, and coke to prevent dehydration if you have an upset stomach.`,
    image: "/travel-tips/food.png",
  },
  {
    title: "WATER",
    text: `Drink mineral water at all times. You can even use it to brush your teeth.`,
    image: "/travel-tips/water.png",
  },
  {
    title: "SAFETY",
    text: `The safety regulations are the same as those in other nations. Keep an eye on your possessions and exercise street smarts, but don’t get fixated on them. If you’re traveling by train or car, never accept food offered by other passengers. There may be sleeping pills in it. In trains, always travel in the reserved class. It is always advisable to refrain from driving at night on Indian highways.`,
    image: "/travel-tips/safety.png",
  },
  {
    title: "DRIVER",
    text: `When you drive, you have someone to help you at all times, and your luggage is always secure. Telling him to drive more slowly or to call us right away is always preferable if you’re uncomfortable with the way he’s driving or if you think his speeding is unsafe.`,
    image: "/travel-tips/driver.png",
  },
  {
    title: "SOLO WOMEN",
    text: `In some desolate areas, women who travel alone should refrain from going for walks during strange hours. Avoid appearing confused when traveling. Maintain the demeanor of a local authority.`,
    image: "/travel-tips/women.png",
  },
  {
    title: "TEMPLES",
    text: `You shouldn’t miss any of India’s temples because they are an integral part of the country’s culture. Whether you believe in God or not, it is very moving to watch and listen to the people going about their daily prayers and to the songs and dances. You will see a great deal of religious reverence in mosques belonging to Muslims, Sikhs, Hindus, and Jainites, among others. In India, visiting places of worship is a must. You should bring old socks that you can throw away or buy a pack of inexpensive socks because you will need to take off your shoes.`,
    image: "/travel-tips/temple.png",
  },
  {
    title: "TIPPING",
    text: `Tipping is a widely accepted custom in India. Some suggestions for how much to tip for face photos at tourist attractions are 20 to 50 rupees (less than a Euro). It should be between 5 and 10% of your total at restaurants. Your driver should receive a tip of at least 5 to 10 euros per day, as he receives tips only once or twice a month. The amount you tip will depend on your budget and the quality of service the driver provides.`,
    image: "/travel-tips/tip.png",
  },
  {
    title: "BEGGARS",
    text: `You will come across a lot of mendacity when begging, which makes sense given that India is still a developing nation with high rates of poverty. Give as you are moved to do so. Remember that some beggars in tourist areas don’t really keep much of their gatherings and are actually working for someone.`,
    image: "/travel-tips/beggars.png",
  },
  {
    title: "A TIP FOR YOU",
    text: `Do some research on the places you are visiting before you leave or while using the Wi-Fi at your hotel. Bring a guidebook or two. You’re curious about the current events in India, a nation rich in culture and traditions. Go with a receptive mindset.`,
    image: "/travel-tips/book.png",
  },
  {
    title: "CULTURAL DIFFERENCES",
    text: `You can pretty much count on experiencing cultural shock when you first get to India. Attempting to resist it is futile. Prepare yourself and acknowledge that things will not be the same as they are at home. Leave your expectations at home and try to keep an open mind.`,
    image: "/travel-tips/india.png",
  },
  {
    title: "RELIGIOUS SCAMS",
    text: `You might feel under pressure to purchase a sacred offering or to make a donation at a lot of the mosques and temples. A holy man might, for instance, tie a string around your wrist or place a red dot on your forehead before requesting money from you. Many tourists feel compelled to comply because they don’t want to offend the native faith. But if you don’t want to, you don’t have to. If it seems like it would cost a lot for a local to perform, it is most likely a tourist scam rather than a genuine spiritual offering.`,
    image: "/travel-tips/scam.png",
  },
  {
    title: "LEARN HOW TO BARGAIN",
    text: `In India, Bargaining is an inherent aspect of shopping; however, if you come from a culture where haggling is not common, you may find it unfamiliar and unsettling at first. It’s crucial to keep in mind that this is a cordial negotiation rather than a war.`,
    image: "/travel-tips/bargain.png",
  },
  {
    title: "DON'T EXPECT THINGS ON TIME",
    text: `Keep in mind that events take place on Indian Time. Things can take far longer than anticipated, trains may not depart when they are supposed to, and friends from India may not show up when they promised. In order to avoid becoming anxious, it’s critical to remember this and to budget extra time for delays. Bring along a good book to read while you wait, and know that what you are waiting for will materialize eventually.`,
    image: "/travel-tips/time.png",
  },
  {
    title: "AVOID AFFECTION IN PUBLIC",
    text: `When visiting India with a partner, refrain from publicly hugging, kissing, or holding hands. These kinds of open expressions of love are frowned upon and deemed improper in Indian culture. Show respect for the locals by keeping your romantic feelings under wraps.`,
    image: "/travel-tips/pda.png",
  },
  {
    title: "JUST GO FOR IT",
    text: `It’s a fact that traveling within India will be far more difficult than traveling abroad. It’s possible that you will occasionally feel overburdened and worn out, so it’s critical to look after yourself and be ready for this. Nonetheless, traveling to India is a truly worthwhile experience. You will encounter some truly memorable people, take in some breathtaking scenery, and learn about an intriguing ancient culture. You’ll be happy that you visited India.`,
    image: "/travel-tips/go.png",
  },
];

export default function TravelTipsContent() {
  return (
    <section className="bg-[#f8f6f2] py-20 px-6 md:px-28">

      {/* 🔥 Intro */}
      <div className="grid md:grid-cols-[380px_1fr] gap-6 items-start mb-16">
        <Image
          src="/travel-tips/intro.jpg"
          alt="India Travel Tips"
          width={350}
          height={300}
          className="rounded-md"
        />
        <p className="text-gray-700 leading-relaxed text-justify mt-8">
          India is a very busy, overwhelming, and occasionally confusing country. 
          You’ll need some time to get used to the hectic energy of this confusing 
          place and figure out how to keep yourself safe, healthy, and sane. 
          India is among the most rewarding destinations to visit, despite not being the easiest. 
          It provides some genuinely incredible views that are unmatched by anything else in the entire globe. 
          It also has mouthwatering cuisine, breathtaking scenery, friendly and endearing locals, 
          and a rich cultural history that is fascinating to discover.
          So, before you travel to India, here are some shrewd tips and tricks to help you make the most 
          of your experience there.
        </p>
      </div>

      {/* 🔥 Heading */}
      <h2 className="text-center text-2xl md:text-4xl font-semibold text-[#8b6a3c] mb-16">
        THE PREPARATIONS FOR YOUR INDIA TRAVEL
      </h2>

      {/* 🔥 Tips List */}
      <div className="space-y-20">
        {tips.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center`}
            >
              {/* LEFT */}
              {isLeft && (
                <div>
                  <h3 className="text-xl text-center font-semibold text-[#8b6a3c] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {item.text}
                  </p>
                </div>
              )}

              {/* IMAGE */}
              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </div>

              {/* RIGHT */}
              {!isLeft && (
                <div>
                  <h3 className="text-xl text-center font-semibold text-[#8b6a3c] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}