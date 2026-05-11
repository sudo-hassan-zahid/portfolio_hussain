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
    <section className="border-y border-[#D2D2D7] bg-white">
      <div className="container mx-auto grid grid-cols-2 gap-px bg-[#D2D2D7] px-0 sm:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item.value} className="bg-white px-5 py-6 text-center">
            <p className="font-serif text-2xl leading-none text-[#1D1D1F]">
              {item.value}
            </p>
            <p className="mx-auto mt-2 max-w-[11rem] text-xs font-semibold uppercase tracking-[0.08em] text-[#6E6E73]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
