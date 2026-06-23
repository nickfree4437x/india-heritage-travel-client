"use client";

import Script from "next/script";

interface TourSchemaProps {
  name: string;
  description: string;
  url: string;
}

export default function TourSchema({
  name,
  description,
  url,
}: TourSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    url,
    provider: {
      "@type": "TravelAgency",
      name: "India Heritage Travel",
      url: "https://indiaheritagetravel.com",
    },
    organizer: {
      "@type": "TravelAgency",
      name: "India Heritage Travel",
      url: "https://indiaheritagetravel.com",
    },
  };

  return (
    <Script
      id={`tour-schema-${name.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}