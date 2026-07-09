"use client";

import Script from "next/script";

interface EventSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
}

export default function EventSchema({
  name,
  description,
  url,
  image,
  location = "India",
  startDate,
  endDate,
}: EventSchemaProps) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    url,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: location,
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "India Heritage Travel",
      url: "https://indiaheritagetravel.com",
    },
  };

  if (image) {
    schema.image = [image];
  }

  if (startDate) {
    schema.startDate = startDate;
  }

  if (endDate) {
    schema.endDate = endDate;
  }

  // Generate a safe ID from the name
  const safeId = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  return (
    <Script
      id={`event-schema-${safeId}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}