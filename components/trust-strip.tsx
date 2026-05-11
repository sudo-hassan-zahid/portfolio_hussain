const trustItems = [
  {
    value: "RWP/ISB",
    label: "District and high court practice",
  },
  {
    value: "ADR",
    label: "Mediation-first dispute strategy",
  },
  {
    value: "24h",
    label: "Initial response target",
  },
  {
    value: "Private",
    label: "Confidential client intake",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--legal-gold)]/35 bg-[var(--legal-parchment)]">
      <div className="container mx-auto grid grid-cols-2 gap-px bg-[var(--legal-gold)]/35 px-0 sm:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item.value} className="bg-[var(--legal-ivory)] px-5 py-6 text-center">
            <p className="font-serif text-2xl leading-none text-[var(--legal-navy)]">
              {item.value}
            </p>
            <p className="mx-auto mt-2 max-w-[11rem] text-xs font-bold uppercase tracking-[0.08em] text-[var(--legal-slate)]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
