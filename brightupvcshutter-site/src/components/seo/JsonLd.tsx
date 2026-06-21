export function JsonLd({ data }: { data: object | object[] }) {
  const graphs = Array.isArray(data) ? data : [data];

  if (graphs.length === 1) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs[0]) }}
      />
    );
  }

  const graph = graphs.map((item) => {
    const copy = { ...(item as Record<string, unknown>) };
    delete copy["@context"];
    return copy;
  });

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
