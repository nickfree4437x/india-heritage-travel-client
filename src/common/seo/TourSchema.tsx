"use client";

import Script from "next/script";

interface TourDestination {
  name: string;
  url?: string;
  description?: string;
  address?: {
    addressCountry?: string;
    addressRegion?: string;
    addressLocality?: string;
  };
}

interface TourSchemaProps {
  name: string;
  description: string;
  url: string;
  destinations?: TourDestination[];
}

export default function TourSchema({
  name,
  description,
  url,
  destinations = [],
}: TourSchemaProps) {
  // Keep the canonical site URL consistent across all schema entities
  const siteUrl = "https://indiaheritagetravel.com";

  const tourId = `${url}#tour`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": tourId,

    name,
    description,
    url,

    // Connect the tour to the global Organization entity
    provider: {
      "@type": "TravelAgency",
      "@id": `${siteUrl}/#organization`,
      name: "India Heritage Travel",
      url: siteUrl,
    },

    organizer: {
      "@type": "TravelAgency",
      "@id": `${siteUrl}/#organization`,
      name: "India Heritage Travel",
      url: siteUrl,
    },

    // Optional destination/itinerary data
    ...(destinations.length > 0 && {
      itinerary: destinations.map((destination) => ({
        "@type": "TouristAttraction",
        name: destination.name,

        ...(destination.url && {
          url: destination.url,
        }),

        ...(destination.description && {
          description: destination.description,
        }),

        ...(destination.address && {
          address: {
            "@type": "PostalAddress",
            ...destination.address,
          },
        }),
      })),
    }),
  };

  return (
    <Script
      id={`tour-schema-${name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}