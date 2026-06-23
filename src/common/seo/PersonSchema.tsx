import Script from "next/script";

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  image: string;
}

export default function PersonSchema({
  name,
  jobTitle,
  image,
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    image,
    worksFor: {
      "@type": "Organization",
      name: "India Heritage Travel",
      url: "https://indiaheritagetravel.com",
    },
  };

  return (
    <Script
      id={`person-schema-${name.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}