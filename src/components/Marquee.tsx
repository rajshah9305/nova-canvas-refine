const ITEMS = [
  "AI INFRASTRUCTURE",
  "FULL-STACK SYSTEMS",
  "AGENT ORCHESTRATION",
  "REAL-TIME RAG",
  "EDGE DEPLOYMENT",
  "SCALABLE BACKENDS",
  "DESIGN ENGINEERING",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y-2 border-foreground bg-foreground text-background py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display font-black text-2xl md:text-4xl tracking-tight uppercase flex items-center gap-12"
          >
            {t}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
