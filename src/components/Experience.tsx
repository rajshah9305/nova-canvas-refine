import { motion } from "framer-motion";

const ITEMS = [
  {
    role: "Senior Software Engineer",
    org: "Nexus AI Systems",
    period: "2023 — PRESENT",
    body: "Led the transition from monolithic architecture to a microservices ecosystem, improving deployment speed by 40%. Spearheaded enterprise AI integration using LLMs for internal automation pipelines.",
  },
  {
    role: "Full-Stack Developer",
    org: "Elevate Digital Labs",
    period: "2021 — 2023",
    body: "Architected and maintained 15+ high-traffic Next.js applications serving millions of global requests. Optimized PostgreSQL queries to reduce core database load times by 60%.",
  },
  {
    role: "B.S. Computer Science",
    org: "Georgia Institute of Technology",
    period: "2017 — 2021",
    body: "Concentration in Intelligence (AI) and Systems/Architecture. Contributed to open-source distributed computing research and graduated with High Honors.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t-2 border-foreground py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="mb-10 md:mb-14">
          <div className="font-mono text-[11px] tracking-[0.3em] text-primary mb-3">
            // 03 / EXPERIENCE
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl tracking-[-0.03em] leading-[0.9]">
            TIMELINE
          </h2>
        </div>

        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-[7px] md:left-[calc(28%-1px)] top-2 bottom-2 w-0.5 bg-foreground/20" />

          <div className="space-y-10 md:space-y-12">
            {ITEMS.map((it, i) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid md:grid-cols-[28%_1fr] gap-3 md:gap-10 relative pl-8 md:pl-0"
              >
                {/* Period */}
                <div className="font-mono text-[11px] tracking-[0.25em] text-primary md:text-right md:pr-10 pt-1">
                  {it.period}
                </div>

                {/* Marker */}
                <span className="absolute left-0 md:left-[calc(28%-7px)] top-1.5 h-3.5 w-3.5 bg-primary brutal-border" />

                {/* Body */}
                <div>
                  <h3 className="font-display font-black text-xl md:text-3xl tracking-[-0.02em] text-foreground">
                    {it.role}
                  </h3>
                  <div className="font-mono text-xs md:text-sm text-foreground/70 mt-1.5 mb-3">
                    {it.org}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-2xl">
                    {it.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
