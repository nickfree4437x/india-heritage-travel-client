"use client";

import Image from "next/image";

export default function OdysseyCitiesSection() {
  return (
    <>
      {/* DELHI */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Delhi – A Blend Of History & Royalty
        </h2>

        <p className="text-gray-700 mb-6">
          Discover Delhi, which is the mixture of history and modernity.
        </p>

        <Image
          src="/adventure/odyssey/delhi.jpg"
          alt="Delhi"
          width={1000}
          height={500}
          className="rounded-xl shadow-lg w-full h-[350px] object-cover"
        />
      </div>

      {/* MANDAWA */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Mandawa – A Town Of Timeless Heritage And Beauty
        </h2>

        <Image
          src="/adventure/odyssey/mandawa.jpg"
          alt="Mandawa"
          width={1000}
          height={500}
          className="rounded-xl shadow-lg w-full h-[350px] object-cover"
        />
      </div>

      {/* JAIPUR */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Jaipur – The Pink City
        </h2>

        <Image
          src="/adventure/odyssey/jaipur.jpg"
          alt="Jaipur"
          width={1000}
          height={500}
          className="rounded-xl shadow-lg w-full h-[350px] object-cover"
        />
      </div>

      {/* AGRA */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Agra – Where History Rules Supreme
        </h2>

        <Image
          src="/adventure/odyssey/agra.jpg"
          alt="Agra"
          width={1000}
          height={500}
          className="rounded-xl shadow-lg w-full h-[350px] object-cover"
        />
      </div>

      {/* VARANASI */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Varanasi – The Spiritual Heart Of India
        </h2>

        <Image
          src="/adventure/odyssey/varanasi.jpg"
          alt="Varanasi"
          width={1000}
          height={500}
          className="rounded-xl shadow-lg w-full h-[350px] object-cover"
        />
      </div>
    </>
  );
}