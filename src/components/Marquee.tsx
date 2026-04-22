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
    <div className="border-y-2 border-foreground bg-foreground text-background py-3 sm:py-4 overflow-hidden relative">
      {/* Edge fades for premium falloff */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-foreground to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-foreground to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap gap-8 sm:gap-12">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display font-black text-lg sm:text-2xl md:text-4xl tracking-tight uppercase flex items-center gap-8 sm:gap-12"
          >
            <span className={i % 2 === 0 ? "" : "text-outline"} style={i % 2 === 0 ? undefined : { ["--ink" as never]: "var(--background)" } as never}>
              {t}
            </span>
            <span className="text-primary font-editorial not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
