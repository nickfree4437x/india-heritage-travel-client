
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
      "@id": "https://indiaheritagetravel.com/#organization",
    },
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
