
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
  const siteUrl = "https://indiaheritagetravel.com";
  const tourId = `${url}#tour`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": tourId,
    name,
    description,
    url,

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
